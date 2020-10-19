import { Component, OnInit,Injectable ,Inject } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  selectedFile: File
  verif;
  profiledata;
  dataProfileName;dataProfileEmail;dataProfilePassword;dataProfileDomain;dataProfileID;
  selectedOption: string;

  options = [
    { name: "AngularJS", value: 1 },
    { name: "React", value: 2 },
    { name: "Laravel", value: 3 },
    { name: "Spring Boot", value: 4 }
  ]
  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
  ngOnInit(): void {
    const uploadData = new FormData();
    uploadData.append('user_email',  sessionStorage.getItem('email'))
    this._http.post('http://127.0.0.1:8000/api/getprofiledata',uploadData )
  		   .toPromise()
                 .then(res => { this.profiledata=JSON.parse(res.text());
                                this.dataProfileID=this.profiledata[0]['id'];
                                this.dataProfileName=this.profiledata[0]['user_name'];
                                this.dataProfileEmail=this.profiledata[0]['user_email'];
                                this.dataProfilePassword=this.profiledata[0]['user_password'];
                                this.selectedOption=this.profiledata[0]['user_domains'];
                              })
  }
  constructor(private _http: Http,private router: Router, @Inject(DOCUMENT) private _document: Document){}
        private headers = new Headers({'Content-Type': 'application/json'});
    title = 'Laravel Angular 4 App';
  	onUpload(){
      var name =  (<HTMLInputElement>document.getElementById('user_name')).value;
      var email = (<HTMLInputElement>document.getElementById('user_email')).value;
      var password = (<HTMLInputElement>document.getElementById('user_password')).value;
      var domains =  (<HTMLInputElement>document.getElementById('user_domains')).value;
      const uploadData = new FormData();
      uploadData.append('user_name',name);
      uploadData.append('user_email', email)
      uploadData.append('user_password', password)
      uploadData.append('user_domains', domains)
      uploadData.append('user_image', this.selectedFile, this.selectedFile.name);     
        this._http.post('http://127.0.0.1:8000/api/updateprofilepage',uploadData )
  		   .toPromise()
                 .then(res => { this.verif=res.text();
                  alert("Succes");     
                 this._document.defaultView.location.reload();       
                })       
        }


        editProfile(){
          var name =  (<HTMLInputElement>document.getElementById('user_name')).value;
          var email = (<HTMLInputElement>document.getElementById('user_email')).value;
          var password = (<HTMLInputElement>document.getElementById('user_password')).value;
          var domains =  (<HTMLInputElement>document.getElementById('user_domains')).value;
          const uploadData = new FormData();
          uploadData.append('user_name',name);
          uploadData.append('user_email', email)
          uploadData.append('user_password', password)
          uploadData.append('user_domains', domains)
            this._http.post('http://127.0.0.1:8000/api/updateprofilepagenoimage',uploadData )
             .toPromise()
                     .then(res => { this.verif=res.text();
                      alert("Succes");     
                     this._document.defaultView.location.reload();       
                    })       
            }
      }
       
 