import { Injectable } from '@angular/core';
import { Gym } from './gym.model';

@Injectable({ providedIn: 'root' })
export class GymService {
  private gyms: Gym[] = [
    new Gym('sancu', 'Rocòdrom Josep Barberà'),
    new Gym('upc_sancu', 'Rocòdrom UPC Sant Cugat'),
  ];

  getGyms() {
    return this.gyms.slice();
  }

  setGyms(gyms: Gym[]) {
    this.gyms = gyms;
  }
}
