import { Box, Button, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";


function ContactSection() {
  return (
    <Box width={'100%'} height={'100%'} marginTop={'5rem'}>
    <VStack width={['90%', '90%', '90%', '50%']} height={'100%'} margin={'auto'}>
      <Text fontSize={['25px', '30px', '30px', '40px']} fontWeight={'600'} letterSpacing={'2px'}>
        Contact
      </Text>

      <Text letterSpacing={'2px'}>Get in Touch with Us:</Text>

      {/* Form */}
      <VStack
        width={'100%'}
        paddingBottom={'2rem'}
        marginTop={'4rem'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'2rem'}
        backgroundColor={'#FFF7F3'}
        paddingTop={'2rem'}
        borderRadius={'50px'}
      >

        {/* Name */}
        <VStack 
        width={['90%' , '90%' , '90%' , '70%']}
        
        alignItems={'flex-start'} gap={'1rem'}>
          <Text fontWeight={'600'} fontSize={'18px'}>
            Name
          </Text>
          <Input
            placeholder="Name"
            variant={'filled'}
            bg={'#FEEDE5'}
            borderRadius={'50px'}
            width={'100%'}
            outline={'none'}
            _hover={{ bg: '#FEEDE5' }}
          />
        </VStack>


        {/* Email */}
        <VStack 
        width={['90%' , '90%' , '90%' , '70%']}
        
        alignItems={'flex-start'} gap={'1rem'}>
          <Text fontWeight={'600'} fontSize={'18px'}>
            Email
          </Text>
          <Input
            placeholder="Enter Email"
            variant={'filled'}
            bg={'#FEEDE5'}
            borderRadius={'50px'}
            width={'100%'}
            outline={'none'}
            _hover={{ bg: '#FEEDE5' }}
          />
        </VStack>

        {/* Phone */}
        <VStack 
        width={['90%' , '90%' , '90%' , '70%']}
        
        alignItems={'flex-start'} gap={'1rem'}>
          <Text fontWeight={'600'} fontSize={'18px'}>
            Phone
          </Text>
          <Input
            placeholder="Phone"
            variant={'filled'}
            bg={'#FEEDE5'}
            borderRadius={'50px'}
            width={'100%'}
            outline={'none'}
            _hover={{ bg: '#FEEDE5' }}
          />
        </VStack>

        {/* Message */}
        <VStack 
        width={['90%' , '90%' , '90%' , '70%']}
        
        alignItems={'flex-start'} gap={'1rem'}>
          <Text fontWeight={'600'} fontSize={'18px'}>
            Message
          </Text>
          <Textarea
            placeholder="Phone"
            variant={'filled'}
            bg={'#FEEDE5'}
            borderRadius={'20px'}
            width={'100%'}
            outline={'none'}
            _hover={{ bg: '#FEEDE5' }}
          />
        </VStack>
        
  
        
      {/* Buttons */}
      <HStack
      width={['90%' , '90%' , '90%' , '70%']}
      justifyContent={'space-between'}
      >

          <Button
           width={"40%"}
           bg={'#5EA98B'}
           color={'white'}
           fontSize={"18px"}
           borderRadius={"50px"}
           _hover={{bg: '#FEE4D7' , color: 'black'}}
          >Send</Button>

        

      </HStack>

      </VStack>

      <VStack
      width={'100%'}
      alignItems={'flex-start'}
      marginTop={'2rem'}
      >
        


        {/* Email */}
        <HStack
        width={'50%'}
        height={'100%'}
        paddingY={'1rem'}
        // backgroundColor={'red'}
        _hover={{ 
            border: '1px solid #5EA98B',
        
          }}
        transition={'all 0.3s ease-in-out'}
        >
            {/*Email icon  */}
            <HStack
            width={'50px'}
            height={'50px'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'50%'}
            backgroundColor={'#FFF7F3'}
            >
                <MdEmail   color='#5EA98B' />
            </HStack>

            {/*Email details  */}
            <VStack
            alignItems={'flex-start'}
            >
                <Text
                fontSize={'18px'}
                fontWeight={'600'}
                >Email</Text>

                <Text>
                   Biancaboursiquot@yahoo.com
                </Text>

               


            </VStack>
        
        </HStack>

        {/* Address */}
        <HStack
        width={'50%'}
        height={'100%'}
        paddingY={'1rem'}
        // backgroundColor={'red'}
        _hover={{ 
            border: '1px solid #5EA98B',
        
          }}
        transition={'all 0.3s ease-in-out'}
        >
            {/*Address icon  */}
            <HStack
            width={'50px'}
            height={'50px'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'50%'}
            backgroundColor={'#FFF7F3'}
            >
                <FaLocationArrow   color='#5EA98B' />
            </HStack>

            {/*Address details  */}
            <VStack
            alignItems={'flex-start'}
            >
                <Text
                fontSize={'18px'}
                fontWeight={'600'}
                >Address</Text>

                <Text>
                   Baldwin, NY
                </Text>


            </VStack>
        
        </HStack>

      </VStack>
      
      
    </VStack>
  </Box>
  )
}

export default ContactSection