(function(window) {

    function survey() {
        var _this = this;
        _this.getTitle = function(className) {
            var titleElem = document.getElementsByClassName(className)[0];
            return titleElem.getElementsByClassName("title_content")[0].innerHTML;
        }
        _this.getPrefix = function(){
            
        }
    }
    window.survey = new survey()
})(window)