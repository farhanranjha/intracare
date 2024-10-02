import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  date: string; // ISO date string
  patientName: string;
  patientDob: string; // ISO date string
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

  getDashboardData(payload): Observable<{ data; total: number }> {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQZThRek5lSlVTS2t3WHlValF4LTNEc3lSWlM1ZkJjU0d6NktIMVNsZVNzIn0.eyJleHAiOjE3Mjc4NjM1MDgsImlhdCI6MTcyNzg2MzIwOCwianRpIjoiZThlYjVjYmEtZmMzNS00NDkzLWI5NjUtNTNlOGE0NmM2ZTE4IiwiaXNzIjoiaHR0cHM6Ly9jcmgtYXlkbC5jb20vcmVhbG1zL0RFVkludHJhQ2FyZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJlMzhiNDk5OC00Yzc0LTQyOGUtODgyMy04ZWQ2M2JlNTAyNzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJycG0tY2xpZW50LWRldiIsInNlc3Npb25fc3RhdGUiOiI4ZWNmYzViMy04YzhkLTQ4ZDItODllZC03MTZmNDYzZjFlNTgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWRldmludHJhY2FyZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjhlY2ZjNWIzLThjOGQtNDhkMi04OWVkLTcxNmY0NjNmMWU1OCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiRmFyaGFuIFJhbmpoYSIsInByZWZlcnJlZF91c2VybmFtZSI6ImZhcmhhbi5yYW5qaGFAcmlwZXNlZWQuaW8iLCJnaXZlbl9uYW1lIjoiRmFyaGFuIiwiZmFtaWx5X25hbWUiOiJSYW5qaGEiLCJlbWFpbCI6ImZhcmhhbi5yYW5qaGFAcmlwZXNlZWQuaW8ifQ.gAn3Dl1byu7hVo5Yz6eQWuZ-fNMNwLetdmUkcv_uQBpXR1NPbIHu78r6AGwhUFfxBJAHmgz2YekRMwxGsoRi2M8W-Cb6j3CSI2TLfvqCx7sB9eRqxLG9ETH-TihNYSG-zqBy3MEC6thuEHIqjcql2pQCRj9w2dCB5AiWN8HOJ519O5JJf0LGUGGtzMWouyLfw1LQ3i9SVBjibRxiLsPERXDLH0keP64ig3RaqVBHyAGy6-tHTczrLBWOqzYYhNdliPAtYMBj6D6MhE6QJkIdIJn_W3ORdqOKZzH0guJ4c1lRs5VpFLSh8arZsMGdLxDyjd6K_IQpx5zZSZz-Z2xT9Q`,
    });
    return this.http.post<any>(`${this.issuerUri}/data/filter`, payload, { headers }).pipe(
      map((data) => {
        console.log("===data===> ", data);

        return { data, total: 50 };
      }),
    );
  }
}
