const product = [
    {
        id: 0,
        image: "img_ropa/arriba/1.png",
        title: 'Camiseta',
        price: 500,
    },
    {
        id: 1,
        image: "img_ropa/arriba/3.jpg",
        title: 'Sudadera',
        price: 2500,
    },
    {
        id: 2,
        image: "img_ropa/arriba/4.jpg",
        title: 'Pantalon 1',
        price: 2500,
    },
    {
        id: 3,
        image: "img_ropa/abajo/1.jpg",
        title: 'Abrigo',
        price: 3000,
    },
    {
        id: 4,
        image: "img_ropa/abajo/2.jpg",
        title: 'Pantalon 3',
        price: 3000,
    },
    {
        id: 5,
        image: "img_ropa/abajo/3.jpg",
        title: 'Abrigo',
        price: 3000,
    },
    {
        id: 6,
        image: "img_ropa/zapatos/1.jpg",
        title: 'zapatos 1',
        price: 7000,
    },
    {
        id: 7,
        image: "img_ropa/zapatos/2.jpg",
        title: 'zapatos 2',
        price: 7000,
    },
    {
        id: 8,
        image: "img_ropa/zapatos/3.jpg",
        title: 'zapatos 3',
        price: 7000,
    },
    {
        id: 9,
        image: "img_ropa/zapatos/4.jpg",
        title: 'zapatos 4',
        price: 7000,
    },
    {
        id: 10,
        image: "img_ropa/accesorios/1.jpg",
        title: 'Gorra',
        price: 1000,
    },
    {
        id: 11,
        image: "img_ropa/accesorios/2.jpg",
        title: 'Gafas',
        price: 1200,
    },
    {
        id: 12,
        image: "img_ropa/accesorios/3.jpg",
        title: 'Gorro',
        price: 800,
    },
    
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img src="${image}" class="images">
            </div>
            <div class="bottom">
                <p>${title}</p>
               <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Agregar</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "(Vacio..)";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";

            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src= ${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}