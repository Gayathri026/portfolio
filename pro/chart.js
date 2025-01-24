const chartData = {
    labels:["Front-end Development","Back-end Development" ,"Database Management","Data Analysis"],
    data:[40,30,20,10],

};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");
new Chart(myChart, {
    type:"doughnut",
    data:{
        labels: chartData.labels,
        datasets:[
            {
                label:"Skills",
                data:chartData.data,

        },
    ],
    },
    options:{
        borderWidth:6,
        borderRadius:2,
        hoverBorderWidth:0,
        plugins:{
            legend:{
                display:false,
            },
        },
    },
});

const populateUl = ()=>{
    chartData.labels.forEach((l,i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}:<span class='percentage'>${chartData.data[i]}%</span>`;
        ul.appendChild(li);
        
    });
};
populateUl();
