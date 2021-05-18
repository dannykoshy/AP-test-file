function validateViewConversationThread(params) {
    console.log('validation ', params);
    return true;
}

function onClickViewConversationThread(params) {
    console.log('onClick ', params);
    window.open('https://web.yammer.com/main/users/eyJfdHlwZSI6IlVzZXIiLCJpZCI6Ijc3MjcyMjI3ODQwIn0');
}

export default {
    validateViewConversationThread,
    onClickViewConversationThread
};
