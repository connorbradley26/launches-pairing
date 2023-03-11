export interface ILaunchesResponse {
  launches: ILaunchResponse[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: number;
}

export interface ILaunchResponse {
  links: Links;
  success: boolean;
  payloads: Payload[];
  name: string;
  cores: CoreDetails[];
  id: string;
  date_utc: string;
}

export interface Payload {
  name: string;
  type: string;
  id: string;
}
export interface Links {
  patch: Patch;
}

export interface Patch {
  small: string;
  large: string;
}
export interface CoreDetails {
  serial: string;
  id: string;
}
