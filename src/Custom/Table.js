import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const handleCellEdit = (value) => {
    console.log(value);
  };

  return (
    <TableRow>
      <TableCell className="tableCell">1234</TableCell>
      <TableCell className="tableCell" editable="true">
        <input
          className="table_input"
          value={row.name}
          name="name"
          onChange={(e) => {
            handleCellEdit(e.target.value);
          }}
        />
        {/* {row.name} */}
      </TableCell>
      <TableCell className="tableCell">
        <button>X</button>
      </TableCell>
    </TableRow>
  );
}

export default function CollapsibleTable() {
  const [rows, setRows] = useState([]);
  const [input, setInput] = useState();
  const [open, setOpen] = React.useState(true);
  const handleAddItem = () => {
    let item = {
      name: input,
    };
    setRows([...rows, item]);
  };
  return (
    <Table
      aria-label="collapsible table"
      style={{ border: "1px solid lightgray", width: "80%", margin: "0 auto" }}
    >
      <TableBody>
        <TableRow>
          <TableCell>Id</TableCell>
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
        <TableRow className="tableCell_footer">
          <TableCell>
            <input
              type="text"
              className="input"
              onChange={(e) => setInput(e.target.value)}
            />
          </TableCell>
          <TableCell className="tableCell_footer">
            <button
              className="capital btn_back table_btn"
              onClick={handleAddItem}
            >
              Add New{" "}
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
