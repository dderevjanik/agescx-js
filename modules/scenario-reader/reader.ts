/// <reference path="ScenarioData.ts"/>
/// <reference path="ScenarioModel.ts"/>
/// <reference path="ASDataView.ts"/>

var openFile = function(event) {
        
        console.log('uploading a file');        
        var element: HTMLInputElement = <HTMLInputElement> event.srcElement;
        var inputFile = event.target;

        var reader: FileReader = new FileReader();
        reader.onload = function(){
                console.log('file uploaded');
                var arrayBuffer: ArrayBuffer = reader.result;
                // var view: DataView = new DataView(arrayBuffer, 0);
                // var asView: ASDataView = new ASDataView(view, 0);
                var model = new ScenarioModel(arrayBuffer);
                model.decompress();//2872
        };
        reader.readAsArrayBuffer(inputFile.files[0]);
};