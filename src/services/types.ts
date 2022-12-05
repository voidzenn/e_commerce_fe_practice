export interface SigninModel {
  email?: string;
  password?: string;
}

export interface SignupModel {
  email?: string;
  password?: string;
}

export interface ItemsModel {
  name?: string;
  description?: string;
  category?: string;
  number_of_items?: number;
  price?: number;
}

export interface ItemsData {
  data: ItemsModel[];
}
