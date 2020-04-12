const covid19ImpactEstimator = (data) => { 
	let my_output = {
		data: data,			// the input data I received
		impact: {},			// my best case estimation
		severeImpact: {}  // my severe case estimation 
	}
		const requestedTimeInDays = nomalizeTimeIntoDays(my_output.data.periodType, my_output.data.periodType.timeToElapse);
		my_output.impact.currentlyInfected = my_output.data.reportedCases*10;
		my_output.impact.infectionsByRequestedTime = my_output.impact.currentlyInfected*(2^(requestedTimeInDays/3));
		my_output.impact.severeCasesByRequestedTime = 0.15*my_output.impact.infectionsByRequestedTime;
		my_output.impact.hospitalBedsByRequestedTime = (0.35*my_output.data.totalHospitalBeds)-my_output.impact.severeCasesByRequestedTime;    
		my_output.impact.casesForICUByRequestedTime = 0.05*my_output.impact.infectionsByRequestedTime;
		my_output.impact.casesForVentilatorsByRequestedTime = 0.02*my_output.impact.infectionsByRequestedTime;
		my_output.impact.dolarsInFlight = (my_output.data.region.avgDailyIncomePopulation*my_output.data.population)*(my_output.data.region.avgDailyIncomeInUSD*my_output.impact.infectionsByRequestedTime)*requestedTimeInDays;
		my_output.severeImpact.currentlyInfected = my_output.data.reportedCases*50;
		my_output.severeImpact.infectionsByRequestedTime = my_output.severeImpact.currentlyInfected*(2^(requestedTimeInDays/3));         
		my_output.severeImpact.severeCasesByRequestedTime = 0.15*my_output.severeImpact.infectionsByRequestedTime; 
		my_output.severeImpact.hospitalBedsByRequestedTime = (0.35*my_output.data.totalHospitalBeds)-my_output.severeImpact.severeCasesByRequestedTime;    
		my_output.severeImpact.casesForICUByRequestedTime = 0.05*my_output.severeImpact.infectionsByRequestedTime;
		my_output.severeImpact.casesForVentilatorsByRequestedTime = 0.02*my_output.severeImpact.infectionsByRequestedTime;
		my_output.severeImpact.dolarsInFlight = (my_output.data.region.avgDailyIncomePopulation*my_output.data.population)*(my_output.data.region.avgDailyIncomeInUSD*my_output.severeImpact.infectionsByRequestedTime)*requestedTimeInDays;      
		return my_output;
};

const nomalizeTimeIntoDays = (periodType, timeToElapse) => {
	switch (periodType){
		case "days":
			return timeToElapse; 
		case "weeks":
			return timeToElapse*7;
		case "months":
			return timeToElapse*30;
		case "years":
			return timeToElapse*365;
		default:
			return 1; 
	}
}
 
 
 
 export default covid19ImpactEstimator;
 
 
 
 
 
 
 
 
 
