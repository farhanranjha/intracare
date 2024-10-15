import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { LayoutService } from "./service/app.layout.service";
import { ISidebarItems, sidebarItems } from "./sidebar-items";

@Component({
  selector: "app-mini-sidebar",
  templateUrl: "./app.mini-sidebar.component.html",
})
export class AppMiniSidebarComponent {
  flattenMenu(menu) {
    const result = [];

    function flatten(items) {
      items.forEach((item) => {
        if (item.items) {
          flatten(item.items);
        } else {
          result.push({ items: [item] });
        }
      });
    }

    menu.forEach((section) => {
      flatten(section.items);
    });

    return result;
  }

  model: ISidebarItems[] = this.flattenMenu(sidebarItems);

  constructor(public layoutService: LayoutService) {}
}
