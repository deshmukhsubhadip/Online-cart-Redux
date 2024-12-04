import React from 'react';
import pic1 from "../Assets/macbook.jfif"; 
import pic2 from "../Assets/cricket.jfif";
import pic3 from "../Assets/schoolbag.jpg";
import pic4 from "../Assets/football.jpg";
import pic5 from "../Assets/shoe.jfif";
import pic6 from "../Assets/mobile.png";
import pic7 from "../Assets/watch.jpg";
import pic8 from "../Assets/shirt.jfif";
import pic9 from "../Assets/bottle.jfif";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
  const productlist = [
    {
      name: "Mac Book",
      price: 120000,
      imgsrc: pic1,
      id: "gwugdyqguqhdgqwidqwudh",
    },
    {
      name: "Cricket Bat",
      price: 4000,
      imgsrc: pic2,
      id: "nckoadnowofvwwodo1",
    },
    {
      name: "School Bag",
      price: 600,
      imgsrc: pic3,
      id: "nckoadnowofvwwodo2",
    },
    {
      name: "Football",
      price: 800,
      imgsrc: pic4,
      id: "nckoadnowofvwwodo3",
    },
    {
      name: "Shoes",
      price: 1000,
      imgsrc: pic5,
      id: "nckoadnowofvwwodo4",
    },
    {
      name: "Smart Mobile",
      price: 15000,
      imgsrc: pic6,
      id: "nckoadnowofvwwodo5",
    },
    {
      name: "Smart Watch",
      price: 2000,
      imgsrc: pic7,
      id: "nckoadnowofvwwodo6",
    },
    {
      name: "Men Shirt",
      price: 1200,
      imgsrc: pic8,
      id: "nckoadnowofvwwodo7",
    },
    {
      name: "Water Bottle",
      price: 700,
      imgsrc: pic9,
      id: "nckoadnowofvwwodo8",
    },
  ];

  const dispatch = useDispatch();

  const addtoCartHandler = (option) => {
    dispatch({ type: "addToCart", payload: option });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to cart");
  };

  return (
    <div className="home">
      {productlist.map((i) => (
        <Card
          key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addtoCartHandler}
        />
      ))}
    </div>
  );
};

const Card = ({ name, id, price, handler, imgsrc }) => {
  return (
    <div className="productcard">
      <img src={imgsrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgsrc })}>
        Add to cart
      </button>
    </div>
  );
};

export default Home;
