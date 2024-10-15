import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { LayoutService } from "./service/app.layout.service";

@Component({
  selector: "app-mini-sidebar",
  templateUrl: "./app.mini-sidebar.component.html",
})
export class AppMiniSidebarComponent implements OnInit {
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
            label: "Add Patient",
            icon: "pi pi-fw pi-user",
            routerLink: ["patient/add"],
          },
        ],
      },
      {
        items: [
          {
            label: "Pending Enrollments",
            icon: "pi pi-th-large",
            routerLink: ["patient/pending-enrollments"],
          },
        ],
      },
      {
        items: [
          {
            label: "Patient Pending Readings",
            icon: "pi pi-user-minus",
            routerLink: ["patient/pending-readings"],
          },
        ],
      },
      {
        items: [
          {
            label: "Readings Not Addressed",
            icon: "pi pi-book",
            routerLink: ["patient/readings-not-addressed"],
          },
        ],
      },
      {
        items: [
          {
            label: "Admissions Report",
            icon: "pi pi-fw pi-folder",
            routerLink: ["/reports/admission-report"],
          },
        ],
      },
      {
        items: [
          {
            label: "Non Adherence Report",
            icon: "pi pi-exclamation-triangle",
            routerLink: ["reports/non-adherence"],
          },
        ],
      },
    ];
  }
}
