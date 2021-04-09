import {Flex, Heading, Badge, Icon, Table, Button,Box,Text, Stack, SimpleGrid, theme, Thead, Tr, Th, Checkbox, Tbody, Td, useBreakpointValue, VStack} from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {Header} from '../components/Header'
import { Pagination } from '../components/Pagination';
import { Sidebar } from '../components/Sidebar';
import { RiArrowDownCircleLine, RiArrowUpCircleLine, RiMoneyDollarCircleLine, RiAddLine, RiPencilLine  } from 'react-icons/ri';




const  Chart = dynamic(() => import('react-apexcharts'), {
  ssr:false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-18T00:00:00.0000Z',
      '2021-03-19T00:00:00.0000Z',
      '2021-03-20T00:00:00.0000Z',
      '2021-03-21T00:00:00.0000Z',
      '2021-03-22T00:00:00.0000Z',
      '2021-03-23T00:00:00.0000Z',
      '2021-03-24T00:00:00.0000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    } 
  }
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
];

export default function Dashboard() {
    const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid  flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Stack spacing="4">
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
              <Box
                p={["6", "8"]}
                bg="gray.50"
                borderRadius={8}
                pb="4"
              >
                <Flex direction="row" justifyContent="space-between">
                  <Text fontWeight="bold">Entradas</Text>
                  <Icon as={RiArrowUpCircleLine} fontSize="24" color="green" />
                </Flex>
                <Flex align="center" pt="4">
                  <Text fontSize="4xl" align="left">R$500,00</Text>
                </Flex>
                
              </Box>
              <Box
                p={["6", "8"]}
                bg="gray.50"
                borderRadius={8}
                pb="4"
              >
                <Flex direction="row" justifyContent="space-between">
                  <Text fontWeight="bold">Saídas</Text>
                  <Icon as={RiArrowDownCircleLine} fontSize="24" color="red" />
                </Flex>
                <Flex align="center" pt="4">
                  <Text fontSize="4xl" align="left">R$200,00</Text>
                </Flex>
              </Box>
              <Box
                p={["6", "8"]}
                bg="green.500"
                borderRadius={8}
                pb="4"
                color="white"
              >
                <Flex direction="row" justifyContent="space-between">
                  <Text fontWeight="bold">Saldo</Text>
                  <Icon as={RiMoneyDollarCircleLine} fontSize="24" color="white" />
                </Flex>
                <Flex align="center" pt="4">
                  <Text fontSize="4xl" align="left">R$200,00</Text>
                </Flex>
              </Box>
            </SimpleGrid>
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
              <Flex>
              <Box
              flex="1"
              borderRadius={8}
              bg="gray.100"
              p={["4","6","8"]}
              fontSize={["x-small"]}
            >
              <Flex
                mb="8"
                justify="space-between"
                align="center"
              >
                <Heading size="lg" fontWeight="normal">Extrato</Heading>

                <Link  href="/users/create" passHref>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="green"
                    leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                  >
                    {isWideVersion && "Nova Transação"}
                  </Button>
                </Link>

              </Flex>
                <Table colorScheme="telegram">
                  <Thead>
                    <Tr>
                      {isWideVersion && <Th px="6" color="gray.800" width="8">
                        <Checkbox colorScheme="green"/>
                      </Th>}
                      {isWideVersion &&<Th>Título</Th>}
                      <Th>Valor</Th>
                      {<Th>Categoria</Th>}
                      <Th>Data</Th>
                      {isWideVersion && <Th w="8"></Th>}
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      {isWideVersion && <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="green"/>
                      </Td>}
                      {isWideVersion &&<Td>
                          <Text >Salário</Text>
                      </Td>}
                      <Td>
                          <Text >R$200,00</Text>
                      </Td>
                      <Td>
                        <Badge variant="solid" colorScheme="green">
                          Salário
                        </Badge>
                      </Td>
                       <Td>07/04/21</Td>
                      {isWideVersion && <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                        >
                          {isWideVersion && "Editar"}
                        </Button>
                      </Td>}
                    </Tr>
                    
                  </Tbody>
                </Table>
                <Pagination />
              </Box>
              </Flex>
            
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}