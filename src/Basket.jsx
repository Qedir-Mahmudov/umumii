



import React from "react";
import { useLocation } from "react-router-dom";

function Basket() {
  const location = useLocation();
  const { basket } = location.state || { basket: [] };


  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);


  const removeFromBasket = (productId) => {
    const updatedBasket = basket.filter(item => item.id !== productId);
   
   
    console.log(updatedBasket);
  };

  return (
    <>
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <>
          <table border="1" style={{ marginBottom: "20px", width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => removeFromBasket(item.id)}
                      style={{ backgroundColor: "#FF6347", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

          <button
            onClick={() => alert("Proceeding to checkout")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </>
  );
}

export default Basket;
