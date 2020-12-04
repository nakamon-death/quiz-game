const quiz= [
    {
        question: '銀魂紅桜篇にて、銀さんと死闘を繰り広げた相手は？',
        answers : [
            '川上万斉',                
            '土方十四郎',                
            '岡田似蔵',               
            '高杉晋助'
             ],
        correct: '岡田似蔵'
    },
    {
        question: '小島秀夫監督が監修したことで有名なゲームシリーズは？',
        answers : [
            'メタルギア',                
            'ドラゴンクエスト',                
            'スーパーマリオブラザーズ',               
            'ゼルダの伝説'
             ],
        correct: 'メタルギア'
    },
    {
        question: 'チョコボ頭で知られるファイナルファンタジーの主人公の名前は？',
        answers : [
            'ティナ・ブランフォード',                
            'スコール・レオンハート',                
            'クラウド・ストライフ',               
            'カイン・ハイウインド'
             ],
        correct: 'クラウド・ストライフ'
    },
    {
        question: '家庭教師ヒットマンrebornにおいて、主人公沢田綱吉の家庭教師をしている赤ん坊は？',
        answers : [
            '白蘭',                
            'コロネロ',                
            'リボーン',               
            'バミューダ'
             ],
        correct: 'リボーン'
    },
    {
        question: '賭博黙示録カイジ絶望の城編において、カイジが利根川と勝負をした。さて、何のゲームで勝負をした？',
        answers : [
            'ブラックジャック',                
            'ポーカー',                
            'Eカード',               
            'チンチロ'
             ],
        correct: 'Eカード'
    },
    
];

const quizLength = quiz.length;
let quizIndex = 0;

let score= 0;



const $button = document.getElementsByTagName('button');
const buttonLength= $button.length;   //選択肢のボタン数を取得


//クイズの問題を出題
const setupQuiz = ()=> {
    let buttonIndex= 0;
    //クイズ
    document.getElementById('js-question').textContent= quiz[quizIndex].question;

    //選択肢
    while(buttonIndex< buttonLength){
        
        $button[buttonIndex].textContent= quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

//クイズの４択のいずれかのボタンを押したときの処理
const clickHandler= (e) =>{
    if(quiz[quizIndex].correct=== e.target.textContent){
        window.alert("正解！");
        score++ ;
    }else{
        window.alert("不正解...");
    }
    quizIndex++;

    if(quizIndex< quizLength){
        //問題数がまだあるとき
        setupQuiz();
    }else{
        //問題数がないとき,結果を表示
        window.alert('終了、あなたの正解数は' + score + '/' + quizLength + 'です');
    }
};

setupQuiz();



//ボタンをクリックしたら正誤判定
let handlerIndex= 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}







