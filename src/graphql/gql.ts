/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation AddDepartment($body: DepartmentCreateInput!) {\n  addDepartment(body: $body) {\n    message\n  }\n}\n\nquery GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {\n  getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {\n    id\n    name\n    isDelete\n  }\n}\n\nmutation AddLeave($body: LeaveInput!) {\n  addLeave(body: $body) {\n    message\n  }\n}\n\nquery GetAllLeaveByOrgId($orgId: ObjectId!) {\n  getAllLeaveByOrgId(orgId: $orgId) {\n    id\n    leaveList {\n      id\n      name\n      days\n      carryForward\n      carryForwardMax\n      earnedLeave\n      earnedLeaveMax\n      monthlyDays\n      leaveDescription\n      leaveType\n      isDelete\n      isActive\n    }\n  }\n}\n\nmutation RemoveOrganization($removeOrganizationId: ObjectId!) {\n  removeOrganization(id: $removeOrganizationId) {\n    message\n  }\n}\n\nmutation AddOrganizationLeave($body: OrgAddLeaveInput!) {\n  addOrganizationLeave(body: $body) {\n    message\n  }\n}": types.AddDepartmentDocument,
    "mutation CreateUser($body: UserRegister!) {\n  createUser(body: $body) {\n    name\n    email\n    isActive\n    isAdmin\n    mobileNo\n    isDelete\n    gmtMinuteOffset\n    timeZone\n    picturePath\n    paymentStructure\n    location\n    address {\n      city\n      street\n      houseNumber\n      state\n      pin\n    }\n    verification {\n      identityProof\n      addressProof\n    }\n    lastSubscribe\n    createdAt\n    updatedAt\n    token\n  }\n}\n\nquery LoginUser($body: UserLogin!) {\n  loginUser(body: $body) {\n    name\n    email\n    isActive\n    isAdmin\n    mobileNo\n    isDelete\n    gmtMinuteOffset\n    timeZone\n    picturePath\n    paymentStructure\n    location\n    address {\n      city\n      street\n      houseNumber\n      state\n      pin\n    }\n    verification {\n      identityProof\n      addressProof\n    }\n    lastSubscribe\n    createdAt\n    updatedAt\n    token\n  }\n}\n\nquery GetAllOrganization {\n  getAllOrganization {\n    id\n    name\n    userId\n    companyId\n    isActive\n    lastSubscribe\n    latitude\n    longitude\n    workingModel\n    address {\n      city\n      street\n      buildingNumber\n      state\n      pin\n    }\n    employeeCount\n    documents\n    notWorkingDays\n    orgContact\n    leave\n    remoteClockIn\n    locationRequired\n    gracePeriod\n    createdAt\n    updatedAt\n  }\n}\n\nmutation CreateOrganization($body: OrganizationRegisterInput!) {\n  createOrganization(body: $body) {\n    message\n  }\n}\n\nmutation CreateRole($body: RoleInput!) {\n  createRole(body: $body) {\n    message\n  }\n}\n\nquery GetCompanyDetails {\n  getCompanyDetails {\n    id\n    companyName\n    userId\n    roles {\n      id\n      isDelete\n      name\n      parent\n      access\n    }\n    isActive\n    logo\n    financialYearStart\n    leave {\n      id\n      name\n      days\n      carryForward\n      carryForwardMax\n      earnedLeave\n      earnedLeaveMax\n      monthlyDays\n      leaveDescription\n      leaveType\n      isDelete\n      isActive\n    }\n    registeredAddress {\n      area\n      city\n      state\n      postal\n    }\n    financialYearEnd\n    lastSubscribe\n    companyType\n    createdAt\n    updatedAt\n  }\n}\n\nquery GetAllLeave($companyId: ObjectId!) {\n  getAllLeave(companyId: $companyId) {\n    id\n    name\n    days\n    carryForward\n    carryForwardMax\n    earnedLeave\n    earnedLeaveMax\n    monthlyDays\n    leaveDescription\n    leaveType\n    isDelete\n    isActive\n  }\n}\n\nquery GetAllRole($body: GetByCompanyId!) {\n  getAllRole(body: $body) {\n    id\n    isDelete\n    name\n    parent\n    access\n  }\n}\n\nmutation UpdateRoleById($body: RoleInput!) {\n  updateRoleById(body: $body) {\n    message\n  }\n}\n\nmutation DeleteRoleById($body: ObjectId) {\n  deleteRoleById(body: $body) {\n    message\n  }\n}\n\nmutation CreateCompany($body: CompanyCreateInput!) {\n  createCompany(body: $body) {\n    id\n    companyName\n    isActive\n    logo\n    financialYearStart\n    financialYearEnd\n    lastSubscribe\n    companyType\n    createdAt\n  }\n}\n\nmutation UpdateCompany($body: CompanyUpdateInput!) {\n  updateCompany(body: $body) {\n    id\n  }\n}\n\nmutation UpdateOrganization($body: OrganizationRegisterInput!) {\n  updateOrganization(body: $body) {\n    message\n  }\n}": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddDepartment($body: DepartmentCreateInput!) {\n  addDepartment(body: $body) {\n    message\n  }\n}\n\nquery GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {\n  getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {\n    id\n    name\n    isDelete\n  }\n}\n\nmutation AddLeave($body: LeaveInput!) {\n  addLeave(body: $body) {\n    message\n  }\n}\n\nquery GetAllLeaveByOrgId($orgId: ObjectId!) {\n  getAllLeaveByOrgId(orgId: $orgId) {\n    id\n    leaveList {\n      id\n      name\n      days\n      carryForward\n      carryForwardMax\n      earnedLeave\n      earnedLeaveMax\n      monthlyDays\n      leaveDescription\n      leaveType\n      isDelete\n      isActive\n    }\n  }\n}\n\nmutation RemoveOrganization($removeOrganizationId: ObjectId!) {\n  removeOrganization(id: $removeOrganizationId) {\n    message\n  }\n}\n\nmutation AddOrganizationLeave($body: OrgAddLeaveInput!) {\n  addOrganizationLeave(body: $body) {\n    message\n  }\n}"): (typeof documents)["mutation AddDepartment($body: DepartmentCreateInput!) {\n  addDepartment(body: $body) {\n    message\n  }\n}\n\nquery GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {\n  getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {\n    id\n    name\n    isDelete\n  }\n}\n\nmutation AddLeave($body: LeaveInput!) {\n  addLeave(body: $body) {\n    message\n  }\n}\n\nquery GetAllLeaveByOrgId($orgId: ObjectId!) {\n  getAllLeaveByOrgId(orgId: $orgId) {\n    id\n    leaveList {\n      id\n      name\n      days\n      carryForward\n      carryForwardMax\n      earnedLeave\n      earnedLeaveMax\n      monthlyDays\n      leaveDescription\n      leaveType\n      isDelete\n      isActive\n    }\n  }\n}\n\nmutation RemoveOrganization($removeOrganizationId: ObjectId!) {\n  removeOrganization(id: $removeOrganizationId) {\n    message\n  }\n}\n\nmutation AddOrganizationLeave($body: OrgAddLeaveInput!) {\n  addOrganizationLeave(body: $body) {\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($body: UserRegister!) {\n  createUser(body: $body) {\n    name\n    email\n    isActive\n    isAdmin\n    mobileNo\n    isDelete\n    gmtMinuteOffset\n    timeZone\n    picturePath\n    paymentStructure\n    location\n    address {\n      city\n      street\n      houseNumber\n      state\n      pin\n    }\n    verification {\n      identityProof\n      addressProof\n    }\n    lastSubscribe\n    createdAt\n    updatedAt\n    token\n  }\n}\n\nquery LoginUser($body: UserLogin!) {\n  loginUser(body: $body) {\n    name\n    email\n    isActive\n    isAdmin\n    mobileNo\n    isDelete\n    gmtMinuteOffset\n    timeZone\n    picturePath\n    paymentStructure\n    location\n    address {\n      city\n      street\n      houseNumber\n      state\n      pin\n    }\n    verification {\n      identityProof\n      addressProof\n    }\n    lastSubscribe\n    createdAt\n    updatedAt\n    token\n  }\n}\n\nquery GetAllOrganization {\n  getAllOrganization {\n    id\n    name\n    userId\n    companyId\n    isActive\n    lastSubscribe\n    latitude\n    longitude\n    workingModel\n    address {\n      city\n      street\n      buildingNumber\n      state\n      pin\n    }\n    employeeCount\n    documents\n    notWorkingDays\n    orgContact\n    leave\n    remoteClockIn\n    locationRequired\n    gracePeriod\n    createdAt\n    updatedAt\n  }\n}\n\nmutation CreateOrganization($body: OrganizationRegisterInput!) {\n  createOrganization(body: $body) {\n    message\n  }\n}\n\nmutation CreateRole($body: RoleInput!) {\n  createRole(body: $body) {\n    message\n  }\n}\n\nquery GetCompanyDetails {\n  getCompanyDetails {\n    id\n    companyName\n    userId\n    roles {\n      id\n      isDelete\n      name\n      parent\n      access\n    }\n    isActive\n    logo\n    financialYearStart\n    leave {\n      id\n      name\n      days\n      carryForward\n      carryForwardMax\n      earnedLeave\n      earnedLeaveMax\n      monthlyDays\n      leaveDescription\n      leaveType\n      isDelete\n      isActive\n    }\n    registeredAddress {\n      area\n      city\n      state\n      postal\n    }\n    financialYearEnd\n    lastSubscribe\n    companyType\n    createdAt\n    updatedAt\n  }\n}\n\nquery GetAllLeave($companyId: ObjectId!) {\n  getAllLeave(companyId: $companyId) {\n    id\n    name\n    days\n    carryForward\n    carryForwardMax\n    earnedLeave\n    earnedLeaveMax\n    monthlyDays\n    leaveDescription\n    leaveType\n    isDelete\n    isActive\n  }\n}\n\nquery GetAllRole($body: GetByCompanyId!) {\n  getAllRole(body: $body) {\n    id\n    isDelete\n    name\n    parent\n    access\n  }\n}\n\nmutation UpdateRoleById($body: RoleInput!) {\n  updateRoleById(body: $body) {\n    message\n  }\n}\n\nmutation DeleteRoleById($body: ObjectId) {\n  deleteRoleById(body: $body) {\n    message\n  }\n}\n\nmutation CreateCompany($body: CompanyCreateInput!) {\n  createCompany(body: $body) {\n    id\n    companyName\n    isActive\n    logo\n    financialYearStart\n    financialYearEnd\n    lastSubscribe\n    companyType\n    createdAt\n  }\n}\n\nmutation UpdateCompany($body: CompanyUpdateInput!) {\n  updateCompany(body: $body) {\n    id\n  }\n}\n\nmutation UpdateOrganization($body: OrganizationRegisterInput!) {\n  updateOrganization(body: $body) {\n    message\n  }\n}"): (typeof documents)["mutation CreateUser($body: UserRegister!) {\n  createUser(body: $body) {\n    name\n    email\n    isActive\n    isAdmin\n    mobileNo\n    isDelete\n    gmtMinuteOffset\n    timeZone\n    picturePath\n    paymentStructure\n    location\n    address {\n      city\n      street\n      houseNumber\n      state\n      pin\n    }\n    verification {\n      identityProof\n      addressProof\n    }\n    lastSubscribe\n    createdAt\n    updatedAt\n    token\n  }\n}\n\nquery LoginUser($body: UserLogin!) {\n  loginUser(body: $body) {\n    name\n    email\n    isActive\n    isAdmin\n    mobileNo\n    isDelete\n    gmtMinuteOffset\n    timeZone\n    picturePath\n    paymentStructure\n    location\n    address {\n      city\n      street\n      houseNumber\n      state\n      pin\n    }\n    verification {\n      identityProof\n      addressProof\n    }\n    lastSubscribe\n    createdAt\n    updatedAt\n    token\n  }\n}\n\nquery GetAllOrganization {\n  getAllOrganization {\n    id\n    name\n    userId\n    companyId\n    isActive\n    lastSubscribe\n    latitude\n    longitude\n    workingModel\n    address {\n      city\n      street\n      buildingNumber\n      state\n      pin\n    }\n    employeeCount\n    documents\n    notWorkingDays\n    orgContact\n    leave\n    remoteClockIn\n    locationRequired\n    gracePeriod\n    createdAt\n    updatedAt\n  }\n}\n\nmutation CreateOrganization($body: OrganizationRegisterInput!) {\n  createOrganization(body: $body) {\n    message\n  }\n}\n\nmutation CreateRole($body: RoleInput!) {\n  createRole(body: $body) {\n    message\n  }\n}\n\nquery GetCompanyDetails {\n  getCompanyDetails {\n    id\n    companyName\n    userId\n    roles {\n      id\n      isDelete\n      name\n      parent\n      access\n    }\n    isActive\n    logo\n    financialYearStart\n    leave {\n      id\n      name\n      days\n      carryForward\n      carryForwardMax\n      earnedLeave\n      earnedLeaveMax\n      monthlyDays\n      leaveDescription\n      leaveType\n      isDelete\n      isActive\n    }\n    registeredAddress {\n      area\n      city\n      state\n      postal\n    }\n    financialYearEnd\n    lastSubscribe\n    companyType\n    createdAt\n    updatedAt\n  }\n}\n\nquery GetAllLeave($companyId: ObjectId!) {\n  getAllLeave(companyId: $companyId) {\n    id\n    name\n    days\n    carryForward\n    carryForwardMax\n    earnedLeave\n    earnedLeaveMax\n    monthlyDays\n    leaveDescription\n    leaveType\n    isDelete\n    isActive\n  }\n}\n\nquery GetAllRole($body: GetByCompanyId!) {\n  getAllRole(body: $body) {\n    id\n    isDelete\n    name\n    parent\n    access\n  }\n}\n\nmutation UpdateRoleById($body: RoleInput!) {\n  updateRoleById(body: $body) {\n    message\n  }\n}\n\nmutation DeleteRoleById($body: ObjectId) {\n  deleteRoleById(body: $body) {\n    message\n  }\n}\n\nmutation CreateCompany($body: CompanyCreateInput!) {\n  createCompany(body: $body) {\n    id\n    companyName\n    isActive\n    logo\n    financialYearStart\n    financialYearEnd\n    lastSubscribe\n    companyType\n    createdAt\n  }\n}\n\nmutation UpdateCompany($body: CompanyUpdateInput!) {\n  updateCompany(body: $body) {\n    id\n  }\n}\n\nmutation UpdateOrganization($body: OrganizationRegisterInput!) {\n  updateOrganization(body: $body) {\n    message\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;