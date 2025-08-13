import { Box, HStack, Image, Stack, Flex, } from "@chakra-ui/react";
import logo from "../../assets/images/footer-logo.png";
import { FaInstagram } from "react-icons/fa";
import { Divider } from "@chakra-ui/react";
import FooterStyle from "./FooterStyle";


function Footer() {
  return (
    <Box
      width="100%"
      minHeight="60vh"
      paddingTop="10rem"
      paddingBottom="50px"
      overflow="hidden"
    >
      {/* Blue Box */}
      <Box
        width="95%"
        height="100%"
        mx="auto"
        bg="#6CB095"
        borderRadius={['30px', '30px', '30px', '80px']}
        color="white"
      >
        {/* Footer Top */}
        <Stack
          align="center"
          justify="center"
          pt={["20px", "30px", "40px", "50px"]}
          spacing={8}
        >
          <Flex
            direction={["column", "column", "column", "row"]}
            justify="center"
            align="center"
            gap={8}
            width="100%"
          >
            {/* Logo */}
            <Box>
              <Image
                src={logo}
                alt="logo"
                width={["80px", "100px", "120px", "140px"]}
                height={["80px", "100px", "120px", "140px"]}
                objectFit="contain"
              />
            </Box>

            {/* Social Media Icons */}
            <HStack spacing={4} justify="center">
              <a
                href="https://www.instagram.com/sweets_byb/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  width={["40px", "50px"]}
                  height={["40px", "50px"]}
                  bg="white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.1)' }}
                >
                  <FaInstagram color="#5EA98B" />
                </Box>
              </a>
              {/* Add more social icons here if needed */}
            </HStack>
          </Flex>
        </Stack>

        {/* Divider */}
        <Divider
          mt="10"
          width={["80%", "90%", "90%", "70rem"]}
          mx="auto"
          borderColor="whiteAlpha.600"
        />

        {/* Custom footer bottom component */}
        <FooterStyle />
      </Box>
    </Box>
  );
}



export default Footer;