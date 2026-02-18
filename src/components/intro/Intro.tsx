import { Box, Flex, Image, Show, Text } from '@chakra-ui/react';

export const Intro = () => (
    <Box position='relative' width='100%' minH='300px' overflow='hidden'>
        <Image
            src='img/stat.webp'
            position='absolute'
            left={0}
            top={0}
            w='100%'
            h='100%'
            objectFit='cover'
            objectPosition='10% 25%'
        />
        <Flex
            m='0 auto'
            alignItems='center'
            p={{ base: '14px 18px', sm: '16px' }}
            maxW='5xl'
            position='absolute'
            left={{ base: 2, sm: '10%' }}
            top='50%'
            transform='translateY(-50%)'
            bg='rgba(30, 64, 175, 0.4)'
            backdropFilter='blur(5px)'
            borderRadius='md'
        >
            <Text
                fontWeight={800}
                fontSize={{ base: 15, sm: 22 }}
                color='white'
                textAlign='center'
                textShadow='2px 2px 4px rgba(0,0,0,0.8)'
                lineHeight='148%'
                textTransform='uppercase'
            >
                В здоровом теле –{' '}
                <Show below='xs'>
                    <br />
                </Show>
                здоровый дух: <br />
                белорусские статистики
                <Show below='xs'>
                    <br />
                </Show>{' '}
                выбирают ЗОЖ
            </Text>
        </Flex>
    </Box>
);
