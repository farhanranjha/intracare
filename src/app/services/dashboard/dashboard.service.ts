import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface DashboardRow {
  id: number;
  name: string;
  country: { name: string; code: string };
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: { name: string; image: string };
  balance: number;
}

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardData(
    page: number = 1,
    pageSize: number = 10,
    sortField: string = "id",
    sortOrder: "asc" | "desc" = "asc",
    searchTerm: string = "",
  ): Observable<{ data: DashboardRow[]; total: number }> {
    return this.http.get<DashboardRow[]>("/assets/data/dashboard-data.json").pipe(
      map((data) => {
        // Filter data
        if (searchTerm) {
          data = data.filter((item) => Object.values(item).join(" ").toLowerCase().includes(searchTerm.toLowerCase()));
        }

        // Sort data
        data = data.sort((a, b) => {
          const valueA = a[sortField as keyof DashboardRow];
          const valueB = b[sortField as keyof DashboardRow];

          // if (typeof valueA === "string") {
          //   return sortOrder === "asc"
          //     ? valueA.localeCompare(valueB as string)
          //     : valueB.localeCompare(valueA as string);
          // }
          return sortOrder === "asc" ? +valueA - +valueB : +valueB - +valueA;
        });

        const total = data.length;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = data.slice(start, end);

        return { data: paginatedData, total };
      }),
    );
  }
}
