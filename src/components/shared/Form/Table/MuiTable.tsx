import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { User } from '@/api/services/userService';

interface MuiTableProps {
  users: User[];
}

const MuiTable: React.FC<MuiTableProps> = ({ users }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-labelledby="users table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Phone</TableCell>
          <TableCell align="left">Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell component="th" scope="row">
              {user.id}
            </TableCell>
            <TableCell align="left">{user.name}</TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <TableCell align="left">{user.phone}</TableCell>
            <TableCell align="left">{user.website}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MuiTable;
