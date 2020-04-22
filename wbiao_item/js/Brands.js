window.addEventListener('load', function () {
    // 顶部广告隐藏
    var AD = document.querySelector('.AD');
    var close = document.querySelector('.close');
    close.onclick = function () {
        AD.style.display = 'none';
    }
    // 底部区域显示隐藏
    var more_link = document.querySelector('.more_link');
    var wb_more_link = document.querySelector('.wb_more_link');
    var flog = 1;
    more_link.onclick = function () {
        if (flog == 1) {
            wb_more_link.style.display = 'block';
            flog = 0;
        } else {
            wb_more_link.style.display = 'none';
            flog = 1;
        }
    }
    // banner轮播图
    var banner = document.querySelector('.banner');
    var banner_li = document.querySelector('.banner_ul').children;
    var banner_img = document.getElementsByClassName('banner')[0].getElementsByTagName('img');
    var num = 0;
    var timer;
    for (var i = 0; i < banner_li.length; i++) {
        banner_li[i].index = i;
        banner_li[i].addEventListener('click', function () {
            for (var i = 0; i < banner_img.length; i++) {
                banner_img[i].removeAttribute('class');
                banner_li[i].removeAttribute('class');
            }
            banner_img[this.index].setAttribute('class', 'scale show');
            this.setAttribute('class', 'active');
            num = this.index;
        })
    }
    function startName() {
        timer = setInterval(function () {
            num++;
            if (num >= 2) {
                num = 0;
            }
            for (var i = 0; i < banner_img.length; i++) {
                banner_img[i].removeAttribute('class');
                banner_li[i].removeAttribute('class');
            }
            banner_img[num].setAttribute('class', 'scale show');
            banner_li[num].setAttribute('class', 'active');
        }, 3000)
    }
    startName();
    banner.addEventListener('mouseenter', function () {
        clearInterval(timer);
    })
    banner.addEventListener('mouseleave', function () {
        startName();
    })
    // 小轮播
    var appendNumber = 6;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 6,
        loop: true,
    });
    // content2显示隐藏内容
    var more = document.querySelector('.more')
    var content2 = document.querySelector('.commodity').querySelector('.content2');

    more.addEventListener('click', function () {
        more.style.display = 'none'
        content2.style.display = 'block'
    })
    // php mysql获取人气店铺数据
    var contentpain = document.getElementById('contentpain');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                contentpain.innerHTML += `
                <li onclick="sendTo(${data[i].id})">
                <div class="logo">
                    <img src="${data[i].logo}" alt="">
                </div>
                <a href="javascript:void(0);" class="img">
                    <img src="${data[i].photo}"
                        alt="">
                </a>
                <a href="javascript:void(0);" class="title">${data[i].title}</a>
                <div class="tag clearfix h">
                    <div class="tag_a fl">
                        <a href="javascript:void(0);" class="fl">${data[i].a1}</a>
                        <a href="javascript:void(0);" class="fl">${data[i].a2}</a>
                        <a href="javascript:void(0);" class="fl">${data[i].a3}</a>
                       
                    </div>
                    <div class="tag_b fr">
                        <a href="/shop/23">进店&gt;</a>
                    </div>
                </div>
                <div class="text">
                    <p>${data[i].text}</p>
                </div>
            </li>
                `
            }
        }
    }
    xhr.open('GET', 'http://localhost/wbiao_item/php/Brands.php', true);
    xhr.send();
    // 返回顶部
    var top = document.querySelector('.top');
    top.onclick = function () {
        animate(window, 0);
    }
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15)
    }
    // 右侧客服pop部分显示和隐藏
    var close06 = document.querySelector('.icon-a-r-close06');
    var service = document.querySelector('.service');
    var ntalk_pop = document.querySelector('.ntalk_pop');
    service.addEventListener('mouseenter', function () {
        ntalk_pop.style.display = 'block';
    })
    service.addEventListener('mouseleave', function () {
        ntalk_pop.style.display = 'none';
    })
    close06.addEventListener('click', function () {
        ntalk_pop.style.display = 'none';
    })
    ntalk_pop.addEventListener('mouseenter', function () {
        ntalk_pop.style.display = 'block';
    })
    ntalk_pop.addEventListener('mouseleave', function () {
        ntalk_pop.style.display = 'none';
    })

})