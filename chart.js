// 1 график
function createLineChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [42, 40, 22, 15, 95, 72, 3],
          backgroundColor: '#ffd1eb'
        },
        {
          label: 'Dataset 2',
          data: [44, 80, 14, 48, 24, 35, 14],
          backgroundColor: '#dcf0ff'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 2 график
function createChart2() {
  const ctx = document.getElementById('chart2').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-45, -35, 22, 55, -25, -35, 30],
          backgroundColor: '#ffe89e'
        },
        {
          label: 'Dataset 2',
          data: [45, -55, 25, 15, 30, 18, 5],
          backgroundColor: '#d9b3ff'
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 3 график
function createChart3() {
  const ctx = document.getElementById('chart3').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-50, -30, 45, 28, 85, -10, -35],
          borderColor: '#ffe89e',
          backgroundColor: '#ffe89e',
          borderWidth: 2,
          fill: false
        },
        {
          label: 'Dataset 2',
          data: [-70, 20, 80, 68, -55, -30, -35],
          borderColor: '#8c6eff',
          backgroundColor: '#8c6eff',
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 4 график
function createChart4() {
  const ctx = document.getElementById('chart4').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-20, -60, 10, 60, -30, 5, -10],
          backgroundColor: '#ffb3b3',
          stack: 's1'
        },
        {
          label: 'Dataset 2',
          data: [-25, -50, -65, 30, -38, -55, 42],
          backgroundColor: '#bdf5df',
          stack: 's1'
        },
        {
          label: 'Dataset 3',
          data: [-10, -10, 38, -55, 52, 5, 30],
          backgroundColor: '#b3d1ff',
          stack: 's2'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 5 график
function createChart5() {
  const ctx = document.getElementById('chart5').getContext('2d');
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [11, 16, 4, 5, 3, 4],
        backgroundColor: ['#ffb3b3', '#dcf0ff', '#ffe89e', '#bdf5df', '#b399ff', '#ffd8b1']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 6 график
function createChart6() {
  const ctx = document.getElementById('chart6').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [25, 38, 9, 14, 5, 8],
        backgroundColor: ['#ffd1eb', '#dcf0ff', '#ffe89e', '#bdf5df', '#e0b3ff', '#ffd8b1']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 7 график
function createChart7() {
  const ctx = document.getElementById('chart7').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-75, 92, 35, 10, -5, -28, 40],
          borderColor: '#ffe89e',
          backgroundColor: '#ffe89e',
          borderWidth: 2,
          fill: false
        },
        {
          label: 'Dataset 2',
          data: [-75, -35, -52, -38, -12, -45, 5],
          borderColor: '#8c6eff',
          backgroundColor: '#8c6eff',
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// 8 график
function createChart8() {
  const ctx = document.getElementById('chart8').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [27, 36, 12, 14, 4, 8],
        backgroundColor: ['#ffd1eb', '#dcf0ff', '#ffe89e', '#bdf5df', '#e0b3ff', '#ffd8b1']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// запускаем все графики
createLineChart();
createChart2();
createChart3();
createChart4();
createChart5();
createChart6();
createChart7();
createChart8();

