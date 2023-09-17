import React from 'react'
import style from '../../components/speakerdetails features/feature.module.scss'
import bitm from '../../assets/fea9.png'
import bitm1 from '../../assets/fea8.png'
import bitm2 from '../../assets/fea7.png'
import img1 from '../../assets/spea.png'
import img2 from '../../assets/whi.png'
import whi from '../../assets/img1.png'
const Feature = () => {
    return (
        <div>

            <section className={`${style.one} d-lg-flex justify-content-around`}>
                <div className={`${style.text} px-1 my-4`}>
                    <h1 className='my-3'>FEATURES</h1>
                    <p>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B,
                        stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching.
                        Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). </p>

                    <p>Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter.
                        Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
                        You’ll be able to enjoy equal sound quality whether in a large room or small den.
                        Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
                </div>

                <div className={`${style.box} d-md-flex justify-content-around d-lg-block  `}>
                    <h1 className='my-4'>IN THE BOX</h1>
                    <div>
                        <p><span>2X</span> Speaker Unit</p>
                        <p><span>2X</span> Speaker Cloth Panel</p>
                        <p><span>1X</span> User Manual</p>
                        <p><span>1X</span>3.5mm 5m Audio Cable</p>
                        <p><span>1X</span>10m Optical Cable</p>
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

export default Feature