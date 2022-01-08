import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;

  return (
    <TableRow>
      <TableCell className="tableCell">{row.name}</TableCell>
      <TableCell className="tableCell">
        <button >{row.delete}</button>
      </TableCell>
    </TableRow>
  );
}

const rows = [
  { name: "Project1", delete: "X" },
  {
    name: "Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100Project100   ",
    delete: "X",
  },
];

export default function CollapsibleTable() {
  rows.map((item) => {
    console.log(item);
  });
  const [open, setOpen] = React.useState(true);
  return (
    <Table
      aria-label="collapsible table"
      style={{ border: "1px solid lightgray", width: "80%", margin: "0 auto" }}
    >
      <TableBody>
        <TableRow style={{ height: "10px" }}>
          <TableCell>Title</TableCell>
          <TableCell className="tableCell">
            <IconButton aria-label="expand row" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        {open
          ? rows && rows.map((row) => <Row key={row.name} row={row} />)
          : ""}
        <TableRow style={{ borderBottom: "1px sloid red" }}>
          <TableCell>
            <button className="capital btn_back table_btn">Add New </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
