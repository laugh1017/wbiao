
// 点击切换 维修方式
var mj_on = document.getElementsByClassName("mj_on")[0];
var w_con = document.getElementsByClassName("W_gnTab_content")[0];
mj_on.children[0].style.color = "#ffffff";
mj_on.children[0].style.backgroundColor = "#ab947d";
w_con.children[1].style.display = "none"
mj_on.onclick = function (e) {
    for (var i = 0; i < mj_on.children.length; i++) {
        mj_on.children[i].style.color = "#ab947d";
        mj_on.children[i].style.backgroundColor = "#ffffff";
        mj_on.children[i].firstElementChild.index = i
        w_con.children[i].style.display = "none"
    }
    if (e.target.children.length == 0) {
        mj_on.children[e.target.index].style.color = "#ffffff";
        mj_on.children[e.target.index].style.backgroundColor = "#ab947d";
        w_con.children[e.target.index].style.display = "block";
    } else {
        mj_on.children[e.target.firstElementChild.index].style.color = "#ffffff";
        mj_on.children[e.target.firstElementChild.index].style.backgroundColor = "#ab947d";
        w_con.children[e.target.firstElementChild.index].style.display = "block"
    }
}


var input = document.getElementsByClassName("input_form")[0];
var mj_ul = document.getElementById("mj_ul");
var box1 = document.getElementsByClassName('input_form')[1]

var arr = [
    ['广州', '深圳', '潮州', '东莞', '佛山', '河源'],
    ['惠州', '江门', '揭阳', '茂名', '梅州', '清远', '铜陵'],
    ['安庆', '蚌埠', '池州', '云浮', '淮南', '池州', '中山'],
    ['马鞍山', '宿州', '铜陵', '云浮', '黄山', '阜阳', '巢湖'],
    ['汕尾', '宿州', '阳江', '阜阳', '宣城', '六安', '合肥'],
    ['合肥', '池州', '六安', '云浮', '湛江', '肇庆', '中山'],
    ['惠州', '江门', '揭阳', '茂名', '梅州', '清远', '铜陵'],
    ['池州', '中山', '阳江', '云浮', '湛江', '肇庆', '中山'],
    ['汕尾', '韶关', '铜陵', '云浮', '马鞍山', '宿州', '铜陵'],
    ['广州', '深圳', '潮州', '东莞', '佛山', '河源']
    ['广州', '深圳', '潮州', '东莞', '佛山', '河源'],
    ['惠州', '江门', '揭阳', '茂名', '梅州', '清远', '铜陵'],
     ['安庆', '蚌埠', '池州', '云浮', '淮南', '池州', '中山'],
    ['马鞍山', '宿州', '铜陵', '云浮', '黄山', '阜阳', '巢湖'],
    ['汕尾', '宿州', '阳江', '阜阳', '宣城', '六安', '合肥'],
    ['合肥', '池州', '六安', '云浮', '湛江', '肇庆', '中山'],
    ['惠州', '江门', '揭阳', '茂名', '梅州', '清远', '铜陵'],
    ['池州', '中山', '阳江', '云浮', '湛江', '肇庆', '中山'],
    ['汕尾', '韶关', '铜陵', '云浮', '马鞍山', '宿州', '铜陵'],
    ['广州', '深圳', '潮州', '东莞', '佛山', '河源']
]
var box2 = document.getElementsByClassName('block')[0]
input.onclick = function () {
    mj_ul.style.display = "block"
}

mj_ul.onclick = function (e) {
    input.innerHTML = e.target.innerHTML
    mj_ul.style.display = "none"
    box2.innerHTML = ''
    console.log(arr[e.target.value].length)
    for (var i = 0; i < arr[e.target.value].length; i++) {
        box2.innerHTML += `
        <li>${arr[e.target.value][i]}</li>
        `
    }
    box1.innerHTML = arr[e.target.value][1]
}
box1.onclick = function () {
    box2.style.display = "block"
}
box2.onclick = function (e) {
    box1.innerHTML = e.target.innerHTML
    box2.style.display = "none"
}

