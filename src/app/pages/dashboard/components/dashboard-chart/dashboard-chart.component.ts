import { Component } from "@angular/core";

@Component({
  selector: "dashboard-chart",
  templateUrl: "./dashboard-chart.component.html",
  styleUrl: "./dashboard-chart.component.scss",
})
export class DashboardChartComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: "#6366F1",
          borderWidth: 4,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42, 50, 25, 12, 48, 56, 76, 42],
        },

        {
          type: "bar",
          label: "Dataset 3",
          backgroundColor: "#FF9F43",
          data: [41, 52, 24, 74, 23, 21, 32, 41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.0,

      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: "transparent",
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
