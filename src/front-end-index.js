var estimater = require('./estimator');
  
document.addEventListener('load', function(){
	document.querySelector("#data-go-estimate").addEventListener('click',function(){ 
			var periodType = document.querySelector('select[name="data-period-type"]').value;
			var timeToElapse = document.querySelector('input[name="data-time-to-elapse"]').value;
			var reportedCases = document.querySelector('input[name="data-reported-cases"]').value;
			var population = document.querySelector('input[name="data-population"]').value;
			var totalHospitalBeds = document.querySelector('input[name="data-total-hospital-beds"]').value;
			let fomdata = {
				region: {
					name: "Africa",
					avgAge: 19.7,
					avgDailyIncomeInUSD: 5,
					avgDailyIncomePopulation: 0.71
				},
				periodType: periodType,
				timeToElapse: Number(timeToElapse),
				reportedCases: Number(reportedCases),
				population: Number(population),
				totalHospitalBeds: Number(totalHospitalBeds)
			}; 

			let new_estimates = estimater.covid19ImpactEstimator(fomdata);
			const outputdiv = document.getElementById("output-div");
			let childiv = document.createElement("div");
			var newchild = outputdiv.appendChild(childiv);
			newchild.textContent = new_estimates; 
	});
	//testing here

});
