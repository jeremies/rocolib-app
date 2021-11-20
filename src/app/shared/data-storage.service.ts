import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { GymService } from '../gyms/gym.service';
import { Gym } from '../gyms/gym.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private gymService: GymService) {}

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
}
