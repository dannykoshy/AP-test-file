function validationFuntion(a) {
    console.log('validation funtion is executed');
    console.log(a);
    return true;
}

function onClickFuntion(param) {
    console.log('Function executed');
    console.log('param', param);
}

export default {
    validationFuntion,
    onClickFuntion
};
