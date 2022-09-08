import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteMenu from "./DeleteMenu";

export default function CustomTable(props) {
  // console.log(props, "props on custom table");
  // console.log(props.deleteMake, "props on custom table");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <h2>Count: {props.makes.length}</h2>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="center">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, index) => (
            <TableRow
              key={row.MakeId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.MakeId}</TableCell>
              <TableCell align="center">{row.MakeName}</TableCell>
              <TableCell align="right">
                <DeleteMenu
                  component={MoreVertIcon}
                  deleteMake={props.deleteMake}
                  index={index}
                  makes={props.makes}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
