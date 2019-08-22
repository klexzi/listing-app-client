import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Icon
} from "@material-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { extractCategories } from "../../helpers/utils";
import { GET_LISTINGS } from "../../graphql/queries";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const RowData = ({ name, address, categories, views, id }) => (
  <StyledTableRow>
    <StyledTableCell component="th" scope="row">
      {name}
    </StyledTableCell>
    <StyledTableCell align="right">{address}</StyledTableCell>
    <StyledTableCell align="right">{categories}</StyledTableCell>
    <StyledTableCell align="right">{views}</StyledTableCell>
    <StyledTableCell align="right">
      <Button>
        <Icon color="primary">edit</Icon>
      </Button>
      <Button>
        <Icon color="error">delete</Icon>
      </Button>
    </StyledTableCell>
  </StyledTableRow>
);

export default function CustomizedTables() {
  const { loading, data, error } = useQuery(GET_LISTINGS);
  const classes = useStyles();
  if (loading) return <div>loading...</div>;
  if (error) return <div>error occured while trying to get listings</div>;
  if (data && data.businesses.length < 1)
    return <div> no listings at this time</div>;
  console.log(data);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Categories</StyledTableCell>
            <StyledTableCell align="right">Views</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.businesses.map(row => (
            <RowData
              name={row.name}
              key={row.id}
              address={row.address}
              categories={extractCategories(row.categories)}
              views={0}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
