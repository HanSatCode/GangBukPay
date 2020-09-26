var filter = "win16|win32|win64|mac|macintel";

if (filter.indexOf(navigator.platform.toLowerCase()) > 0) {
    alert("PC 버전이네요. 해상도나 오브젝트의 배치가 완벽하게 지원되지 않아요.")
}

function payStart() {
    var objName = document.getElementById("name");
    var objStart = document.getElementById("start");
    if (objName.value == "") {
        alert("시작하실 사용자의 이름이나 닉네임을 입력해 주세요.");
        objName.focus();
        return;
    }
    if (objName.value != "") {
        var warnAgree = confirm("인터넷 사용 기록 삭제를 하시면 지금까지 했던 활동은 삭제됩니다. 계속하시겠어요?");
        if (warnAgree) {
            location.replace("main.html");
        } else {
        }
    }
}