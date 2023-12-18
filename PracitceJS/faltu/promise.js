let div=document.getElementById("table");
async function product_api(){
    let data=await fetch("https://dummyjson.com/products");
    console.log(data);
    let final_data=await data.json();
    console.log(final_data); 
    let final=final_data.products;
    console.log(final);
    final.map((ele)=>{
        console.log(ele.id);
        div.innerHTML+=`
        <tr>
        <td>
        ${ele.id}
        </td>
        <td>
        ${ele.title}
        </td>
        <td>
        ${ele.description}
        </td>
        <td>
        ${ele.price}
        </td>
        <td>
        <img src=${ele.images[0]}>
        </td>
        <td>
        ${ele.stock}
        </td>
        </tr>
        `
        
    })
   

    
    

};

product_api();