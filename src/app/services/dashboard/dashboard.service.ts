import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IKeyValue } from "src/app/types/common-types";

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

interface IPatientFilterRequest {
  first?: number;
  rows?: number;
  sortField?: string;
  sortOrder?: 1 | -1 | null;
  filters?: {
    [field: string]: {
      value: string | string[] | number[] | null;
      matchMode: "startsWith" | "endsWith" | "dateIs" | "equals";
      operator: "and" | "or";
    }[];
  };
  globalFilter?: string | null;
}
interface IPatientFilterResponse {
  sysRegistrationRequestId: number;
  sysUpdateBy: number;
  date: string;
  patientName: string;
  patientDob: string;
  cellPhoneNumber: string | null;
  lkpCommunicationMethodId: number;
  sysRefProviderId: number;
  deviceTypeId: number;
  lkpRequestStatusId: number;
  sysRefClinicId: number;
  practiceName: {
    id: number;
    name: string;
  };
  deviceType: {
    id: number;
    name: string;
  };
  consent?: {
    id: number;
    name: string;
  } | null;
  programType?: string | null;
  status?: string | null;
}

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  private issuerUri = import.meta.env.NG_APP_KEYCLOAK_BASE_URL;

  getDashboardData(payload: LazyLoadEvent): Observable<{ data: IPatientFilterResponse[]; total: number }> {
    return this.http.post<any>(`${this.issuerUri}/data/filter`, payload).pipe(
      map((data) => {
        return { data: data.data, total: data.total_records };
      }),
    );
  }

  getClinics(): Observable<{ data: IKeyValue[] }> {
    return this.http.get<any>(`${this.issuerUri}/data/clinics`).pipe(
      map((data) => ({
        data: data.map((item) => ({
          label: item.name,
          value: item.id,
          checked: false,
        })),
      })),
    );
  }
  getStatuses(): Observable<{ data: IKeyValue[] }> {
    return this.http.get<any>(`${this.issuerUri}/data/statuses`).pipe(
      map((data) => ({
        data: data.map((item) => ({
          label: item.name,
          value: item.id,
          checked: false,
        })),
      })),
    );
  }
  getProgramTypes(): Observable<{ data: IKeyValue[] }> {
    return this.http.get<any>(`${this.issuerUri}/data/programTypes`).pipe(
      map((data) => ({
        data: data.map((item) => ({
          label: item.name,
          value: item.id,
          checked: false,
        })),
      })),
    );
  }
  getDeviceTypes(): Observable<{ data: IKeyValue[] }> {
    return this.http.get<any>(`${this.issuerUri}/data/DeviceTypes`).pipe(
      map((data) => ({
        data: data.map((item) => ({
          label: item.name,
          value: item.id,
          checked: false,
        })),
      })),
    );
  }
  getConsentTypes(): Observable<{ data: IKeyValue[] }> {
    return this.http.get<any>(`${this.issuerUri}/data/Consents`).pipe(
      map((data) => ({
        data: data.map((item) => ({
          label: item.name,
          value: item.id,
          checked: false,
        })),
      })),
    );
  }
}
