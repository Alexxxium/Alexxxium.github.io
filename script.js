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
    { name: "Маленькая аптечка", description: "От пулевых повреждений", img: "https://static.wikia.nocookie.net/pubg-mobile/images/3/31/%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%B0%D0%BF%D1%82%D0%B5%D1%87%D0%BA%D0%B0.jpg/revision/latest?cb=20181028095424&path-prefix=ru" },
    { name: "Большая аптечка", description: "От серьезных пулевых повреждений", img: "https://static.wikia.nocookie.net/pubg-mobile/images/7/72/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B0%D0%BF%D1%82%D0%B5%D1%87%D0%BA%D0%B0.jpg/revision/latest/scale-to-width-down/314?cb=20181028094221&path-prefix=ru" },
    { name: "Бинты", description: "От кровотечения", img: "https://static.wikia.nocookie.net/pubg/images/d/d0/360fx360f4.png/revision/latest?cb=20170416091241&path-prefix=ru" },
    { name: "Обезболевающее", description: "Вкидывать по пол банки и выбросить", img: "https://static.wikia.nocookie.net/pubg/images/8/8b/360fx360f3.png/revision/latest?cb=20170416091230&path-prefix=ru" },
    { name: "Шприц с адреналином", description: "Много весит, альтернатива 3 энергетикам", img: "https://static.wikia.nocookie.net/pubg/images/a/ab/360fx360f22.png/revision/latest?cb=20170413014429&path-prefix=ru" },
    { name: "Энергетик", description: "Выпивать залпом", img: "https://static.wikia.nocookie.net/pubg/images/5/5c/360fx360f7.png/revision/latest?cb=20170416091308&path-prefix=ru" },
]

function reload(tag, container) {
    tag.innerHTML = '';

    container.forEach(function (product) {
        let prdElem = document.createElement('div');
        let imgElem = document.createElement('img');
        let nameElem = document.createElement('h3');
        let descrElem = document.createElement('p');
        
        imgElem.src = product.img;
        nameElem.textContent = product.name;
        descrElem.textContent = product.description;

        prdElem.appendChild(imgElem);
        prdElem.appendChild(nameElem);
        prdElem.appendChild(descrElem);
        tag.appendChild(prdElem);
    })
    console.log('reloaded')
}

function reloadAll() {
    reload(document.getElementById('def'), products);
    reload(document.getElementById('sale'), saleProds);
    reload(document.getElementById('svo'), svoProds);
}

reloadAll();
