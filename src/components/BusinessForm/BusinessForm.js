import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  CircularProgress,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Icon,
  Box
} from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/react-hooks";
import AddedImage from "../AddedImage/AddedImage";
import {
  GET_LISTINGS,
  GET_CATEGORIES,
  CREATE_LISTING
} from "../../graphql/queries";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    margin: "20px 0 20px 0"
  },
  imageField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "80%",
    margin: "20px 0 20px 0"
  }
}));

const BusinessForm = ({ newForm, oldData, onCompleted }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    address: "",
    categories: [],
    phone: "",
    email: "",
    websiteUrl: "",
    imageInput: "",
    images: []
  });
  const {
    data: categoryData,
    error: categoryError,
    loading: fetchingCategories
  } = useQuery(GET_CATEGORIES);
  const [createListing, { data, loading, error }] = useMutation(
    CREATE_LISTING,
    {
      onCompleted: () => onCompleted(),
      awaitRefetchQueries: [
        {
          query: GET_LISTINGS
        }
      ]
    }
  );
  const imageInput = React.useRef(null);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();
  const handleChange = e => {
    e.persist();
    setValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));
  };
  const addImage = () => {
    setValues(oldValues => ({
      ...oldValues,
      images: oldValues.images.concat([values.imageInput]),
      imageInput: ""
    }));
  };
  const removeImage = index => {
    setValues(oldValues => ({
      ...oldValues,
      images: oldValues.images.filter((image, i) => i !== index)
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("values", values);
    createListing({
      variables: {
        name: values.name,
        address: values.address,
        description: values.description,
        ...(values.categories.length > 0 && { categories: values.categories }),
        ...(values.phone && { phone: values.phone }),
        ...(values.email && { email: values.email }),
        ...(values.images && { images: values.images }),
        ...(values.websiteUrl && { websiteUrl: values.websiteUrl })
      }
    });
  };
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <TextField
        id="outlined-name-input"
        label="Business Name"
        className={classes.textField}
        type="text"
        name="name"
        autoComplete="name"
        margin="normal"
        variant="outlined"
        value={values.name}
        onChange={handleChange}
        required
      />
      <TextField
        id="outlined-description-input"
        label="Description"
        name="description"
        multiline
        rowsMax="4"
        value={values.description}
        onChange={handleChange}
        className={classes.textField}
        margin="normal"
        helperText="description"
        variant="outlined"
        required
      />
      <TextField
        id="outlined-address-input"
        label="Address"
        className={classes.textField}
        type="text"
        name="address"
        margin="normal"
        variant="outlined"
        value={values.address}
        onChange={handleChange}
        required
      />
      <TextField
        id="outlined-phone-input"
        label="Phone"
        className={classes.textField}
        type="text"
        name="phone"
        margin="normal"
        variant="outlined"
        value={values.phone}
        onChange={handleChange}
      />
      <FormControl variant="outlined" className={classes.textField}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Categories
        </InputLabel>
        <Select
          value={values.categories}
          onChange={handleChange}
          multiple
          name="categories"
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="categories"
              id="outlined-age-simple"
            />
          }
          required
        >
          {fetchingCategories && (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
          {categoryData !== undefined &&
            categoryData.categories &&
            categoryData.categories.map(category => (
              <MenuItem key={category.id} value={category.id}>
                {category.title}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-website-input"
        label="Website URL"
        className={classes.textField}
        type="text"
        name="websiteUrl"
        margin="normal"
        variant="outlined"
        value={values.websiteUrl}
        onChange={handleChange}
      />
      <TextField
        id="outlined-website-input"
        label="Image Url"
        className={classes.imageField}
        type="text"
        name="imageInput"
        margin="normal"
        variant="outlined"
        value={values.imageInput}
        onChange={handleChange}
      />
      <Button onClick={addImage}>
        <Icon>add</Icon>
      </Button>
      <Box display="flex" flexWrap="wrap">
        {values.images.map((src, i) => (
          <AddedImage src={src} index={i} key={i} removeImage={removeImage} />
        ))}
      </Box>
      <Button
        className={classes.textField}
        variant="contained"
        size="large"
        color="primary"
        type="submit"
        disabled={loading}
      >
        Login
        {loading && <CircularProgress className={classes.progress} size={24} />}
      </Button>
    </form>
  );
};

export default BusinessForm;
