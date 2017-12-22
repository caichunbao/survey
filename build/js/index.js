/**
 * # index.js文件
 * 
 * 
 * # 备注
 * 
 * 
 */

var survey_json = {};

$(function() {

    // 创建一个问卷ID
    $(".create_survey_btn").click(function() {
        if (survey_json.id) {
            alert("您已经创建过一个问卷了！")
        } else {
            survey_json.id = Math.ceil(Math.random() * 1000000);
            alert("创建问卷成功，ID为：" + survey_json.id)
        }
    })

    // title部分
    $(".title_content").focus(function() {
        $(".survey_title").addClass("focus")
    }).blur(function() {
        $(".survey_title").removeClass("focus")
    })
})