import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const { cartItems, subTotal, tax, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgsrc={i.imgsrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
              id={i.id}
              key={i.id}
            />
          ))
        ) : (
          <h1>No items yet</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({ imgsrc, name, price, qty, decrement, increment, deleteHandler, id }) => (
  <div className="cartItem">
    <img src={imgsrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>${price.toLocaleString()}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
