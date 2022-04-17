export type CourseList = {
  id: string;
  name: string;
  short_description: string;
  price: number;
  cover_url: string;
  instructors: Array<InstructorType>;
  feedbacks_aggregate: FeedbacksAggregateType;
};

type InstructorType = {
  name: string;
  id: string;
};

export type FeedbacksAggregateType = {
  aggregate: {
    avg: {
      rating: number;
    };
  };
};
