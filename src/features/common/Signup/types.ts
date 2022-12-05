export interface SignupModel {
  email?: string;
  password?: string;
}

export interface OptionsModel {
  value: string;
  label: string;
}

export interface ApiResponseModel {
  data: ApiDataModel;
}

export interface ApiErrorModel {
  email: string;
}

export interface ApiDataModel {
  status: string;
  message: string;
  error: ApiErrorModel;
}
