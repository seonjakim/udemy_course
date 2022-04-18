import Link from "next/link";
import { styled } from "@mui/material/styles";
import { CourseList } from "@graphql/courses/types";
import Rating from "./Rating";

type CourseCardProps = {
  course: CourseList;
};

const CourseCard = ({ course }: CourseCardProps) => {
  const {
    cover_url,
    name,
    price,
    short_description,
    instructors,
    feedbacks_aggregate: {
      aggregate: {
        avg: { rating },
      },
    },
    id,
  } = course;
  return (
    <Link href={`/${id}`} passHref>
      <Container>
        <img className="course-image" width={260} height={145} src={cover_url} alt="course-cover-image" />
        <div className="course-info-container">
          <h3>{name}</h3>
          <p>{short_description}</p>
          <div className="instructor-container">
            {instructors.map(instructor => (
              <span key={instructor.id}>{instructor.name}</span>
            ))}
          </div>
          <div className="rating-container">
            <strong>{rating}</strong>
            <Rating value={rating} readOnly />
          </div>
        </div>
        <div>
          <strong style={{ fontSize: "16px" }}>${price}</strong>
        </div>
      </Container>
    </Link>
  );
};

const Container = styled("div")`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  background-color: #fff;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  &:hover {
    & > .course-image {
      filter: brightness(85%);
    }
  }
  & > .course-image {
    border: 1px solid ${({ theme }) => theme.palette.divider};
    width: 260px;
    height: 145px;
  }
  & > .course-info-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    & > .instructor-container {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${({ theme }) => theme.palette.secondary.contrastText};
      font-size: 12px;
    }
  }
  & > div .rating-container {
    display: flex;
    gap: 4px;
    align-items: center;
    color: #b4690e;
    line-height: 1.2;
    & > label,
    span {
      font-size: 14px;
    }
  }
`;

export default CourseCard;
