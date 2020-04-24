window.addEventListener('load', function () {
    // 顶部广告隐藏
    var AD = document.querySelector('.AD');
    var close = document.querySelector('.close');
    close.onclick = function () {
        AD.style.display = 'none';
    }
    // 所有分类内容显示隐藏
    var allfl = document.querySelector('.allfl');
    var navList = document.querySelector('.nav-list');
    allfl.addEventListener('mouseenter', function () {
        navList.style.display = 'block';
    })
    allfl.addEventListener('mouseleave', function () {
        navList.style.display = 'none';
    })
    navList.addEventListener('mouseenter', function () {
        navList.style.display = 'block';
    })
    navList.addEventListener('mouseleave', function () {
        navList.style.display = 'none';
    })
    //顶部nav导航隐藏部分显示
    var hidenav = document.querySelector('.pt-shop-float-nav');
    var shownav = document.querySelector('.pt-shop_nav');
    var shownavTop = shownav.offsetTop;
    var allfl2 = document.querySelector('.allfl2');
    var navList2 = document.querySelector('.nav-list2');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= shownavTop) {
            hidenav.style.display = 'block';
        } else {
            hidenav.style.display = 'none';
        }
    })
    //顶部nav导航隐藏部分 所有分类内容显示隐藏
    allfl2.addEventListener('mouseenter', function () {
        navList2.style.display = 'block';
    })
    allfl2.addEventListener('mouseleave', function () {
        navList2.style.display = 'none';
    })
    navList2.addEventListener('mouseenter', function () {
        navList2.style.display = 'block';
    })
    navList2.addEventListener('mouseleave', function () {
        navList2.style.display = 'none';
    })
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