import { FeedbacksAggregateType } from "@graphql/courses/types";

export type CourseDetailType = {
  name: string;
  id: string;
  cover_url: string;
  long_description: string;
  short_description: string;
  reqirements: string;
  price: number;
  course_contents: Array<CourseContentType>;
  instructors: Array<InstructorType>;
  feedbacks: Array<FeedbackType>;
  feedbacks_aggregate: FeedbacksAggregateType;
};

export type InstructorType = {
  name: string;
  id: string;
  photo_url: string;
  description: string;
};

export type FeedbackType = {
  rating: number;
  id: string;
  user_name: string;
  content: string;
  created_at: string;
};

export type CourseContentType = {
  name: string;
  id: string;
  course_id: string;
  course_content_lectures: Array<CourseContentLectureType>;
  course_content_lectures_aggregate: {
    aggregate: {
      sum: {
        duration: number;
      };
      count: number;
    };
  };
};

export type CourseContentLectureType = {
  id: string;
  duration: number;
  name: string;
  course_content: {
    id: string;
  };
};
