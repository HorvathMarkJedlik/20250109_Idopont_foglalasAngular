import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  url: string = 'http://localhost:3000'
  constructor() {}
}
