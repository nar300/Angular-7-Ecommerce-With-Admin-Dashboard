import { ToastrService } from 'ngx-toastr';

export class ToastHelper{

    /**
     *
     */
    constructor(private taostservice:ToastrService) {
        
        
    }

    showSuccess(message:string){
        this.taostservice.success(message)
    }

    showError(error:string){
        this.taostservice.error(error)
    }
}