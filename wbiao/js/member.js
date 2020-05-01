// 顶部广告隐藏
var AD = document.querySelector('.AD');
var close = document.querySelector('.close');
close.onclick = function () {
    AD.style.display = 'none';
};
// 左侧导航对应右侧内容
var lines = document.getElementsByClassName("lines");
var col = document.getElementById("collect");
var changetxt = document.getElementById("change_txt");
for (var i = 0; i < lines.length; i++) {
    lines[i].onclick = function () {
        int = this.dataset.index;
        for (var j = 0; j < lines.length; j++) {
            lines[j].className = "lines";
            col.children[j].style.display = "none";
            lines[j].children[0].className="";
        };
        this.setAttribute("class", "lines on");
        col.children[int].style.display = "block";
        this.children[0].className = "num";
        var nnum = document.getElementsByClassName("num");    
        changetxt.innerHTML = nnum[0].innerHTML;
    }
};

// 订单
var tabo = document.getElementById("tab_order");
var gnb = document.getElementsByClassName("gnTabs_block");
for (var i = 0; i < tabo.children.length; i++) {
    tabo.children[i].onclick = function () {
        sum = this.dataset.index;
        for (var j = 0; j < tabo.children.length; j++) {
            tabo.children[j].className = "";
            gnb[j].style.display = "none";
        };
        this.className = "on";
        gnb[sum].style.display = "block";
    }
};
// 余额
var tabnav = document.getElementById("tabnav");
for (var i = 0; i < tabnav.children.length; i++) {
    tabnav.children[i].onclick = function () {
        for (var j = 0; j < tabnav.children.length; j++) {
            tabnav.children[j].className = "";
        };
        this.className = "on";
    }

};
// 余额查看类型
var a = 0;
var titb = document.getElementsByClassName("title_b")[0];
var dropd = document.getElementsByClassName("drop_down");
var dropdb = document.getElementsByClassName("drop_down_b");

titb.onclick = function () {
    if (a == 0) {
        a = 1;
        titb.children[1].className = "icon-a-wallet-down2";
        dropd[0].style.display = "block";
        for (var j = 0; j < dropdb[0].children.length; j++) {

            dropdb[0].children[j].className = "";
            for (var i = 0; i < dropdb[0].children.length; i++) {
                dropdb[0].children[i].onmouseover = function () {
                    this.className = "js_on";
                };
                dropdb[0].children[i].onmouseleave = function () {
                    this.className = "";

                }
            }
        }
    } else {
        a = 0
        dropd[0].style.display = "none";
        titb.children[1].setAttribute("class", "rotate icon-a-wallet-down2");
    }
};



var titd = document.getElementsByClassName("title_d")[0];
titd.onclick = function () {
    if (a == 0) {
        a = 1;
        titb.children[1].className = "icon-a-wallet-down2";
        dropd[1].style.display = "block";
        for (var j = 0; j < dropdb[1].children.length; j++) {
            dropdb[1].children[j].className = "";
            for (var i = 0; i < dropdb[1].children.length; i++) {
                dropdb[1].children[i].onmouseover = function () {
                    this.className = "js_on";
                };
                dropdb[1].children[i].onmouseleave = function () {
                    this.className = "";
                }
            }
        }
    } else {
        a = 0;
        dropd[1].style.display = "none";
        titd.children[1].setAttribute("class", "rotate icon-a-wallet-down2");
    }
};



// 底部
var tabb = document.getElementById("tab_bottom");
var tabbb = document.getElementById("tab_bottom2");
var tabc = document.getElementById("tabc");
var tabcc = document.getElementById("tabc2");

for (var i = 0; i < tabb.children.length; i++) {
    tabb.children[i].onmouseover = function () {
        num = this.dataset.index;
        for (var j = 0; j < tabb.children.length; j++) {
            tabb.children[j].className = "";
            tabc.children[j].className = "hid";
        }
        this.className = "tab_in";
        tabc.children[num].className = "show";
    };
    tabbb.children[i].onmouseover = function () {
        num = this.dataset.index;
        for (var j = 0; j < tabb.children.length; j++) {
            tabbb.children[j].className = "";
            tabcc.children[j].className = "hid";
        };
        this.className = "tab_in";
        tabcc.children[num].className = "show";
    }

};

// 点击出现添加地址界面
var showadd = document.getElementById("show_address");
var addbg = document.getElementById("address_bg");
var address = document.getElementById("address");
showadd.onclick = function () {
    addbg.style.display = "block";
    address.style.display = "block";
};
// 地址三级联动
var provinces = ['河南', '河北', '湖南',];
var citys = [['商丘', '郑州', '开封', '许昌'], ['唐山', '衡水', '石家庄', '保定'], ['怀化', '长沙', '邵阳', '岳阳']];
var areas = [[['夏邑县', '虞城县', '民权县', '柘城县'], ['二七区', '荥阳区', '中原区', '金水区'], ['鼓楼区', '祥符区', '龙亭区', '禹王台区'], ['襄城县', '鄢陵县', '禹州市']],
[['玉田县', '乐亭县', '迁西县', '滦县'], ['冀州市', '桃城区', '武邑县', '衡安平县'], ['井陉县', '正定县', '平山县', '无极县'], ['定兴县', '唐县', '高阳县', '曲阳县']],
[['中方县', '会同县', '辰溪县', '沅陵县'], ['天心区', '芙蓉区', '开福区', '望城区'], ['双清区', '大祥区', '北塔区', '邵东县'], ['岳阳楼区', '君山区', '开平江县', '岳阳县']]];
var province = document.getElementById('province');
var city = document.getElementById('city');
var area = document.getElementById('area');
window.onload = function () {
    for (var i = 0; i < provinces.length; i++) {
        province.innerHTML += ` <option>${provinces[i]}</option>`;
    }
};
function pro() {
    var j = province.selectedIndex - 1;
    if (province.selectedIndex == 0) {
        city.innerHTML = `<option>请选择</option>`;
        area.innerHTML = `<option>请选择</option>`;
    } else {
        city.innerHTML = `<option>${citys[j][0]}</option>`;
        for (var i = 1; i < citys[j].length; i++) {
            city.innerHTML += `<option>${citys[j][i]}</option>`
            ci();
        }
    }
};
function ci() {
    var j = province.selectedIndex - 1;
    var p = city.selectedIndex;
    area.innerHTML = `<option>${areas[j][p][0]}</option>`;
    for (var i = 1; i < areas[j][p].length; i++) {
        area.innerHTML += `<option>${areas[j][p][i]}</option>`
    }
};

// x(关闭添加收货地址界面)
var cancel = document.getElementById("cancel");
var icona = document.getElementsByClassName("icon-a-o-close05")[0];
icona.onclick = function () {
    address.style.display = "none";
    addbg.style.display = "none";
};
cancel.onclick = function () {
    address.style.display = "none";
    addbg.style.display = "none";
};

// 点击头像那一块出现会员规则
var member = document.getElementById("member");
var rule = document.getElementById("rule");
member.onclick = function () {
    addbg.style.display = "block";
    rule.style.display = "block";
};
// 关闭会员规则界面
var iconao = document.getElementById("iconao");
iconao.onclick = function () {
    rule.style.display = "none";
    addbg.style.display = "none";
};
// 修改个人资料
var provinces1 = ['河南', '河北', '湖南',];
var citys1 = [['商丘', '郑州', '开封', '许昌'], ['唐山', '衡水', '石家庄', '保定'], ['怀化', '长沙', '邵阳', '岳阳']];
var areas1 = [[['夏邑县', '虞城县', '民权县', '柘城县'], ['二七区', '荥阳区', '中原区', '金水区'], ['鼓楼区', '祥符区', '龙亭区', '禹王台区'], ['襄城县', '鄢陵县', '禹州市']],
[['玉田县', '乐亭县', '迁西县', '滦县'], ['冀州市', '桃城区', '武邑县', '衡安平县'], ['井陉县', '正定县', '平山县', '无极县'], ['定兴县', '唐县', '高阳县', '曲阳县']],
[['中方县', '会同县', '辰溪县', '沅陵县'], ['天心区', '芙蓉区', '开福区', '望城区'], ['双清区', '大祥区', '北塔区', '邵东县'], ['岳阳楼区', '君山区', '开平江县', '岳阳县']]];
var province1 = document.getElementById('province1');
var city1 = document.getElementById('city1');
var area1 = document.getElementById('area1');
window.onload = function () {
    for (var i = 0; i < provinces1.length; i++) {
        province1.innerHTML += ` <option>${provinces1[i]}</option>`;
    }
};
function pro1() {
    var j = province1.selectedIndex - 1;
    if (province1.selectedIndex == 0) {
        city1.innerHTML = `<option>请选择</option>`;
        area1.innerHTML = `<option>请选择</option>`;
    } else {
        city1.innerHTML = `<option>${citys1[j][0]}</option>`;
        for (var i = 1; i < citys1[j].length; i++) {
            city1.innerHTML += `<option>${citys1[j][i]}</option>`
            ci1();
        }
    }
};
function ci1() {
    var j = province1.selectedIndex - 1;
    var p = city1.selectedIndex;
    area1.innerHTML = `<option>${areas1[j][p][0]}</option>`;
    for (var i = 1; i < areas1[j][p].length; i++) {
        area1.innerHTML += `<option>${areas1[j][p][i]}</option>`
    }
};
var changedata=document.getElementById("change_data");
var infor=document.getElementById("infor");
var infocancel=document.getElementById("info_cancel");
var cancelinfor=document.getElementById("cancel_infor");
changedata.onclick=function(){
    infor.style.display="block";
    addbg.style.display = "block";
};
infocancel.onclick=function(){
    infor.style.display="none";
    addbg.style.display="none";
};
cancelinfor.onclick=function(){
    infor.style.display="none";
    addbg.style.display="none";
};

// 保存个人资料
var saveinfor=document.getElementById("save_infor");
var pmane=document.getElementById("p-nick-name");
var prname=document.getElementById("p-real-name");
var psex=document.getElementById("p-gender");
var pbir=document.getElementById("p-birthday");
var ppro=document.getElementById("p-profession");
var pprovince=document.getElementById("p-province");
var pcity=document.getElementById("p-city");
var pregion=document.getElementById("p-region");

var addname=document.getElementById("add_name");
var addrname=document.getElementById("add_r_name");
var sex1=document.getElementById("sex1");
var sex2=document.getElementById("sex2");
var addbir=document.getElementById("add_bir");
var dddprofess=document.getElementById("add_profess");
saveinfor.onclick=function(){
    for(var i=0;i<province1.children.length;i++){
         console.log(province1.innerHTML);
    }
   
};