import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasthelperService {

  constructor(private taostservice:ToastrService) {
        
        
  }

  public showSuccess(message:string){

      this.taostservice.success(message)
      
  }

  public showError(error:string){

      this.taostservice.error(error)

  }
}
