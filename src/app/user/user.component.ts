import { Component, Input, ViewChild , ViewContainerRef, ComponentRef} from '@angular/core';
import { UsersService } from '../service/users.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService],
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  constructor(public usersService:UsersService) { }
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;
  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.name = this.usersService.group;
    this.componentRef.instance.members = this.usersService.users.length;
   this.componentRef.instance.close.subscribe(() => { this.viewRef.clear()});
  };

  changeName(value: string) {
    this.name = value;
    
  }
  changeStatus(value: any) {
    console.log(value);
    
    
  }
}