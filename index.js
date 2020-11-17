var agent = navigator.userAgent.toLowerCase();
if (agent.indexOf("safari") != -1) {
  alert("IOS(Safari)를 사용 중이시네요. 일부 기능에 제한이 있을 수 있어요.");
  alert("알려진 문제 점 # 이름이 올바르게 표시 안 되는 것");
}

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

var checkUserResult = getCookie("userResult");
var checkUserName = getCookie("userName");

var checkCoupon1 = getCookie("coupon1");
var checkCoupon2 = getCookie("coupon2");

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
        if (checkCoupon1 == "True") {
                alert("어라, 이미 등록된 쿠폰이네요. 다른 쿠폰을 사용해주세요.");
        }
        else {

        alert("지갑에 100GB(이)가 적립되었습니다.");
        result += Number(checkUserResult);
        setCookie("userResult", result + 100, 9999);
        setCookie("coupon1", "True", 9999);
        location.replace("coupon.html");
        return;
        }
    }

    if (objName.value == "abcd") {
        if (checkCoupon2 == "True") {
                alert("어라, 이미 등록된 쿠폰이네요. 다른 쿠폰을 사용해주세요.");
        }
        else {

        alert("지갑에 250GB(이)가 적립되었습니다.");
        result += Number(checkUserResult);
        setCookie("userResult", result + 250, 9999);
        setCookie("coupon2", "True", 9999);
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
    var resetYN = confirm("계속 진행하시면 지금까지 모은 정보들은 삭제됩니다! 한 번 지운 데이터는 영원히 복구하실 수 없습니다! 그래도 진행하시겠어요?");

    if (resetYN== true){
        var realResetYN = prompt('경고. 계정을 삭제하게 되면 워런티에 카운트가 가해집니다! 워런티에 카운트가 가해지게 되면 일정 시간 동안 계정을 생성하실 수 없습니다! 기술 문제로 인해 사용이 불가능한 경우, 프로그래밍 부서를 방문해 주세요. 이를 이해하시고 계정을 삭제하시려면, "계정을 삭제합니다"(을)를 입력해 주세요.', '');

        if (realResetYN== "계정을 삭제합니다"){
            setCookie("userSign", 0, -1);
            setCookie("userName", 0, -1);
            setCookie("userResult", 0, -1);
            setCookie("resultBackup", 0, -1);
            setCookie("coupon1", 0, -1);
            setCookie("coupon2", 0, -1);
            alert("계정 삭제를 완료했습니다. 초기 로그인 화면으로 넘어갑니다.");
            location.replace("index.html");
        }

        else {
            alert("계정 삭제를 취소하였습니다.");
        }
    }

    else {
    }
} // 초기화 세션