const product=fetch('https://fakestoreapi.com/products/')
           .then(res=>res.json())
             .then(product=>{
              console.log(product);
    const display=product.map(item=>{             
    return`
    <div class="card"{key=item.id}>
    <h3 class="card-title">${item?.title}</h3>
    <img class="image" src="${item?.image}"> 
     <h4 class="card-price">Price:${item?.price}</h4>
     <p class="card-description">${item?.description}</p>
    </div>
      `;}).join("");
       document.getElementById("display").innerHTML=display;
       })
  
    
       