
let hei = 524


// 封装的原型，传入一个按钮的id，和内容id，可以指定显示和隐藏的元素
class show {
    constructor(btnname, id) {
        this.id = id
        this.btnname = btnname
    }

    clicks() {
        let btn = this.btnname
        let id = this.id

        $(`#${btn}`).click(function (event) {

            // 阻止事件冒泡
            event.stopPropagation();
            let contentBox = $(`#${id}`);
            console.log(contentBox);


            if (contentBox.is(':visible')) {

                contentBox.slideUp('slow', function () {
                    console.log('内容已隐藏', id, btn);

                });

            } else {
                contentBox.slideDown('slow', function () {
                    console.log('内容已显示', id);
                });
            }
        });
    }
}

// 滑动开关
let btn = false
$('#slider').on('click', function () {
    btn = !btn
    if (btn) {
        $(".index").css("width", "100%")
        $(".index").css("height", "100%")
        $(".index-img").css("width", "60%")
        $(".index-img").css("height", "100%")

        $(".index-right").css("width", "30%")
        $(".index-right").css("height", "100%")

        // $(".imgY img").css("width","auto")
        // $(".imgY img").css("height","891px")

        // setTimeout(() => {
        //     $(".imgY img").css("width", `${$('.imgbox').width()}`)
        //     $(".imgY img").css("height", `${$('.imgbox').height()}`)
        //     hei = $('.imgbox').height() + 26
        // }, 500);

        $(".swiper").css("width", "80%")
        $(".swiper").css("height", "85%")


        localStorage.setItem('btn', btn)

    } else {
        $(".index").css("width", "1282px")
        $(".index").css("height", "70%")
        $(".index-img").css("width", "560px")
        $(".index-img").css("height", "560px")
        $(".index-right").css("width", "400px")
        $(".index-right").css("height", "560px")
        
        $(".swiper").css("width", "80%")

        // $(".imgY img").css("width", "500px")
        // $(".imgY img").css("height", "500px")
        // hei = 524

        localStorage.setItem('btn', btn)

    }
});

// 列表隐藏项
let lis = new show('XiangyingshiBtn', 'XiangyinshiLi')
lis.clicks()

// 功能项目
let lis2 = new show('gonnengBtn', 'gonnengkuaiBox')
lis2.clicks()

// 静态页面
let lis3 = new show('staticBtn', 'staticBox')
lis3.clicks()

// 滑动按钮
let Topbox = new show('slider', 'kaifa')
Topbox.clicks()


// Vue 
// Vue一级盒子
let VueBox = new show('VueBtn', 'VueBox')
VueBox.clicks()

let Vue2Box = new show('Vue2btn', 'Vue2Box')
Vue2Box.clicks()

let Vue3Box = new show('Vue3btn', 'Vue3Box')
Vue3Box.clicks()




// 悬浮换图

// 鼠标悬浮事件


let imgnumber = $('.imgY img').length - 1
let index = 1



let time = setInterval(function () {
    $('.imgY').css('transform', `translateY(-${index * hei}px)`)

    if (index > imgnumber) {
            $('.imgY').css('transition', `none`)

            console.log(1);

            index = 0

            $('.imgY').css('transform', `translateY(-${index * hei}px)`)


            console.log($('.imgY').transform);

            index++
            // if (index) {

            // }

        } else if (index == 1) {
            $('.imgY').css('transition', `all 0.5s`)
            console.log(3);
            $('.imgY').css('transform', `translateY(-${index * hei}px)`)
            index++

        } else {
            $('.imgY').css('transform', `translateY(-${index * hei}px)`)
            index++
        }

    // index >= imgnumber ? index = 0 : index++

    console.log('正在轮播1');

}, 3000)


// 悬浮换图事件
$('.index-right h2').hover(function () {
//     clearInterval(time);
//     // 获取当前项目的数据图片属性
//     index = $(this).data('num');
//     // 设置预览图的src属性
//     $('.imgY').css('transform', `translateY(-${index * hei}px)`)
    $(".index-img").css({ 'background': "linear-gradient(to bottom right, rgba(52, 152, 219, .8), rgba(155, 89, 182, .8), rgba(231, 76, 60, .8), rgba(241, 196, 15, .8))" })
}, function () {

    $(".index-img").css({ 'background': " rgba(255, 255, 255, 0.2)" })



    // time = setInterval(function () {

    //     // index >= imgnumber ? index = 0 : index++
    //     if (index > imgnumber) {
    //         $('.imgY').css('transition', `none`)

    //         console.log(1);

    //         index = 0

    //         $('.imgY').css('transform', `translateY(-${index * hei}px)`)


    //         console.log($('.imgY').transform);

    //         index++
    //         // if (index) {

    //         // }

    //     } else if (index == 1) {
    //         $('.imgY').css('transition', `all 0.5s`)
    //         console.log(3);
    //         $('.imgY').css('transform', `translateY(-${index * hei}px)`)
    //         index++

    //     } else {
    //         $('.imgY').css('transform', `translateY(-${index * hei}px)`)
    //         index++
    //     }

    //     console.log('正在轮播2');

    // }, 3000)

}
);



// 卡片轮播图
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

// Mouseover event to change slides
var controlBoxes = document.querySelectorAll('.index-right h2');
controlBoxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        var num = box.getAttribute('data-num');
        swiper.slideTo(Number(num));
    });
});
