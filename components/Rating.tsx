import MuiRating, { RatingProps } from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const Rating = styled((props: RatingProps) => <MuiRating precision={0.5} {...props} />)(() => ({
  label: {
    color: "#e59819",
  },
  span: {
    color: "#e59819",
  },
}));

export default Rating;
