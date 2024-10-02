import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "tab-router",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./tab-router.component.html",
  styleUrl: "./tab-router.component.scss",
})
export class TabRouterComponent {
  @Input() routes: IKeyValue[] = [];
}
