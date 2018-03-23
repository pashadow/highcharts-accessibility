import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';

import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more.src.js';
import * as Accessibility from 'highcharts/modules/accessibility.src.js';
HighchartsMore(Highcharts)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterContentInit, OnDestroy {
  title = 'app';
  @ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  ngOnInit() {
  }

  ngAfterContentInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        description: 'Most commonly used desktop screen readers in July 2015 as reported in the Webaim Survey. '
        + 'Shown as percentage of respondents. JAWS is by far the most used screen reader, with 30% of respondents using it. '
        + 'ZoomText and Window-Eyes follow, each with around 20% usage.'
      },

      title: {
        text: 'Desktop screen readers'
      },

      colors: ['#3f7aa3', '#83a0a8', '#eb6a45'],

      plotOptions: {
        column: {
          stacking: 'normal'
        },
        series: {
          showCheckbox: false,
          enableMouseTracking: false,
          events: {
            checkboxClick: () => {
              return false;
            },
            legendItemClick: () => {
              return false;
            }
          }
        }
      },

      xAxis: {
        categories: ['Correct', 'Incorrect'],
        labels: {
          enabled: true,
          format: '{value}',
          style: {
            fontSize: '14px',
            color: '#46707D',
            textOverflow: 'none'
          }
        },
        tickLength: 0
      },

      yAxis: {
        min: 0,
        tickInterval: 5,
        gridLineColor: '#D2DBDE',
        labels: {
          enabled: true,
          style: {
            fontSize: '14px',
            color: '#46707D',
            textOverflow: 'none'
          }
        },
        title: {
          text: 'Number of Attempts',
          margin: 20,
          style: {
            fontSize: '14px',
            color: '#46707D'
          }
        },
        stackLabels: {
          enabled: true,
          useHTML: true,
          format: '{total}',
          style: {
            fontSize: '14px',
            fontWeight: 'normal',
            color: '#46707D'
          }
        }
      },

      legend: {
        align: 'right',
        verticalAlign: 'top',
        floating: false,
        layout: 'vertical',
        symbolRadius: 0,
        itemMarginTop: 6,
        itemMarginBottom: 6,
        itemStyle: {
          fontSize: '14px',
          fontWeight: 'normal',
          color: '#46707D',
          cursor: 'default'
        },
        itemHoverStyle: {
          color: '#456f7c'
        },
        itemHiddenStyle: {
          color: '#456f7c'
        }
      },

      series: [
        {
          name: 'Confident',
          data: [8, 10]
        },
        {
          name: 'Unsure',
          data: [8, 8]
        },
        {
          name: 'Not confident',
          data: [4, 22]
        }
      ]
    };

    this.chart = Highcharts.chart(this.chartTarget.nativeElement, options);
  }

  ngOnDestroy() {
    this.chart = null;
  }
}
