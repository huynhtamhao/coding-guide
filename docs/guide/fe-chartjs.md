# Chart.js

## Installation

- Chart.js uses the HTML Canvas Graphics tag to draw shapes.

```html
<canvas id="lineChart" width="800" height="300" style="border: 1px solid #000000;">
  Your browser does not support the canvas element.
</canvas>
```

- Install using npm

``npm install chart.js``

## Register and New Chart

- Register the controllers, elements, scales and plugins you are going to use (recommend using this method).

```ts
import {  BarController, BarElement, CategoryScale, LinearScale,
Chart, ChartConfiguration, Legend, Title, Tooltip } from 'chart.js';

chart: Chart;

Chart.register(
  BarController, BarElement,
  CategoryScale, LinearScale,
  Title, Tooltip, Legend,
);

const ctx = document.getElementById('barChart') as HTMLCanvasElement;
this.chart = new Chart(ctx, {…});
```

- Register auto and new Chart as usual. In case of error with 'any' type, update the tsconfig.json file.

```json
"skipLibCheck": true,
```

```ts
import Chart from 'chart.js/auto';

@ViewChild('lineChart') lineChart: ElementRef;
chart: Chart;

this.chart = new Chart(this.lineChart.nativeElement, {…});

```

- Import chart.min.js in angular.json file and declare variable Chart.

```json
"scripts": [
  "./node_modules/chart.js/dist/chart.min.js"
]
```

```ts
declare var Chart: any;

@ViewChild('pieChart') pieChart: ElementRef;

const chart = new Chart(this.pieChart.nativeElement, config);
```

## Chart Config

- Chart config includes 3 parts

**Type**: chart type

(line, bar, radar, pie, polarArea, doughnut, bubble and scatter)

**Data**:

-lables: [ ] label name for each index.

-datasets: [ {  } ] data and configuration for point data.

**Options**: configure scales, plugins, animations, events,...

- Basic config only needs Type and Data to create new Chart.

```ts
const config: ChartConfiguration = {
      type: 'bubble',
      data,
    };
```

- Options example

```ts
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: false,
    indexAxis: 'y',
    interaction: {
      intersect: true,
      mode: 'index',
    },
    scales: {
      x: { },
      y: { },
    },
    plugins: {
      title: {
        text: 'Chart.js Line Chart Example',
        display: true,
        color: 'red',
        align: 'start',
        position: 'top',
        padding: {
          top: 5,
          bottom: 5,
        },
        font: {
          size: 16,
          weight: 'bold',
          lineHeight: 1.5,
        },
        fullSize: true,
      },
      legend: {
        display: true,
        title: {
          display: true,
          text: 'Label Legend',
          color: 'red',
          font: {
            size: 14,
          }
        },
        fullSize: true,
        position: 'top',
        align: 'center',
      },
      tooltip: { },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true,
        delay: 0,
      }
    },
    events: ['click'],
  }
};
```

- Each type chart can have different specific properties. Depending on the type of chart, the constructor data import will also be different.

:::: code-group
::: code-group-item Line Chart

```ts
// type line
datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }, 
]
```

:::
::: code-group-item Bubble Chart

```ts
// type bubble
datasets: [
        {
          label: 'Dataset 1',
          data: [
            { x: 10, y: 5.5, r: 10 },
            { x: 2, y: 6.1, r: 13 },
            { x: 1.5, y: 3, r: 5 },
          ],
          hoverRadius: 15,
        }, 
]
```

:::
::::

## Chart Types

### Line Chart

<LineChart />

:::: code-group
::: code-group-item Config

```ts
const config = {
  type: 'line',
  data: data,
};
```

:::
::: code-group-item Setup

```ts
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [35, 59, 50, 31, 56, 35, 40],
    fill: false,
    borderColor: 'rgb(255, 0, 0)',
    tension: 0.1
  }]
};
```

:::
::::

#### Dataset Properties

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``order``            | The drawing order of dataset. | ``0`` ||
| ``label``            | The label for the dataset. | ``''`` ||
| ``backgroundColor``  | The line fill color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderColor``      | The line color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderCapStyle``   | Line cap style. | ``'butt'`` | ``'butt' \| 'round' \| 'square'`` |
| ``borderDash``       | Line dash. | ``number[]`` | [] is solid lines |
| ``borderJoinStyle``  | Line join style. | ``'miter'`` | ``'round' \| 'bevel' \| 'miter'`` |
| ``borderWidth``      | Line stroke width. | ``3`` ||
| ``fill``             | Fill the area under the line. | ``false`` ||
| ``tension``          | Curve tension. | ``0`` ||
| ``showLine``         | If false, the line is not drawn for this dataset. | ``true`` ||
| ``spanGaps``         | If true, lines will be drawn between points with no or null data. If false, points with null data will create a break in the line. | ``undefined`` | ``boolean \| number`` |
| ``stepped``          | Show the line as a stepped line. | ``false`` | when ``true``, ``tension`` will be ignored. |
| ``pointBackgroundColor`` | The fill color for points. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``pointBorderColor`` | The border color for points. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``pointBorderWidth / borderWidth`` | The width of the point border in pixels. | ``1`` ||
| ``pointHitRadius``   | The fill color for points. | ``1`` ||
| ``pointHoverBackgroundColor`` | Point background color when hovered. | ``undefined`` ||
| ``pointHoverBorderColor`` | Point border color when hovered. | ``undefined`` ||
| ``pointHoverBorderWidth / hoverBorderWidth`` | Border width of point when hovered. | ``1`` ||
| ``pointHoverRadius / hoverRadius`` | The radius of the point when hovered. | ``4`` ||
| ``pointRadius / radius`` | The radius of the point shape. If set to 0, the point is not rendered. | ``3`` ||
| ``pointStyle``       | Style of the point. | ``'circle'`` | ``'circle' \| 'cross'\| 'crossRot' \| 'dash' \| 'line' \| 'rect' \| 'rectRounded' \| 'rectRot' \| 'star' \| 'triangle'`` ||
| ``clip``             | Positive value allows overflow, negative value clips that many pixels inside chartArea. ``clip: {left: 5, top: false, right: -2, bottom: 0}`` | ``undefined`` | ``number \| object`` |
| ``indexAxis``        | The base axis of the dataset. 'x' for horizontal lines and 'y' for vertical lines. | ``'x'`` ||

### Bar Chart

<BarChart />

:::: code-group
::: code-group-item Config

```ts
const config = {
  type: 'bar',
  data: data,
};
```

:::
::: code-group-item Setup

```ts
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: labels,
  datasets: [{
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
};
```

:::
::::

#### Dataset Properties

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``backgroundColor``  | The bar background color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderColor``      | The bar border color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderWidth``      | The bar border width (in pixels). | ``0`` ||
| ``borderRadius``     | radius of border | ``0`` | ``number\|object``|
| ``hoverBackgroundColor``| The bar background color when hovered. | ``undefined`` ||
| ``hoverBorderColor`` | The bar border color when hovered. | ``undefined`` ||
| ``hoverBorderWidth`` | The bar border width when hovered (in pixels). | ``1`` ||
| ``hoverBorderRadius``| The bar border radius when hovered (in pixels). | ``0`` ||
| ``base``             | Starting point of the chart on the Y axis |||
| ``barPercentage``    | Percent (0-1) of the available width each bar should be within the category width. | ``0.9``||
| ``categoryPercentage``| Percent (0-1) of the available width each category should be within the sample width. | ``0.8``||
| ``barThickness``     | If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, barPercentage and categoryPercentage are ignored. |||
| ``maxBarThickness``  | Set this to ensure that bars are not sized thicker than this. |||
| ``minBarLength``     | Set this to ensure that bars have a minimum length in pixels. |||
| ``pointStyle``       | Style of the point for legend. | ``'circle'`` | ``'circle' \| 'cross'\| 'crossRot' \| 'dash' \| 'line' \| 'rect' \| 'rectRounded' \| 'rectRot' \| 'star' \| 'triangle'`` ||
| ``borderSkipped``    | The edge to skip when drawing bar. || ``'start' \| 'end' \| 'middle' \| 'bottom' \| 'left' \| 'top' \| 'right' \| false`` |

### Pie Chart

<PieChart />

:::: code-group
::: code-group-item Config

```ts
const config = {
  type: 'pie',
  data: data,
};
```

:::
::: code-group-item Setup

```ts
const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const data = {
  labels: labels,
  datasets: [
        {
          label: 'Dataset 1',
          data: [35, 59, 50, 31, 56],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(54, 162, 235, 0.5)',
          ],
        }
      ]
};
```

:::
::::

#### Dataset Properties

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``backgroundColor``  | arc background color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderColor``      | arc border color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderJoinStyle``  | arc border join style. | ``undefined`` ||
| ``borderWidth``      | arc border width (in pixels). | ``2`` ||
| ``offset``           | arc offset (in pixels). | ``0`` ||
| ``spacing``          | Fixed arc offset (in pixels). Similar to offset but applies to all arcs. | ``0`` ||
| ``weight``           | The relative thickness of the dataset. | ``1`` ||
| ``hoverBackgroundColor``  | arc background color when hovered. | ``undefined`` ||
| ``hoverBorderColor``      | arc border color when hovered. | ``undefined`` ||
| ``hoverBorderJoinStyle``  | arc border join style when hovered. | ``undefined`` ||
| ``hoverBorderWidth``      | arc border width when hovered (in pixels). | ``undefined`` | ``'round' \| 'bevel' \| 'miter'`` |
| ``hoverOffset``           | arc offset when hovered (in pixels). | ``0`` ||
| ``radius``           | The outer radius of the chart. If ``string`` and ending with '%', percentage of radius. ``number`` is considered to be pixels. || ``number\|string`` |

### Other Charts

- Radar Chart
- Doughnut Chart
- Polar Area Chart
- Bubble Chart
- Scatter Chart
- Area Chart
- Mixed Chart Types

```ts
datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          data: [35, 59, 50, 31, 56],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          data: [15, 19, 20, 31, 26],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }
      ]
```

- See also charts example

[Chart Types](https://www.chartjs.org/docs/latest/charts/line.html)

[Samples](https://www.chartjs.org/docs/latest/samples/bar/vertical.html)

### Option Properties

#### General

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``responsive``          | Chart auto size (width/height). | ``true`` ||
| ``indexAxis`` | The base axis of the dataset. 'x' for horizontal lines and 'y' for vertical lines. | ``'x'`` ||

#### Scales

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``type``             | Type axis.       |  | ``linear \| category \| time \| logarithmic`` |
| ``display``          | Show line scale of axis. | ``true`` ||
| ``title``            | Title of axis.   |  | ``Opject`` |
| ``grid``             | Grid line setting.   |  | ``Opject`` |

[Scales](https://www.chartjs.org/docs/latest/samples/scales/linear-min-max.html)

[Axes](https://www.chartjs.org/docs/latest/axes/)

#### Plugins

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``title``            | Show Title for Chart.    || ``Opject`` |
| ``subtitle``         | Show Subtitle for Chart. || ``Opject`` |
| ``legend``           | Show Legend for Chart.   || ``Opject`` |
| ``tooltip``          | Tooltip for Chart when hovered. || ``Opject`` |
| ``quadrants``        | Divide the Chart into quadrants.(topLeft, topRight, bottomRight, bottomLeft) |  | ``Opject`` |
| ``chartAreaBorder``  | Style area border Chart. || ``Opject`` |

#### Animations

| Name                 | Description      | Default             | Value       |
|:---------------------|:-----------------|:--------------------|:------------|
| ``tension``          | Animations for tension. || ``Opject`` |

#### Events

- The events option defines the browser events that the chart should listen to for tooltips and hovering.

``'contextmenu' | 'mouseenter' | 'mousedown' | 'mousemove' | 'mouseup' | 'mouseout' | 'click' | 'dblclick' | 'keydown' | 'keypress' | 'keyup' | 'resize'``

- For example, to have the chart only respond to click events:

```ts
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        // This chart will not respond to mousemove, etc
        events: ['click']
    }
});
```

#### See also Properties

[Samples](https://www.chartjs.org/docs/latest/samples/information.html)

#### Scriptable Options

```ts
grid: {
  drawBorder: true,
  borderColor: 'red',
  tickColor: 'red',
  color: (context) => {
    if (context.tick.value > 0) {
      return 'lightgrey';
    } else if (context.tick.value < 0) {
      return 'lightblue';
    }
    return 'rgb(255, 159, 64)';
  },
},
```

[Scriptable Options](https://www.chartjs.org/docs/latest/samples/scriptable/bar.html)

## Data structures

### Primitive[]

```ts
type: 'bar',
data: {
    datasets: [{
      data: [20, 10],
    }],
    labels: ['a', 'b']
}
```

### Object

```ts
type: 'line',
data: {
  datasets: [{
      data: {
          January: 10,
          February: 20
      }
    }]
}
```

### Object[]

```ts
type: 'line',
data: {
  datasets: [{
    data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]
  }]
}
```

### Object[] using custom properties

```ts
type: 'bar',
data: {
    datasets: [{
        data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
    }]
},
options: {
    parsing: {
        xAxisKey: 'id',
        yAxisKey: 'nested.value'
    }
}
```

When using the pie/doughnut chart type

```ts
type: 'doughnut',
data: {
    datasets: [{
        data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
    }]
},
options: {
    parsing: {
        key: 'nested.value'
    }
}
```

## Defaults and Overrides

- Defaults: default global for Chart.
- Overrides: override properties and new Chart.

```ts
// default element width of bar chart
Chart.defaults.datasets.bar.maxBarThickness = 100;
Chart.defaults.datasets.bar.minBarLength = 50;
// default title
Chart.defaults.plugins.title.text = 'Chart Example';
Chart.defaults.plugins.title.display = true;
Chart.defaults.plugins.title.color = 'red';
// overrides
Chart.overrides.bar.backgroundColor = 'red';
Chart.overrides.bar.borderColor = 'blue';

```

## Actions

- [API for Chart](https://www.chartjs.org/docs/latest/developers/api.html)

- Example:

```ts
this.chart = new Chart(ctx, config);
// clean up any references stored to the chart object within Chart.js
this.chart.destroy();
// update of the chart
this.chart.data.datasets[0].data[2] = 50;
this.chart.update();
// shows dataset at index 1 and does 'show' animation.
this.chart.show(1);

```

## Event

```ts
export interface ChartEvent {
  type:
    | 'contextmenu'
    | 'mouseenter' | 'mousedown' | 'mousemove' | 'mouseup' | 'mouseout'
    | 'click' | 'dblclick'
    | 'keydown' | 'keypress' | 'keyup'
    | 'resize';
  native: Event | null;
  x: number | null;
  y: number | null;
}
```

```html
<canvas #pieChart id="pieChart" width="500" height="400" (click)="onClick()"
  (dblclick)="onDblclick()" (mousedown)="mousedown()">
  Your browser does not support the canvas element.
</canvas>
```

```ts
public onClick(event: Event): void {
  this.chart.data.datasets[0].data = [65, 59, 80, 81, 56, 15, -40];
  this.chart.update();
}
```

## Reference

- [Chart.js](https://www.chartjs.org/docs/latest/getting-started/installation.html)

- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

- Internal Document <a href="~@assets/tutorials/ChartJs.pptx" download>(download)</a>
