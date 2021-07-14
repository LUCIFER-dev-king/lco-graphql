import { nanoid } from "nanoid";

class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

const coruseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    console.log(coruseHolder);
    return new Course(id, coruseHolder[id]);
  },
  createCourse: ({ input }) => {
    let id = nanoid();
    coruseHolder[id] = input;
    return new Course(id, input);
  },
};

export default resolvers;
