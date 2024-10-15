import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { LayoutService } from "./service/app.layout.service";

@Component({
  selector: "app-menu",
  templateUrl: "./app.menu.component.html",
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
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
                label: "Billing Reports",
                icon: "pi pi-money-bill",
                items: [
                  {
                    label: "Medicare",
                    icon: "pi pi-shield",
                    items: [
                      {
                        label: "RPM",
                        icon: "pi pi-mobile",
                        routerLink: ["/reports/rpm-billing"],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Non Adherence Report",
                icon: "pi pi-exclamation-triangle",
                routerLink: ["/reports/non-adherence"],
              },
            ],
          },
        ],
      },
    ];
  }
}
