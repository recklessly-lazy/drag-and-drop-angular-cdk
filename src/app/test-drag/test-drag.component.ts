import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {ChangeDetectionStrategy} from '@angular/core';



@Component({
    selector: "app-test-drag",
    templateUrl: "./test-drag.component.html",
    styleUrls: ["./test-drag.component.css"],
})
export class TestDragComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
    todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

    inProgress: string[] = ["Coding"];
    done = [
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog",
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog",
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog",
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            console.log(
                "current index:",
                event.currentIndex,
                " prev index:",
                event.previousIndex,
                " ,data:",
                event.previousContainer.data
            );
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
