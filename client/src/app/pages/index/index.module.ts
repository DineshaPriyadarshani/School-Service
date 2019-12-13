import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
    declarations: [
        MenuBarComponent,
        NavBarComponent,
        HomeComponent
    ],
    exports: [
        NavBarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class IndexModule { }
