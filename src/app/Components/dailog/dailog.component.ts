import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dailog',
  template: `<div class="dialog-container">
  <h1  mat-dialog-title>{{ value.name }}</h1>
 <div class="container1">

  
   <img src="../../../assets/{{value.image}}" alt="{{value.name}} image">
 
  <div class="container2">
     
      <span ><strong>Project ID:</strong> {{value.id}}</span><br>
      
       <span ><strong >Project Name:</strong> {{value.name}}</span><br>
       
       <span><strong>Status:</strong> {{value.status}}</span><br>
       <span ><strong>Deadline:</strong> {{value.deadline}}</span><br>
       <span ><strong >Team Members:</strong>{{value.teamMembers}}</span><br>
       <span ><strong>Discription:</strong> {{value.description}}</span>
     </div>
  
 </div>
  <mat-dialog-actions >
    <button mat-button style="color:white;background:#333;margin-left:90%"  [mat-dialog-close]="true">Close</button>
  </mat-dialog-actions>
  </div>
`,
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent {
constructor(@Inject(MAT_DIALOG_DATA) public value: any){


}
}
