const Humanname = document.querySelector("#humanname");
const letterDiv = document.querySelector("#letter");

const Image = document.createElement("img");
const LText = document.createElement("h3");

let counter = 0;

function drawimg(number){
    Image.src = `img/${arr[number]}`;
    Image.style.width = '45%';
    Image.style.heigh = 'auto';
}

function drawHN(number){
    Humanname.innerHTML = Humanname_number[number]
}

function drawLatter(number){
    LText.innerHTML = latter_text[number]
    LText.style.color = 'white';
    LText.style.width = '100%';
    LText.style.height ='auto';
}

letterDiv.appendChild(Image);
letterDiv.appendChild(LText);

//순서 배치
let Humanname_number = ["창기", "상은", "상훈", "애경", "창진", "소연", "현아", "세비", "가령", "지안", "뭉이"];
let arr = ["fa.jpg", "mam.jpg", "gomoboo.jpg", "gomo.jpg", "sam.jpg", "me.jpg", "cute.jpg", "se.jpg", "ga.jpg", "gi.jpg", "moong.jpg"];
let latter_text = [`<pre>사랑하는 엄마.

아직 아무런 말도 전하지 않았는데
엄마 생각만 해도 눈시울이 뜨거워지고 눈물을 보이는 큰아들~~ ^^“
든든한 아들이 되지 못해서..
자식 된 도리로서 무엇 하나 잘해드리지 못해서..
늘 마음이 무겁고 죄송하답니다.
늘 저희를 위해 무엇이든 묵묵히 하셨어야 했던
엄마의 모습을 보면서~ 함께 하면서~ 이 시간까지 왔어요
이 시간~ 우리 엄마 칠순 생신~~
축하~ 축하 드립니다~~ ^^
앞으로도 밝게 웃으시는 날들이 많으셨으면 좋겠고
엄마 하고픈 거 다 하셨으면 좋겠어요.
항상 밝고 건강하게 지금처럼 저희 곁에 계셔주세요.

사랑합니다 우리 엄마~ 나의 어머니~~

아들 창기 올림</pre>`];

//img 배열
function a(){
	img.src = "../img/"+arr[cnt%11]; 
	// documnet.이미지객체이름. cnt%3 -> 0,1,2만 반복되도록. 
	// 존재하지 않는 방으로 넘어가지 않게 모드로 제어해줌
	cnt++;
}


function ShowLatter(counter){
    drawimg(counter)
    drawHN(counter)
    drawLatter(counter)
}

ShowLatter(counter)