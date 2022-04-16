import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { CourseContentType } from "@graphql/course/types";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    //#d1d7dc
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
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.7rem" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: "#f7f9fa",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(-90deg)",
    color: "#1c1d1f",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type CustomizedAccordionsProps = {
  content: CourseContentType;
};

export default function CustomizedAccordions({ content }: CustomizedAccordionsProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-.02rem", lineHeight: "1.2" }}>
            {content.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {content.course_content_lectures.map(lecture => (
            <Typography key={lecture.id}>
              <Image src={"/favicon.ico"} width="8" height="8" alt="play-icon" />
              {lecture.name}
              {lecture.duration}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
