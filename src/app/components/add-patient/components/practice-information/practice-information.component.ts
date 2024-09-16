import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-practice-information",
  standalone: true,
  imports: [InputTextModule, FormsModule, CheckboxModule, CommonModule, ReactiveFormsModule],
  templateUrl: "./practice-information.component.html",
  styleUrl: "./practice-information.component.scss",
})
export class PracticeInformationComponent {
  @Input() name?: string;
  @Input() patientInfoForm!: FormGroup;
  value: string;
  checked: boolean = true;
}
