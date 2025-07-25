//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function show() {
    let oldad = document.getElementById('result-addr');
    if (oldad) {
        oldad.remove();
    }

    let olddp = document.getElementById('result-dept');
    if (olddp) {
        olddp.remove();
    }
    let p = document.createElement('p');
    p.textContent = campus.address;
    p.id = 'result-addr';
    let h2addr = document.querySelector('h2#addr');
    h2addr.insertAdjacentElement('afterend', p);

    let ul = document.createElement('ul');
    ul.id = 'result-dept';
    for (let g of gakka) {
        let li = document.createElement('li');
        li.textContent = g.name;
        ul.insertAdjacentElement('beforeend', li);
    }
    let h2dept = document.querySelector('h2#dept');
    h2dept.insertAdjacentElement('afterend', ul);
}

let btn = document.querySelector('button#show');
btn.addEventListener('click', show);