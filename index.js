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

var checkUserResult = getCookie("userResult");
var checkUserName = getCookie("userName");

var checkCoupon01 = getCookie("coupon01");
var checkCoupon02 = getCookie("coupon02");
var checkCoupon03 = getCookie("coupon03");
var checkCoupon04 = getCookie("coupon04");
var checkCoupon05 = getCookie("coupon05");
var checkCoupon06 = getCookie("coupon06");
var checkCoupon07 = getCookie("coupon07");
var checkCoupon08 = getCookie("coupon08");
var checkCoupon09 = getCookie("coupon09");
var checkCoupon10 = getCookie("coupon10");

var result = 0;

window.onload = function (){
    document.getElementById("titleName").innerText = "안녕하세요 '" + checkUserName + "' 님!";
    document.getElementById("titleResult").innerText = checkUserResult + "GB";
}

function scrollDisable(){
    $('html, body').addClass('hidden');
}


function scrollDisable(){
    $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}

function useCode() {
    var objName = document.getElementById("code");

    if (objName.value == "") {
        alert("등록하실 쿠폰 코드를 입력해주세요.");
        objName.focus();
        return;
    }

    if (objName.value == "1234") {
        if (checkCoupon01 == "True") {
                alert("어라, 이미 등록된 쿠폰이네요. 다른 쿠폰을 사용해주세요.");
        }
        else {

        alert("지갑에 100GB(이)가 적립되었습니다.");
        result += Number(checkUserResult);
        setCookie("userResult", result + 100, 9999);
        setCookie("coupon01", "True", 9999);
        location.replace("coupon.html");
        return;
        }
    }

    if (objName.value == "abcd") {
        if (checkCoupon02 == "True") {
                alert("어라, 이미 등록된 쿠폰이네요. 다른 쿠폰을 사용해주세요.");
        }
        else {

        alert("지갑에 250GB(이)가 적립되었습니다.");
        result += Number(checkUserResult);
        setCookie("userResult", result + 250, 9999);
        setCookie("coupon02", "True", 9999);
        location.replace("coupon.html");
        return;
        }
    }

    else {
        alert("코드 등록에 실패했습니다. 틀린 것이 없는지 살펴보신 후 정확하게 입력해주세요.");
        return;
    }
}




function resetStart() {
    var resetYN = confirm("계속 진행하시면 지금까지 진행했던 데이터는 삭제됩니다! 한 번 지운 데이터는 영원히 복구하실 수 없으며, 일정 시간 동안 계정을 생성하실 수 없습니다!");

    if (resetYN== true){
        var realResetYN = prompt("정말로 삭제하시려면 '비활성화'(을)를 입력해 주세요.", '');

        if (realResetYN== "비활성화"){
            setCookie("userWarranty", "True", 1);
            setCookie("userSign", 0, -1);
            setCookie("userName", 0, -1);
            setCookie("userResult", 0, -1);
            setCookie("resultBackup", 0, -1);
            setCookie("coupon01", 0, -1);
            setCookie("coupon02", 0, -1);
            setCookie("coupon03", 0, -1);
            setCookie("coupon03", 0, -1);
            setCookie("coupon04", 0, -1);
            setCookie("coupon05", 0, -1);
            setCookie("coupon06", 0, -1);
            setCookie("coupon07", 0, -1);
            setCookie("coupon08", 0, -1);
            setCookie("coupon09", 0, -1);
            setCookie("coupon10", 0, -1);
            alert("계정이 성공적으로 비활성화 되었습니다. 초기 계정생성 페이지로 이동합니다.");
            location.replace("index.html");
        }

        else {
            alert("계정 비활성화를 취소하였습니다.");
        }
    }
    else {
    }
} // 초기화 세션