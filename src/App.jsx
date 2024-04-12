import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import headphones from "./assets/hero/headphone.png"
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import { useState } from 'react'

// aos is a library for animation.
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

// This is the data for red banner in home page
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphones,
  title2: "Air Solo Base",
  title3: "Winter Sale",
  title4 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, quam provident enim possimus reprehenderit.",
  bgColor: "#f42c37"
}
// This is the data for green banner in home page
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};


const App = () => {

  // This section provide prop up section  and handle click for it.
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // This section initialize aos for animation on site
  useEffect(() => {
    AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      {/* Header of the site */}
      <Navbar handleOrderPopup={handleOrderPopup}/>
      {/* Slider section */}
      <Hero handleOrderPopup={handleOrderPopup}/>
      {/* Tow row of category section */}
      <Category />
      <Category2 />
      {/* Service section */}
      <Services />
      {/* Banner1: red banner */}
      <Banner data={BannerData} />
      {/* Tow row of products */}
      <Products />
      {/* Banner2: green banner */}
      <Banner data={BannerData2} />
      {/* blog section */}
      <Blogs />
      {/* Top section on Footer */}
      <Partners />
      {/* Footer section */}
      <Footer />
      {/* Order Form */}
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App