import { makeStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

export default makeStyles({
  container: {
    width: "inherit",
    height: "inherit"
  },

  headline: {
    fontWeight: 700,
    color: grey[300],
    lineHeight: 1.3
  },
  subHeadline: {
    color: grey[300],
    fontWeight: 500,
    lineHeight: 1.3
  }
});
