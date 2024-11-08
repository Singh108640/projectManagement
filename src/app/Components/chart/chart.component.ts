import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/Profile';
import { style } from '@angular/animations';
declare var google: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public completeCount: number = 0;
  public inProcessCount: number = 0;
  public pendingCount: number = 0;
  public totalCount:number=0;
  public AllProjectList:Array<Project>=[];
  public completedProjectList:Array<Project>=[];
  public inProcessProjectList:Array<Project>=[];
  public pendingProjectList:Array<Project>=[];
  
  public chart: any;

  constructor(private profileService: ProfileServiceService,private snackBr:MatSnackBar) {}

  ngOnInit(): void {
    
    Chart.register(...registerables);
    this.getCompletedcount();
    this.getInProcessCount();
    this.getPendindCount();
    this.getTotalCount()
    this.createPieChart();
    this.loardChart();
    
   
  }
getTotalCount(){
  this.profileService.getProjects().subscribe(res=>{
this.totalCount=res.length;
this.AllProjectList=res;
  })

}
 
  getCompletedcount(){
    this.profileService.getCompletedProjectProfiles().subscribe(res=>{
   this.completeCount=res.length;
  this.completedProjectList=res;
   console.log(this.completeCount);
    
    })
  }
  getInProcessCount(){
  this.profileService.getInProcessProjectProfiles().subscribe(res=>{
  this.inProcessCount=res.length;
  console.log(this.inProcessCount);
  this.inProcessProjectList=res;
  
  
  })
  }
  getPendindCount(){
    this.profileService.getPendingProjectProfiles().subscribe(res=>{
      this.pendingCount=res.length;
      console.log(this.pendingCount);
      this.pendingProjectList=res;
      
    })

  }
  


  createPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['In Progress', 'Pending', 'Completed'],
          datasets: [{
            label: 'Project Status',
            data: [this.inProcessCount, this.pendingCount, this.completeCount],
            backgroundColor: [' #FFEB3B', '#F44336', '#4CAF50'],
            hoverOffset: 4
          }]
      
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } else {
      this.snackBr.open("Internal server Error ","Error",{duration:5000})
    }
  }


loardChart():void{
  google.charts.load('current', { packages: ['corechart', 'line'] });
  google.charts.setOnLoadCallback(() =>{
    try{
      this.drawChart()
    }
    catch(error:any){
      this.snackBr.open('Error while drawing the chart:', error.message ,{duration:5000})
    }
  }
    );
}


drawChart(): void {
  const statusCount = {
    Completed: this.completeCount,
    Pending:this.pendingCount,
    Progress: this.inProcessCount
  };

  const data = google.visualization.arrayToDataTable([
    ['Status', 'Number of Projects'],
    ['Completed', statusCount.Completed],
    ['Pending', statusCount.Pending],
    ['In Progress', statusCount.Progress]
  ]);

  
  const options = {
    title: 'Number of Projects by Status',
     curveType: 'none',  
    legend: { position: 'none' },
    hAxis: {
      title: 'Status',
      minValue: 0,
    },
    vAxis: {
      title: 'Number of Projects',
      minValue: 0,
     
    }
  };
  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);





}


}



