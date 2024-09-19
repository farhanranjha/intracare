import { Component } from "@angular/core";
import { ColumnConfig } from "./../table/table.component";

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  columns: ColumnConfig[] = [
    { name: "Name", field: "name", filterType: "none" },
    { name: "Country", field: "country.name", filterType: "text" },
    {
      name: "Representative",
      field: "representative.name",
      filterType: "custom",
      options: ["Ioni Bowcher", "Farhan"],
      selectedOptions: [],
    },
    { name: "Date", field: "date", filterType: "date" },
    { name: "Balance", field: "balance", filterType: "numeric" },
  ];

  rowData = [
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
  ];
}
