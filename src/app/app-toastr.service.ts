import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppToastrService {

  constructor(private toastr : ToastrService) { }

success(msg){
  this.toastr.success(msg);
}

error(msg){
  this.toastr.error(msg);
}

}
