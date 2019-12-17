import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    declarations: [
        IndexComponent,
        MenuBarComponent,
        NavBarComponent
    ],
    exports: [
        MenuBarComponent,
        NavBarComponent
    ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        FlashMessagesModule,
    ]
})
export class IndexModule { }
