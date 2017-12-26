(function(window) {

    function survey() {
        var _this = this;
        _this.getTitle = function(className) {
            var titleElem = document.getElementsByClassName(className)[0];
            return titleElem.getElementsByClassName("title_content")[0].innerHTML.trim();
        }
        _this.getPrefix = function(className) {
            var prefixElem = document.getElementsByClassName(className)[0];
            return prefixElem.getElementsByClassName("prefix_content")[0].innerHTML.trim();
        }
    }
    window.survey = new survey()
})(window)