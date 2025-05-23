import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { BadgeModule } from "primeng/badge";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { SidebarModule } from "primeng/sidebar";
import { AppFooterComponent } from "./app.footer.component";
import { AppMenuComponent } from "./app.menu.component";
import { AppMenuitemComponent } from "./app.menuitem.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { AppSidebarComponent } from "./app.sidebar.component";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { AppMiniSidebarComponent } from "./app.mini-sidebar.component";

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppLayoutComponent,
    AppMiniSidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    ButtonModule,
    MenuModule,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
