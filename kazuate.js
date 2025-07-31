let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 1;

let button = document.querySelector('button#print');
button.addEventListener('click', hantei);

function hantei() {
  let input = document.querySelector('input#suuji');
  let yoso = Number(input.value);
  let b = document.querySelector('span#kaisu');
  b.textContent = kaisu;
  b = document.querySelector('span#answer');
  b.textContent = yoso;
  let result = document.querySelector('p#result');
  // 課題3-1: 正解判定する
  console.log(kaisu+'回目の予想'+yoso);
if (kaisu >= 4) {
    result.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています。';
  } else if (yoso === kotae) {
    result.textContent = '正解です！おめでとう！';
    kaisu = 4; // 終了フラグ
  } else {
    if (kaisu === 3) {
      result.textContent = 'まちがい。残念でした。答えは'+kotae+'でした。';
    } else if (yoso > kotae) {
      result.textContent = 'まちがい。答えはもっと小さいですよ。';
    } else {
      result.textContent = 'まちがい。答えはもっと大きいですよ。';
    }
  }
kaisu++;
}

