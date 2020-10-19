import { LanguageComponent } from './../language/language.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private _document: Document
  Selector='';
  mesaj1='';mesaj2='';mesaj3='';mesaj4='';mesaj5='';
  constructor() { }
  router:any;
  ngOnInit(): void {
    this.Selector="Romana";
    if(this.Selector=="Romana")
    {
        this.mesaj1="Acasă";
        this.mesaj2="Noutăți";
        this.mesaj3="Despre lucrare";
        this.mesaj4="Profil student";
        this.mesaj5="Coordonator";

    }
    else
    {

       this.mesaj1="Home";
       this.mesaj2="News";
       this.mesaj3="About the work";
       this.mesaj4="Student profile";
       this.mesaj5="Coordinator";

    }
  }

}
