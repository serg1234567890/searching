export class Validation {
    static validate(page){
        console.log(page);
        if(page.singlelinetext.length < 5) return false

        return true
    }
}