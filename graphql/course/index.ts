import { gql } from "@apollo/client";
//1d7b0e88-f3b9-4dd5-bd31-62a7c2d64cc1
export const COURSE_DETAIL = gql`
  query CourseDetail($id: uuid!) {
    developer_test_course_by_pk(id: $id) {
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
        course_content_lectures_aggregate {
          aggregate {
            sum {
              duration
            }
            count
          }
        }
      }
      instructors {
        id
        name
        photo_url
        description
      }
      feedbacks {
        rating
        id
        user_name
        content
        created_at
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
