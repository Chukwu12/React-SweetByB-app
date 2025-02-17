import { Menu, MenuButton, MenuItem, MenuList, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function ShopLink() {
    

    
  return (
    <Menu  >
      <MenuButton className="hover:text-[#5EC49D] transition-all duration-150 ease"  >
        <ChakraLink as={Link} className="flex items-center gap-2" to="/shop">
          SHOP <FaAngleDown />
        </ChakraLink>
      </MenuButton>

      <MenuList display={'flex'} flexDirection={'column'}  gap={'10px'} >
        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/organic-fruits">
        CheeseCakes
        </MenuItem>

         <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/aggregate-fruits">
         Cupcakes
        </MenuItem>

           <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/pits-fruits">
          DessertBoxs
        </MenuItem>
        
        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/legumas-fruits">
         Puddings
        </MenuItem>

        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/legumas-fruits">
         Puddings Flavors
        </MenuItem>

        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/legumas-fruits">
         Mini Puddings Cups
        </MenuItem>

        <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/legumas-fruits">
         Cookies
        </MenuItem>

      </MenuList>
    </Menu>
  );
}

export default ShopLink;