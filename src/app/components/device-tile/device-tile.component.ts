import { Component, Input } from "@angular/core";

@Component({
  selector: "device-tile",
  standalone: true,
  imports: [],
  templateUrl: "./device-tile.component.html",
  styleUrl: "./device-tile.component.scss",
})
export class DeviceTileComponent {
  @Input() type: string;
  @Input() serial: string;
  @Input() issueDate: string;
}
