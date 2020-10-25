import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ]
})
export class NavModule { }
