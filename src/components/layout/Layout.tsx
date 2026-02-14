import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useLocation } from 'react-router';

import { AppRoute } from '~/consts/consts';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Intro } from '../intro/Intro';
import { CornflowersBg } from './CornflowerBackground';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const isMainPage = location.pathname === AppRoute.Index;

    return (

        <Flex flexDirection='column' h='100%' minH='100vh' w='100%' minW='359px' overflow='hidden'>
            <Box
                position='fixed'
                top={0}
                width='100%'
                minW='360px'
                zIndex='10'
            >
                <Header />
            </Box>
            {isMainPage && <Box mt='64px'>
                <Intro />
            </Box>}
            <Box
                as='main'
                pt={{ base: '52px', sm: '56px' }}
                pb={{ base: '110px', md: '80px' }}
                display='flex'
                flexDir='column'
                flexGrow={1}
                bgColor='#e3e9f3'
                pos='relative'
                mt={isMainPage ? '0' : '65px'}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={0}
                    pointerEvents="none"
                >
                    <CornflowersBg />
                </Box>
                {children}
            </Box>
            <Box
                w='100%'
                minW='359px'
                zIndex='2'
            >
                <Footer />
            </Box>
        </Flex>
    )
};
