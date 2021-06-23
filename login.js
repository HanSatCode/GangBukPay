function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
} else {
    alert("PC 환경으로 접속하신 것 같네요. 일부 기능이나 UI 등은 최적화되어있지 않을 수 있어요.");
}

var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

var userName =  "name";

var checkUserWarranty = getCookie("userWarranty");
var checkUserSign = getCookie("userSign");
if (checkUserSign == "True") {
    location.replace("main.html");
}

function payStart() {
    var objName = document.getElementById("name");

    if (objName.value == "") {
        alert("시작하실 사용자의 이름이나 닉네임을 입력해 주세요.");
        objName.focus();
        return;
    }

    else if (objName.value == "udlrbas") {
        var warnAgree = confirm("관리자 계정으로 로그인합니다.");
        location.replace("main.html");
        setCookie("userSign", "True", 9999);
        setCookie("userName", "HeXaDmIn", 9999);
        setCookie("userResult", 654321, 9999);
    }

    else if (checkUserWarranty == "True") {
        alert("이런, 계정을 비활성화 한 지 별로 지나지 않았어요. 잠시 후 시도해 주세요.");
    }

    else if (objName.value != "") {
        var warnAgree = confirm("한 번 설정한 이름은 계정을 비활성화하지 않는 이상 절대로 바꿀 수 없으며, 프라이빗 브라우저를 사용하시거나 인터넷 사용 기록 삭제를 하시면 지금까지 진행했던 활동은 영원히 삭제됩니다! 계속 진행하시겠어요?");
        if (warnAgree) {
            location.replace("main.html");
            setCookie("userSign", "True", 9999);
            userName = document.getElementById('name').value;
            setCookie("userName", userName, 9999);
            setCookie("userResult", 0, 9999);
        } else {
            setCookie("userSign", "False", 9999);
        }
    }
}