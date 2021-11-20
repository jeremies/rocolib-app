import { Injectable } from '@angular/core';
import { Gym } from './gym.model';

@Injectable({ providedIn: 'root' })
export class GymService {
  private gyms: Gym[] = [];

  getGyms() {
    return this.gyms.slice();
  }

  setGyms(gyms: Gym[]) {
    this.gyms = gyms;
  }
}
