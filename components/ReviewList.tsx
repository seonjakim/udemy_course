import { FeedbackType } from "@graphql/course/types";
import ExpandableBox from "./ExpandableBox";
import Rating from "./Rating";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { styled } from "@mui/material/styles";

type ReviewListProps = {
  feedback: FeedbackType;
};

const ReviewList = ({ feedback }: ReviewListProps) => {
  const MAX_CONTENT_LENGTH = 375;
  const { rating, user_name, content, created_at } = feedback;
  const setContent = (content: string): string | JSX.Element => {
    if (content.length < MAX_CONTENT_LENGTH) return content;
    return <ExpandableBox content={content} />;
  };
  const getElapsedDate = (createdAt: string): string => {
    const DAY_IN_MILLISECONDS = 86400000;
    const DAYS_IN_A_WEEK = 7;
    const WEEKS_IN_A_MONTH = 4;
    const MONTHS_IN_A_YEAR = 12;

    const createdDateInMilliseconds = new Date(createdAt).getTime();
    const currentTimeInMilliseconds = new Date().getTime();

    const elapsedDays = Math.floor((currentTimeInMilliseconds - createdDateInMilliseconds) / DAY_IN_MILLISECONDS);
    if (elapsedDays < DAYS_IN_A_WEEK) {
      return `${elapsedDays}일 전`;
    }
    const elapsedDaysToWeek = Math.floor(elapsedDays / DAYS_IN_A_WEEK);
    if (elapsedDaysToWeek < WEEKS_IN_A_MONTH) {
      return `${elapsedDaysToWeek}주 전`;
    }
    const weeksToMonth = Math.floor(elapsedDaysToWeek / WEEKS_IN_A_MONTH);
    if (weeksToMonth < MONTHS_IN_A_YEAR) {
      return `${weeksToMonth}개월 전`;
    }
    const monthsToYear = Math.floor(weeksToMonth / MONTHS_IN_A_YEAR);
    return `${monthsToYear}년 전`;
  };

  return (
    <Container>
      <strong>{user_name}</strong>
      <div className="rating-date-container">
        <Rating value={rating} readOnly />
        <span>{getElapsedDate(created_at)}</span>
      </div>
      <div style={{ lineHeight: "1.4" }}>{setContent(content)}</div>
      <span>리뷰가 도움이 되었습니까?</span>
      <div className="reaction-content-container">
        <button>
          <ThumbUpOffAltIcon />
        </button>
        <button>
          <ThumbDownOffAltIcon />
        </button>
        <span>신고하기</span>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2, 0)};
  & > strong {
    font-size: 16px;
  }
  & > span {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 12px;
  }
  & > .rating-date-container {
    display: flex;
    gap: ${({ theme }) => theme.spacing(1)};
    & > span {
      color: ${({ theme }) => theme.palette.secondary.contrastText};
    }
  }
  & > .reaction-content-container {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    & > button {
      width: 40px;
      height: 40px;
      border: 1px solid #1c1d1f;
      border-radius: 50%;
      color: ${({ theme }) => theme.palette.primary.contrastText};
      cursor: pointer;
    }
    & > span {
      margin-left: ${({ theme }) => theme.spacing(1)};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default ReviewList;
