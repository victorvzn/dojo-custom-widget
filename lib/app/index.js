//>>built
require(["dojo/parser","dojo/request","flight-pane/index"],function(d,b,c){b.get("data.json").then(function(a){a=JSON.parse(a);(new c({data:a})).placeAt("FlightPaneContainer")},function(a){})});
//# sourceMappingURL=index.js.map