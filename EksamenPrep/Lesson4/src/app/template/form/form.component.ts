import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {combineLatest, map, Observable} from "rxjs";
import {Class} from "../../class.type";
import {Race} from "../../race.type";
import {WarcraftService} from "../../warcraft.service";


@Component({
  selector: 'app-template-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  classes$: Observable<Class[]>;
  races$: Observable<Race[]>;

  constructor(private service: WarcraftService) {
    this.classes$ = this.service.getClasses()
    this.races$ = combineLatest(
      [this.service.getAllianceRaces(), this.service.getHordeRaces()])
      .pipe(map( c => [...c[0], ...c[1]]))
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    console.warn('onSubmit()')
    console.log(form.value)
  }
}
