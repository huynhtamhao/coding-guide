<template>
  <div>
    <canvas id="lineChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default{
    name: 'LineChart',
    data() {
        return {
                chartData: chartData,
            }
    },
    mounted() {
        const ctx = document.getElementById('lineChart');
        new Chart(ctx, this.chartData);
    },
}

export const chartData = {
  type: "line",
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      data: [35, 59, 50, 31, 56, 35, 40],
      fill: false,
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1
    }]
  },
};
</script>