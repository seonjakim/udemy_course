import MuiRating, { RatingProps } from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const Rating = styled((props: RatingProps) => <MuiRating precision={0.5} {...props} />)(({ theme }) => ({
  label: {
    color: theme.palette.secondary.main,
  },
  span: {
    color: theme.palette.secondary.main,
  },
}));

export default Rating;
