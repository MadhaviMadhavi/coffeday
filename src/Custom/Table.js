import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

function Row(props) {
  const { row } = props;
  const [editName, setEditName] = useState(row ? row.name : "");
  const [onChange, setOnChange] = useState(false);
  const handleCellEdit = (value) => {
    setEditName(value);
  };

  return (
    <TableRow>
      <TableCell className="tableCell">{props.index + 1}</TableCell>
      <TableCell className="tableCell" editable="true">
        <textarea
          wrap="soft"
          maxlength="10"
          className="table_input"
          value={editName}
          name="name"
          onClick={() => {
            setOnChange(true);
          }}
          onChange={(e) => {
            handleCellEdit(e.target.value);
          }}
        />
        {onChange ? (
          <div>
            <CheckIcon
              onClick={() => {
                setOnChange(false);
                let obj = {
                  id: row.id,
                  name: editName,
                };
                props.handleEdit(obj);
                console.log(obj);
              }}
            />
            <ClearIcon
              onClick={() => {
                setEditName(row.name);
                setOnChange(false);
              }}
            />
          </div>
        ) : (
          ""
        )}
      </TableCell>
      <TableCell className="tableCell">
        <ClearIcon
          onClick={() => {
            props.handleDelete(row);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default function CollapsibleTable(props) {
  const [input, setInput] = useState();
  const [open, setOpen] = React.useState(true);
  const handleAddItem = (e) => {
    e.preventDefault();
    if (input) {
      let item = {
        id: new Date().getTime(),
        name: input,
      };
      props.handleItems(item);
      setInput("");
    }
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
          ? props.items.length > 0 &&
            props.items.map((row, index) => (
              <Row
                key={row.name}
                row={row}
                index={index}
                handleItems={props.handleItems}
                handleEdit={props.handleEdit}
                handleDelete={props.handleDelete}
              />
            ))
          : ""}
        <TableRow className="tableCell_footer">
          <TableCell>
            <form onSubmit={handleAddItem}>
              <input
                type="text"
                className="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                className="capital btn_back table_btn"
                onClick={(e) => handleAddItem(e)}
              >
                Add New{" "}
              </button>
            </form>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
