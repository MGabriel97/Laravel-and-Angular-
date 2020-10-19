import { Component, OnInit } from '@angular/core';
import { LanguageComponent } from './../language/language.component';

@Component({
  selector: 'app-coordonator',
  templateUrl: 'coordonator.component.html',
  styleUrls: ['./coordonator.component.css']
})
export class CoordonatorComponent implements OnInit {
  Selector='';translations={};
  
  constructor() {
   }

  ngOnInit(): void {
    this.Selector=LanguageComponent.languageStorage;
    this.translations=
    {
      'EN':['Role','University professor','Name','Research direction','Spring Boot and Angular'],
      'RO':['Functie','Profesor universitar','Nume','Directie de cercetare','Spring Boot si Angular']
    }
  }
}