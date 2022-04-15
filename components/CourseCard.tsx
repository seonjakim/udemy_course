import { Box } from "@mui/material";
import Image from "next/image";

const CourseCard = ({ el }) => {
  const { cover_url, name, price, short_description, instructors, feedbacks_aggregate } = el;
  return (
    <Box
      sx={{
        borderBottom: "1px solid #d1d7dc",
        padding: "1rem 0",
        height: "11rem",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <div>
        <img style={{ width: "125px" }} src={cover_url} alt="test" />
      </div>
      <div>
        <h4>{name}</h4>
        {instructors.map(instructor => (
          <span key={instructor.id}>{instructor.name}</span>
        ))}
        <div>{feedbacks_aggregate.aggregate.avg.rating}</div>
        <div>${price}</div>
      </div>
    </Box>
  );
};

export default CourseCard;
