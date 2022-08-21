import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
list:any[]=[];
  getTodo(item:string){
    this.list.push({Id:this.list.length,name:item})
  }
  deleteTodo(item:any){
    this.list.splice(item,1)

  }
}
