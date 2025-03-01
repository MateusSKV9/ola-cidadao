import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { HeaderMobileComponent } from "./components/header-mobile/header-mobile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarLeftComponent,
    SidebarRightComponent,
    MainContentComponent,
    NgxSpinnerComponent,
    HeaderMobileComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Olá cidadão';
}
