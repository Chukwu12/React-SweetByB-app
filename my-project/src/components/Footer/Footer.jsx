import { Box, HStack, Image, Stack, Text, } from "@chakra-ui/react";
import logo from "../../assets/images/footer-logo.png";
import { FaInstagram } from "react-icons/fa";
import { Divider } from "@chakra-ui/react";
import FooterStyle from "./FooterStyle";


function Footer() {
  return (
    <>
      <Box
        width={"100%"}
        minHeight={"100vh"}
        paddingTop={"10rem"}
        overflow={"hidden"}
        // marginBottom={'100px'}
        paddingBottom={"50px"}
      >
        {/* Blue Box */}
        <Box
          width={"95%"}
          height={"100%"}
          margin={"auto"}
          backgroundColor={"#6CB095"}
          borderRadius={['30px', '30px', '30px', '80px']}
          color={"white"}

        >
          {/*Footer Top  */}
          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={["0px", "0px", "10px", "20px", "50px"]}
          >
            <HStack
              display={["grid", "grid", "grid", "grid", "flex"]}
              gridTemplateColumns={"repeat(1, 1fr)"}

              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
              paddingLeft={["20px", "0px", "20px", "0px", "0px"]}
            >
              {/* Footer Image Logo */}
              <HStack
                justifyContent={"center"}
                justifyItems={"center"}
                alignItems={"center"}
                width={["100%", "100%", "100%", "100%", "100%"]}
                marginTop={["10px", "10px", "10px", "10px", "10px"]}
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={["80px", "100px", "120px", "140px", "160px"]}
                  height={["80px", "100px", "120px", "140px", "160px"]}
                  objectFit="contain"
                />

              </HStack>

              {/* Footer Top Items */}
              <HStack
                alignItems={"center"}
                justifyContent={"space-evenly"}
                display={["grid", "grid", "grid", "flex", "flex"]}
                gridTemplateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                ]}
                gap={["20px", "20px", "20px", "0px", "0px"]}
              >


                {/* Social Media */}
                <HStack
                  className="max-[]"
                  gap={"15px"}
                  width={"fit-content"}
                  paddingLeft={["0px", "0px", "0px", "0px", "0px"]}
                >


                  {/* Instagram */}
                  <a href="https://www.instagram.com/sweets_byb/?hl=en" target="_blank" rel="noopener noreferrer">
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      justifyItems={"center"}
                      width={["30px", "50px", "50px", "50px", "50px"]}
                      height={["30px", "50px", "50px", "50px", "50px"]}
                      backgroundColor={"white"}
                      borderRadius={"50%"}
                      transition="transform 0.3s"
                      _hover={{ transform: 'scale(1.1)' }}
                    >
                      <FaInstagram color="#5EA98B" />
                    </Stack>
                  </a>

                </HStack>
              </HStack>
            </HStack>
          </Stack>

          <Divider mt="16" width="70rem" mx="auto" />
          <FooterStyle />
        </Box>


      </Box>
    </>
  );
}

export default Footer;