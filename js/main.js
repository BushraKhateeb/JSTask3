var regesteration= document.querySelector("form");
var productName= document.querySelector("#product");
var productprice= document.querySelector("#price");
var productdescription= document.querySelector("#description");
var users=[];
regesteration.onsubmit=function(e){
    e.preventDefault(); 
    var user ={
    name:productName.value,
    price:productprice.value,
    description:productdescription.value,
    };
users.push(user);
console.log(users);
    showProduct();
}
function showProduct(){
    var data='';
    for(var i=0; i<users.length;i++){
       data+=`
       <tr>
       <td>${users[i].name}</td>
       <td>${users[i].price}</td>
       <td>${users[i].description}</td>
       </tr>`
    }
    document.querySelector("tbody").innerHTML=data;
}