$(function () {
    var $listNode = $('#head-nav > li');
    var $aNode = $('#head-nav > li a');

    var $head = $('#head');



    /*头部效果*/
        $(window).scroll(function () {
            if($(window).scrollTop()>70){
                $head.addClass('active')
                $head.css('position', 'fixed');
                $head.css('opacity', '.9')
            }else if($(window).scrollTop()<70){
                $head.css('position', 'relative')
                $head.removeClass('active')
            }
        });
    /*头部效果*/





    /*导航切换*/
    GetRequest();
    function GetRequest(value) {

        //url例子：www.bicycle.com?id="123456"&Name="bicycle"；
        var url = decodeURI(location.search); //?id="123456"&Name="bicycle";
        if(url.indexOf("?") != -1){//url中存在问号，也就说有参数。
            var str = url.substr(1, 1);  //得到?后面的字符串
            $($aNode).removeClass('active');
            $($aNode[str]).addClass('active');
        }
    }
    /*导航切换*/





    /*轮播导航*/
    var $navList = $('#nav .navList > li');
    var $nL = $('#nav .nL ');
    navLists()
    function navLists() {
        $navList.mouseenter(function () {
            now = $(this).index();
            $($nL[now]).addClass('active');

        })
        $navList.mouseleave(function () {
            now = $(this).index();
            $($nL).removeClass('active');
        })
    }
    /*轮播导航*/





    /*淡入淡出效果*/
    navList();
    function navList() {
        $(".pic li").eq(0).show();
        //鼠标滑过手动切换，淡入淡出
        $("#position li").mouseover(function() {
            $(this).addClass('cur').siblings().removeClass("cur");
            var index = $(this).index();
            i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
            // $(".pic li").eq(index).show().siblings().hide();
            $(".pic li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        });
        //自动轮播
        var i=0;
        var timer=setInterval(play,3000);
        //向右切换
        var play=function(){
            i++;
            i = i > 2 ? 0 : i ;
            $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
            $(".pic li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        }
        //向左切换
        var playLeft=function(){
            i--;
            i = i < 0 ? 2 : i ;
            $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
            $(".pic li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        }
        //鼠标移入移出效果
        $("#container").hover(function() {
            clearInterval(timer);
        }, function() {
            timer=setInterval(play,3000);
        });
    }
    /*淡入淡出效果*/













})

