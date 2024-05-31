const Humanname = document.querySelector("#humanname");
const letterDiv = document.querySelector("#letter");

const Image = document.createElement("img");
const LText = document.createElement("h3");

const NextButton = document.querySelector("#nextB");
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

아들 창기 올림</pre>`,
`<pre>아마득한 옛날이야기 같은 당신의 이름
평생 당신의 이름이 아닌
누군가의 무엇으로 불리던 당신은
많은 세월이 흐르고 흘러 비로써 
“강명자”라는 당신의 이름을 되찾았네요.

어린시절에는 꽃같이 어여뻤던 당신
누군가의 무엇이었을 때는
치열한 전쟁터에서도 굳건하게 
피어난 한송이 들꽃 같던 당신
지금은 무한한 자유의 새싹을 틔우고 있는 당신

한편의 영화와 같던 당신의 삶에서 
사랑과 삶의 지혜를 배웠다는 것에
온 마음을 다하여 무한한 감사를 드립니다.
이젠 또다른 영화의 주인공으로써
새로운 삶의 시작을 알리는 당신께
관객이 되어 응원의 박수를 보내드립니다. </pre>`,
`<pre>장모님, 칠순사 - 강명자 여사님!
강산은 10년에 한번씩 바뀐다고 합니다. 
지난 7번의 시간동안 누군가의 딸, 누군가의 동생, 누군가의 누나, 누군가의 아내, 누군가의 엄마, 
누군가의 장모님, 누군가의 할머니로 긴 시간을 보내셨습니다. 
많은 힘든시기가 있으셨겠지만, 특히 며느리의 숙명은 더 하셨을것 같습니다

명절, 1년에 두번씩 며느리에게 돌아오는 시험입니다. 
잘하고 있어도 더 잘하라고 하고, 혹여나 부족함이 있었다면 한없이 쏟아지는 질책과 원망들! 
그런것들을 현명하게 대하면서 가족들을 이끌어 오신것에 존경심을 보냅니다

자, 이제 누군가의 강명자가 아닌, 강명자만의 강명자로서의 시간을 보내시길 응원하겠습니다.
인생백세 시대, 늘 건강하세요.

                                                           강명자의 사위 김상훈 올림</pre>`,
`<pre>사랑하는 엄마에게~
항상 엄마에게 받기만 하는 엄마 딸 경이에요. 

요즘 들어 엄마가 자주 "공주야~"라고 부르시던게 생각나요. 
왜그러지? 했는데 애들과 비슷한 그 때의 내가 조금씩 기억나는게 아닐까.. 하는 생각도 들고.. 
그러고보니 엄마가 나를 그렇게 불렀었지.. 
고등학교 진학상담 때 친구들이 엄마 너무 예쁘고 젊으시다고 했는데 시간이 흐른만큼 울 엄마도 벌써 칠순이 되셨네.. 

엄마.. 세비,가령,지안이 잘 키워주셔서 너무 감사해요.. 
엄마 덕분에 직장도 육아스트레스 없이 잘 다녔어요. 
엄마에 대한 감사함은 글로 다 쓸 수 가 없어 한동안 편지를 쓰는게 너무 망설여졌어요~

앞으로도 지금처럼 건강하시고, 세비 가령 지안이 다 커서 할머니께 
커~~다란 선물 안겨드릴 때까지 오래오래 건강하세요~

칠순 생신 진심으로 죽하드려요~
사랑해요 엄마~~</pre>`,
`<pre>엄마, 일흔번 째 생신을 정말 축하해!

간혹 건강이 염려스러운 적도 있었지만,
그래도 지금 생각해 보면 건강을 잘 유지해 오고있다고 생각해.
앞으로 100세 생신까지 지금의 건강을 잘 유지해서 
엄마가 바라는 행복한 하루하루가 되길 소망할께

엄마가 우리에게 많은 것들을 베풀어 주셨지만, 
이제부터는 누군가의 엄마보다는 강명자라는 사람자체로 
원하는 삶을 살았으면 좋겠어.

감사하고 고마운 마음을 담아 
다시 한번 오늘의 특별한 생일을 축하합니다.</pre>`,
`<pre>할머니 칠순을 맞이하신거 진심으로 축하드려요.
엉금엉금 기어다니던 제가 무럭무럭 자라 고3이 된 것처럼 
시간이 참 빠르게 흘러갔다는 걸 새삼스럽게 다시 느끼게 되네요.
가끔 저조차 제가 이렇게 큰 것이 아직 잘 실감이 나지 않는데, 
할머니께서 느끼시기에는 어떠하실지 잘 모르겠어요.
아마, 이미 지나간 시간 중 행복한 날이거나 그 반대였던 날들도 이였을 것  같아요.

그렇지만, 앞으로의 날들은 더 건강하시고, 더 행복한 날들이 되셨으면 좋겠습니다.
할머니께서 제 인생의 많은 버팀목이 되어주셨던 것처럼 저는 할머니를 무척 존경하고 있어요.
아직 더 자랄 곳이 많은 손녀로서 할머니께 무척 많은 도움을 받아왔고 
아직 더 많은 도움이 필요할 것 같습니다.

늘 사랑해주셔서 감사합니다.
언제나 늘 사랑합니다.
다시 한 번 생신 축하드린다는 말과 함께 편지를 마치겠습니다.</pre>`,
`<pre>할머니 안녕하세요! 저 현아예요. 
고희연 너무너무 축하드려요!! 
벌써 칠순이시라니... 
아직 할머니랑 못 해 본 것들이 많은데 시간이 너무 빠르게 가는 것 같아 아쉬워요. 
그렇지만 할머니는 시간이 얼마나 흐르든 여전히 멋지시고 아름다우십니당. ㅎㅎ 

언제나 멋진 그림을 보여 주시고, 맛있는 음식을 해 주시고, 
제가 언제 놀러가든 늘 환하고 따뜻하게 웃으며 맞이해 주셔서 정말 기뻤어요. 
그리고 무엇보다 할머니께서 계신 덕분에 멋진 아빠와 이렇게 행복한 삶을 살아갈 수 있는 것 같아요. 
이렇게 생각해 보니 할머니께 감사한 것들이 정말 많네요. ㅎㅎ 
제가 이렇게 말한 것 외에도 할머니께서 주신 온기와 사랑이 너무 과분하고 따뜻해서 
평생잊지 못할 것 같아요. 정말 감사합니다. 
 
저도 얼른 커서 멋진 손녀가 되어 할머니께서 제게 베풀어 주신 사랑과 정을 수십 배로 돌려드릴게요. 
아니, 수백 배로 돌려 드릴게요!!! 
그러니 그때까지 제 곁에 오래오래 건강하게 계셔주세요.ㅎㅎ 
 
말로 표현하기 힘들 정도로 많이 많이 사랑하는 할머니, 늘 건강하고 행복하시길 기도할게요. 
칠순 다시 한번 축하드려요! 
항상 감사하고 너무너무 사랑합니다. ♡</pre>`,
`<pre>팔방미인 할머니께,
할머니 안녕하세요! 세비에요ㅎㅎ 
할머니 생신을 진심으로 축하드려요! 

저희 세 자매를 사랑으로 키워주신 할머니께 감사의 마음을 담아 이 편지를 써요. 
할머니께서 주신 모든 사랑과 가르침을 생각하면 가슴이 뭉클해져요. 
어린 시절부터 할머니의 따뜻한 품 안에서 자라며 많은 것을 배울 수 있었어요! 
할머니 덕분에 많은 사람들한테 예쁨을 받고 또 건강하고 바른 사람으로 자랄 수 있게 된 것 같아요. 
또 세비한테는 할머니가 해주시는 음식이 진짜 세상에서 제일 맛있는 것 같아요. ㅎㅎㅎ 
할머니의 사랑 덕분에 저희 세 자매는 밝고 건강하게 자랄 수 있었어요! 

할머니가 주신 사랑과 배움을 잊지 않고 앞으로도 서로를 아끼고 사랑하며 살게요! 
할머니, 할머니께서 상주로 가시면서 집의 느낌이 생각보다 많이 달라지고
또 가끔은 할머니가 안 계셔서 어색하기도 해요. 
이렇게 자주 못뵈니까 할머니가 더더 보고싶고 또 보이지 않는 곳에서 열심히 살아
할머니의 자랑스러운 손녀 김세비가 되고자합니다 ㅎㅎㅎ
이제 저희가 할머니께 받은 사랑을 갚을 차례인 것 같아요!  
할머니께서 항상 건강하시고 행복하시길 바라는 마음으로, 
또 할머니께서 자랑스러워할 수 있는 손녀들이 되도록 항상 노력하겠습니다!  
다시 한 번 생신을 진심으로 축하드리고, 할머니를 많이 사랑해요. 
항상 건강하시고 오래오래 행복하셨으면 좋겠어요! 
                                                    할머니를 너무나도 사랑하는 세비 올림</pre>`,
`<pre>할머니 안녕하세요! 
저 가령이에요. 칠순 축하드려요! 

언제부터인지 나이를 세는 버릇을 잃어서 숫자 감각 없이 살았는데, 
할머니가 벌써 칠순이시라는게 시간을 갑자기 체감하게 되네요. 

벌써 인생의 반을 훌쩍 넘기고 살아오신 할머니, 
누군가는 이 시기를 지는 시기라 하겠지만, 
오늘도 하늘엔 노을이 졌고, 
저는 세상 모든 지는 것들이 노을을 닮았으면 좋겠습니다. 

노을이 되어, 또 그리워질 때면 
한 국자 떠마실 수 있게요.</pre>`,
`<pre>사랑하는 할머니께,
안녕하세요? 저는 할머니의 막내 손녀 지안이에요! 
할머니의 생신을 진심으로 축하드려요!

할머니는 저에게 항상 사랑을 주셔서 감사해요. 
할머니께서 저에게 언제나 좋은말을 해주셔서 정말 감사합니다니다. 
할머니께서는 제가 짜증낼 때 항상 곁에 있어주셔서 감사했어요. 
그래서 제게 어려움이 있을 때마다 든든한 버팀목이 되어주셨습니다.
앞으로도 건강하고 행복한 날들이 가득하면 좋겠어요! 

할머니의 모습을 보면 저도 언젠가는 할머니처럼 따뜻한 사람이 되고 싶습니다.
할머니,  앞으로도 건강하시고 행복하시길 바랍니다.
사랑하는 할머니, 생신 축하드려요!!!

                                                  막내 손녀 지안 올림</pre>`,
`<pre>할머니, 생신을 정말 축하합니다.!! 멍멍</pre>`];

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

//버튼과 상호작용.
function nextLet(){
    counter += 1;
    ShowLatter(counter)
    if (counter>10){
        counter = 0;
        ShowLatter(counter)
    }
}

ShowLatter(counter)