import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "biometric-data",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./biometric-data.component.html",
  styleUrl: "./biometric-data.component.scss",
})
export class BiometricDataComponent {
  mockData = [
    {
      metricName: "Blood Glucose",
      value: "133",
      metricUnit: "mg/DL",
      icon: "assets/layout/styles/icons/glucometer.png",
    },
    {
      metricName: "Blood Pressure",
      value: "133",
      metricUnit: "mmHg",
      icon: "assets/layout/styles/icons/blood-pressure.png",
    },
    {
      metricName: "Weight",
      value: "133",
      metricUnit: "lbs",
      icon: "assets/layout/styles/icons/weight-scales.png",
    },
    {
      metricName: "Oxygen Saturation",
      value: "133",
      metricUnit: "SpO2",
      icon: "assets/layout/styles/icons/oxygen-saturation.png",
    },
    {
      metricName: "Heart Rate",
      value: "133",
      metricUnit: "bpm",
      icon: "assets/layout/styles/icons/heart-rate.png",
    },
    {
      metricName: "Cholestrol",
      value: "133",
      metricUnit: "mg/DL",
      icon: "assets/layout/styles/icons/cholesterol.png",
    },
    {
      metricName: "Temprature",
      value: "133",
      metricUnit: "Farenheit",
      icon: "assets/layout/styles/icons/thermometer.png",
    },
  ];
}
