(function(window) {

    function surveyElem(elemClassName, json) {
        var _this = this,
            rootElem = document.getElementsByClassName(elemClassName)[0] || document.document,
            json = json || {},
            surveyTitle = json.title || "问卷标题",
            surveyPrefix = json.prefix || "问卷简介",
            surveyQuestion = json.question || [];

        _this.init = function() {
            rootElem.innerHTML = ''
            rootElem.appendChild(this.title())
            rootElem.appendChild(this.prefix())

        };
        _this.title = function() {
            var titleElem = document.createElement("div");
            titleElem.innerHTML = surveyTitle;
            return titleElem
        };
        _this.prefix = function() {
            var prefixElem = document.createElement("p");
            prefixElem.innerHTML = surveyPrefix;
            return prefixElem
        };
        _this.question = function(surveyQuestion) {

        }
    };

    window.surveyElem = surveyElem

})(window)