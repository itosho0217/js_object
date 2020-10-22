console.log('-----関数---');
// 関数の書き方
// function 関数名(){
//   処理
// }

function myalert(){
  // alert('自作関数助けて〜');
  // アラートを表示した後にも自由に処理を追加出来る
let hantei = confirm('本当にこのボタン押してもいいですか？');

console.log(hantei);
// }

// 問題
// OKボタンが押されたら「大丈夫」
// キャンセルが押されたら『やり直し」
// とコンソールに表示しましょう

if (hantei === true){
  console.log('大丈夫');
}else{
  console.log('やり直し');
}

// 文字の変え方
// let messageSpan = document.getElementById('message');
// messageSpan.textContent = '変わりました';
// messageSpan.style.color = 'blue'
// }

// 今日の宿題
// OKボタンが押されたら「大丈夫」
// キャンセルが押されたら「やり直し」
// とid="message"のspanタグの部分に表示

let messageSpan = document.getElementById('message');
messageSpan.textContent = '大丈夫';

if (hantei === true){
	messageSpan.textContent = ('大丈夫');
}else{
    messageSpan.textContent = ('やり直し');
}
}

// console.log（ーーーーー関数ーーーー）
// 関数の書き方
// function 関数名/（引数1,引数2,){
// 	処理
// }
// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字)この場合、表示したい文字が引数に当たる
function myalert2(displayMessage){
	alert(displayMessage);
}

// 関数名：printHoge
// 処理内容：「Hoge]とコンソールに表示
function printHoge(){
	console.log('KOME');
}
printHoge();

// 問題
// 関数名：preintNum
// 引数：一つの数値
// 処理内容：引数で受け取った数値をコンソールに表示する
function printNum(num){
	console.log(num);
}

printNum(100);


// 関数名：printoKuKu
// 引数：一つの数値
// 処理内容：引数で受け取った数値の九九（１から９までかけた数）をコンソールに表示する
// 引数に１を指定したら、１の段の計算結果がコンソールに表示される様にする
// 引数に２を指定したら、2の段の計算結果がコンソールに表示される様にする

function printKuku(kuku){
	for (let i = 1; i <= 9; i++) {
    let kk = i * kuku;
    console.log(kk);
  }
}

printKuku(3);
printKuku(4);
printKuku(5);

// 関数名：printKakezan
// 引数：２つの数値
// 処理内容；引数で受け取った2つの数値の掛け算の答えをコンソールに表示する

function priintKakezan(kuku1,kuku2){
	console.log(kuku1 * kuku2);
}

priintKakezan(200,4);

// 関数名：printIsEven
// 引数：一つの数値
// 処理内容：引数で受け取った数値が偶数の場合は「偶数です」と出力し、
// 奇数の場合は「奇数です」と出力する

function rintIsEven(evod){
if (evod % 2 === 0) {
    console.log(`偶数です`);
} else {
    console.log(`奇数です`);
}
}

rintIsEven(125);
rintIsEven(2);

// 関数名：printMessage
// 引数1：一つの文字列
// 引数2：一つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する
// どらえもん，4を指定したら、以下が正解
// どらえもん
// どらえもん
// どらえもん

function printMessage(moji,num){
	for(let i =1;i <= num;i++){
		console.log(moji);
	}
}

printMessage('どらえもん',4);
printMessage('シードくん',3);

printMessage(4);

// 以下の関数を作成して、作成した関数を実行してください。
//【56】
// // 関数名：printMaxNum
// // 引数1：1つの数値
// // 引数2：1つの数値
// // 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。

function printMaxNum(num1,num2){
  if(num1 >= num2){
    console.log(num1);
}else if (num1 < num2){
      console.log(num2);
  }else {
}
    }
printMaxNum(2,2);

// 【57】
// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す

function getSquared(num){
  return (num * num)
}
let get = getSquared(2);
console.log(get);
getSquared(3);


// 【58】
// 関数名：createSelfIntroductionText
// 引数1：1つの文字列
// 処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す
// function createSelfIntroductionText(num){
//   let msg ＝'私の名前は' + num +'です'
//   console.log(msg);
// }
// var message = createSelfIntroductionText("〇〇");
// console.log(message);
// createSelfIntroductionText();

// 【59】
// 関数名：isEvenNumber
// 引数1：1つの数値
// 処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。
function isEvenNumber(num){
  if (num % 2 === 0) {
    console.log(`true`);
} else {
    console.log(`false`);
}
}
isEvenNumber();

// 【60】
// // 関数名：isSeedKun
// 引数1：任意の文字列
// 処理内容：引数で渡された文字列が「SeedKun」の場合は true、そうでない場合は false を返す。

function isSeedkun(num){
  if( i === Seedkun){
    console.log('true');
  } else {
    console.log('false');
  }
  isSeedkun(i);