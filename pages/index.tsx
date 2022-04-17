import type { GetServerSideProps, NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import CourseCard from "../components/CourseCard";
import { COURSE_LIST } from "@graphql/courses";
import { CourseList } from "@graphql/courses/types";
import { styled } from "@mui/material/styles";
import { client } from "./_app";

const Home: NextPage = ({ courseList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { developer_test_course } = courseList;

  return (
    <Container>
      <Head>
        <title>Udemy</title>
        <meta name="description" content="simple udemy clone" />
      </Head>
      <div className="inner-content-container">
        {developer_test_course.map((course: CourseList) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Container>
  );
};

type CourseListType = Record<"developer_test_course", Array<CourseList>>;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<CourseListType>({ query: COURSE_LIST });
  return { props: { courseList: data } };
};

const Container = styled("div")`
  max-width: 1004px;
  margin: auto;
  padding: ${({ theme }) => theme.spacing(0, 3)};
  & > .inner-content-container {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background-color: #d1d7dc;
  }
`;

export default Home;
