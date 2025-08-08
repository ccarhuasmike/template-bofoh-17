import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    imports: [CommonModule, PanelMenuModule, RouterModule],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
 @Input() collapsed = false;     
  
 selectedRoute = '';
 items = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/dashboard'
  },
  {
    label: 'Usuarios',
    icon: 'pi pi-users',
    expanded: false,
    children: [
      {
        label: 'Listado',
        icon: 'pi pi-list',
        route: '/usuarios/listado',
      },
      {
        label: 'Permisos',
        icon: 'pi pi-lock',
        expanded: false,
        children: [
          {
            label: 'Roles',
            icon: 'pi pi-user-edit',
            route: '/usuarios/roles',
          },
          {
            label: 'Grupos',
            icon: 'pi pi-users',
            route: '/usuarios/grupos',
          },
        ]
      }
    ]
  },
  {
    label: 'Productos',
    icon: 'pi pi-box',
    expanded: false,
    children: [
      {
        label: 'Inventario',
        icon: 'pi pi-table',
        route: '/productos/inventario'
      },
      {
        label: 'Categorías',
        icon: 'pi pi-tags',
        route: '/productos/categorias'
      },
      {
        label: 'Marcas',
        icon: 'pi pi-bookmark',
        route: '/productos/marcas'
      }
    ]
  },
  {
    label: 'Ventas',
    icon: 'pi pi-shopping-cart',
    expanded: false,
    children: [
      {
        label: 'Pedidos',
        icon: 'pi pi-list',
        route: '/ventas/pedidos'
      },
      {
        label: 'Facturación',
        icon: 'pi pi-file-invoice',
        route: '/ventas/facturacion'
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-line',
        expanded: false,
        children: [
          {
            label: 'Ventas por producto',
            icon: 'pi pi-chart-bar',
            route: '/ventas/reportes/producto'
          },
          {
            label: 'Ventas por cliente',
            icon: 'pi pi-chart-pie',
            route: '/ventas/reportes/cliente'
          }
        ]
      }
    ]
  },
  {
    label: 'Configuración',
    icon: 'pi pi-cog',
    expanded: false,
    children: [
      {
        label: 'Parámetros',
        icon: 'pi pi-sliders-h',
        route: '/configuracion/parametros'
      },
      {
        label: 'Integraciones',
        icon: 'pi pi-share-alt',
        route: '/configuracion/integraciones'
      }
    ]
  },
  {
    label: 'Soporte',
    icon: 'pi pi-info-circle',
    route: '/soporte'
  }
];


  constructor(private router: Router) {
    this.selectedRoute = this.router.url;

    this.router.events.subscribe((event: any) => {
      if (event?.url) {
        this.selectedRoute = event.url;
      }
    });
  }

  onItemClick(item: any): void {
    if (item.children) {
      item.expanded = !item.expanded;
    } else if (item.route) {
      this.router.navigate([item.route]);
      this.selectedRoute = item.route;
    }
  }

}