import { Component, OnInit,Inject } from '@angular/core';
import { LanguageComponent } from './../language/language.component';
import { Http, Headers } from '@angular/http';
import { NgForm }   from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import * as CanvasJS from './canvasjs.min';

export interface Item {
  email: string
  comment: string
}


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})

export class AddcommentComponent implements OnInit {
  Selector='';translations={};
  isaut=sessionStorage.getItem('isAuthenticated');
  data;
  email:string;
  itemListResponse;
  constructor(private _http: Http, @Inject(DOCUMENT) private _document: Document ) {
   }

  ngOnInit(): void {
    
    this.Selector=LanguageComponent.languageStorage;
    this.translations=
    {
      'EN':['Title'," The title is Web Forum and consists of an application that has the client-server model and that shares the processing between the service providers called servers and the elements that request services, called clients.","Objective","The title is Web Forum and consists of an application that has the client-server model and that shares the processing between the service providers called servers and the elements that request services, called clients." ],
      'RO':['Titlul lucrarii'," Titlul este Forum Web si consta dintr-o aplicatie care are modelul client-server si care partajeaza procesarea între furnizorii de servicii numiți servere și elementele care solicită servicii, numite clienți.","Obiective principale","Titlul este Forum Web si consta dintr-o aplicatie care are modelul client-server si care partajeaza procesarea între furnizorii de servicii numiți servere și elementele care solicită servicii, numite clienți."]
    }
    let jo;
    this._http.get('http://127.0.0.1:8000/api/getcomments')
     .toPromise()
             .then(res => {this.data=res.text();
               let arr =[];
               this.itemListResponse = JSON.parse(this.data);
               
              for(let i=0;i<this.itemListResponse.length;i++)
              {
                arr[this.itemListResponse[i].created_at]=0;
                
              }
              for(let i=0;i<this.itemListResponse.length;i++)
              {
                arr[this.itemListResponse[i].created_at]= arr[this.itemListResponse[i].created_at]+1;
              }
              let arr1=[];
              for(let h in arr)
              {
                console.log(h,arr[h]);
                arr1.push({y:arr[h],label:h})
              }
              console.log(arr1);
              let chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "Chart"
                },
                data: [{
                  type: "column",
                  dataPoints:arr1}]
              });
              chart.render();
              })  
              
         
    }

  

  onSubmit(form: NgForm): Promise <any>{
    alert("Comment added");
    var data={
      "email": sessionStorage.getItem('email'),
      "comment": (<HTMLInputElement>document.getElementById('name')).value
    }
    return this._http.post('http://127.0.0.1:8000/api/insertcomment', data)
     .toPromise()
     .then(res => { this._document.defaultView.location.reload();

             })
    }
   


}
