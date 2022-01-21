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

- Register auto and new Chart as usual. In case there is an error, update the tsconfig.json file.

```json
"noImplicitAny": false,
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
| ``tension``          | Curve tension. | ``0`` ||
| ``fill``             | Fill the area under the line. | ``false`` ||
| ``backgroundColor``  | The line fill color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderWidth``      | Line stroke width. | ``3`` ||
| ``borderColor``      | The line color. | ``'rgba(0, 0, 0, 0.1)'`` ||
| ``borderCapStyle``   | Line cap style. | ``'butt'`` | ``'butt' \|\| 'round' \|\| 'square'`` |
| ``borderDash``       | Line dash. | ``number[]`` | [] is solid lines |
| ``borderJoinStyle``  | Line join style. | ``'miter'`` | ``'round'\|'bevel'\|'miter'`` |
| ``stepped``          | Show the line as a stepped line. | ``false`` | when ``true``, ``tension`` will be ignored. |

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
| ``borderWidth``      | The bar border width (in pixels). | ``'0'`` ||
| ``base``      | starting point of the chart on the Y axis | ``'0'`` ||

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

### Other Chart

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

## Defaults and Overrides

- Defaults: default global for Chart.
- Overrides:

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

## Reference

- [Chart.js](https://www.chartjs.org/docs/latest/getting-started/installation.html)

- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

- Internal Document <a href="~@assets/tutorials/ChartJs.pptx" download>(download)</a>
