import { Moment } from 'moment';
import { IFamilyMember } from 'app/shared/model/family-member.model';

export const enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export const enum Province {
  Alberta = 'Alberta',
  BritishColumbia = 'BritishColumbia',
  Manitoba = 'Manitoba',
  NewBrunswick = 'NewBrunswick',
  NewfoundlandAndLabrador = 'NewfoundlandAndLabrador',
  NovaScotia = 'NovaScotia',
  NorthwestTerritories = 'NorthwestTerritories',
  Nunavut = 'Nunavut',
  Ontario = 'Ontario',
  PrinceEdwardIsland = 'PrinceEdwardIsland',
  Quebec = 'Quebec',
  Saskatchewan = 'Saskatchewan',
  Yukon = 'Yukon'
}

export const enum ImmigrationStatus {
  Citizen = 'Citizen',
  PermanentResidence = 'PermanentResidence',
  Visitor = 'Visitor',
  StudyPermit = 'StudyPermit',
  WorkPermit = 'WorkPermit',
  WorkingHoliday = 'WorkingHoliday'
}

export const enum Baptism {
  None = 'None',
  InfantBaptism = 'InfantBaptism',
  Baptism = 'Baptism',
  Confirmation = 'Confirmation'
}

export const enum DutyStatus {
  None = 'None',
  GeneralServant = 'GeneralServant',
  Deacon = 'Deacon',
  OrdainedDeacon = 'OrdainedDeacon',
  Elder = 'Elder',
  InternPastor = 'InternPastor',
  Missionary = 'Missionary',
  Paster = 'Paster',
  PasterWife = 'PasterWife'
}

export const enum Volunteer {
  FrontDesk = 'FrontDesk',
  Choir = 'Choir',
  Kitchen = 'Kitchen',
  EnglishMissionaryTeacher = 'EnglishMissionaryTeacher',
  KoreanMissionaryTeacher = 'KoreanMissionaryTeacher',
  Intercession = 'Intercession',
  Propagation = 'Propagation',
  IT = 'IT',
  Broadcast = 'Broadcast',
  SeniorMinistry = 'SeniorMinistry',
  Administration = 'Administration',
  Praise = 'Praise',
  Parking = 'Parking',
  FinancialManagement = 'FinancialManagement',
  FacilityManeger = 'FacilityManeger',
  Gardening = 'Gardening',
  Design = 'Design',
  ETC = 'ETC'
}

export interface ICreateMember {
  id?: number;
  previousRegister?: string;
  korName?: string;
  engName?: string;
  birthday?: Moment;
  gender?: Gender;
  firstStreet?: string;
  secondStreet?: string;
  city?: string;
  province?: Province;
  postalCode?: string;
  cellPhone?: string;
  residentialPhone?: string;
  emailAddress?: string;
  profession?: string;
  companyName?: string;
  firstLicenseplate?: string;
  secondLicenseplate?: string;
  immigrationStatus?: ImmigrationStatus;
  baptismType?: Baptism;
  baptismYear?: string;
  baptismChurch?: string;
  dutyStatus?: DutyStatus;
  prevChurch?: string;
  instructor?: string;
  volunteer?: Volunteer;
  familyMembers?: IFamilyMember[];
}

export const defaultValue: Readonly<ICreateMember> = {};
