class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const pt = new Point(2, 6);
const pt1 = new Point(5, 8);
pt1.y = 10;
console.log(pt);
console.log(pt1);
class Student {
    constructor(name, email) {
        this.student_name = name;
        this.student_email = email;
        this.student_status = "Enrolled";
    }
    get status() {
        return this.student_status;
    }
    set status(value) {
        this.student_status = value;
    }
    print() {
        console.log(`Student Name ${this.student_name}
        Student Email ${this.student_email}
        Student Status ${this.student_status}
    `);
    }
}
const student = new Student("Jahanzaib", "jtayyab204@gmail.com");
const student1 = new Student("Jahanzaib Tayyab", "jtayyab204@gmail.com");
//console.log(student.print)
console.log(student.status);
console.log((student.status = "Passed"));
console.log(student.status);
new Date("13/45/2023");
export {};
