import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector : '[appDropDown]'
})
export class DropDownDirective   {

    
    @HostBinding('class.open') isOpen : boolean = false ;
   

    @HostListener('click') ontoggle() {
        this.isOpen = !this.isOpen ;
    }

    
}
