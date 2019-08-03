import { Moment } from 'moment';
import { IRegisterMember } from 'app/shared/model/register-member.model';

export const enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
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

export interface IFamilyMember {
  id?: number;
  relationStatus?: string;
  previousRegister?: string;
  korName?: string;
  engName?: string;
  birthday?: Moment;
  gender?: Gender;
  profession?: string;
  companyName?: string;
  cellPhone?: string;
  emailAddress?: string;
  churchServed?: string;
  yearServed?: string;
  dutyStatus?: DutyStatus;
  prevChurch?: string;
  volunteer?: Volunteer;
  registerMember?: IRegisterMember;
}

export const defaultValue: Readonly<IFamilyMember> = {};
