import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { SidebarModule } from "primeng/sidebar";
import { TabViewModule } from "primeng/tabview";
import { SidebarService } from "src/app/services/sidebar/sidebar.service";

@Component({
  selector: "app-notes-sidebar",
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    CommonModule,
    DividerModule,
    TabViewModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: "./notes-sidebar.component.html",
  styleUrl: "./notes-sidebar.component.scss",
})
export class NotesSidebarComponent {
  selectedDropdownOption: string = "actions";
  sidebarVisible: boolean = false;
  addingNote: boolean = false;
  newNote = { text: "" };
  templateContent: string = "";
  isTemplateActive: boolean = false;

  customTemplateContent: string = "";
  generalContent: string = "";
  bpContent: string = "";

  constructor(private sidebarService: SidebarService) {}
  ngOnInit() {
    this.sidebarService.sidebarVisible$.subscribe((isVisible) => {
      this.sidebarVisible = isVisible;
    });
  }

  actions = [
    { label: "Successful interactive communication", selected: false },
    { label: "Call1: LVM", selected: false },
    { label: "Call2: LVM", selected: false },
    { label: "Call/Text1", selected: false },
    { label: "Call/Text2", selected: false },
    { label: "Text 1 Sent", selected: false },
    { label: "Text 2 Sent", selected: false },
    { label: "Text: Received", selected: false },
    { label: "Email: Sent", selected: false },
    { label: "Email: Received", selected: false },
    { label: "PCP Outreach", selected: false },
    { label: "Professional Outreach", selected: false },
    { label: "Unable to Reach (UTR)", selected: false },
  ];

  dropdownOptions = [
    { label: "Actions", value: "actions" },
    { label: "Custom Template", value: "customTemplate" },
    { label: "General", value: "general" },
    { label: "BP", value: "bp" },
  ];

  generalNotes = [
    { text: "Biometric review complete, continuing to monitor." },
    { text: "Engagement call with patient, requested daily blood pressure monitoring with BLOOD PRESSURE cuff." },
    { text: "Engagement call, left message for return call." },
  ];

  bpCategories = [
    {
      name: "CRITICAL READINGS",
      expanded: false,
      items: ["High BP", "Low BP"],
    },
    {
      name: "EDUCATION & INTERVENTIONS",
      expanded: false,
      items: ["Blood pressure education"],
    },
    {
      name: "ENGAGEMENT",
      expanded: false,
      items: ["Patient engagement for blood pressure control"],
    },
    {
      name: "MEDICATION",
      expanded: false,
      items: ["Medication adjustment for blood pressure control"],
    },
    {
      name: "READINGS",
      expanded: false,
      items: ["BP Readings"],
    },
    {
      name: "RESOURCES",
      expanded: false,
      items: ["BP Resources for patient"],
    },
  ];

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }

  addToNote(note: any) {
    console.log("Add note:", note);
  }

  notes = [
    {
      author: "Ajmal Shami",
      date: new Date("2024-09-24T18:03:00"),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin laoreet pulvinar. Mauris feugiat finibus nulla, et aliquam dolor viverra ac. Mauris dignissim nibh eleifend erat dictum scelerisque.",
    },
    {
      author: "Ajmal Shami",
      date: new Date("2024-09-24T01:53:00"),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin laoreet pulvinar.",
    },
  ];

  toggleAddNote() {
    this.addingNote = !this.addingNote;
  }

  toggleTemplate() {
    this.isTemplateActive = !this.isTemplateActive;
  }

  submitNote() {
    if (this.newNote.text.trim()) {
      this.notes.push({
        author: "Ajmal Shami",
        date: new Date(),
        text: this.newNote.text,
      });
      this.newNote.text = "";
      this.templateContent = "";
      this.addingNote = false;
    }
  }

  resetSidebar() {
    this.sidebarService.setSidebarVisible(false);
    this.addingNote = false;
    this.isTemplateActive = false;
    this.selectedDropdownOption = "actions";
    this.newNote.text = "";
    this.templateContent = "";
  }
}
