import { LanguageComponent } from './../language/language.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Selector=LanguageComponent.languageStorage;
  mesaj1='';mesaj2='';mesaj3='';mesaj4='';

  constructor() { }

  ngOnInit(): void {

    if(this.Selector=="Romana")
    {
        this.mesaj1="Despre";
        this.mesaj2="Conectare";

    }
    else
    {

       this.mesaj1="About";
       this.mesaj2="Connect";

    }
    

  }

}
