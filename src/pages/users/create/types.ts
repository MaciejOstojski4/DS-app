export interface UserCreateFormObject {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  about: string;
  birthdate: Date | null;
}
