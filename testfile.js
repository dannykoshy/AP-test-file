let validateTasksCustomActions = (params) => {
    if (params.metadata.processDefinationName !== "Tax Controversy - MS Teams") {
        return false;
    }
    return true;
};

let validateProcessCustomActions = (params) => {
    if (params.metadata.definitionName !== "Tax Controversy - MS Teams") {
        return false;
    }
    return true;
};

let onClickViewConversationThread = (params) => {
    _getxmlData(params, (xmlData) => {
        const threadId = xmlData.getElementsByTagName("threadid")[0].textContent.split(';')[0];
        window.open('https://www.yammer.com/agilepoint462.onmicrosoft.com/#/Threads/show?threadId=' + threadId, '_blank');
    });
};

let onClickViewConversations = (params) => {
    _getxmlData(params, (xmlData) => {
        const groupId = xmlData.getElementsByTagName("threadid")[0].textContent.split(':')[1];
        console.log(groupId);
    });
};


let onClickMSTeamActivities = (params) => {
    const workObjectId = params.metadata.workObjectId;
    const url = "/Workflow/GetCustomAttr/" + workObjectId;
    const attributeName = "/pd:AP/pd:processFields/pd:TeamURL";
    
    const data = {
        "attrName": attributeName
    };

    const response = params.serviceClient.postJSON(url, data);
    response.then((response) => {
        return response.json();
    }).then((response) => {
        window.open(response, '_blank');
    });
};

let _getxmlData = (params, callback) => {
    const url = "/Extension/FetchUsingEncodedData";
    const query = "SELECT [MESSAGE_THREAD_ID] as threadid FROM [WF_SN_MSG_THREADS] where [ACTIVITY_INST_ID]= '" + params.metadata.activityInstID + "'" + "and SOCIAL_NETWORK_NAME = 'yammer'";
    const data = {
        encodedData: btoa(query)
    };
    const response = params.serviceClient.postJSON(url, data);
    response.then((response) => {
        return response.json();
    }).then((response) => {
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(response, "text/xml");
        callback(xmlData)
    });
};

export default {
    validateTasksCustomActions,
    validateProcessCustomActions,
    onClickViewConversations,
    onClickViewConversationThread,
    onClickMSTeamActivities
};
