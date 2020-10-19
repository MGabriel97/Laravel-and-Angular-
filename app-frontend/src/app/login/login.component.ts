import { Component, OnInit,Injectable,Inject  } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Item } from './Item';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   login:boolean=false;
   variabila="";
   constructor(private _http: Http,private router: Router,    @Inject(DOCUMENT) private _document: Document
   ){}
   dataform=null;
   static isAuthenticated;
  
  ngOnInit(): void {
    sessionStorage.setItem('isAuthenticated',"false");
  }
  
        private headers = new Headers({'Content-Type': 'application/json'});
    title = 'Laravel Angular 4 App';
    

  	onSubmit(form: NgForm): Promise <Item>{
        var email =(<HTMLInputElement>document.getElementById('email')).value;
        var password = (<HTMLInputElement>document.getElementById('password')).value;
        if( email!="" && password!="")
        {
        
        return this._http.post('http://127.0.0.1:8000/api/main/checklogin', form.value)
        .toPromise()
        .then(res => {this.variabila=res.text();
            if(this.variabila=="Correct")
            {
              this.dataform=(<HTMLInputElement>document.getElementById('email')).value;
              sessionStorage.setItem('email',this.dataform);
              sessionStorage.setItem('isAuthenticated',"true");LoginComponent.isAuthenticated=sessionStorage.getItem('isAuthenticated');
              this.router.navigate(['/profile'] );

              setTimeout(() => 
              {
                this._document.defaultView.location.reload();
              },
              250);
              alert("Connected")

            }
      })
         .catch(this.handleError);
        }
        else
        {
          alert("Check name and password")

        }
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

}
