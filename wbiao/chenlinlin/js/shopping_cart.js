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
    

   
})