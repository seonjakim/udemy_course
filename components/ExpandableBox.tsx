import styled from "@emotion/styled";
import { useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const ExpandableBox = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledExpandableBox>
      <h3>Dr. Frank</h3>
      <div className={"sub-heading"}>Experienced Computer</div>
      <p className={expanded ? "normal" : "expanded-content"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quasi unde, fugit expedita nesciunt cupiditate
        eaque ratione architecto odit incidunt dolore quos, id cum, porro nam delectus voluptatem. Numquam, sapiente.
      </p>
      <div className="expanded-bar">
        <button onClick={() => setExpanded(!expanded)}>
          더 보기
          <span className="expanded-icon-wrapper">
            <ArrowForwardIosSharpIcon sx={{}} />
          </span>
        </button>
      </div>
    </StyledExpandableBox>
  );
};

const StyledExpandableBox = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  & > h3 {
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    letter-spacing: -0.02rem;
    color: #5624d0;
  }
  & > .sub-heading {
    font-weight: 400;
    line-height: 1.4;
    color: #6a6f73;
  }
  /* & > .heading {
    margin-bottom: 0.4rem;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  } */
  & > .expanded-content {
    height: 9rem;
    -webkit-mask-image: linear-gradient(#fff, #fff, rgba(255, 255, 255, 0));
  }
  & > .expanded-bar {
    button {
      height: 2.5rem;
      color: #5624d0;
      font-weight: 700;
      > .expanded-icon-wrapper {
        display: inline-block;
        width: 1rem;
        margin-left: 4px;
        svg {
          font-size: 0.7rem;
          transform: rotate(90deg);
        }
      }
    }
  }
`;

export default ExpandableBox;
