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

// ///////////////////////////////////////////////////////////////
let products =document.querySelector("#products")
// ارسم اللي اختارته
function drowCartProductUi( allproduct=[]){
    let product=JSON.parse(localStorage.getItem("itemInCart")) || allproduct ;

    let a= product.map((item)=>{return `
    <div class="product">
    <div style="width: 30%">
    <img src="${item.imageUrl}"  style="width: 100%; height: 97%; border-radius:5px;"> </div>
     <div class="info-product">
         <p>product:${item.product}</p>
         <p>price:${item.price}EGP</p>
         <p>Quantity:${item.qty}
     <div class="action">
         <button class="remove-from-cart" onclick="removeItemFromCart(${item.id})">Remove from cart</button>
     </div>
     </div> 
     
 </div>`
})
    products.innerHTML=a.join("") 
}
drowCartProductUi()

function removeItemFromCart(id){
    let itemInCart=localStorage.getItem("itemInCart")
    if(itemInCart){
        let items = JSON.parse(itemInCart)
        let filterdItem= items.filter((item)=> item.id !==id)
        localStorage.setItem("itemInCart",JSON.stringify(filterdItem))
        drowCartProductUi(filterdItem)
    }
}
let product_iteam= JSON.parse(localStorage.getItem("myProducts"))
function add(id){
   let item =product_iteam.find((item)=>item.id===id);
//    chossenItem.qty +=1;
   console.log(item.qty)

}
// //////////////////////////

// ////////////////////////////////////////////////////////////
let favourite =document.querySelector("#favourite")
// ارسم اللي اختارته
function drowFavProductUi( allproduct=[]){
    let product=JSON.parse(localStorage.getItem("fav")) || allproduct ;
    let a= product.map((item)=>{return `
    <div class="product-2 swiper-slide swiper-slide-next" >
    <div class="image"><img src="${item.imageUrl}" style="width: 100%; height: 190px;"></div>
    <div class="info">
        <p>product:${item.product}</p>
        <p>category:${item.category}</p>
    </div>
    <div class="action">
        <i class="fas fa-heart fav" style=" color:${item.liked===true ?"red" : ""}" onclick="addToFav(${item.id})"></i>
    </div>
</div>`
})
    favourite.innerHTML=a.join("") 
}
drowFavProductUi()