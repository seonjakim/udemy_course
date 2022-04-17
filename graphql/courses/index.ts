import { gql } from "@apollo/client";

export const COURSE_LIST = gql`
  query CourseList {
    developer_test_course {
      id
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
