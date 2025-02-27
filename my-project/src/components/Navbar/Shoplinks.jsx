import { Menu, MenuButton, MenuItem, MenuList, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function ShopLink() {
    

    
  return (
    <Menu>
  <MenuButton className="hover:text-[#5EC49D] transition-all duration-150 ease">
    <ChakraLink as={Link} className="flex items-center gap-2" to="/shop">
      SHOP <FaAngleDown />
    </ChakraLink>
  </MenuButton>

  <MenuList display={'flex'} flexDirection={'column'} gap={'10px'}>
    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/CheeseCakes">
      CheeseCakes
    </MenuItem>

    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/Cupcakes">
      Cupcakes
    </MenuItem>

    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/DessertBoxs">
      DessertBoxs
    </MenuItem>

    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/Puddings">
      Puddings
    </MenuItem>

    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/Puddings-Flavors">
      Puddings Flavors
    </MenuItem>

    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/Mini-Puddings-Cups">
      Mini Puddings Cups
    </MenuItem>

    <MenuItem className="hover:text-[#5EC49D] transition-all duration-150 ease" as={Link} to="/Cookies">
      Cookies
    </MenuItem>
  </MenuList>
</Menu>
  );
}

export default ShopLink;