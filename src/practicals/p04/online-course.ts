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
        if(this.maxStudents > 0){
            this.maxStudents--
            return true
        }
        return false
    }
    closeCourse():void{

    }
    getAvailableSeats(): number{
        return this.maxStudents
    }
    getCourseStatus(): string{
        return this.isOpen ? "Open" : "Closed"
    }
    private canEnroll(): boolean{
        if(this.maxStudents > 0){
            return true
        }
        return false
    }
}
