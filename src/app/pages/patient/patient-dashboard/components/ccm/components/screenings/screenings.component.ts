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
          inlineCheckbox: [false], // Initialize inlineCheckbox as false
        });

        // Handle responses, adding controls dynamically
        question.responses.forEach((response) => {
          if (response.type === "checkbox") {
            // Create controls for each option in the checkbox group
            response.option.forEach((option) => {
              questionGroup.addControl(option, this.fb.control(false, response.required ? Validators.required : null));
            });
          } else {
            questionGroup.addControl(
              response.name,
              this.fb.control("", response.required ? Validators.required : null),
            );
          }
        });

        categoryGroup.addControl(`question_${question.questionId}`, questionGroup);
      });

      this.screeningForm.addControl(`category_${category.categoryId}`, categoryGroup);
    });
  }

  // Toggle the selected checkbox based on allowMultipleSelections flag at the response level
  onCheckboxChange(event: any, response: any, selectedOption: string, questionGroup: FormGroup) {
    if (!response.allowMultipleSelections) {
      // If multiple selections are not allowed, uncheck all other checkboxes
      response.option.forEach((option: string) => {
        if (option !== selectedOption) {
          // Uncheck other checkboxes
          questionGroup.get(option)?.setValue(false);
        }
      });

      // Explicitly set the selected option to true
      questionGroup.get(selectedOption)?.setValue(true);
    }
  }

  // Helper function to show or hide responses based on the checkbox state
  showResponses(questionGroup: FormGroup): boolean {
    return questionGroup.get("inlineCheckbox")?.value;
  }

  onSubmit() {
    console.log(this.screeningForm.value);
  }
}
