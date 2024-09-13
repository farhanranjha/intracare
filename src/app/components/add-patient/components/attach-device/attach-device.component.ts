import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-attach-device",
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: "./attach-device.component.html",
  styleUrl: "./attach-device.component.scss",
})
export class AttachDeviceComponent {
  @Input() name?: string;
  value: string;
}
