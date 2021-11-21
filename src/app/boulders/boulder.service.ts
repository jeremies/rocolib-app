import { Injectable } from '@angular/core';
import { Boulder } from './boulder.model';

@Injectable({ providedIn: 'root' })
export class BoulderService {
  private boulders: Boulder[] = [];

  getBoulders() {
    return this.boulders.slice();
  }

  setBoulders(boulders: Boulder[]) {
    this.boulders = boulders;
  }
}
