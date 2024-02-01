class Student {
    static uniqueIDCounter = 1;
  
    constructor(public name: string, public age: number) {
      this.id = Student.generateUniqueID();
      this.enrolledCourses = [];
      this.balance = 0;
    }
  
    private static generateUniqueID(): number {
      return Student.uniqueIDCounter++;
    }
  
    id: number;
    enrolledCourses: string[];
    balance: number;
  
    enroll(course: string): void {
      this.enrolledCourses.push(course);
      console.log(`${this.name} has enrolled in ${course}.`);
    }
  
    viewBalance(): void {
      console.log(`${this.name}'s balance: $${this.balance}`);
    }
  
    payTuition(amount: number): void {
      this.balance -= amount;
      console.log(`${this.name} has paid $${amount}. Remaining balance: $${this.balance}`);
    }
  
    showStatus(): void {
      console.log(`Student Details:
        Name: ${this.name}
        ID: ${this.id}
        Enrolled Courses: ${this.enrolledCourses.join(", ")}
        Balance: $${this.balance}`);
    }
  }
  
  class StudentManagementSystem {
    private students: Student[] = [];
  
    addStudent(student: Student): void {
      this.students.push(student);
    }
  
    findStudentById(id: number): Student | undefined {
      return this.students.find((student) => student.id === id);
    }
  }
  
  // Example usage of the Student Management System
  
  const studentSystem = new StudentManagementSystem();
  
  const student1 = new Student("Alice", 20);
  const student2 = new Student("Bob", 22);
  
  studentSystem.addStudent(student1);
  studentSystem.addStudent(student2);
  
  student1.enroll("Math");
  student1.enroll("History");
  student1.viewBalance();
  student1.payTuition(500);
  student1.showStatus();
  
  student2.enroll("Physics");
  student2.enroll("English");
  student2.viewBalance();
  student2.payTuition(300);
  student2.showStatus();