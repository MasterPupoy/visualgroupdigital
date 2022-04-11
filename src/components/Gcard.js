import React from 'react'
import {
  Flex,
  Text,
  Box,
  Button,
} from '@chakra-ui/react'

export default function Gcard({ icon, title, content, color, buttonColor}) {
  return (
    <Flex
      backgroundColor={color}
      borderRadius={20}
      w="400px"
      h="470px"
      flexDirection={'column'}
      alignItems="center"
      justifyContent={'center'}
      my="1rem"
      boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}
    >
      <Box>
        {icon}
      </Box>
      <Text style={style.cardTitle}>{title}</Text>
      <Text style={style.cardText}>{content}</Text>
      <Button style={style.button} backgroundColor={buttonColor} >
        Let's Chat
      </Button>
    </Flex>
  )
}

const style = {
  cardTitle: {
    color: '#FFF5DF',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'dm-sans'
  },
  cardText : {
    color: '#FFF5DF',
    fontFamily: 'dm-sans',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '1rem'
  },
  button: {
    width: '90%',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    color: '#FFFF'
  }
}