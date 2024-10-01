let user_info = document.querySelector(".user_info")
let info = document.querySelector("#info")
let links = document.querySelector(".links")

if (localStorage.getItem("firstname")) {
    links.remove();
    user_info.style.display = "block";
    info.style.display = "flex";
    user_info.innerHTML = "welcome: " + localStorage.getItem("firstname")
}
// //////////////////////////////////////////////
let products = document.querySelector("#products")
let product_iteam = [
    {
        id: 1,
        imageUrl: "img/airpods.png",
        product: "airpods",
        price: "120",
        category: "accessories",
    },
    {
        id: 2,
        imageUrl: "img/back bag.jpg",
        product: "back bag",
        price: "430",
        category: "bags"
    },
    {
        id: 3,
        imageUrl: "img/cable protector_.png",
        product: "cable protecto",
        price: "120",
        category: "accessories"
    },
    {
        id: 4,
        imageUrl: "img/ceramic mug.png",
        product: "ceramic mug",
        price: "300",
        category: "mugs"
    },
    {
        id: 5,
        imageUrl: "img/fluffy air hat.jpg",
        product: "fluffy air hat",
        price: "230",
        category: "winter collection"
    },
    {
        id: 6,
        imageUrl: "img/glass mug.jpg",
        product: "glass mug",
        price: "130",
        category: "mugs"
    },
    {
        id: 7,
        imageUrl: "img/hat&scarf.jpg",
        product: "hat & scarf",
        price: "200",
        category: "winter collection"
    },
    {
        id: 8,
        imageUrl: "img/laptop sleeve.png",
        product: "laptop sleeve",
        price: "180",
        category: "accessories",
    },
    {
        id: 9,
        imageUrl: "img/shooper bdg.jpg",
        product: "shooper bag",
        price: "160",
        category: "bags"
    },
    {
        id: 10,
        imageUrl: "img/slipper_.jpg",
        product: "slipper",
        price: "210",
        category: "winter collection"
    },
    {
        id: 11,
        imageUrl: "img/thermal bottel.jpeg",
        product: "thermal mug",
        price: "180",
        category: "mugs"
    },
    {
        id: 12,
        imageUrl: "img/wallet.png",
        product: "wallet",
        price: "85",
        category: "bags"
    },
]
function drawItems() {
    let a = product_iteam.map((item) => {
        return ` 
    <div class="product-1 col-md-3 col-sm-6">
    <div class="image"><img src="${item.imageUrl}" style="width: 100%; height: 210px;"></div>
    <div class="info">
        <p>product:${item.product}</p>
        <p>price:${item.price}EGP</p>
        <p>category:${item.category}</p>
    </div>
    <div class="action">
        <button class="Add-to-cart">Add to cart</button>
        <i class="fas fa-heart fav" style="margin-top: 10%;"></i>
    </div>
</div> `
    })
    products.innerHTML = a
}
drawItems()