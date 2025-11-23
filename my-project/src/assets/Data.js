// Product Images
import classicCheesecake from '../assets/images/classic-cheesecake.webp';
import BananaPuddingCheesecake from '../assets/images/Banana-Pudding-Cheesecake.webp';
import dozenCupcakes from '../assets/images/dozen-cupcakes.webp';
import fourCupcakes from '../assets/images/box-cupcakes-4.webp';
import ChocolateStrawberries from '../assets/images/dozen-chocolate-covered-strawberries.webp';
import assortedDessert from '../assets/images/assorted-dessert.webp';
import largePudding from '../assets/images/largepuddingtray.webp';
import Puddingtray from '../assets/images/puddingtrey.webp';
import PuddingJar from '../assets/images/Puddingozjar.webp';
import OGBananaJar from '../assets/images/banana-pudding1.webp';
import StrawberryShortcake from '../assets/images/Strawberry-Shortcake.webp';
import VeganBanana from '../assets/images/VeganBanana.webp';
import OreoPudding from '../assets/images/oreopudding.webp';
import MiniPudding from '../assets/images/puddingcups.webp';
import cookies from '../assets/images/cookies.webp';

// Menu Images
import menuCupcakes from '../assets/images/menu-cupcakes.webp';
import menuCheesecake from '../assets/images/menu-cheesecake.jpg';
import menuDessetbox from '../assets/images/menu-dessertbox.jpg';
import menuPudding from '../assets/images/menu-Pudding.jpg';
import menuMiniPudding from '../assets/images/menu-MiniPudding.jpg';
import menuCookies from '../assets/images/menu-cookies.jpg';


export const itemCard = [
    {
      id: 1,
      itemImage: classicCheesecake,
      itemTitle: '9 Inch Classic cheesecake ',
      name: '9 Inch Classic cheesecake',
      price: '60.00',
      description: 'Add Blueberries $5',
      category: 'Cheesecakes'
    },
    {
      id: 2,
      itemImage: BananaPuddingCheesecake,
      itemTitle: 'Banana Pudding Cheesecake',
      name: 'Banana Pudding Cheesecake',
      price: '70.00',
      description: 'Banana Pudding Flavored Cheesecake, topped with whipped cream, chessman cookies & bannas',
      category: 'Cheesecakes'
    },
    {
      id: 3,
      itemImage: dozenCupcakes,
      itemTitle: 'Dozen Cupcakes',
      name: 'Dozen Cupcakes',
      price: '45.00',
      description: 'Flavors: Vanilla, Chocolate, Strewberry, Oreo',
      category: 'Cupcakes'
    },
    {
      id: 4,
      itemImage: fourCupcakes,
      itemTitle: 'Boxes of 4 Cupcakes',
      name: 'Boxes of 4 Cupcakes',
      price: '15.00',
      description: 'Flavors: Vanilla, Chocolate, Strewberry, Oreo',
       category:'Cupcakes'
    },
    {
      id: 5,
      itemImage: ChocolateStrawberries,
      itemTitle: 'Dozen Chocolate Covered Strawberries',
      name: 'Dozen Chocolate Covered Strawberries',
      price: '40.00',
      description: '',
      category: 'Dessert Boxs'
    },
    {
      id: 6,
      itemImage: assortedDessert,
      itemTitle: 'Assorted Dessert Boxes',
      name: 'Assorted Dessert Boxes',
      price: '35.00',
      description: 'Chocolate Coverd Oreos, Chocolate Rice Krispies & Chocolate covered Pretzels',
      category: 'Dessert Boxs'
    },
    {
      id: 7,
      itemImage: largePudding,
      itemTitle: 'Large Pudding Tray',
      name: 'Large Pudding Tray',
      price: '55.00',
      description: 'Serves 12+',
      category: 'Pudding'
    },
    {
      id: 8,
      itemImage: Puddingtray,
      itemTitle: 'Half & Half Tray',
      name: 'Half & Half Tray',
      price: '65.00',
      description: '2 pudding flavors',
      category: 'Pudding'
    },

    {id: 9,
    itemImage: PuddingJar,
    itemTitle: '16oz Mason Jars',
    name: '16oz Mason Jars',
    price: '15.00',
    description: 'Request flavor',
    category: 'Pudding'
  },

  {id: 10,
  itemImage: OGBananaJar,
  itemTitle: 'The OG Banana',
  name: 'The OG Banana',
  price: '15.00 / 55.00',
  description: 'Vanilla pudding with bananas & chessman cookies',
   category:'Pudding'
},

    {id: 11,
    itemImage: StrawberryShortcake,
    itemTitle: 'Strawberry Shortcake',
    name: 'Strawberry Shortcake',
    price: '15.00 / 55.00',
    description: 'Vanilla pudding with Angel Food cake, Strawberry syrup, Strawberries & chessman cookie crumbs',
    category: 'Pudding'
    },

    {id: 12,
    itemImage: VeganBanana,
    itemTitle: 'Vegan Banana',
    name: 'Vegan Banana',
    price: '20.00 / 75.00',
    description: 'Vegan Vanilla pudding with vegan Vanilla waffers',
    category:'Pudding'
    },

    {id: 13,
    itemImage: OreoPudding,
    itemTitle: 'Oreo',
    name: 'Oreo',
    price: '15.00 / 55.00',
    description: 'Cookies & Cream pudding with crushed Oreos',
    category: 'Pudding'
    },

    {id: 14,
    itemImage: MiniPudding,
    itemTitle: '5oz Mini Cups with any Flavor Pudding',
    name: '5oz Mini Cups',
    price: '3.00 each',
    description: '60.00 Minimum Prices reflect a minimum order of 20 cups',
    category: 'Mini Pudding Cups'
    },

    {id: 15,
        itemImage: cookies,
        itemTitle: 'Dozen Cookies',
        name: 'Dozen Cookies',
        price: '35.00',
        description: 'Request Flavor',
        category: 'Cookies'
        },
        
    ];

    export const menu_list = [
      {
        menu_name: "Cupcakes",
        menu_image: menuCupcakes
      },

      {
        menu_name: "Cheesecakes",
        menu_image: menuCheesecake
      },

      {
        menu_name: "Dessert Boxs",
        menu_image: menuDessetbox
      },

      {
        menu_name: "Pudding",
        menu_image: menuPudding
      },

      {
        menu_name: "Mini Pudding Cups",
        menu_image: menuMiniPudding
      },

      {
        menu_name: "Cookies",
        menu_image: menuCookies
      },
    ]

   
      
  
  
  export default itemCard;
  