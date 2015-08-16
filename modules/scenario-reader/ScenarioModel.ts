/// <reference path="ScenarioData.ts"/>

class ScenarioModel {
	
	private _data: ScenarioData = null;
	private _buffer: ArrayBuffer = null;
	
	constructor(arrayBuffer: ArrayBuffer){
		this._data = new ScenarioData();
		this._buffer = arrayBuffer;
	}
	
	public decompress(): void{
		let view: DataView = new DataView(this._buffer, 0);
		let asView: ASDataView = new ASDataView(view, 0);
		this._data.read(asView);
	}
	
}