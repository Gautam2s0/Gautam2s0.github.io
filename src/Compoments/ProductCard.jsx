import React from 'react'
import { Box, Flex, Button, Image, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import styles from "./Styles/ProductCar.module.css"

export const ProductCard = ({ img, url, desc, title,src }) => {
    return (
        <Box className={styles.PcardBox}>
            <Flex id={styles.CardBoxFlex}> 
                <Box id={styles.cardImageBox}>
                    <Image className={styles.cardImageBoxImg} src={img} alt="error" w="100%" />
                </Box>
                <Box id={styles.secondCardBox
                }>
                    <Heading className={styles.cardHeading}>{title}</Heading>
                    <Text className={styles.cardText}>{desc}</Text>
                    <Box className={styles.buut}>
                        <a href={src}>
                            
                            <Button id={styles.cardButtonCheck} >Check it Out!</Button>
                        </a>
                        <a href={url}>
                            <Button id={styles.cardGit} >Github</Button>
                        </a>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}
