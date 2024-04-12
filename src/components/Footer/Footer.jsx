/** This component is Footer section. */
import { FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTelegram } from "react-icons/fa";

// Data for links in the Footer
const FooterLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#about"
  },
  {
    title: "Contact",
    link: "/#contact"
  },
  {
    title: "Blog",
    link: "/#blog"
  }
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* company details */}
                <div className="py-8 px-4">
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase
                    sm:text-3xl'>DGShop</a>
                    <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. rerum quibusdam dolorem?</p>
                    <p className="text-gray-500 mt-4">Made by Ata Darvishnia</p>
                    <a href="https://www.linkedin.com/in/ata-darvishnia-ab83981a2" target="_blank" 
                    className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full">
                        Visit my linkedin</a>
                </div>
                {/* Footer links */}
                <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                  <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                    <ul className="space-y-3">
                      {FooterLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white 
                          duration-300">
                            {data.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Second col links */}
                  <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                    <ul className="space-y-3">
                      {FooterLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white 
                          duration-300">
                            {data.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* company address */}
                  <div className="py-8 px-4 col-span-2 sm:col-auto">
                  <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                    <div>
                      <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Saqqez, Kurdistan state</p>
                      </div>
                      <div className="flex items-center gap-3 mt-6">
                        <FaMobileAlt />
                        <p>+98 9185554664</p>
                      </div>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3 mt-6">
                        <a href="https://www.instagram.com/atadarvishnia/" target="_blank">
                          <FaInstagram className="text-3xl hover:text-primary duration-200"/>
                        </a>
                        <a href="https://t.me/lordofdarknes" target="_blank">
                          <FaTelegram className="text-3xl hover:text-brandBlue duration-200"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ata-darvishnia-ab83981a2" target="_blank">
                          <FaLinkedin className="text-3xl hover:text-brandBlue duration-200"/> 
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer