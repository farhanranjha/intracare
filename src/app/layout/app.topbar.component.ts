import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MenuItem } from "primeng/api";
import { LayoutService } from "./service/app.layout.service";
import { Store } from "@ngrx/store";
import { remove } from "../store/actions/user.action";
import { Router } from "@angular/router";

@Component({
  selector: "app-topbar",
  templateUrl: "./app.topbar.component.html",
})
export class AppTopBarComponent implements OnInit {
  items!: MenuItem[];

  dropdownVisible = false;

  @ViewChild("menubutton") menuButton!: ElementRef;
  @ViewChild("topbarmenubutton") topbarMenuButton!: ElementRef;
  @ViewChild("topbarmenu") menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: "Profile",
        icon: "pi pi-user",
        // command: () => this.goToProfile(),
        disabled: false,
      },
      {
        label: "Logout",
        icon: "pi pi-sign-out",
        command: () => this.Logout(),
        disabled: false,
      },
    ];
  }

  changeTheme() {
    this.layoutService.changeTheme();
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  Logout() {
    console.log("Logout");
    this.store.dispatch(remove());
    this.router.navigate(["/login"]);
  }
}
