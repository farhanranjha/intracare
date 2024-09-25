import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  standalone: true,
  imports: [CommonModule, ButtonModule],
})
export class ErrorComponent {}
