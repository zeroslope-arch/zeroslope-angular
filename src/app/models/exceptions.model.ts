export interface HandledExceptionCollection {
  Descriptor: string;
  Exceptions: HandledException[];
  StatusCode: number;
}

export interface HandledException {
  Code: string;
  Type: string;
  Message: string;
}
