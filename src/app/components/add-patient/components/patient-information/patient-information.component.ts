import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-patient-information",
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: "./patient-information.component.html",
  styleUrl: "./patient-information.component.scss",
})
export class PatientInformationComponent {
  @Input() name?: string;
  value: string;
}
