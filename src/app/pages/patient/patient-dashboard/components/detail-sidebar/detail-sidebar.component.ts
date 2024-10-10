import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { SidebarModule } from "primeng/sidebar";

@Component({
  selector: "detail-sidebar",
  standalone: true,
  imports: [DividerModule, SidebarModule, CommonModule],
  templateUrl: "./detail-sidebar.component.html",
  styleUrl: "./detail-sidebar.component.scss",
})
export class DetailSidebarComponent {
  @Input() displayModal: boolean = false;
  @Input() selectedNote: any = null;
  @Input() showBiometrics: boolean = true;
  @Input() showBp: boolean = true;
  @Output() displayModalChange = new EventEmitter<boolean>();

  closeSidebar() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
  }
}
