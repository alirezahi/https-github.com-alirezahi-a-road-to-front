function response(text, error, success){
    if(text.startsWith('Error')){
        error();
        return 400;
    }
    success();
    return 200;
}