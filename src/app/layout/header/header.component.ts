import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SplitButtonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  @Input() userName: string = 'Joel Ampuero';

  userMenuItems: MenuItem[] = [
    {
      label: 'Editar perfil',
      icon: 'pi pi-user-edit',
      command: () => this.editProfile(),
    },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
    },
  ];

  editProfile() {
    console.log('Editar perfil');
  }

  logout() {
    console.log('Cerrar sesión');
  }
}