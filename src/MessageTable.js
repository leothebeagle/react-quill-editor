import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MessageTable = ({messageData}) => {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Message ID</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Message Body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {messageData.map((message) => (
                <TableRow
                    key={message.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {message.body}
                    </TableCell>
                    <TableCell align="right">{message.title}</TableCell>
                    <TableCell align="right">{message.body}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
      </TableContainer>
    )
}

export default MessageTable;