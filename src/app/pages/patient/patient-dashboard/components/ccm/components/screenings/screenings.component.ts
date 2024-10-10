import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { screeningSchema } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-screenings",
  standalone: true,
  imports: [CommonModule, ButtonModule, SidebarModule, DynamicFormComponent],
  templateUrl: "./screenings.component.html",
  styleUrl: "./screenings.component.scss",
})
export class ScreeningsComponent {
  sidebarVisible: boolean = true;
  screeningSchema = screeningSchema;

  handleFormSubmit(formValue: any) {
    console.log("Form submitted with value:", formValue);
  }
}
