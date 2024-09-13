import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-practice-information",
  standalone: true,
  imports: [InputTextModule, FormsModule, CheckboxModule],
  templateUrl: "./practice-information.component.html",
  styleUrl: "./practice-information.component.scss",
})
export class PracticeInformationComponent {
  value: string;
  checked: boolean = true;
}
