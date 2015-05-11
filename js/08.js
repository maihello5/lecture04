function tmpFun (arg1, arg2) {
    if (arg1 == null) {
        arg1 = 'hoge';
    }
    if (arg2 == null) {
        arg2 = 'fuga';
    }

    console.log(arg1);
    console.log(arg2);
}
tmpFun(null);

function tmpFun (arg1, arg2) {
    if (arg1 == null) {
        arg1 = 'hoge';
    }
    if (arg2 == null) {
        arg2 = 'fuga';
    }

    console.log(arg1);
    console.log(arg2);
}
tmpFun();
