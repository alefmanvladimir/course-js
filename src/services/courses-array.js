class CourseArray{
    constructor(){
        this.courses = []
    }

    add(course){
        this.courses.push(course);
    }

    get(id){
        if(id == undefined) 
            return this.courses 

        let index = this.#getIndex(id)
        return this.courses[index]
    }

    remove(id) {
        let index = this.#getIndex(id)
        return this.courses.splice(index, 1)[0]
    }

    #getIndex(id) {
        return this.courses.findIndex((course)=> course.id==id)
    }

    update(id, newCourse){
        const index = this.#getIndex(id)
        if(index < 0 ){
            throw Error()
        }
        const result = this.courses[index]
        this.courses[index] = newCourse
        return result
    }

    exists(id){
        return this.#getIndex(id) >= 0 
    }

}