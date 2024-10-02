import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "sidebar-router",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sidebar-router.component.html",
  styleUrl: "./sidebar-router.component.scss",
})
export class SidebarRouterComponent {
  @Input() routes: IKeyValue[];
  @Output() tabChanged = new EventEmitter<IKeyValue>();
  @Input() currentlyActive: IKeyValue;

  setActive(route: IKeyValue) {
    this.currentlyActive = route;
    this.tabChanged.emit(this.currentlyActive);
  }

  isActive(route: IKeyValue): boolean {
    return this.currentlyActive?.value === route.value;
  }
}
