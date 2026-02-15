import { Button, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router";

import { AppRoute, TEST_BLOCK_THEMES } from "~/consts/consts";

export const NavMenu = () => {
    const location = useLocation();
    const isMainPage = location.pathname === AppRoute.Index;

    return (
        <Flex
            gap={{ base: 0, sm: 2, md: 4 }}
            py={2}
            borderRadius='full'
            backdropFilter={isMainPage ? 'blur(4px)' : 'none'}
        >
            {TEST_BLOCK_THEMES.map((item) => (
                <Button
                    key={item.id}
                    as={Link}
                    to={item.route}
                    variant='ghost'
                    size={{ base: 'sm', md: 'md' }}
                    color={isMainPage ? 'white' : 'blue.800'}
                    _hover={{
                        color: isMainPage ? 'blue.200' : 'blue.600',
                        bgColor: 'transparent'
                    }}
                    fontWeight={location.pathname === item.route ? 800 : 600}
                    borderBottom={location.pathname === item.route ? '1px solid' : 'none'}
                    borderColor={isMainPage ? 'white' : 'blue.500'}
                    borderRadius={isMainPage ? '20%' : '0'}
                    px={{ base: 1, md: 4 }}
                >
                    {item.shortTitle}
                </Button>
            ))}
        </Flex>
    );
};