import { OnlineCourse } from "./online-course.ts";

const course = new OnlineCourse("TypeScript OOP", 3);

console.log(course.courseName);
// TypeScript OOP

console.log(course.getAvailableSeats());
// 3

console.log(course.getCourseStatus());
// Open

console.log(course.enroll());
// true

console.log(course.getAvailableSeats());
// 2

console.log(course.enroll());
// true

console.log(course.enroll());
// true

console.log(course.getAvailableSeats());
// 0

console.log(course.enroll());
// false  (Course Full)

course.closeCourse();

console.log(course.getCourseStatus());
// Closed

console.log(course.enroll());
// false  (Course Closed)
