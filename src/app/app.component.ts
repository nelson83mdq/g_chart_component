import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('graph', {static:true}) graph: any;
  title = 'google-charts-app';

  selectedOption: string = 'column';
  graphTypes = [
    {value: 'column', label: 'Columnas'},
    {value: 'pie_chart', label: 'Pie'},
    {value: 'bubble', label: 'Burbujas'}
  ];

  public data = [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
  ];

  public data2 = [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 20000, 8000],
    ['Buenos Aires, CABA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    
  ];

  public options = {
    chart: {
      title: 'titulo descriptivo del grafico',
      subtitle: 'Based on most recent and previous census data'
    }
  };

  onChartTypeChange(e: any){
    console.log(e);
    
    this.graph.drawChart();
  }

}
