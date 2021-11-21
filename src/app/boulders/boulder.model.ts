import { Hold } from '../shared/hold.model';

export class Boulder {
  public _id: string;
  public creator: string;
  public difficulty: string;
  public feet: string;
  public holds: Hold[];
  public name: string;
  public raters: number;
  public rating: number;
  public section: string;
  public time: Date;

  constructor(
    _id: string,
    creator: string,
    difficulty: string,
    feet: string,
    holds: Hold[],
    name: string,
    raters: number,
    rating: number,
    section: string,
    time: Date
  ) {
    this._id = _id;
    this.creator = creator;
    this.difficulty = difficulty;
    this.feet = feet;
    this.holds = holds;
    this.name = name;
    this.raters = raters;
    this.rating = rating;
    this.section = section;
    this.time = time;
  }
}
