import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading';
import { NavComponent } from './nav';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LoadingComponent,
        NavComponent
    ],
    providers: [],
    exports: [
        LoadingComponent,
        NavComponent
    ]
})
export class SharedModule { }
