import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { screeningSchema } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-screenings",
  standalone: true,
  imports: [ReactiveFormsModule, AccordionModule, CheckboxModule, InputTextModule, ButtonModule, CommonModule],
  templateUrl: "./screenings.component.html",
  styleUrl: "./screenings.component.scss",
})
export class ScreeningsComponent {
  screeningForm: FormGroup = this.fb.group({});
  schema = screeningSchema;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.schema.forEach((category) => {
      const categoryGroup = this.fb.group({});
      category.questions.forEach((question) => {
        const questionGroup = this.fb.group({
          inlineCheckbox: [false], // Initialize with false (unchecked)
        });

        // Add form controls for responses
        question.responses.forEach((response) => {
          let control;
          if (response.type === "checkbox") {
            control = this.fb.control(false, response.required ? Validators.required : null);
          } else {
            control = this.fb.control("", response.required ? Validators.required : null);
          }
          questionGroup.addControl(response.name, control);
        });

        categoryGroup.addControl(`question_${question.questionId}`, questionGroup);
      });

      this.screeningForm.addControl(`category_${category.categoryId}`, categoryGroup);
    });
  }

  // Helper function to show or hide responses based on the checkbox state
  showResponses(questionGroup: FormGroup): boolean {
    return questionGroup.get("inlineCheckbox")?.value;
  }

  onSubmit() {
    console.log(this.screeningForm.value);
  }
}
