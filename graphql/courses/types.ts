export type Instructors = Array<{
  name: string;
  id: string;
}>;

export type CourseList = {
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
