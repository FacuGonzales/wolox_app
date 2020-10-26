import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading';
import { NavComponent } from './nav';
import { SuccessComponent } from './success';
import { ErrorComponent } from './error';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LoadingComponent,
        NavComponent,
        SuccessComponent,
        ErrorComponent
    ],
    providers: [],
    exports: [
        LoadingComponent,
        NavComponent,
        SuccessComponent,
        ErrorComponent
    ]
})
export class SharedModule { }
