var ho = function () {
    return 10;
};
var memberInfo = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () { }
};
function foo1() {
}
function foo2() {
}
var cutZero = function (char) {
    if (char[0] === '0') {
        return char.slice(1);
    }
    else {
        return char;
    }
};
var cutZero2 = function (char) {
    var result = char.replace(/^0+/, "");
    return result;
};
var removeDash = function (str) {
    var result = str.split('-').join('');
    return Number(result);
};
var removeDash2 = function (str) {
    var result = str.replace(/-/g, "");
    return Number(result);
};
var pipe = function (string, callback1, callback2) {
    var result1 = callback1(string);
    var result2 = callback2(result1);
    console.log(result2);
};
pipe('010-1111-2222', cutZero, removeDash);
