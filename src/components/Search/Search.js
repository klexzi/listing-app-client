import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    width: "50vw"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
}));

export default function Search({ handleSearch }) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
    if (event.target.value.length < 1) {
      handleSearch("");
    }
  };
  const triggerSearch = () => {
    handleSearch(value);
  };
  const handleEnterKey = event => {
    if (event.keyCode === 13) {
      handleSearch(value);
    }
  };
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search for company or services"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={onChange}
        onKeyDown={handleEnterKey}
        value={value}
      />

      <Divider className={classes.divider} />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={triggerSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
