var page = document.getElementById("page");
    var newl = document.getElementById("new");
    function getdata() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var mess = JSON.parse(xhr.responseText);
                function bb() {
                    for (var i = 12; i < 24; i++) {
                        newl.children[0].innerHTML += `
                                <dl>
                                    <dt>
                                        <a href="" target="_blank">
                                            <img class="lazy" alt="百达翡丽开放网购，不能再像以前一样买表了！" src="${mess[i].img}">
                                        </a>
                                    </dt>
                                    <dd>
                                        <h6>
                                            <a href="">${mess[i].tit}</a>
                                            <a href="" target="_blank">${mess[i].title}</a>
                                        </h6>
                                        <p class="p1">
                                            <span>作者：万表世界</span>
                                            <span>${mess[i].time}</span>
                                        </p>
                                        <p class="p2">
                                            <a href="" target="_blank">
                                                <span class="notext">${mess[i].text}</span>
                                            </a>
                                        </p>
                                    </dd>
                                </dl>     
                                `
                    }
                };
                function aa() {
                    for (var i = 0; i < 12; i++) {
                        newl.children[0].innerHTML += `
                        <dl>
                            <dt>
                                <a href="" target="_blank">
                                    <img class="lazy" alt="百达翡丽开放网购，不能再像以前一样买表了！" src="${mess[i].img}">
                                </a>
                            </dt>
                            <dd>
                                <h6>
                                    <a href="">${mess[i].tit}</a>
                                    <a href="" target="_blank">${mess[i].title}</a>
                                </h6>
                                <p class="p1">
                                    <span>作者：万表世界</span>
                                    <span>${mess[i].time}</span>
                                </p>
                                <p class="p2">
                                    <a href="" target="_blank">
                                        <span class="notext">${mess[i].text}</span>
                                    </a>
                                </p>
                            </dd>
                        </dl>     
                        `
                    }

                };
                aa();
                for (var i = 0; i < page.children.length; i++) {
                    page.children[i].onclick = function () {
                        num = this.dataset.index;

                        for (var j = 0; j < page.children.length; j++) {
                            page.children[j].className = "";
                        };
                        this.className = "act";
                        if (num == 0) {
                            location.reload();
                            newl.children[0].innerHTML = "";
                            aa();
                        } else if (num == 1) {
                            newl.children[0].innerHTML = "";

                            bb();
                        } else if (num == 2) {
                            newl.children[0].innerHTML = "";
                            aa();
                        } else if (num == 3) {
                            newl.children[0].innerHTML = "";
                            bb();
                        } else if (num == 4) {
                            newl.children[0].innerHTML = "";
                            aa();

                        } else if (num == 5) {
                            newl.children[0].innerHTML = "";
                            bb();

                        } else if (num == 6) {
                            newl.children[0].innerHTML = "";
                            aa();

                        } else if (num == 7) {
                            newl.children[0].innerHTML = "";
                            bb();

                        } else if (num == 8) {
                            newl.children[0].innerHTML = "";
                            aa();

                        } else if (num == 9) {
                            newl.children[0].innerHTML = "";
                            bb();
                        }
                    }
                }
            }
        }
        xhr.open("GET", "http://localhost/watch/php/getdata.php", true);
        xhr.send();
    };
function  getwx(){
    var wx = document.getElementById("wx_show_btn");
    var wximg = document.getElementById("wx_qrcode_img");
    wx.onmouseenter = function () {
        wximg.style.display = "block";
    };
    wx.onmouseleave = function () {
        wximg.style.display = "none";
    };
    var app = document.getElementById("app_show_btn");
    var appimg = document.getElementById("app_qrcode_img");
    app.onmouseenter = function () {
        appimg.style.display = "block";
    };
    app.onmouseleave = function () {
        appimg.style.display = "none";
    };
};