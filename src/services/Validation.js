export class Validation {
    static check(controls){
        controls.forEach(control => {
            switch(control.type) {
                case 'text':
                    if(!control.value) control.error = 'Must not be emppty!';
                    break;
            }
        });
    }
}