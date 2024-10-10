import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { SidebarModule } from "primeng/sidebar";

@Component({
  selector: "notes-sidebar",
  standalone: true,
  imports: [DividerModule, SidebarModule, CommonModule],
  templateUrl: "./notes-sidebar.component.html",
  styleUrl: "./notes-sidebar.component.scss",
})
export class NotesSidebarComponent {
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
