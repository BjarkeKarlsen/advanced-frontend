import { Component } from '@angular/core';
import {combineLatest, map, Observable} from "rxjs";
import {Class} from "../../class.type";
import {Race} from "../../race.type";
import {WarcraftService} from "../../warcraft.service";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {passwordsEqual} from "../../password-equal.directive";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form = this.fb.group({
    name: ['', [Validators.required]],
    passwordGroup: this.fb.group({
      password: [''],
      confirm_password: [''],
    }, { validators: [passwordsEqual, Validators.required], updateOn: 'blur'}),
    race: ['', [Validators.required]],
    class: ['', [Validators.required]],
    level: [undefined, [Validators.min(1), Validators.max(60)]],
    description: [''],
  })

  classes$: Observable<Class[]>;
  races$: Observable<Race[]>;

  constructor(private fb: FormBuilder, private service: WarcraftService) {
    this.classes$ = this.service.getClasses()
    this.races$ = combineLatest(
      [this.service.getAllianceRaces(), this.service.getHordeRaces()])
      .pipe(map( c => [...c[0], ...c[1]]))
  }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log('onSubmit')
  }

  compare(c1: Race | Class, c2: Race | Class): boolean
  {
    return c1 && c2 ? c1.name === c2.name : c1 === c2;
  }

  get name() { return this.form.get('name') }
  get level() { return this.form.get('level') }
  get passwordGroup() { return this.form.get('passwordGroup') }
  get class() { return this.form.get('class') }
  get race() { return this.form.get('race') }
}
