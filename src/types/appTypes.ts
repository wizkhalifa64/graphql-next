import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
type IStringIndex = {
  [key: string]: any;
};
export type Role = IStringIndex & {
  _id: string;
  name: string;
  position: number;
  parent: string;
};
export type RoleFormTypes = {
  form: UseFormReturn<Role>;
  onSubmit: (value: Role) => void;
  setSaveType: Dispatch<SetStateAction<"create" | "update">>;
  saveType: "create" | "update";
  roles: Role[];
};
export type Employee = {
  employeeName?: string;
  employeeEmail: string;
  profileImage: string;
  employeeType?: number;
  depertment?: string;
  employeePosition?: number;
  employeeId?: number;
  account?: string;
  employeePassword: string;
  country: number;
  organizationId: string;
  mobile: string;
  joiningDate?: Date;
  employeeAddress?: JSON;
  qualification?: JSON;
};
export type EmployeeFormTypes = {
  form: UseFormReturn<Employee>;
  onSubmit: (value: Employee) => void;
  setSaveType: Dispatch<SetStateAction<"create" | "update">>;
  saveType: "create" | "update";
};
export type OrgDetailsTable = {
  _id: string;
  name: string;
};
export type OrgCreate = {
  address?: {
    city?: string;
    street?: string;
    houseNumber?: string;
    state?: string;
    pin?: string;
  };
  orgName: string;
  employeeCount: number;
  orgType: number;
  totalLeaveCount?: number;
  orgContact?: string;
  logo?: string;
  officeHour: number;
  startTime: string;
  endTime: string;
};
export type OrgDetailsFormTypes = {
  form: UseFormReturn<OrgCreate>;
  onSubmit: (value: OrgCreate) => void;
};
