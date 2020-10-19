import { Component, OnInit,Injectable  } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Item } from './Item';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private _http: Http,private router: Router){}
        private headers = new Headers({'Content-Type': 'application/json'});
    title = 'Laravel Angular 4 App';
    

  	onSubmit(form: NgForm): void{
        var name = (<HTMLInputElement>document.getElementById('name')).value;
        var email =(<HTMLInputElement>document.getElementById('email')).value;
        var password = (<HTMLInputElement>document.getElementById('password')).value;
        if(name!="" && email!="" && password!="")
        {
        alert("user registered successfully")
        const uploadData = new FormData();
        uploadData.append('user_name',name);
        uploadData.append('user_email', email)
        uploadData.append('user_password', password);

      
       
        this._http.post('http://127.0.0.1:8000/api/insertuseronregister',uploadData )
  		   .toPromise()
    	           .then(res => {let result=res.text(); })
                 
        
         this._http.post('http://127.0.0.1:8000/api/create', JSON.stringify(form.value), {headers: this.headers})
  		   .toPromise()
    	           .then(res =>  this.router.navigate(['/login'] ))
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