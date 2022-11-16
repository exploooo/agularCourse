import { Component } from '@angular/core'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styles:[`
        .white-text{
            color: white;
        }
    `]
})

export class Article{
    content:string = "la la lala la it's all around the world!";
    contentVisible:boolean = false;
    clickCounter:number = 1;
    detailClickLog:Array<string> = []

    toggleContentVisible(){
        if(this.contentVisible == false){
            this.contentVisible = true;
        } else{
            this.contentVisible = false;
        }
    }

    onClick(event: Event){
        this.toggleContentVisible();
        this.detailClickLog.push('click no. ' + this.clickCounter + ', timestamp: ' + (event.timeStamp/1000).toPrecision(4) + ' sec')
        this.clickCounter++;
    }
}