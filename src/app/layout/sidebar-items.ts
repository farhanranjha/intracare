type ISidebarItem = {
  label: string;
  icon: string;
  routerLink?: string[];
  items?: ISidebarItem[];
};

export type ISidebarItems = {
  items: ISidebarItem[];
};

export const sidebarItems: ISidebarItems[] = [
  {
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: [""] }],
  },
  {
    items: [
      {
        label: "Patient",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Add Patient",
            icon: "pi pi-fw pi-user",
            routerLink: ["patient/add"],
          },
          {
            label: "Pending Enrollments",
            icon: "pi pi-th-large",
            routerLink: ["patient/pending-enrollments"],
          },
          {
            label: "Patient Pending Readings",
            icon: "pi pi-user-minus",
            routerLink: ["patient/pending-readings"],
          },
          {
            label: "Readings Not Addressed",
            icon: "pi pi-book",
            routerLink: ["patient/readings-not-addressed"],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Reporting",
        icon: "pi pi-fw pi-chart-bar",
        items: [
          {
            label: "Admissions Report",
            icon: "pi pi-fw pi-folder",
            routerLink: ["/reports/admission-report"],
          },
          {
            label: "Non Adherence Report",
            icon: "pi pi-exclamation-triangle",
            routerLink: ["/reports/non-adherence"],
          },
          {
            label: "Billing Reports",
            icon: "pi pi-money-bill",
            routerLink: ["/reports/billing-reports"],
          },
          {
            label: "Care Management",
            icon: "pi pi-money-bill",
            routerLink: ["/reports/care-management"],
          },
          {
            label: "Score Card",
            icon: "pi pi-id-card",
            routerLink: ["/reports/score-card"],
          },
        ],
      },
    ],
  },
];
