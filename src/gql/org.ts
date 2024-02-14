import { gql } from "graphql-request";

export const ROLE_QUERY = gql`
  query MyQuery {
    GetAllRoles {
      _id
      name
      parent
      position
    }
  }
`;
export const ROLE_MUTATION_CREATE = gql`
  mutation MyMutation($name: String!, $parent: ID, $position: Int!) {
    CreateRole(roles: { name: $name, position: $position, parent: $parent })
  }
`;
export const REGISTER_ORGANIZATION = gql`
  mutation MyMutation(
    $email: EmailAddress!
    $location: Int!
    $name: String!
    $password: String!
  ) {
    RegisterOrganization(
      email: $email
      location: $location
      name: $name
      password: $password
    ) {
      org {
        email
        id
        location
        name
      }
      token
    }
  }
`;
export const LOG_IN = gql`
  mutation MyMutation($email: EmailAddress!, $password: String!) {
    LogInOrganization(email: $email, password: $password) {
      token
      org {
        email
        id
        location
        name
      }
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation (
    $employeeName: String!
    $employeeEmail: String!
    $profileImage: String!
    $employeeType: Int
    $depertment: String
    $employeePosition: Int
    $employeeId: Int
    $account: String
    $employeePassword: String!
    $country: Int!
    $organizationId: String!
    $mobile: String!
    $joiningDate: DateTime
    $employeeAddress: JSON
    $qualification: JSON
  ) {
    createEmployee(
      body: {
        employeeName: $employeeName
        employeeEmail: $employeeEmail
        profileImage: $profileImage
        employeeType: $employeeType
        depertment: $depertment
        employeePosition: $employeePosition
        employeeId: $employeeId
        account: $account
        employeePassword: $employeePassword
        country: $country
        organizationId: $organizationId
        mobile: $mobile
        joiningDate: $joiningDate
        employeeAddress: $employeeAddress
        qualification: $qualification
      }
    )
  }
`;
