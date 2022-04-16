export type CourseDetail = {
  name: string;
  id: string;
  cover_url: string;
  long_description: string;
  short_description: string;
  reqirements: string;
  price: number;
  course_contents: Array<CourseContentType>;
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

export type CourseContentType = {
  name: string;
  id: string;
  course_id: string;
  course_content_lectures: Array<CourseContentLectureType>;
};

export type CourseContentLectureType = {
  id: string;
  duration: number;
  name: string;
  course_content: {
    id: string;
  };
};
