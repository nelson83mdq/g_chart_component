import { Component, OnInit, Input, OnChanges } from '@angular/core';
/* 
  https://developers.google.com/chart?hl=es-419
    No necesita instalacion
    Tiene varios tipos de graficos
*/
declare var google: any;

@Component({
  selector: 'app-google-chart',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.scss']
})
export class ChartTestComponent implements OnInit{

  @Input() data: any;
  @Input() options: any;
  @Input() chart_type: string  = 'column'

  constructor() { }

  ngOnChanges() {
    if (this.data && this.options && this.chart_type) {
      this.drawChart();
    }
  }

  ngOnInit(): void {
    
  }


  drawChart() {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(() => {
      var chart ;
      const data = google.visualization.arrayToDataTable(this.data);
      const options = this.options;

      switch(this.chart_type){
        case 'column':
          chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
          break;
        case 'pie_chart':
          chart = new google.visualization.PieChart(document.getElementById('chart_div'));
          break;
        case 'bubble':
          chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
          break;
        default:
          console.log('no esta en las opciones el grafico!!');   
      }
    
    chart.draw(data, options);
    });
    
  }
}