export class OnlineCourse {
    public courseName: string
    public maxStudents: number
    private enrolledStudents: number = 0
    private isOpen: boolean = true

    constructor(course: string , max: number){
        this.courseName = course
        this.maxStudents = max
    }

    enroll(): boolean{

    }
    closeCourse():void{

    }
    getAvailableSeats(): number{

    }
    getCourseStatus(): string{

    }
    private canEnroll(): boolean{
        
    }
}
