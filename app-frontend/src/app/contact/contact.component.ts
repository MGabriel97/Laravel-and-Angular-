import { Component, OnInit } from '@angular/core';
import { LanguageComponent } from './../language/language.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Selector='';translations={};
  constructor() {
   }

  ngOnInit(): void {
    this.Selector=LanguageComponent.languageStorage;
    this.translations=
    {
      'EN':['Send a message','Name','Message','Submit'],
      'RO':['Trimite un mesaj','Nume','Mesaj','Trmite']
    }
  }
}