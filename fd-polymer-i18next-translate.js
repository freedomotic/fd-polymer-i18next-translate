PolymerExpressions.prototype.t = function(key, extra) {
    if (!!window.i18n) {
        var lower_key = (key) ?key.toLowerCase(): "_";
        var translation;
        if (!!extra) {
            translation = window.i18n.t(key, {
                "var": extra
            });
        }
        else {
            translation = window.i18n.t(lower_key);
        }
        return (translation) ?  translation : " _|" + lower_key + "|_ ";
    }
    return null;
};

window.i18n.init({
    // debug: true,
    fallbackLng: false,
    getAsync: false,
    resGetPath: './__ns__/__lng__.json'
});