import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Boulder } from '../boulder.model';
import { BoulderService } from '../boulder.service';

@Component({
  selector: 'app-boulder-list',
  templateUrl: './boulder-list.component.html',
  styleUrls: ['./boulder-list.component.less'],
})
export class BoulderListComponent implements OnInit {
  boulders: Boulder[] = [];

  constructor(
    private dataStorageService: DataStorageService,
    private boulderService: BoulderService
  ) {}

  ngOnInit(): void {
    const gymId: string = localStorage.getItem('currentGymId') ?? '';
    this.dataStorageService.fetchBoulders(gymId).subscribe(() => {
      this.boulders = this.boulderService.getBoulders();
    });
  }
}
