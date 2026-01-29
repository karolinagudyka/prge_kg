import React, {useEffect, useState} from 'react';
import UserCard from "../components/UserCard";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper} from "@mui/material";


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
              </TableRow>
            </TableHead>

            <TableBody>
              {users?.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.location}</TableCell>
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