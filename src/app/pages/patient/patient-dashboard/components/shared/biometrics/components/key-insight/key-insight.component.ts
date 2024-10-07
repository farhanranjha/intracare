import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
@Component({
  selector: "app-key-insight",
  standalone: true,
  imports: [DropdownModule, ChartModule, FormsModule],
  templateUrl: "./key-insight.component.html",
  styleUrl: "./key-insight.component.scss",
})
export class KeyInsightComponent {
  chartData: any;
  chartOptions: any;
  dropdownItems: any[];
  selectedItem: string;

  ngOnInit(): void {
    this.dropdownItems = [
      { label: "Blood Pressure", value: "Blood Pressure" },
      { label: "Blood Glucose", value: "Blood Glucose" },
      { label: "Cholesterol", value: "Cholesterol" },
      { label: "Weight", value: "Weight" },
      { label: "Heart Rate", value: "Heart Rate" },
      { label: "Nutrition", value: "Nutrition" },
      { label: "Oxygen Saturation", value: "Oxygen Saturation" },
      { label: "Temperature", value: "Temperature" },
    ];

    this.selectedItem = "Blood Pressure";
    this.updateChart();
  }

  updateChart() {
    const randomData = () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

    this.chartData = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: `${this.selectedItem} - Systolic`,
          data: randomData(),
          borderColor: "#f542a3",
          fill: false,
        },
        {
          label: `${this.selectedItem} - Diastolic`,
          data: randomData(),
          borderColor: "#42a5f5",
          fill: false,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Days of the Week",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: this.selectedItem,
          },
          suggestedMin: 0,
          suggestedMax: 120,
        },
      },
    };
  }
}
