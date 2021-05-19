function validateViewConversationThread(params) {
    console.log('validation ', params);
    if(params.metadata.processDefinationName !== "Yammer Notification") {
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
    let response = params.serviceClient.postJSON(url, data);
	response.then((value) => {
	  console.log(value);
	})
    console.log(JSONObject);
    window.open('https://web.yammer.com/main/users/eyJfdHlwZSI6IlVzZXIiLCJpZCI6Ijc3MjcyMjI3ODQwIn0');
}

export default {
    validateViewConversationThread,
    onClickViewConversationThread
};
