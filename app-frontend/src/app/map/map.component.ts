import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit {
  origin: any;
  destination: any;
  googleMaps: any="www.google.com/maps";
  latCluj: number = 46.7712;
  lngCluj: number = 23.6236;
  latOrigin:number=0;
  lngOrigin:number=0;
  ngOnInit() {
    
    if ( this.latOrigin == 0 ||  this.lngOrigin == 0 ) {
       this.setCurrentPosition();
    }
        
}

setCurrentPosition() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {

        this.lngOrigin = position.coords.longitude;
        this.latOrigin = position.coords.latitude; 
        this.origin = { 
          lat:this.latOrigin, 
          lng: this.lngOrigin 
      };
      this.googleMaps="https://www.google.com/maps/dir/"+this.latOrigin+"+"+this.lngOrigin+"/"+this.latCluj+"+"+this.lngCluj;
      console.log( this.googleMaps);
      this.destination = { 
          lat:this.latCluj, 
          lng: this.lngCluj
      };   
         });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}