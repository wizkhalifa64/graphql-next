import { gql } from "@apollo/client";

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
  mutation (
    $email: String!
    $location: Int!
    $name: String!
    $password: String!
  ) {
    createOrganization(
      body: {
        email: $email
        location: $location
        name: $name
        password: $password
      }
    ) {
      id
      name
      email
      mobile
      picturePath
      paymentStructure
      location
      address {
        id
        city
        street
        housenumber
        state
        pin
      }
      roles {
        id
        name
        position
        parent
      }
      paid
      token
    }
  }
`;
export const ORG_ADDRESS_FRAGMENT = gql`
  fragment orgaddressFragment on orgaddress {
    city
    houseNumber
    pin
    state
    street
  }
`;
export const ORG_ROLE = gql`
  fragment rolesFragment on roles {
    _id
    name
    parent
    position
  }
`;
export const LOG_IN_ORGANIZATION = gql`
  query ($email: String!, $password: String!) {
    loginOrganization(body: { email: $email, password: $password }) {
      id
      name
      email
      mobile
      isAdmin
      picturePath
      paymentStructure
      location
      address {
        id
        city
        street
        housenumber
        state
        pin
      }
      roles {
        id
        name
        position
        parent
      }
      paid
      token
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
