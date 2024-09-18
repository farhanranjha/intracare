import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-diagnosis",
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule],
  templateUrl: "./diagnosis.component.html",
  styleUrl: "./diagnosis.component.scss",
})
export class DiagnosisComponent {
  @Input() name?: string;
  value: string;
}
