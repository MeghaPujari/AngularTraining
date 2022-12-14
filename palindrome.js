var isPalindrome = function (name) {
    var midPoint = name.length / 2;
    for (var i = 0; i < midPoint && i < name.length; i++) {
        if (name[i] != name[name.length - 1 - i]) {
            console.log(" Not Palindrome");
            return;
        }
    }
    console.log("Palindrome");
};
isPalindrome("abba");
