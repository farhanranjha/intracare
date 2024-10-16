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

export interface IAdmissionReport {
  id: number;
  name: string;
  enrollmentDate: string;
  practiceName: string;
  deviceType: string;
  lastTransmission: string;
  deviceSerialNumber: string;
  registeredBy: string;
  image: string;
}

export interface IReadingCompliance {
  id: number;
  image: string;
  patientName: string;
  practiceName: string;
  startDate: string;
  weeklyTarget: string;
  dor: number;
  dorNeeded: number;
  potentialReadingDays: number;
  timeSpent: string;
  previousMonthsBillingStatus: { month: string; billable: boolean }[];
  currentBillingStatus: string;
}
