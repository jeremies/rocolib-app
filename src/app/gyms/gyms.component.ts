import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Gym } from './gym.model';
import { GymService } from './gym.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.less'],
})
export class GymsComponent implements OnInit {
  gyms: Gym[] = [];

  constructor(
    private gymService: GymService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchGyms().subscribe(() => {
      this.gyms = this.gymService.getGyms();
    });
  }

  navToBoulders(gym: Gym) {
    localStorage.setItem('currentGymId', gym.id);
    this.router.navigate(['boulders']);
  }
}
