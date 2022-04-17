import styled from "@emotion/styled";
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

const StyledLi = styled.li`
  padding: 8px 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  & > span {
    color: #6a6f73;
  }
`;

export default LectureList;
