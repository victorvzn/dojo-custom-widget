define([
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