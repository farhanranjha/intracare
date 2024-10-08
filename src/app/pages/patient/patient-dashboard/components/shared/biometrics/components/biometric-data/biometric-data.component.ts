import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { biometricsMockData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "biometric-data",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./biometric-data.component.html",
  styleUrl: "./biometric-data.component.scss",
})
export class BiometricDataComponent {
  mockData = biometricsMockData;
}
