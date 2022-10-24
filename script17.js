// Создать страницу где будет отображен счетчик и кнопки инкремента и декремента этого счетчика.

let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function () {
    let countPlus = count.innerHTML;
    if (+countPlus <= 11111) {
        count.innerHTML++;
    }
}

document.getElementById("buttonCountMinus").onclick = function () {
    let countMinus = count.innerHTML;
    if (+countMinus >= 1) {
        count.innerHTML--;
    }
}


// Получить несколькими способами доступ к элементу с Важной информацией и всем элементам с женскими именами.

// <html>
// <body>
// <div>Важная информация</div>
// <div>Неважная информация</div>
// <ul>
//     <li data-id="woman">Jane</li>
//     <li data-id="man">Bob</li>
//     <li data-id="woman">Kate</li>
//     <li data-id="woman">Mary</li>
// </ul>
// </body>
// </html>

console.log(document.getElementsByTagName('div')[4]);
console.log(document.querySelectorAll('div')[4]);
console.log(document.getElementById('important'));


let selector = 'ul > li[data-id="woman"]';
let names = document.querySelectorAll(selector);
console.log(names)
names.forEach(name => name.style.color = 'orange');

