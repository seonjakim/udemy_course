import { styled } from "@mui/material/styles";
import { CourseContentLectureType } from "@graphql/course/types";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

type LectureListProps = {
  lecture: CourseContentLectureType;
};

const LectureList = ({ lecture }: LectureListProps) => {
  const { duration, name } = lecture;
  const durationToString = (duration: number) => {
    const durationToString = duration.toString();
    const seconds = durationToString.slice(-2);
    const minutes = durationToString.slice(0, -2) || "0";
    return `${minutes.length < 2 ? "0" : ""}${minutes}:${seconds}`;
  };
  return (
    <StyledLi>
      <PlayCircleIcon fontSize="small" />
      <div>{name}</div>
      <span>{durationToString(duration)}</span>
    </StyledLi>
  );
};

const StyledLi = styled("li")`
  padding: ${({ theme }) => theme.spacing(1, 0)};
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing(2)};
  & > span {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`;

export default LectureList;
