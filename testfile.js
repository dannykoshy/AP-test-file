function validateViewConversationThread(params) {
    console.log('validation ', params);
    if(params.metadata.processDefinationName !== "Yammer Notification") {
        return false;
    }
    return true;
}

function validateViewConversations(params) {
    console.log('validation ', params);
    if(params.metadata.processDefinationName !== "Yammer Notification") {
        return false;
    }
    return true;
}

function validateMSTeamActivities(params) {
    console.log('validation ', params);
    if(params.metadata.processDefinationName !== "MS Teams Notification") {
        return false;
    }
    return true;
}

function onClickViewConversationThread(params) {
    console.log('onClick ', params);
    
    const url = "/Extension/FetchUsingEncodedData";
    const query = "SELECT [MESSAGE_THREAD_ID] as threadid FROM [WF_SN_MSG_THREADS] where [ACTIVITY_INST_ID]= '" + params.metadata.ActivityInstID + "'" + "and SOCIAL_NETWORK_NAME = 'yammer'";
    const data = {
	encodedData: btoa(query)
    };
    const response = params.serviceClient.postJSON(url, data);
	response.then((response) => {
		const text = response.text();
		return text
	  console.log(response);
	  //window.open('https://web.yammer.com/main/users/eyJfdHlwZSI6IlVzZXIiLCJpZCI6Ijc3MjcyMjI3ODQwIn0');
	}).then((response) => {
		console.log(response);
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

export default {
    validateViewConversations,
    validateViewConversationThread,
    validateMSTeamActivities,
    onClickViewConversations,
    onClickViewConversationThread,
    onClickMSTeamActivities	
};
