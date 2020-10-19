import { LoginComponent } from './../login/login.component';
import { Component, OnInit,Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm }   from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  static languageStorage='RO';translations={};
  static i=0;
  isaut=sessionStorage.getItem('isAuthenticated');
  lgstored='RO';
  variabila="";
  severity    = 423;

  show: boolean = true

  welcome=sessionStorage.getItem('email');
  constructor(private _http: Http,
    @Inject(DOCUMENT) private _document: Document,private router: Router,
  ) {}
  ngOnInit(): void {
    localStorage.setItem('languageStorage', 'RO');this.lgstored='RO';
    if(sessionStorage.getItem('isAuthenticated')=="false" || sessionStorage.getItem('isAuthenticated')=="true")
       this.isaut=sessionStorage.getItem('isAuthenticated');
    else
    {
      this.isaut="false";
    }
    this.welcome=sessionStorage.getItem('email');

    LanguageComponent.languageStorage=localStorage.getItem('languageStorage');
    this.translations=
    {
      'EN':['ChangeLanguage','Home','News','About the work','Student profile','Coordinator'],
      'RO':['Schimbati limba','Acasă','Noutăți','Despre lucrare','Profil student','Coordonator']
    }
  }

  func()
  {
    this.router.navigate(['/login'] );

    setTimeout(() => 
    {
      this._document.defaultView.location.reload();
    },
    250);

  }
  onSubmit(): Promise <any>{
   
    
    return this._http.get('http://127.0.0.1:8000/api/main/logout')
    .toPromise()
    .then(res => {this.variabila=res.text();
        if(this.variabila=="logout")
        {
          sessionStorage.setItem('email',"");
          sessionStorage.setItem('isAuthenticated',"false");LoginComponent.isAuthenticated=sessionStorage.getItem('isAuthenticated');
          this.router.navigate(['/login'] );

          setTimeout(() => 
          {
            this._document.defaultView.location.reload();
          },
          250);
          alert("Logout")

        }
  })
    }
   

  saveDataEn(){
    localStorage.setItem('lgstored', 'EN')
    localStorage.setItem('languageStorage', 'EN')
    this._document.defaultView.location.reload();
  }

  saveDataRo(){
    localStorage.setItem('lgstored', 'RO')
    localStorage.setItem('languageStorage', 'RO')
    this._document.defaultView.location.reload();

    
  }
}
