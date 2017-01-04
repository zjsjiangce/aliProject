/**
 * Created by Administrator on 2016/9/19.
 */
$(function(){
    $('nav ul').delegate('li','click',function(){
        var href='';
        if(!$(this).hasClass('active')){
            $(this).addClass('active').siblings('.active').removeClass('active');
            href=$(this).children().attr('href');
            if(!$(href).hasClass('active')){
                $(href).addClass('active').siblings('.active').removeClass('active');
            }
        }
    });
    $('.dropdown-toggle').dropdown();
    $('#datepicker-input-js').datepicker();
})