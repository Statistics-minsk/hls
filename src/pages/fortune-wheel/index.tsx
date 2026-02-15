import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Collapse, Container, Flex, Heading, Icon, Show, Text, useDisclosure, VStack } from '@chakra-ui/react';

import { WheelTabs } from '~/components/fortune-wheel/WheelTabs';

export const FortuneWheel = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW="7xl" py={8} pos='relative' zIndex={2} px={{ base: 1, xs: 4 }}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading color="blue.700" mb={4}>
            🎡 Колесо Фортуны<Show below='xs'><br /></Show> для ЗОЖ
          </Heading>
          <Text color="blue.600" maxW="3xl" mx="auto" fontWeight={600} fontSize={18}>
            Выберите категорию, крутите колесо и получайте полезные задания на день!
            Подробности откроются автоматически после остановки колеса.
          </Text>
        </Box>
        <Box mt={8}>
          <Flex align="center" onClick={onToggle} cursor="pointer">
            <Box
              display='flex'
              alignItems='center'
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(4px)"
              px={2}
              py={1}
              borderRadius="md"
            >
              <Heading size="md" color="gray.700" mr={2}>
                💡 Как пользоваться {isOpen ? ':' : '?'}
              </Heading>
              <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} boxSize={5} />
            </Box>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Box
              bg="blue.50"
              p={6}
              borderRadius="lg"
              borderLeftWidth={4}
              borderLeftColor="blue.400"
              mt={2}
            >
              <VStack align="stretch" spacing={3}>
                <Text>1. <b>Выберите категорию</b> – переключитесь между вкладками</Text>
                <Text>2. <b>Крутите колесо</b> – нажмите "Крутить колесо!"</Text>
                <Text>3. <b>Подождите остановки</b> – колесо сделает несколько оборотов</Text>
                <Text>4. <b>Нажмите на выпавшее задание</b> – откроется описание</Text>
                <Text>5. <b>Выполняйте</b> – старайтесь сделать задание в течение дня</Text>
                <Text>6. <b>Повторите</b> – крутите колесо каждый день для новых задач!</Text>
              </VStack>
            </Box>
          </Collapse>
        </Box>

        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          p={{ base: 4, md: 6 }}
          px={{base: 1, xs: 4}}
          borderWidth={1}
          borderColor="gray.100"
        >
          <WheelTabs />
        </Box>
      </VStack>
    </Container>
  )
};