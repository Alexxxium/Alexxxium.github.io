const products = [
    { name: "Маска", description: "Натягиваешь на морду и ходишь", img: "https://s.a-5.ru/p/9b/48/9b483bab19b32ad8.jpg" },
    { name: "Перчатки", description: "Натягиваешь на ладошки и трогаешь", img: "https://gelopt.ru/wa-data/public/shop/products/07/30/13007/images/23883/23883.750.jpg" },
    { name: "Коронавир", description: "Вкидываешься и ждешь прихода", img: "https://static1.asna.ru/imgprx/nKSXJaiaZ0n7v6_5zAtvxLU8uR3rPqx07GthnymV3jQ/rs:fit:324:324:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2JlOC9iZTg2NjY1NDM5NzBiOWYzOThiMGE0NzlhYWNmYTBkNC8wMmZhMmMxMmFiNTgyODkzNjhhZjJlYmMyYjNlNmViMy5qcGc.jpg" },
]
const saleProds = [
    { name: "Просроченный йод", description: "Мазать или пить (лучше не пить)", img: "https://f.stolichki.ru/s/drugs/medium/23/23188.jpg" },
    { name: "Взрывоопасный гексорал", description: "Подносишь к огоньку и пшикаешь", img: "https://apteki.me/static/images/product/502/460x460_geksoral-sprej-02-40-ml.jpg" },
    { name: "Кошак целебный", description: "Мой кот", img: "https://avatars.githubusercontent.com/u/120672371?v=4" },
]
const svoProds = [
    { name: "Маленькая аптечка", description: "От пулевых повреждений", img: "https://goroogomel.by/wp-content/uploads/2021/07/8db6a5e09ebeb8103845b7ba5e762213.png" },
    { name: "Большая аптечка", description: "От серьезных пулевых повреждений", img: "https://static.wikia.nocookie.net/pubg/images/5/55/360fx360f6.png/revision/latest?cb=20170416091258&path-prefix=ru" },
    { name: "Бинты", description: "От кровотечения", img: "https://static.wikia.nocookie.net/battlegrounds_gamepedia_en/images/2/29/Bandage_Infobox.png/revision/latest?cb=20170729205850" },
    { name: "Обезболевающее", description: "Вкидывать по пол банки и выбросить", img: "https://pubgclub.ru/wp-content/uploads/2019/11/https-cdn131-picsart-com-281735006017211-png.png" },
    { name: "Шприц с адреналином", description: "Много весит, альтернатива 3 энергетикам", img: "https://pubgclub.ru/wp-content/uploads/2019/11/https-www-dictio-id-uploads-db3342-original-3x-3.jpeg" },
    { name: "Энергетик", description: "Выпивать залпом", img: "https://goroogomel.by/wp-content/uploads/2021/07/7eaec60df41f84a6de124cb8735ed5f7.png" },
]

function reload(tag, container) {
    tag.innerHTML = '';
    container.forEach(function (product) {
        tag.appendChild(getItem(product));
    })
}

function reloadAll() {
    reload(document.getElementById('def'), products);
    reload(document.getElementById('sale'), saleProds);
    reload(document.getElementById('svo'), svoProds);
}

function addProduct(tag, model, item) {
    model.push(item)
    reload(tag, model);
}
function getProduct() {
    return { name: prompt("Имя товара: "), description: prompt("Описание товара: "), img: prompt("URL картинки: ") };
}
function getItem(itemObj) {
    let prdElem = document.createElement('div');
    let imgElem = document.createElement('img');
    let nameElem = document.createElement('h3');
    let descrElem = document.createElement('p');
    imgElem.src = itemObj.img;
    nameElem.textContent = itemObj.name;
    descrElem.textContent = itemObj.description;
    prdElem.appendChild(imgElem);
    prdElem.appendChild(nameElem);
    prdElem.appendChild(descrElem);
    return prdElem;
}
function addActualProduct() {
    addProduct(document.getElementById('def'), products, getProduct());
}
function addSaleProduct() {
    addProduct(document.getElementById('sale'), saleProds, getProduct());
}
function addSVOProduct() {
    addProduct(document.getElementById('svo'), svoProds, getProduct());
}

reloadAll();
