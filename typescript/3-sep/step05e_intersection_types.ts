import { rollNumber } from "./../20-august/second";
interface Student {
  student_id: number;
  name: string;
}

interface Teacher {
  teacher_Id: number;
  teacher_name: string;
}

//interface intersected_type = Student & Teacher;

type intersected_type = Student & Teacher;

let obj1: intersected_type = {
  student_id: 3232,
  name: "rita",
  teacher_Id: 7873,
  teacher_name: "seema",
};

console.log(obj1.teacher_Id);
console.log(obj1.name);
