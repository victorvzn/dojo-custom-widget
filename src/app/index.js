require(["dojo/parser", "dojo/request", "flight-pane/index"], function (parser, request, FlightPane) {
  
  var endPoint = 'data.json';

  var success = function(response){
    var data = JSON.parse(response);
    var flightPane = new FlightPane({data: data}).placeAt('FlightPaneContainer');

    //parser.parse();
  };

  var error = function(error){
    console.log('<ERROR>', error);
  };

  request.get(endPoint).then(success, error);
});