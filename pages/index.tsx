import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import CourseCard from "../components/CourseCard";

type Instructors = Array<{
  name: string;
  id: string;
}>;

type CourseList = {
  name: string;
  short_description: string;
  price: number;
  cover_url: string;
  instructors: Instructors;
  feedbacks_aggregate: {
    aggregate: {
      avg: {
        rating: number;
      };
    };
  };
};

const COURSE_LIST = gql`
  query CourseList {
    developer_test_course {
      name
      short_description
      price
      cover_url
      instructors {
        name
        id
      }
      feedbacks_aggregate {
        aggregate {
          avg {
            rating
          }
        }
      }
    }
  }
`;
type QueryType = {
  developer_test_course: Array<CourseList>;
};
const Home: NextPage = () => {
  const { data } = useQuery<QueryType>(COURSE_LIST);
  console.log(data);
  return (
    <div>
      <Head>
        <title>Udemy</title>
        <meta name="description" content="simple udemy clone" />
      </Head>
      {data?.developer_test_course.map((el, idx) => (
        <CourseCard key={idx} el={el} />
      ))}
    </div>
  );
};

// export const getServerSideProps = () => {};

export default Home;
