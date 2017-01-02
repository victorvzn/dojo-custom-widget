require({cache:{
'url:flight-row/template.html':"<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-1 text-center\"><strong class=\"orderFlightRow\">${order}</strong></div>\r\n    <div class=\"col-xs-5\">\r\n      <input type=\"text\" autofocus class=\"form-control departureNode\" data-dojo-attach-point=\"departureNode\" placeholder=\"Departure\" value=\"${departure}\" name=\"flights[${index}]['departure']['destination']\">\r\n    </div>\r\n    <div class=\"col-xs-5\">\r\n      <input type=\"text\" autofocus class=\"form-control arrivalNode\" data-dojo-attach-point=\"arrivalNode\" placeholder=\"Arrival\" value=\"${arrival}\" name=\"flights[${index}]['arrival']['destination']\">\r\n    </div>\r\n    <div class=\"col-xs-1\">\r\n      <button class=\"btn btn-danger ${canRemoveFlight}\" data-dojo-attach-event=\"onclick:removeFlight\">&times;</button>\r\n    </div>\r\n  </div>\r\n  <p></p>\r\n</div>\r\n"}});
define("flight-row/index", [
    "dojo/_base/declare",
    "dojo",
    "dojo/request",
    "dojo/parser", 
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/ready",
    "dojo/query",
    "dojo/on",
    "dojo/topic",
    "dojo/_base/fx",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template.html"
], function(declare, dojo, request, parser, domClass, domConstruct, ready, query, on, topic, fx, _WidgetBase, _TemplatedMixin, template) {

  return declare("FlightRow", [_WidgetBase, _TemplatedMixin], {
    
    templateString: template,

    baseClass: "FlightRowWidget",

    order: 0,
    index: 0,

    departure: "",
    arrival: "",
    canRemoveFlight: '',
    
    constructor: function(params, srcNodeRef){
      console.log("creating ROW widget with params " + dojo.toJson(params) + " on node " + srcNodeRef);
    },

    postCreate: function () {
    },

    removeFlight: function (event) {
      event.preventDefault();
      var actualNode = this.domNode.id;
      // domClass.remove(query('#'+actualNode + ' .alert')[0], 'hidden');
      // domClass.add(query('#'+actualNode + ' .row')[0], 'hidden');
      domConstruct.destroy(actualNode);
      topic.publish("refreshOrder");
      // setTimeout(function () {    
      // }, 2000);
      // // pendiente undo
    }
  });

});