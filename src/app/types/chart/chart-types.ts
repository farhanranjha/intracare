export interface ChartData {
  labels: string[];
  datasets: [
    {
      data: number[];
      backgroundColor: string[];
      color: string[];
      hoverBackgroundColor: string[];
      visibility: boolean[];
    },
  ];
}

export interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: Legend;
  };
  layout: {
    padding: Padding;
  };
}

export interface Legend {
  display: boolean;
}

export interface Padding {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
