import { useState } from "react";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type ExpandableBoxProps = {
  content: string;
  height?: string;
};

const ExpandableBox = ({ content, height = "100px" }: ExpandableBoxProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledExpandableBox height={height}>
      <p className={expanded ? "normal" : "hide-content"}>{content} </p>
      <div className="expanded-bar">
        <button onClick={() => setExpanded(!expanded)}>
          <strong>{expanded ? "적게 보기" : "더 보기"}</strong>
          <KeyboardArrowDownIcon fontSize="small" className={expanded ? "rotate-arrow" : "normal"} />
        </button>
      </div>
    </StyledExpandableBox>
  );
};

const StyledExpandableBox = styled("section")<Pick<ExpandableBoxProps, "height">>`
  display: grid;
  grid-template-rows: 1fr auto;

  & > .hide-content {
    height: ${({ height }) => height};
    mask-image: linear-gradient(#fff, #fff, rgba(255, 255, 255, 0));
  }
  & > .expanded-bar {
    button {
      height: 40px;
      color: ${({ theme }) => theme.palette.primary.main};
      display: flex;
      align-items: center;
      & > strong {
        margin-right: 4px;
      }
      & > .rotate-arrow {
        transform: rotate(180deg);
      }
    }
  }
`;

export default ExpandableBox;
