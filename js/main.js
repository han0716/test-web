/**
 * Created by mac on 16/12/5.
 */
//1

$(document).ready(function () {
    // 小菜单显示
    $("#touch-more-list").hover(function () {
        $(".nav-right-lis-ul").toggle();
    });
    $(".nav-right-lis-ul").mouseover(function () {
        $(".nav-right-lis-ul").show();
    });
    $(".nav-right-lis-ul").mouseleave(function () {
        $(".nav-right-lis-ul").hide();
    });

});

function test() {
    alert();
}