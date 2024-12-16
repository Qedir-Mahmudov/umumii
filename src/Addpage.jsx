import React, { useState } from "react";
import "./App.css";

function Addpage() {
  const [mehsul, setMehsul] = useState([]);

  async function getText() {
    const x = await fetch("https://fakestoreapi.com/products");
    const y = await x.json();
    return y;
  }
  async function getProduct() {
    setMehsul(await getText());
  }

  useState(() => {
    getProduct();
  }, []);

  return (
    <>

    <div className="cardcontainer">
    {mehsul.map((z)=> (
    <div class="card" >
  <img class="card-img-top" src={z.image} alt={z.decription}/>
  <div class="card-body">
    <h5 class="card-title">{z.title}</h5>
    <p class="card-text">{z.price}</p>
    <a href="#" class="btn btn-primary" >Go somewhere</a>
  </div>
</div>
  ))}
    </div>
  




   {/*    <table>
        {mehsul.map((z) => (
          <tr>
            <th>{z.id}</th> 
            <th>{z.title}</th> 
            <th>{z.price}</th>
            <th>{z.count}</th>
            <th>{z.rate}</th>
            <th>{z.description}</th>
         <th><img src={z.image} alt={z.title} style={{ width: '100px', height: 'auto' }} /></th>
         <button id="sebet">Sebete At</button>
          </tr> 
        ))}
      </table> */}

    
    </>
  );
}

export default Addpage;
