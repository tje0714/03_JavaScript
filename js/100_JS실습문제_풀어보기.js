function 첫번째함수() {
  alert("안녕하세요!");
}

function 텍스트변경() {
  // 1번 id값이 메세지영역인 요소를 참조할 수있도록 설정
  const msg = document.getElementById("메세지영역");
  msg.innerText = "새로운 메세지!";
}

function 배경색변경(색상) {
  /*
        document.querySelector("body").style.backgroundColor = 색상;
        document
            .querySelector("body")
                .style
                    .backgroundColor = 색상;

        허버트 블레인 볼페슐레겔슈타인하우젠베르거도르프 시니어
        */

  const bd = document.querySelector("body");
  bd.style.backgroundColor = 색상;
}

function 인사하기() {
  // result 앞에다가 자료형을 붙여주지 않았을 때
  // 전역변수로 해서 function 이외에도 사용할 수 있도록 설정
  // 함수 인사하기 바깥에서도 result를 사용할 수 있도록 설정
  // 되도록이면 result 앞에 let, const 붙여주는 것이 좋음
  const nameInput = document.getElementById("이름입력").value;
  // const hi
  const sayResult = document.getElementById("인사결과");
  sayResult.innerHTML = "안녕하세요" + result + "님";
}

function 계산하기(연산자) {
  const n1 = Number(document.getElementById("숫자1").value);
  const n2 = Number(document.getElementById("숫자2").value);
  const culResult = document.getElementById("계산결과");

  // 만약에 ~~ 이 값이 진실이라면!
  if (연산자 == "+") {
    culResult.innerText = n1 + n2;
  } else if (연산자 == "-") {
    culResult.innerText = n1 - n2;
  } else if (연산자 === "*") {
    culResult.innerText = n1 * n2;
  }
}

function 이미지크기조절(크기) {
  /* 
        javaScript 내에서 작성하는 스타일은 2순위 스타일이기 때문에
        사용 지양
        */
  document.getElementById("조절이미지").style.width = 크기;
}

function 이미지크기조절2(가로, 세로) {
  /*
        javaScript 내에서 작성하는 스타일은 2순위 스타일이기 때문에
        사용 지양
        */
  document.getElementById("조절이미지2").style.width = 세로;
  document.getElementById("조절이미지2").style.height = 가로;
}

// 글자스타일변경(색상, 크기, 굵기)
// document.getElementById(), .style.color, .style.fontSize, .style.fontWeight
function 글자스타일변경(색상, 크기, 굵기) {
  document.getElementById("스타일텍스트").style.color = 색상;
  document.getElementById("스타일텍스트").style.fontSize = 크기;
  document.getElementById("스타일텍스트").style.fontStyle = 굵기;
  /*
        fontStyle  = 기울이기 어떤 디자인으로 폰트를 꾸며줄지에 대해 설정
        fontWeight = 폰트의 굵기 100(얇음) ~ 900(두꺼워짐)
            400 - 일반적인 폰트 두께
            700 - bold 두께
        */
}

function 시간보여주기() {
  /*
        Number = 추후에 만들어진 데이터 타입
                -> 단순히 숫자로 만들고 싶은 문자열 외부를
                  Number  라는 글자를 작성하고 ()로 감싸주면 되는 역할
        Date    = 다양한 정보와 기능을 담고있는 설계도
                  new 사용해서 JS개발자가 제공하는 기능중에
                    현재 JS 사용하는 개발자가 필요한 기능만 작성해서 사용
        
        변환/계산할 때는 new 라는 명칭을 사용하지 않음

        새로운 복잡한 것을 만들 때는 new 명칭 사용

        getMonth() 는 0부터 시작하게끔 배치
                    Month 월을 사용할 때는 +1을 붙여주는 것이 관례
        */
  let 지금 = new Date();
  // 현재 시간정보를 가져오는 명령
  //

  document.getElementById("시간표시").innerHTML =
    new Date().getFullYear() +
    "년" +
    (new Date().getMonth() + 1) +
    "월" +
    지금.getDate() +
    "일" +
    지금.getHours() +
    "시" +
    지금.getMinutes() +
    "분";
}

let 토글보임상태 = true;
function 토글기능() {
  if (토글보임상태 === true) {
    //토글박스가 보이는게 맞다면
    // 토글박스를 숨기기
    document.getElementById("토글박스").style.display = "none";
    토글보임상태 = false; // 토글박스가 보이지 않으므로 false
  } else {
    document.getElementById("토글박스").style.display = "block";
    토글보임상태 = true;
  }
}
/*
              - **함수명:** `토글기능()`
              - **사용 메서드:** `document.getElementById()`, `.style.display`, `if문`
              - **기능:** "토글박스"가 보이면 숨기고, 숨겨져 있으면 보이게 하기
              - **필요한 변수:** 보임상태를 저장할 변수 (true/false)
              - **display 값:** "none" (숨김), "block" (보임)
              */

let 정답색상 = "red";
function 게임체크(선택색상) {
  if (선택색상 === 정답색상) {
    document.getElementById("게임결과").innerHTML = "정답입니다!";
  } else {
    document.getElementById("게임결과").innerHTML = "틀렸습니다.!";
  }
}
/*
        - **함수명:** `게임체크(선택색상)`
        - **사용 메서드:** `if문`, `document.getElementById()`, `.innerHTML`
        - **기능:** 선택한 색상이 정답("red")과 같으면 "정답!", 다르면 "틀렸습니다!" 출력
        - **필요한 변수:** 정답색상 = "red"
        - **매개변수:** 선택색상 (클릭한 버튼의 색상)
        */
