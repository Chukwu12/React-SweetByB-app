import React from "react";
import pudding1 from "../../assets/images/birthday-pudding.png";
import pudding2 from "../../assets/images/pumkin-pudding.png";
import pudding3 from "../../assets/images/red-velvet2.png";
import pudding4 from "../../assets/images/Conquito-pudding.png";
import pudding5 from "../../assets/images/banana-pudding.png";
import pudding6 from "../../assets/images/pudding-shortcake.png";
import {AnimatePresence, motion} from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const MenusData = [
    {
    id:1,
    title: "Red Velvet Cheesecake Pudding",
    link: "/",
    price: "$15.00",
    img: pudding3,
    delay: 0.3,
},
{
    id:2,
    title: "Birthday Cake Pudding",
    link: "/",
    price:  "$15.00",
    img: pudding1,
    delay: 0.6,
},
{
    id:3,
    title: "Pumpkin Spice Pudding",
    link: "/",
    price:  "$15.00",
    img: pudding2,
    delay: 0.9,
},
{
    id:4,
    title: "Conquito Cremas Pudding",
    link: "/",
    price:  "$15.00",
    img: pudding4,
    delay: 1.2,
},

{
    id:5,
    title: "Banana Pudding",
    link: "/",
    price:  "$15.00",
    img: pudding5,
    delay: 1.2,
},

{
    id:6,
    title: "Pudding Shortcake",
    link: "/",
    price:  "$15.00",
    img: pudding6,
    delay: 1.2,
}
    
]

const Menus = () => {
return(
    <section>
        <div className="container pt-12 pb-20">
            <motion.h1
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:1, delay: 0.3}}
            className="text-3xl font-bold text-left pb-10 uppercase">
                Pudding Menu
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6">
                {MenusData.map((menu) => (
                    <motion.div 
                    variants={FadeLeft(menu.delay)}
                    initial= "hidden"
                    whileInView={"visible"}
                    whileHover={{scale:1.1}}
                    className="bg-white rounded-3xl px-4 py-2 
                    shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around item-center
                    gap-3">
                     <img src={menu.img} 
                     alt=""
                     className="w-[60px] mb-4 scale-100 transform-translate-y-6" />  

                        <div className="flex justify-center items-center flex-col">
                        <h1 className="text-md font-bold text-center">{menu.title}</h1>
                        <p className="text-lg font-semibold text-secondary text-center">{menu.price}</p>
                        </div>

                     </motion.div>
                ))}
            </div>
            </div>
    </section>

) 
}

export default Menus;