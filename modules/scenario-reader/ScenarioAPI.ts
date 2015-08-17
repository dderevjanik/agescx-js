/// <reference path="ScenarioModel.ts"/>

class ScenarioAPI{
	
	private model: ScenarioData = null;
	
	constructor(scenario: File){
		let fileReader: FileReader = new FileReader();
		
		fileReader.onload = function(){
			let arrayBuffer: ArrayBuffer = fileReader.result;
			this.model = new ScenarioModel(arrayBuffer);
			this.model.decompress();
		};
		
		fileReader.readAsArrayBuffer(scenario);
	}
	
}