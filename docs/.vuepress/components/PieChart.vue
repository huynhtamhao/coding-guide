<template>
  <div>
    <canvas id="pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default{
    name: 'PieChart',
    data() {
        return {
                chartData: chartData,
            }
    },
    mounted() {
        const ctx = document.getElementById('pie-chart');
        new Chart(ctx, this.chartData);
    },
}

export const chartData = {
  type: "pie",
  data: {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
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
  },
};
</script>