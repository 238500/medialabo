// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let shops = data.results.shop;
  count=1;
  for (let s of shops) {
    console.log(count+"件目の検索結果");
    console.log("店舗名:"+s.name);
    console.log("住所:"+s.address);
    console.log("アクセス:"+s.access);
    console.log("最寄駅:"+s.station_name);
    console.log("予算:"+s.budget.name);
    console.log("キャッチコピー:"+s.catch);
    console.log("ジャンル:"+s.genre.name);
    console.log("サブジャンル:"+s.sub_genre.name);
    console.log("営業日時:"+s.open);
    count++
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let oldResult = document.getElementById('result');
  if(oldResult){
    oldResult.remove();
  }
  let result = document.createElement('div');
  result.setAttribute('id', 'result');
  document.body.insertAdjacentElement('beforeend', result);

  let count = 1;
  let shops = data.results.shop;

  for (let s of shops) {
    let div = document.createElement('div');
    div.setAttribute('class', 'shop');

    let h3 = document.createElement('h3');
    h3.textContent = count + "件目の検索結果";
    div.insertAdjacentElement('beforeend', h3);

    let img = document.createElement('img');
    img.setAttribute('width', '50');
    img.classList.add('shop-img');
    img.setAttribute('src',s.photo.pc.m);
    img.setAttribute('alt',s.name);
    div.insertAdjacentElement('beforeend', img);

    let name = document.createElement('p');
    name.textContent = "店舗名: " + s.name;
    div.insertAdjacentElement('beforeend', name);

    let address = document.createElement('p');
    address.textContent = "住所: " + s.address;
    div.insertAdjacentElement('beforeend', address);

    let access = document.createElement('p');
    access.textContent = "アクセス: " + s.access;
    div.insertAdjacentElement('beforeend', access);

    let station = document.createElement('p');
    station.textContent = "最寄駅: " + s.station_name;
    div.insertAdjacentElement('beforeend', station);

    let budget = document.createElement('p');
    budget.textContent = "予算: " + s.budget.name;
    div.insertAdjacentElement('beforeend', budget);

    let catchCopy = document.createElement('p');
    catchCopy.textContent = "キャッチコピー: " + s.catch;
    div.insertAdjacentElement('beforeend', catchCopy);

    let genre = document.createElement('p');
    genre.textContent = "ジャンル: " + s.genre.name;
    div.insertAdjacentElement('beforeend', genre);

    let subgenre = document.createElement('p');
    subgenre.textContent = "サブジャンル: " + s.sub_genre.name;
    div.insertAdjacentElement('beforeend', subgenre);

    let open = document.createElement('p');
    open.textContent = "営業日時: " + s.open;
    div.insertAdjacentElement('beforeend', open);

    result.insertAdjacentElement('beforeend', div);

    count++;
  }

  let end = document.createElement('p');
  end.textContent = "検索結果は以上です。";
  result.insertAdjacentElement('beforeend', end);
}




// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let input = document.querySelector('#gourmet');
  let keyword = input.value;
  console.log('検索キー:', keyword);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+keyword+'.json';

  axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if(typeof data === 'string'){
    data = JSON.parse(data);
  }
  
  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること