import React from 'react'
import style from '../speakerdetails2 features/feature2.module.scss'
import bitm from '../../assets/fea12.png'
import bitm1 from '../../assets/fea11.png'
import bitm2 from '../../assets/fea10.png'
import img1 from '../../assets/speaker.png'
import img2 from '../../assets/whi.png'
import whi from '../../assets/img1.png'

const Feature2 = () => {
  return (
    <div>
         <section className={`${style.one} d-lg-flex justify-content-around`}>
                <div className={`${style.text} px-1 my-4`}>
                    <h1 className='my-3'>FEATURES</h1>
                    <p>Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and
                         excellent high frequencies that lower tiered bookshelf speakers cannot provide.
                          The woofers are made from aluminum that produces a unique and clear sound. 
                        XLR inputs allow you to connect to a mixer for more advanced usage. </p>

                    <p>The ZX7 speaker is the perfect blend of stylish design and high performance.
                         It houses an encased MDF wooden enclosure which minimises acoustic resonance.
                          Dual connectivity allows pairing through bluetooth or traditional optical and RCA input.
                           Switch input sources and control volume at your finger tips with the included wireless remote. 
                        This versatile speaker is equipped to deliver an authentic listening experience.</p>
                </div>

                <div className={`${style.box} d-md-flex justify-content-around d-lg-block  `}>
                    <h1 className='my-4'>IN THE BOX</h1>
                    <div>
                        <p><span>2X</span> Speaker Unit</p>
                        <p><span>2X</span> Speaker Cloth Panel</p>
                        <p><span>1X</span> User Manual</p>
                        <p><span>1X</span>3.5mm 5m Audio Cable</p>
                        <p><span>1X</span>7.5m Optical Cable</p>
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

export default Feature2