/**
 * Created by ilyas on 26.10.14.
 */
(function ($) {
    var newLine = '\r\n';
    $.setMode = function (m) {
            if (m == 'browser') {
                newLine = '<br/>';
            } else {
                newLine = '\r\n';
            }

        };
    function isNumerateType (obj) {
        var type = Object.prototype.toString.call(obj);
        return type == '[object Object]' || type == '[object Array]';
    }
    function getBefore (level) {
        var res = '';
        while (level--) {
            res += '  ';
        }
        return res;
    }
    $.printObject = function () {
        var obj = arguments[0],
            innerLvl = arguments[1] || 1,
            result = '';
        if (isNumerateType(obj)) {
            for (var i in obj) if (obj.hasOwnProperty(i)) {
                if (isNumerateType(obj[i])) {
                    result += (getBefore(innerLvl) + i + ' : ' + newLine + $.printObject(obj[i], ++innerLvl) + newLine);
                } else {
                    result += (getBefore(innerLvl) + i + ' : ' + obj[i] + newLine);
                }
            }
        }
        return result;
    }
})(ObjectTools = {});

if (module && module.exports)
    module.exports = ObjectTools;