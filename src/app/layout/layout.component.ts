import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent]
})
export class LayoutComponent {
    isSidebarOpen = window.innerWidth >= 768;
}