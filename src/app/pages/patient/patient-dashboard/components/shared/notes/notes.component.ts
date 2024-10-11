import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { IKeyValue } from "src/app/types/common-types";
import { ReadingNotesComponent } from "./components/reading-notes/reading-notes.component";
import { GeneralNotesComponent } from "./components/general-notes/general-notes.component";
import { TimerNotesComponent } from "./components/timer-notes/timer-notes.component";
import { DefaultAllComponent } from "./components/default-all/default-all.component";
import { PatientOnboardingComponent } from "./components/patient-onboarding/patient-onboarding.component";

@Component({
  selector: "app-notes",
  standalone: true,
  imports: [
    SidebarRouterComponent,
    CommonModule,
    ReadingNotesComponent,
    GeneralNotesComponent,
    TimerNotesComponent,
    DefaultAllComponent,
    PatientOnboardingComponent,
  ],
  templateUrl: "./notes.component.html",
})
export class NotesComponent implements OnInit {
  source: string;
  routes: IKeyValue[] = [
    { label: "Default / All", value: "default-all" },
    { label: "General Notes", value: "general-notes" },
    { label: "Reading Notes", value: "reading-notes" },
    { label: "Timer Notes", value: "timer-notes" },
    { label: "Patient Onboarding", value: "patient-onboarding" },
  ];
  activeTab: IKeyValue = this.routes[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }

  onTabChange(tab: IKeyValue) {
    this.activeTab = tab;
  }
}
