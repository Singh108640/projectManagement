import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dailog',
  template: `<div class="dialog-container">
  <h1  mat-dialog-title>{{ x.name }}</h1>
 <div class="container1">

  
   <img src="../../../assets/{{x.image}}" alt="{{x.name}} image">
 
  <div class="container2">
     
      <span ><strong>Project ID:</strong> {{x.id}}</span><br>
      
       <span ><strong >Project Name:</strong> {{x.name}}</span><br>
       
       <span><strong>Status:</strong> {{x.status}}</span><br>
       <span ><strong>Deadline:</strong> {{x.deadline}}</span><br>
       <span ><strong >Team Members:</strong>{{x.teamMembers}}</span><br>
       <span ><strong>Discription:</strong> {{x.description}}</span>
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
constructor(@Inject(MAT_DIALOG_DATA) public x: any){


}
}
