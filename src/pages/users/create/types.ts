export interface UserCreateFormObject {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  about: string;
  birthdate: Date | null;
}
