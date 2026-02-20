export class User {
    private firstname?: string
    private lastname?: string
    private age?: number
    static BIRTH_YEAR: number = 2000

    setFirstname(first:string){
        this.firstname = first
    }
    setLastname(last: string){
        this.lastname = last
    }
    setAge(age: number){
        this.age = age
    }
    getAge(){
        return this.age
    }
    getFullName(){
        if(!this.firstname && !this.lastname)
        {
            return ""
        }
        return `${this.firstname} ${this.lastname}`
    }
}
