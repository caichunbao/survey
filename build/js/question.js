(function(window) {

    function survey() {
        var _this = this;
        this.getTitle = function(className) {
            var titleElem = document.getElementsByClassName(className)[0];
            return titleElem.getElementsByClassName("title_content")[0].innerHTML;
        }
    }
    window.survey = new survey()
})(window)