function validationFuntion() {
    console.log('validation funtion is executed');
    return true;
}

function onClickFuntion(param) {
    console.log('onclick funtion click test1');
  console.log('param', param);
  param.builtInActions.startWorkflow('');
}

export default {
    validationFuntion,
    onClickFuntion
};
