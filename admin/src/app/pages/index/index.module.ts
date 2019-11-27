import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
      IndexComponent,
      MenuBarComponent,
      NavBarComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
  ]
})
export class IndexModule { }
