<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <canvas id="myChart" width="50" height="50"></canvas>
  </div>
</template>



<script>
import Chart from 'chart.js/auto';
  export default{

    props:{
      msg: String
    }, mounted()
    {
      console.log('Component mounted.')

      const ctx = document.getElementById('myChart')

      new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:[
            'rgba(255,99,132,0.9)',
            'rgba(54,162,235,0.9)',
            'rgba(255,206,86,0.9)',
            'rgba(75,192,192,0.9)',
            'rgba(153,102,255,0.9)',
            'rgba(255,165,0,0.9)'
        ],
        borderColor:[
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,64,0.2)'

        ],
        borderWidth: 4
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    }

  }

</script>