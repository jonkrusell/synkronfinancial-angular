import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable()
export class GlobalService {

  public currentRoute: string;
  public member: Member;

  constructor() { }

}
