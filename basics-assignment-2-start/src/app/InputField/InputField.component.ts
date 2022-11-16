import { Component } from '@angular/core';

@Component({
    selector: 'app-input-field',
    templateUrl: './InputField.component.html',
    styleUrls: ['../app.component.css']
})

export class InputField {
    username:string = ""
    isUsernameEmpty:boolean = true;

    constructor(){
    }

    checkEmptiness(event: Event){
        if ((<HTMLElement>event.target).value !== ""){
            this.isUsernameEmpty = false;
        } else{
            this.isUsernameEmpty = true;
        }
    }

    clearInput(){
        this.username = ""
        this.isUsernameEmpty = true
    }
}

