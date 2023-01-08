export interface CommandId {
  superapp: string;
  miniapp: string;
  internalCommandId: string;
}

export interface ObjectId {
  superapp: string;
  internalObjectId: string;
}

export interface TargetObject {
  objectId: ObjectId;
}

export interface UserId {
  superapp: string;
  email: string;
}

export interface InvokedBy {
  userId: UserId;
}

export interface CommandAttributes {
  prompt: string;
}

export interface Command {
  commandId: CommandId;
  command: string;
  targetObject: TargetObject;
  invocationTimeStamp: string;
  invokedBy: InvokedBy;
  commandAttributes: CommandAttributes;
}

export interface gptAnswr {
  text: string;
  index: number;
  logprobs?: any;
  finish_reason: string;
}

//ans for wether


export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Weather {
  location: Location;
  current: Current;
}