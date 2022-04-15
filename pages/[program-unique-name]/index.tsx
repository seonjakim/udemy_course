import { useQuery, gql } from "@apollo/client";
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

const CourseDetail = () => {
  const { data } = useQuery(COURSE_DETAIL);
  console.log(data);

  return <div>Enter</div>;
};

export default CourseDetail;
