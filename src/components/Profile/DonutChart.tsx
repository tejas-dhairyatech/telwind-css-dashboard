import Chart from "react-apexcharts"


export const DonutChart = () => {

  const options: any = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",

      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: "#dddddd",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },

    },
  };
  return (
    <div className="py-6 bg-white rounded-lg p-5 
    flex items-center justify-center">
      <Chart
        options={options.options}
        series={options.series}
        type="donut"
        height={270}
      />
    </div>
  )
}
