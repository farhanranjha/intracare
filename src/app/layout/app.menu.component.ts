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
        label: "Home",
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
                routerLink: ["patient/add-patient"],
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
    ];
  }
}
