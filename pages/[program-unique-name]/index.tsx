import { useQuery, gql } from "@apollo/client";
import CustomizedAccordions from "@components/AccordionPanel";

type CourseDetail = {
  name: string;
  id: string;
  cover_url: string;
  long_description: string;
  short_description: string;
  reqirements: string;
  price: number;
  course_contents: Array<{
    name: string;
    id: string;
    course_id: string;
    course_content_lectures: Array<{
      id: string;
      duration: number;
      course_content: {
        id: string;
      };
    }>;
  }>;
  instructors: Array<{
    name: string;
    id: string;
  }>;
  feedbacks: Array<{
    rating: number;
    id: string;
    user_name: string;
  }>;
};
const COURSE_DETAIL = gql`
  query MyQuery {
    developer_test_course_by_pk(id: "1d7b0e88-f3b9-4dd5-bd31-62a7c2d64cc1") {
      name
      id
      cover_url
      long_description
      short_description
      requirements
      price
      course_contents {
        name
        id
        course_id
        course_content_lectures {
          id
          duration
          name
          course_content {
            id
          }
        }
      }
      instructors {
        name
        id
      }
      feedbacks {
        rating
        id
        user_name
      }
    }
  }
`;

type CourseDetailType = {
  developer_test_course_by_pk: CourseDetail;
};

const CourseDetail = () => {
  const { data } = useQuery<CourseDetailType>(COURSE_DETAIL);
  console.log(data);

  return (
    <div>
      {data?.developer_test_course_by_pk.course_contents.map(content => (
        <CustomizedAccordions key={content.id} />
      ))}
    </div>
  );
};

export default CourseDetail;
