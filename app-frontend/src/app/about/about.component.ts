import { LanguageComponent } from './../language/language.component';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Selector='';translations={};
  connect="false";
  show: boolean = true
  constructor( ) {
   }

  ngOnInit(): void {
    
 this.connect="false";
    this.Selector=LanguageComponent.languageStorage;
    this.translations=
    {
      'EN':['Title'," The title is Web Forum and consists of an application that has the client-server model and that shares the processing between the service providers called servers and the elements that request services, called clients.","Objective","The title is Web Forum and consists of an application that has the client-server model and that shares the processing between the service providers called servers and the elements that request services, called clients." ],
      'RO':['Titlul lucrarii'," Titlul este Forum Web si consta dintr-o aplicatie care are modelul client-server si care partajeaza procesarea între furnizorii de servicii numiți servere și elementele care solicită servicii, numite clienți.","Obiective principale","Titlul este Forum Web si consta dintr-o aplicatie care are modelul client-server si care partajeaza procesarea între furnizorii de servicii numiți servere și elementele care solicită servicii, numite clienți."]
    }
  }

}
