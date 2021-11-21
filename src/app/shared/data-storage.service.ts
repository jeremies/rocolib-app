import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { GymService } from '../gyms/gym.service';
import { Gym } from '../gyms/gym.model';
import { Boulder } from '../boulders/boulder.model';
import { BoulderService } from '../boulders/boulder.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private gymService: GymService,
    private boulderService: BoulderService
  ) {}

  fetchGyms() {
    return this.http
      .get<{ gyms: Gym[] }>('https://rocolib.herokuapp.com/api/gym/list')
      .pipe(
        map((data) => data.gyms),
        tap((gyms) => {
          this.gymService.setGyms(gyms);
        })
      );
  }

  fetchBoulders(gymId: string) {
    return this.http
      .get<{ boulders: Boulder[] }>(
        `https://rocolib.herokuapp.com/api/boulders/${gymId}/list`
      )
      .pipe(
        map((data) => data.boulders),
        tap((boulders) => {
          this.boulderService.setBoulders(boulders);
        })
      );
  }
}
