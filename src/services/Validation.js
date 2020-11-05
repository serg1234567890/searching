export class Validation {
    static check(controls){
        controls.forEach(control => {
            switch(control.type) {
                case 'text':
                    control.error = null
                    if(!control.value || control.value && control.value.length==0) control.error = 'Must not be empty!'
                    break
                case 'textarea':
                        control.error = null
                        if(!control.value || control.value && control.value.length==0) control.error = 'Must not be empty!'
                        break
                case 'date':
                    const day = control.value.substr(0, 2)
                    const month = control.value.substr(2, 2)-1
                    const year = control.value.substr(4, 4)
                    var date = new Date(year, month, day)
                    var from = new Date(2020, month, 10)
                    var to = new Date(2020, month, 20)

                    control.error = null
                    if(!(from <= date && date <= to)) control.error = 'Must be within '+(month+1)+' 10, 2020 and '+(month+1)+' 20, 2020!'
              
                    break
            }
        });
    }
}