import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { styled } from "@mui/material/styles";
import { CourseContentType, CourseDetail, FeedbackType, InstructorType } from "@graphql/course/types";
import { COURSE_DETAIL } from "@graphql/course";
import ExpandableBox from "@components/ExpandableBox";
import CustomizedAccordions from "@components/AccordionPanel";
import ReviewList from "@components/ReviewList";
import Rating from "@components/Rating";
import { client } from "pages/_app";

const CourseDetail = ({ courseDetail }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    cover_url,
    name,
    short_description,
    price,
    long_description,
    instructors,
    course_contents,
    feedbacks,
    feedbacks_aggregate: {
      aggregate: {
        avg: { rating },
      },
    },
  } = courseDetail.developer_test_course_by_pk;
  return (
    <Container>
      <div className="background"></div>
      <div className="content-container">
        <section>
          <header>
            <div>
              <h1>{name}</h1>
              <p>{short_description}</p>
            </div>
            <div className="rating-container">
              <strong>{rating}</strong>
              <Rating value={rating} readOnly />
            </div>
            <div className="instructor-container">
              생성자{" "}
              {instructors.map((instructor: InstructorType) => (
                <a key={instructor.id}>{instructor.name}</a>
              ))}
            </div>
          </header>
          <article>
            <div>
              <h1>강의 내용</h1>
              {course_contents.map((content: CourseContentType) => (
                <CustomizedAccordions content={content} key={content.id} />
              ))}
            </div>
            <div>
              <h1>설명</h1>
              <ExpandableBox height="221px" content={long_description} />
            </div>
            <div>
              <h1>강사</h1>
              {instructors.map((instructor: InstructorType) => (
                <ExpandableBox key={instructor.id} content={instructor.description} />
              ))}
            </div>
            <div>
              <h1>후기</h1>
              {feedbacks.map((feedback: FeedbackType) => (
                <ReviewList key={feedback.id} feedback={feedback} />
              ))}
            </div>
          </article>
        </section>
        <aside>
          <Image width={340} height={191.25} src={cover_url} alt="course-cover-image" />
          <div className="floating-box">
            <h1>$ {price}</h1>
            <button>장바구니에 추가</button>
            <button>지금 구매</button>
          </div>
        </aside>
      </div>
    </Container>
  );
};

type CourseDetailType = Record<"developer_test_course_by_pk", CourseDetail>;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const programUniqueName = query["program-unique-name"];

  const { data } = await client.mutate<CourseDetailType>({
    mutation: COURSE_DETAIL,
    variables: {
      id: programUniqueName,
    },
  });
  return {
    props: { courseDetail: data },
  };
};

const Container = styled("div")`
  & > .background {
    position: relative;
    height: 336px;
    background-color: #1c1d1f;
  }
  & > .content-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 1184px;
    padding: 36px;
    display: flex;
    justify-content: space-between;
    & > section {
      width: 700px;
      & > header {
        height: 300px;
        color: #fff;
        line-height: 1.2;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        & > div p {
          font-size: 19px;
        }
        & > .rating-container {
          display: flex;
          gap: 4px;
          align-items: center;
          color: ${({ theme }) => theme.palette.secondary.light};
          & > label,
          span {
            color: ${({ theme }) => theme.palette.secondary.light};
            font-size: 14px;
          }
        }
        & > .instructor-container {
          display: flex;
          gap: 4px;
          & > a {
            text-decoration: underline;
            color: ${({ theme }) => theme.palette.primary.light};
            cursor: pointer;
          }
        }
      }
      & > article {
        padding: ${({ theme }) => theme.spacing(4, 0)};
        & > div h1 {
          font-size: 24px;
          margin-bottom: ${({ theme }) => theme.spacing(2)};
        }
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
      }
    }
    & > aside {
      background-color: #fff;
      padding: 1px;
      & > .floating-box {
        box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
        padding: ${({ theme }) => theme.spacing(3)};
      }
    }
  }
`;

export default CourseDetail;
