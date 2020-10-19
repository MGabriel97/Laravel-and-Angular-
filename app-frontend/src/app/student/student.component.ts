import { Component, OnInit } from '@angular/core';
import { LanguageComponent } from './../language/language.component';

@Component({
  selector: 'app-student',
  templateUrl: 'student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Selector='';translations={};
  constructor() {
   }

  ngOnInit(): void {
    this.Selector=LanguageComponent.languageStorage;
    this.translations=
    {
      'EN':['About','Name','Location','Technology of interest','Spring Boot and Angular'],
      'RO':['Despre','Nume','Locatie','Tehnologie de interes','Spring Boot si Angular']
    }
  }
}