import { Component, OnInit } from '@angular/core';
import {PhotosService} from './services/photos.service';
import {Photo}  from './models/Photos'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos:Photo[]=[];

constructor(public photosService:PhotosService){

}

ngOnInit(){
  this.photosService.getPhotos()
  .subscribe(
    photos=>{
      console.log(photos);
      this.photos= photos;
  
    },
    err=>console.log(err)
     

  )
}

}

