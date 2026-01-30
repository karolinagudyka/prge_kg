import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import "../styles/_listofitems.scss";

function ListOfItems(props) {
    const [users, setUsers] = useState([]);
    // https://jsonplaceholder.typicode.com/users
    useEffect(() => {
        // http://localhost:10000/app/get_users
        fetch('http://localhost:10000/app/get_users')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setUsers(res.data)
            })
    }, [])

    return (
        <div className="list-page">
            <div className="services__subtitle">
                <span className="geo-portal">GEO</span>
                <span className="portal">PORTAL</span>
            </div>
            <header className="list-header">
                Lista pracowników jednostek policji
            </header>
            <div className="table-wrapper">
                <TableContainer component={Paper} className="table-container">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>ID</strong></TableCell>
                                <TableCell><strong>Imię i nazwisko</strong></TableCell>
                                <TableCell><strong>Lokalizacja</strong></TableCell>
                                <TableCell><strong>Posty</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.location}</TableCell>
                                    <TableCell>{user.posts}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}
export default ListOfItems;

