import React from 'react'
import './Home.css'
import Product from './Product'
import Banner from './assets/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'


const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={Banner} alt="" />

                <div className="home__row">
                    <Product id="123123" title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses - Paperback' price={29.99} image='TheLeanStartup.jpg' rating={5} />
                    <Product id="12343" title="Ventray MK37 Stand Mixer - Planetary Motion – provides better coverage than traditional dual whisk stand mixers
4.5 Quart stainless steel mixing bowl" price={169.99} image='standmixer-red-amazonimage1_rke8KN5PW.jpg' rating={4} />
                </div>

                <div className="home__row">
                    <Product id="894" title="ZOLO Google Assistant Built-in Chromecast Smart Home Alarm Clock with Wi-Fi" price={89.99} image='anker-zolo.jpg' rating={2} />
                    <Product id="786898" title="JMKMGL 80ft WiFi LED Strip Lights, Music Sync Color Changing Lights Works with Alexa Google Assistant" price={56.99} image='81MGFNF8RSL._AC_SX679_.jpg' rating={5} />
                    <Product id="4564" title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking" price={189.99} image='71jiGaztijL._AC_UY218_.jpg' rating={4} />
                </div>

                <div className="home__row">
                    <Product id="8973" title="Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition" price={1200.99} image='61XJCCT1mIL._AC_UY218_.jpg' rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
