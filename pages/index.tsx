import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  RadioGroup,
  Radio,
  Spacer,
  Square,
  Stack,
  Switch,
  Text,
  useDisclosure,
  Fade,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tr,
  Td,
  Th,
  Tfoot,
  Tbody,
  Thead,
  TableCaption,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  CloseButton,
  Spinner,
  useToast,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { MdGraphicEq } from "react-icons/md";

function ToastExample() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>

      <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />

      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        Click here
      </Box>

      <chakra.button
        px="3"
        py="2"
        bg="green.200"
        rounded="md"
        _hover={{ bg: "green.300" }}
      >
        Click me
      </chakra.button>

      <Flex color="white">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>

      <Box>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <Flex>
          <Box w="70px" h="10" bg="red.500" />
          <Spacer />
          <Box w="170px" h="10" bg="red.500" />
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </Flex>

        <Text>
          Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>

        <Text>
          HStack: The children have equal spacing but dont span the whole
          container
        </Text>
        <HStack spacing="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
      </Box>

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>

      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Slider aria-label="slider-ex-4" defaultValue={30}>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="tomato" as={MdGraphicEq} />
        </SliderThumb>
      </Slider>

      <Stack align="center" direction="row">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </Stack>

      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>

      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>

      <Stack direction="row" spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" color="red.500" />
        <Spinner size="md" />
        <Spinner size="lg" color="red.500" />
        <Spinner size="xl" />
      </Stack>

      <ToastExample />
      <FadeEx />

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Tabs variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <ModalExample />
    </div>
  );
};

export default Home;

function FadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </Fade>
    </>
  );
}

function ModalExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            incidunt hic enim asperiores alias doloribus excepturi ducimus ut
            tempore facilis magni perferendis esse veritatis dolore omnis
            molestiae delectus qui repellat?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
