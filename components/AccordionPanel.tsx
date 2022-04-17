import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { CourseContentLectureType, CourseContentType } from "@graphql/course/types";
import LectureList from "./LectureList";

type AccordionPanelProps = {
  content: CourseContentType;
};

const AccordionPanel = ({ content }: AccordionPanelProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const {
    name,
    course_content_lectures,
    course_content_lectures_aggregate: {
      aggregate: {
        count,
        sum: { duration },
      },
    },
  } = content;

  const durationToTimeInKorean = (duration: number): string => {
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 3600;
    let time = "";
    const hours = Math.floor(duration / SECONDS_IN_HOUR);
    const minutes = Math.floor((duration - hours * 3600) / SECONDS_IN_MINUTE);
    if (hours) time += `${hours}시간`;
    if (minutes) time += ` ${minutes}분`;
    return time;
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="summary-content-container">
            <h3>{name}</h3>
            <span>{`${count}개 강의 • ${durationToTimeInKorean(duration)}`}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {course_content_lectures.map((lecture: CourseContentLectureType) => (
            <LectureList key={lecture.id} lecture={lecture} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionPanel;

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<KeyboardArrowDownIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor: "#f7f9fa",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(-180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .summary-content-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    letterSpacing: "-.02rem",
    lineHeight: "1.2",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
