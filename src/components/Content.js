import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://63dcc99d367aa5a7a401ee2e.mockapi.io/peoples")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name(g)</TableCell>
            <TableCell>email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((people) => (
            <TableRow
            //     key={people.id}
            //     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{people.id}</TableCell>

              <TableCell component="th" scope="row">
                {people.name}
              </TableCell>
              <TableCell >{people.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Content;
