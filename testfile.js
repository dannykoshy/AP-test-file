function validateViewConversationThread(params) {
    if (params.metadata.processDefinationName !== "Yammer Notification") {
        return false;
    }
    return true;
}

function validateViewConversations(params) {
    if (params.metadata.processDefinationName !== "Yammer Notification") {
        return false;
    }
    return true;
}

function validateMSTeamActivities(params) {
    if (params.metadata.processDefinationName !== "MS Teams Notification") {
        return false;
    }
    return true;
}

function onClickViewConversationThread(params) {
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
        const xmlDoc = parser.parseFromString(response, "text/xml");
        const threadId = xmlDoc.getElementsByTagName("threadid")[0].textContent.split(';')[0];

        window.open('https://www.yammer.com/agilepoint462.onmicrosoft.com/#/Threads/show?threadId=' + threadId);
    });
}

function onClickViewConversations(params) {
    console.log('onClick ', params);

    const url = "/Extension/FetchUsingEncodedData";
    const query = "SELECT [MESSAGE_THREAD_ID] as threadid FROM [WF_SN_MSG_THREADS] where [ACTIVITY_INST_ID]= '" + params.metadata.ActivityInstID + "'" + "and SOCIAL_NETWORK_NAME = 'yammer'";
    const data = {
        encodedData: btoa(query)
    };
    const response = params.serviceClient.postJSON(url, data);
    response.then((response) => {
        console.log(response);
        //window.open('https://web.yammer.com/main/users/eyJfdHlwZSI6IlVzZXIiLCJpZCI6Ijc3MjcyMjI3ODQwIn0');
    }, (error) => {
        console.log(error);
    })
}

function onClickMSTeamActivities(params) {
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
        console.log(response);
        // const parser = new DOMParser();
        // const xmlDoc = parser.parseFromString(response, "text/xml");
        // const threadId = xmlDoc.getElementsByTagName("threadid")[0].textContent.split(';')[0];

        // window.open('https://www.yammer.com/agilepoint462.onmicrosoft.com/#/Threads/show?threadId=' + threadId);
    });
}

export default {
    validateViewConversations,
    validateViewConversationThread,
    validateMSTeamActivities,
    onClickViewConversations,
    onClickViewConversationThread,
    onClickMSTeamActivities
};
