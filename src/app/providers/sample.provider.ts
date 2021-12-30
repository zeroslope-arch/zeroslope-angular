import { Injectable } from "@angular/core";
import { BaseHttpService } from "../shared/services/base/base-http.service";
import { Sample } from "../models/sample.model";

// TODO: Convert to Observables

@Injectable()
export class SampleProvider {
  constructor(private baseHttpService: BaseHttpService) {}

  listSample(id: string): Promise<Sample[]> {
    return this.baseHttpService.apiGet("/Sample/");
  }

  readSample(id: string): Promise<Sample> {
    return this.baseHttpService.apiGet(`/Sample/${id}`);
  }

  createSample(model: Sample): Promise<Sample> {
    return this.baseHttpService.apiPut("/Sample/", model);
  }

  updateSample(model: Sample): Promise<Sample> {
    return this.baseHttpService.apiPost("/Sample/", model);
  }

  deleteSample(id: string): Promise<Object> {
    return this.baseHttpService.apiDelete(`/Sample/${id}`);
  }
}
