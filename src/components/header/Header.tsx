import { Box, Flex, IconButton } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { AppRoute } from '~/consts/consts';
import { HomeIcon } from '~/consts/icons';

import { NavMenu } from './NavMenu';

export const Header = () => {
    const location = useLocation();
    const isMainPage = location.pathname === AppRoute.Index;

    return (
        <Box
            as='header'
            width='100%'
            minW='360px'
            bg={isMainPage ? 'blue.700' : 'white'}
            borderBottom={!isMainPage ? '1px solid' : 'none'}
            borderColor='gray.200'
            boxShadow={!isMainPage ? 'sm' : '0 0 3px rgba(82, 121, 251, 0.6), 0 0 15px rgba(82, 121, 251, 0.5)'}
        >
            <Flex
                maxW='7xl'
                mx='auto'
                width='100%'
                px={{ base: 1, '2xs': 4 }}
                py={2}
                align='center'
                justify='space-between'
                wrap='wrap'
            >
                <IconButton
                    as={Link}
                    to={AppRoute.Index}
                    aria-label='На главную'
                    icon={<HomeIcon />}
                    variant='ghost'
                    size='lg'
                    fontSize='24px'
                    color={isMainPage ? 'white' : 'blue.700'}
                    _hover={{ 
                        transform: 'scale(1.1)',
                        bgColor: 'transparent'
                    }}
                    transition='all 0.2s'
                    isRound
                    border={isMainPage ? '1px solid white' : '1px solid #2a4365'}
                />
                <NavMenu />
            </Flex>
        </Box>
    );
};