import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageComponent } from './../language/language.component';

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  Selector=LanguageComponent.languageStorage;
  mesaj1='';mesaj2='';mesaj3='';mesaj4='';
  name = 'Angular';
  htmlData:any;
  unsafeHtml:any;
  public fileString;
  constructor(
    private sanitizer: DomSanitizer
    ){this.fileString;
      }
  
  
  changeListener($event): void {
      this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileType = inputValue.parentElement.id;
    myReader.onloadend = (e) => {
      console.log(myReader.result);
      this.fileString = myReader.result;
      const parser = new DOMParser();
      const xml = parser.parseFromString(this.fileString, 'application/xml');
      let xmlData:any = xml.documentElement;
      console.log('type is',typeof xmlData);
      console.log('typva is',xmlData);
  
      this.unsafeHtml= "<h1> Hello I am not sanitized </h1>"
     this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.fileString);
    };

    myReader.readAsText(file);
    }
  ngOnInit(): void {
    let xmld= ``;
    if(this.Selector=="Romana")
    {
      this.mesaj1="Alegeți un șablon pentru pagină";
    xmld= `    
        <img src="assets/city.jpg" alt="Italian Trulli" height="450" width="1400">
        
        <div class="w3-container" id="about">
        <div class="w3-content" style="max-width:700px">
          <h5 class="w3-center padding-64"><span class="w3-tag w3-wide">Tehnologie</span></h5>
          <p>Angular este o platformă de creare a site-ului cu sursă deschisă pentru a limită TypeScript. Proiectul este stabilit de Echipa unghiulară a Google și de comunitate de utilizatori individuali și de a folosi. Este unghiulară sau se rezolvă complet, până la aceeași echipă, un cadru angularJS.</p>
          <p>Inițial, versiunea rescrisă a AngularJS a fost numită "Angular 2" de echipă, însă acest lucru a provocat confuzie printre dezvoltatori. De aceea, echipa a anunțat că "AngularJS" se va referi la versiunile 1.X și "Angular" (fără "JS") la versiunile 2 și ulterioare</p>
        </div>
    </div>

    <div class="embed-responsive embed-responsive-16by9" align="center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pTec1e8oyc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>

    <div class="w3-container" id="about">
        <div class="w3-content" style="max-width:700px">
          <h5 class="w3-center padding-64"><span class="w3-tag w3-wide">Tutorial</span></h5>
          <p>Acest tutorial este special conceput pentru a vă ajuta să învețe AngularJS cât mai repede și mai eficient posibil. În primul rând, veți învăța elementele de bază ale AngularJS: directive, expresii, filtre, module, și controlere.Atunci vei învăța tot ce trebuie să știți despre AngularJS:Evenimente, DOM, Formulare, de intrare, de validare, HTTP, și multe altele.</p>
        </div>
    </div>
   `;
    }
    else
    {
      this.mesaj1="Choose a template for page";

      xmld= `    
      <img src="assets/city.jpg" alt="Italian Trulli" height="450" width="1400">
      <div class="w3-container" id="about">
      <div class="w3-content" style="max-width:700px">
        <h5 class="w3-center padding-64"><span class="w3-tag w3-wide">Technology</span></h5>
        <p> Angular is an open source website creation platform to limit TypeScript. The project is established by the Google Angular Team and the community of individual users and use. It is angular or completely resolves, up to the same team, an angular frame JS. </p>        
        <p> Initially, the rewritten version of AngularJS was called "Angular 2" by the team, but this caused confusion among developers. Therefore, the team announced that "AngularJS" will refer to versions 1.X and "Angular" (without "JS") to versions 2 and later </p>      
  </div>

  <div class="embed-responsive embed-responsive-16by9" align="center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pTec1e8oyc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
  </div>

  <div class="w3-container" id="about">
      <div class="w3-content" style="max-width:700px">
        <h5 class="w3-center padding-64"><span class="w3-tag w3-wide">Tutorial</span></h5>
        <p> This tutorial is specifically designed to help you learn AngularJS as quickly and efficiently as possible. First, you will learn the basics of AngularJS: directives, expressions, filters, modules, and controllers. Then you will learn everything you need to know about AngularJS: Events, DOM, Forms, Input, Validation, HTTP, and more like. </ p>      </div>
  </div>
 `;
    }
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmld, 'application/xml');
    let xmlData:any = xml.documentElement;
    console.log('type is',typeof xmlData);
    console.log('typva is',xmlData);
  
   this.unsafeHtml= "<h1> Hello I am not sanitized </h1>"
   this.htmlData = this.sanitizer.bypassSecurityTrustHtml(xmld);
  
  
    }
}
