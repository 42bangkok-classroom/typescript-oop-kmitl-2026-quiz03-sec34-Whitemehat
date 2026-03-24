export class OnlineCourse {
    public courseName: string;
    public maxStudents: number;
    private enrolledStudents: number = 0;
    private isOpen: boolean = true;

    constructor(course: string , max: number){
        this.courseName = course;
        this.maxStudents = max;
    }
    enroll(): boolean{
        return this.canEnroll()
    }

    closeCourse():void{
        this.isOpen = false;
    }
    getAvailableSeats(): number{
        return this.maxStudents
    }
    getCourseStatus(): string{
        if(this.isOpen){
            return `Open`;
        }
        return `Closed`
    }
    private canEnroll(): boolean{
        if(this.maxStudents > 0){
            this.maxStudents -= 1;
            return true;
        }
        this.isOpen = false;
        return false;
    }
}
