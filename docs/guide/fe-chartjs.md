# Chart.js

## Installation

- Chart.js uses the HTML Canvas Graphics tag to draw shapes.

```html
<canvas id="lineChart" width="800" height="300" style="border: 1px solid #000000;">
  Your browser does not support the canvas element.
</canvas>
```

- Install using npm<br>
npm install chart.js

## Register and New Chart

- Register the controllers, elements, scales and plugins you are going to use.

```ts
import {  BarController, BarElement, CategoryScale, LinearScale,
Chart, ChartConfiguration, Legend, Title, Tooltip } from 'chart.js’;

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
import Chart from 'chart.js/auto’;

@ViewChild('lineChart') lineChart: ElementRef;
chart: Chart;

this.chart = new Chart(this.lineChart.nativeElement, {…});

```

## Reference

- [Chart.js](https://www.chartjs.org/docs/latest/getting-started/installation.html)
