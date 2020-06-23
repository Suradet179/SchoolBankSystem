export interface UserInfo {
  authority: AuthorityEnum;
  email: string;
  uuid: string;
}

export enum AuthorityEnum {
  ADMIN = 'ADMIN',
  T1 = 'T1',
  T2 = 'T2',
  T3 = 'T3',
  T4 = 'T4',
  T5 = 'T5',
  T6 = 'T6',
}
