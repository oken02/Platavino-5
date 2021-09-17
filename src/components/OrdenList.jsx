import * as React from 'react';
import { Table } from '@chakra-ui/table';
import { TableCaption } from '@chakra-ui/table';
import { Tbody } from '@chakra-ui/table';
import { Tr, Th, Td } from '@chakra-ui/table';
import { Thead } from '@chakra-ui/table';
import { Tfoot } from '@chakra-ui/table';
import { useSelector } from 'react-redux';
import axios from 'axios';




export default function SingleRowSelectionGrid() {
    const isLogged = useSelector((state) => {
        return state.user.data.username
    })
    const lstoken = localStorage.getItem("token");
    const [ordenes, setOrdenes] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3001/api/ordens', {
            headers: {
                Authorization: "Bearer " + lstoken,
            },
        })
            .then((data) => {
                console.log(data.data)
                setOrdenes(() => {
                    return data.data
                })
            })
            .catch((e) => console.log('ESTO ', e.response))
    }, []);

    console.log('ES ESTA PA', ordenes)

    return (
        <Table variant="simple">
            <TableCaption><b>{`Ordenes de compra de ${isLogged}`}</b></TableCaption>


            <Thead>
                <Tr>
                    <Th>Id de orden</Th>
                    <Th>Status</Th>
                    <Th>Fecha</Th>
                    <Th>Total</Th>
                </Tr>
            </Thead>


            <Tbody>
                {ordenes.map((orden) => {
                    return (
                        <Tr>
                            <Td>{orden.id}</Td>
                            <Td>{orden.Status}</Td>
                            <Td>{new Date(orden.FechaCompra).toLocaleDateString("es-PE")}</Td>
                            <Td>{orden.PrecioTotal}</Td>
                        </Tr>
                    )
                })}
            </Tbody>

        </Table>
    )
}