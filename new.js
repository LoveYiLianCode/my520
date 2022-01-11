function login() {
    const username = document.getElementById("kw");
    switch (username.value) {
        case "":  alert("请输入：高一（23）班"); break;
        case "高一（23）班": window.location.href="show.html"; break;
        case "高一(23)班": window.location.href="show.html"; break;
        default : alert("你想干嘛？乖乖搜索：高一（23）班");
    }
}

