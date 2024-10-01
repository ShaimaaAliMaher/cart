// /لو فيه user 
let user_info =document.querySelector(".user_info")
let info =document.querySelector("#info")
let links=document.querySelector(".links")

if(localStorage.getItem("firstname")){
    links.remove();
    user_info.style.display="block";
    info.style.display="flex";
    user_info.innerHTML="welcome: "+localStorage.getItem("firstname")
}
////////////////////////////////
// جزء logout
let logout=document.querySelector("#log-out")
logout.addEventListener("click",function(){
    localStorage.clear()
  

    setTimeout(()=>{
        window.location ="register.html";
    },1500)
})
// //////////////////////////////////////////////
// ارسم المنتجات
let products =document.querySelector("#products")
let cart=document.querySelector(".view div")
let badge=document.querySelector(".badge")

let product_iteam =[
    {
        id:1,
        imageUrl:"img/airpods.png",
        product:"airpods",
        price:"120",
        category:"accessories",
        qty:1
    },
    {
        id:2,
        imageUrl:"img/back bag.jpg",
        product:"back bag",
        price:"430",
        category:"bags",
        qty:1
    },
    {
        id:3,
        imageUrl:"img/cable protector_.png",
        product:"cable protecto",
        price:"120",
        category:"accessories",
        qty:1
    },
    {
        id:4,
        imageUrl:"img/ceramic mug.png",
        product:"ceramic mug",
        price:"300",
        category:"mugs",
        qty:1
    },
    {
        id:5,
        imageUrl:"img/fluffy air hat.jpg",
        product:"fluffy air hat",
        price:"230",
        category:"winter collection",
        qty:1
    },
    {
        id:6,
        imageUrl:"img/glass mug.jpg",
        product:"glass mug",
        price:"130",
        category:"mugs",
        qty:1
    },
    {
        id:7,
        imageUrl:"img/hat&scarf.jpg",
        product:"hat & scarf",
        price:"200",
        category:"winter collection",
        qty:1
    },
    {
        id:8,
        imageUrl:"img/laptop sleeve.png",
        product:"laptop sleeve",
        price:"180",
        category:"accessories",
        qty:1
    },
    {
        id:9,
        imageUrl:"img/shooper bdg.jpg",
        product:"shooper bag",
        price:"160",
        category:"bags",
        qty:1
    },
    {
        id:10,
        imageUrl:"img/slipper_.jpg",
        product:"slipper",
        price:"210",
        category:"winter collection",
        qty:1
    },
    {
        id:11,
        imageUrl:"img/thermal bottel.jpeg",
        product:"thermal mug",
        price:"180",
        category:"mugs",
        qty:1
    },
    {
        id:12,
        imageUrl:"img/wallet.png",
        product:"wallet",
        price:"85",
        category:"bags",
        qty:1
    },
]
localStorage.setItem("myProducts",JSON.stringify(product_iteam))


let drawItems;
 (drawItems = function(product_iteam=[]){
    let a= product_iteam.map((item)=>{
        console.log("eee",item)
        return `<div class="product-1 ">
    <div class="image"><img src="${item.imageUrl}" style="width: 100%; height: 210px;"></div>
    <div class="info">
        <p>product:${item.product}</p>
        <p>price:${item.price}EGP</p>
        <p>category:${item.category}</p>
    </div>
    <div class="action">
        <button class="Add-to-cart" onclick="addedItem(${item.id})">Add to cart</button>
        <button class=" btn btn-danger"  onclick="removeItems(${item.id})">Remove from cart</button>
        <i class="fas fa-heart fav" style="margin-top: 10%; color:${item.liked===true ?"red" : ""}" onclick="addToFav(${item.id})"></i>
    </div>
</div>`})
    products.innerHTML=a.join("") 
})(JSON.parse(localStorage.getItem("myProducts")))

// //////////////////////////////////////////

// // اما اضغط على منتج
// عشان يحافظ على اللي اختارته لو عملت refresh
let addItem= localStorage.getItem("itemInCart")? JSON.parse(localStorage.getItem("itemInCart")) :[]
if(addItem){
    addItem.map(item=> {cart.innerHTML +=`
        <div class="d-flex cart-inner">
        <img src="${item.imageUrl}">
        <div>
        <p>${item.product} <button class="btn" onclick="add()"><i class="fas fa-plus fa-rotate-180" style="color: #1f4d9e;"></i></button>${item.qty}
        <button class="btn" onclick="minus()"><i class="fas fa-minus fa-rotate-180" style="color: #1f4d9e;"></i></button></p>
        <p>${item.price} EGP</p></div>
        </div>`})
    badge.innerHTML=addItem.length;
 
}
let allItems=[]
function addedItem(id){
    if(localStorage.getItem("firstname")){ 
        // console.log("add to cart")
        let chossenItem =product_iteam.find((item)=>item.id===id);
        let ite=allItems.find((i)=> i.id ===chossenItem.id )
        if(ite){
            chossenItem.qty +=1;
        }
        else{
    allItems.push(chossenItem)
    }
    cart.innerHTML=""
    allItems.forEach((chossenItem)=>{
    cart.innerHTML +=`<p>${chossenItem.product} ${chossenItem.qty}</p>`
    })
    // console.log(chossenItem.product) 
    // console.log(cart)
    addItem=[...addItem , chossenItem]
    let uniqeproduct=uniqeItem(addItem,"id")
    localStorage.setItem("itemInCart",JSON.stringify(uniqeproduct))

    let cartItem=document.querySelectorAll(".view div p")
    // console.log(cartItem)
    badge.innerHTML=cartItem.length;
        }
        else {
            window.location ="register.html"
        } 
}  

// // فتح وقفل الcart
let shoppingCartIcon = document.querySelector(".dropdown-toggle")
let cartsProducts = document.querySelector(".view")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cart.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block"
         }
     } 
}
// //////////////////////////////////////
// search
let input=document.getElementById("search")
input.addEventListener("keyup",function(e){
        search(e.target.value , JSON.parse(localStorage.getItem("myProducts")))

    if(e.target.value.trim()==="")
    {drawItems(JSON.parse(localStorage.getItem("myProducts")))}
})

function search(product ,myArray){
    // for( var i=0 ; i<myArray.length ; i++)
    // {if(myArray[i].product === title)
    // {console.log(myArray[i])
    // }}
    let arr =myArray.filter((item)=> item.product.indexOf(product)!== -1)
    // console.log(arr)
    drawItems(arr)
}
// search("back bag" ,JSON.parse(localStorage.getItem("myProducts")))

// ////////////add to fav///////////////////
 let favitem=localStorage.getItem("fav")? JSON.parse(localStorage.getItem("fav")) :[] ;
function addToFav(id){
    if(localStorage.getItem("firstname")){ 
        let chossenItem =product_iteam.find((item)=>item.id===id);
        chossenItem.liked=true;
        favitem=[...favitem ,chossenItem]
        let uniqeproduct=uniqeItem(favitem,"id");
    localStorage.setItem("fav",JSON.stringify(uniqeproduct))
    product_iteam.map((item)=>{
        if(item.id===chossenItem.id)
        item.liked=true;
    })
        localStorage.setItem("myProducts",JSON.stringify(product_iteam))
    drawItems(product_iteam);
                }
    else {
            window.location ="register.html"
        } 
}  
// ///////////عشان يضيف المكرر مرة واحدة////////////////
function uniqeItem(arr , id){
    let uniqe= arr.map((item)=> item[id])
    .map((item , index , finallarr)=> finallarr.indexOf(item)===index && index)
    // محتاجة اشيل الfalse من ال arr
    .filter((item)=>arr[item])
    // رجعلي الarr الاصلية
    .map((item)=>arr[item])
    return uniqe;
}
// // /////////////////////////////////////////



