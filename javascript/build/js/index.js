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
    });
    // prefix部分
    $(".prefix_content").focus(function() {
        $(".survey_prefix").addClass("focus")
    }).blur(function() {
        $(".survey_prefix").removeClass("focus")
    })


    $(".save_survey_btn").click(function() {
        console.log(survey.getTitle("survey_title"));
        console.log(survey.getPrefix("survey_prefix"));
        survey_json.title = survey.getTitle("survey_title");
        survey_json.prefix = survey.getPrefix("survey_prefix");
        survey_json.question = [];
        console.log(survey_json)
    })
})