import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Boulder } from '../boulder.model';
import { BoulderService } from '../boulder.service';

@Component({
  selector: 'app-boulder-detail',
  templateUrl: './boulder-detail.component.html',
  styleUrls: ['./boulder-detail.component.less'],
})
export class BoulderDetailComponent implements OnInit, AfterViewInit {
  boulder!: Boulder;
  _id: string = '';
  gymId!: string;
  @ViewChild('canvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('image', { static: false }) image!: ElementRef<HTMLImageElement>;

  constructor(
    private route: ActivatedRoute,
    private boulderService: BoulderService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.gymId = localStorage.getItem('currentGymId') ?? '';
    this.dataStorageService.fetchBoulders(this.gymId).subscribe(() => {
      this.route.params.subscribe((params: Params) => {
        this._id = params['_id'];
        this.boulder = this.boulderService.getBoulder(this._id);
      });
    });
  }

  ngAfterViewInit() {
    let image = this.image.nativeElement;
    image.onload = () => {
      let canvas = this.canvas.nativeElement;
      canvas.style.position = 'absolute';
      canvas.style.left = image.offsetLeft + 'px';
      canvas.style.top = image.offsetTop + 'px';
      canvas.width = image.offsetWidth;
      canvas.height = image.offsetHeight;
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
      const RADIUS = 0.02; // TODO agafar el valor dinàmic de WALLs

      this.boulder.holds.forEach((hold) =>
        this.drawHold(
          ctx,
          hold.x * canvas.width,
          hold.y * canvas.height,
          RADIUS * canvas.width,
          hold.color
        )
      );
    };
  }

  drawHold(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string
  ) {
    // Draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}
