import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { User } from '../models/user';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';

const Users = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('ambassadors');

                setUsers(data);
            }
        )()
    }, []);

        return(
          <Layout>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => {
                        return (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.first_name} {user.last_name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Layout>
    );

}

export default Users;