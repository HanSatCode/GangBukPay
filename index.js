var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}; // 쿠키 제작

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
} //쿠키 판별

var checkCoupon1 = getCookie("coupon1");


function useCode() {
    var objName = document.getElementById("code");
    if (objName.value == "") {
        alert("등록하실 쿠폰 코드를 입력해주세요.");
        objName.focus();
        return;
    }

    if (objName.value == "1234") {
        if (checkCoupon1 == "True") {
                alert("어라, 이미 등록된 쿠폰이네요. 다른 쿠폰을 사용해주세요.");
        }
        else {

        alert("지갑에 100GB(이)가 적립되었습니다.");
        setCookie("coupon1", "True", 9999);
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
    var resetYN = confirm("계속 진행하시면 지금까지 모은 정보들은 삭제됩니다 ! 한 번 지운 데이터는 다시 복구 하실 수 없고 영원히 삭제됩니다 ! 그래도 진행하시겠어요?");

    if (resetYN== true){
        setCookie("userSign", 0, -1);
        setCookie("userName", 0, -1);
        alert("계정 삭제를 완료했습니다. 초기 로그인 화면으로 넘어갑니다.");
        location.replace("index.html");
    }
    else {
    }
} // 초기화 세션