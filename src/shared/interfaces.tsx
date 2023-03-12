export interface IUser {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

export interface IEvent {
  _id: string;
  title: string;
  location: string;
  date: string;
  time: string;
}

export interface ITicket {
  _id: string;
  price: number;
  owner: IUser;
  event: IEvent;
}
