import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable()
export class GlobalService {

  public member: Member;

  constructor() { }

}
