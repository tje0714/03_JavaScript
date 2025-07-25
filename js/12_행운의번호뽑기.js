const lottoResult = document.getElementById("lottoResult");
const lottoBtn = document.getElementById("lottobutton");
lottoBtn.addEventListener("click", function () {
  let result = "";
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 45) + 1;

    if (i === 0) {
      result = num;
    } else if (i === 5) {
      result = result + " + " + num;
    } else {
      result = result + ", " + num;
    }
    // 만약에 i가 5라면   " + "를 붙여서 num 추가하기
  }

  lottoResult.innerText = result;
});
