export interface IDeviceTypes {
  type: string;
  issueDate: string;
  serial: string;
  active: boolean;
}
export interface IPendingEnrollments {
  id: number;
  date: string;
  name: string;
  dob: string;
  practice: string;
  deviceType: string;
  programType: string[];
  status: string;
  progress: number;
  consent: string;
}
export interface IPendingReadings {
  id: number;
  image: string;
  dob: string;
  name: string;
  type: string[];
  medicare: string;
  practice: string;
  provider: string;
  date: string;
  trackingStatus: string;
  shipped: boolean;
  trackingDescription: string;
}
export interface IReadingsNotAddressed {
  id: number;
  image: string;
  name: string;
  practice: string;
  date: string;
  readingType: string;
  reading: string;
  stage: string;
  status: boolean;
}
