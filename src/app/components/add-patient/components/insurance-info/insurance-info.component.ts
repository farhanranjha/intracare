import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-insurance-info",
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule],
  templateUrl: "./insurance-info.component.html",
  styleUrl: "./insurance-info.component.scss",
})
export class InsuranceInfoComponent {
  @Input() name?: string;
  value: string;
}
