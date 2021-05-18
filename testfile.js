function validationFuntion(params) {
    console.log('validation funtion is executed');
    return true;
}

function onClickFuntion(param) {
    console.log(param);
    window.open('https://web.yammer.com/main/users/eyJfdHlwZSI6IlVzZXIiLCJpZCI6Ijc3MjcyMjI3ODQwIn0');
}

export default {
    validationFuntion,
    onClickFuntion
};
