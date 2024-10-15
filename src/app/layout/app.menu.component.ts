import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { LayoutService } from "./service/app.layout.service";
import { sidebarItems } from "./sidebar-items";

@Component({
  selector: "app-menu",
  templateUrl: "./app.menu.component.html",
})
export class AppMenuComponent {
  model: any[] = sidebarItems;

  constructor(public layoutService: LayoutService) {}
}
