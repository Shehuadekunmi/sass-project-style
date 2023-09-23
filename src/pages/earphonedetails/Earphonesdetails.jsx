// import React, { useState } from 'react'
// import style from '../earphonedetails/earphonedetails.module.scss'
// import Header from '../../layout/header/Header'
// import head from '../../assets/earp.png'
// import { Link } from 'react-router-dom'
// import Features3 from '../../components/earphonedetails features/Features'
// import Secone from '../../components/secone/Secone'
// import Sectwo from '../../components/sectwo/Sectwo'
// import Footer from '../../layout/footer/Footer'

// const Earphonesdetails = () => {
//     const [count, setCount] = useState(0)
//     const [selectedItem, setSelecedtItem] = useState([]);
//     const [showCart, setShowCart] = useState(false);


//     const handleAddToCart = (e) => {
//         setCount(count + 1);

//         const image = e.target.parentNode.querySelector('img');
//         const span = e.target.parentNode.querySelector('span');
//         const s_image = image.cloneNode(false);
//         span.appendChild(s_image);
//         span.classList.add('active');
        
//         setTimeout(() => {
//             span.classList.remove('active');
//             span.removeChild(s_image)
//         }, 4000)

//         const parent = e.target.parentNode;
//         const clone = parent.cloneNode(true);
//         clone.lastElementChild.innerText = 'Buy-now';
//         setSelecedtItem([...selectedItem, clone])

//     };


//     const toggleCart = () => {
//         setShowCart(!showCart)
//     };

//   return (
//     <div  className={`${style.det} container`}>
// <h1 onClick={toggleCart} data-count={count}> CART </h1>
// <Header/>
//         <Link>Go Back Home</Link>
//             <section className={`${style.one2}  text-center d-md-flex  my-5`} >
               
//                 <div className={`${style.img}`}>
//                     <img src={selectedItem.head} alt="" />
//                 </div>
                

//                 <div className={`${style.text} text-justify my-4`}>
//                     <h6 className={style.pp} >NEW PRODUCT</h6>
//                     <h2>YX1 WIRELESS EARPHONES</h2>
//                     <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
//                          Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
//                     <h4>$ 599</h4>
//                     <div className={`${style.button} my-lg-5`}>
//                         <button className={`${style.but}  fw-bold`}> -  1  +</button>
//                         <button className={`${style.but2} mx-2`} onClick={handleAddToCart}>ADD TO CART</button>

//                     </div>
//                 </div>
//             </section>

//                 <Features3/>

//                 <Secone/>
//                 <Sectwo/>
//                 <Footer/>
//     </div>
//   )
// }

// export default Earphonesdetails







import React, { useState } from 'react';
import style from '../earphonedetails/earphonedetails.module.scss';
import Header from '../../layout/header/Header';
import head from '../../assets/earp.png';
import { Link } from 'react-router-dom';
import Features3 from '../../components/earphonedetails features/Features';
import Secone from '../../components/secone/Secone';
import Sectwo from '../../components/sectwo/Sectwo';
import Footer from '../../layout/footer/Footer';
import '../../style/cart.css'

const Earphonesdetails = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (e) => {
    const item = {
      id: Date.now(),
      name: 'YX1 WIRELESS EARPHONES',
      price: 599,
      quantity,
      img: './Bitman.png'
    };

    setCart([...cart, item]);
    setCount(count + quantity);
    setQuantity(1);
    
    
    const parent = e.target.closest('.product'); // Assuming the product has a class name 'product'
    const image = parent.querySelector('img');
    
        image.classList.add('active');
        
        setTimeout(() => {
            image.classList.remove('active');
           
        }, 4000)

       
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const gettotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  };

  return (
    <div className={`${style.det} container`}>
      <h1 onClick={toggleCart} data-count={count}>
        {' '}
        CART{' '}
      </h1>
      {showCart && (
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <h2>Total: ${gettotal()} </h2>
              <div className="product">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
      <Header />
      <Link to="/">Go Back Home</Link>
      <section className={`${style.one2} text-center d-md-flex my-5`}>
        <div className={`${style.img}`}>
          <img src={head} alt="" />
        </div>

        <div className={`${style.text} text-justify my-4`}>
          <h6 className={style.pp}>NEW PRODUCT</h6>
          <h2>YX1 WIRELESS EARPHONES</h2>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <h4>$ 599</h4>
          <div className={`${style.button} my-lg-5`}>
            <button
              className={`${style.but} fw-bold`}
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className={`${style.but} fw-bold`}
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
            <button className={`${style.but2} mx-2`} onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      <Features3 />

      <Secone />
      <Sectwo />
      <Footer />
      
     
    </div>
  );
};

export default Earphonesdetails;
