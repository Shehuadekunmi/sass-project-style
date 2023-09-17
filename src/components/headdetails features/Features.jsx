import React from 'react'
import style from '../../components/headdetails features/features.module.scss'
import bitm from '../../assets/Bitma.png'
import bitm1 from '../../assets/Bitma1.png'
import bitm2 from '../../assets/Bitma2.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import whi from '../../assets/whi.png'


const Features = () => {
    return (
        <div>
            <section className={`${style.one} d-lg-flex justify-content-around`}>
                <div className={`${style.text} px-1 my-4`}>
                    <h1 className='my-3'>FEATURES</h1>
                    <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort
                        for those who like to enjoy endless listening. It includes intuitive controls designed for any situation.
                        Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features
                        ensure that you’ll never miss a beat.</p>

                    <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your
                        audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with
                        your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and
                        17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology,
                        and a modern design aesthetic.</p>
                </div>

                <div className={`${style.box} d-md-flex justify-content-around d-lg-block  `}>
                    <h1 className='my-4'>IN THE BOX</h1>
                    <div>
                        <p><span>1X</span> Headphone Unit</p>
                        <p><span>2X</span> Replacement Earcups</p>
                        <p><span>1X</span> User Manual</p>
                        <p><span>1X</span>3.5mm 5m Audio Cable</p>
                        <p><span>1X</span>Travel Bag</p> </div>
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

export default Features