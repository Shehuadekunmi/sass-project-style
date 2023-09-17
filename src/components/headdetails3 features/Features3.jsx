import React from 'react'
import style from '../../components/headdetails3 features/features3.module.scss'
import bitm from '../../assets/fea4.png'
import bitm1 from '../../assets/fea5.png'
import bitm2 from '../../assets/fea6.png'
import img1 from '../../assets/head.png'
import img2 from '../../assets/img2.png'
import whi from '../../assets/img1.png'

const Features3 = () => {
  return (
    <div>

<section className={`${style.one} d-lg-flex justify-content-around`}>
                <div className={`${style.text} px-1 my-4`}>
                    <h1 className='my-3'>FEATURES</h1>
                    <p>These headphones have been created from durable, high-quality materials tough enough to take anywhere. 
                        Its compact folding design fuses comfort and minimalist style making it perfect for travel.
                    Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</p>

                    <p>More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, 
                        hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks
                         to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, 
                        you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
                </div>

                <div className={`${style.box} d-md-flex justify-content-around d-lg-block  `}>
                    <h1 className='my-4'>IN THE BOX</h1>
                    <div>
                        <p><span>1X</span> Headphone Unit</p>
                        <p><span>2X</span> Replacement Earcups</p>
                        <p><span>1X</span> User Manual</p>
                        <p><span>1X</span>3.5mm 5m Audio Cable</p>
                    </div>
                </div>
            </section>

            <section className={`${style.img} my-5 d-md-flex justify-content-around gap-3`}>
                <div className={`${style.b} `}>
                    <img src={bitm2} alt="" className={`${style.bit} my-3 my-md-0`} />
                    <img src={bitm1} alt="" className={`${style.bit} my-3`} />
                </div>
                <img src={bitm} alt="" className={`${style.bi} `} />
            </section>


            <h1 className='text-center'>YOU MAY ALSO LIKE</h1>
            <section className={`${style.like} text-center d-md-flex justify-content-center gap-md-4`}>
                <div className={`${style.you} my-4`}>

                    <div className={`${style.ade}`}> <img src={img1} alt="" /></div>
                    <h2>XX99 MARK I</h2>
                    <button>SEE PRODUCT</button>

                </div>


                <div className={`${style.you} my-4`}>
                    <div className={`${style.ade}`}> <img src={whi} alt="" /></div>
                    <h2>ZX9 SPEAKER</h2>
                    <button>SEE PRODUCT</button>
                </div>

                <div className={`${style.you} my-4`}>
                    <div className={`${style.ade}`}> <img src={img2} alt="" /></div>
                    <h2>XX59</h2>
                    <button>SEE PRODUCT</button>
                </div>
            </section>


    </div>
  )
}

export default Features3