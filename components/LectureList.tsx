import { styled } from "@mui/material/styles";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { CourseContentLectureType } from "@graphql/course/types";
import { SECONDS_IN_MINUTE } from "@constants/time";

type LectureListProps = {
  lecture: CourseContentLectureType;
};

const LectureList = ({ lecture }: LectureListProps) => {
  const { duration, name } = lecture;
  const durationToTime = (duration: number): string => {
    const seconds = duration % SECONDS_IN_MINUTE;
    const minutes = Math.floor(duration / SECONDS_IN_MINUTE);
    const padTwoDigits = (num: number): string => num.toString().padStart(2, "0");
    return `${padTwoDigits(minutes)}:${padTwoDigits(seconds)}`;
  };
  return (
    <StyledLi>
      <PlayCircleIcon fontSize="small" />
      <div>{name}</div>
      <span>{durationToTime(duration)}</span>
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
