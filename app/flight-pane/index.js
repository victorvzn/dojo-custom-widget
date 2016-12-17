 define([
    "dojo/_base/declare",
    "dojo",
    "dojo/dom",
    "dojo/html",
    "dojo/dom-form",
    "dojo/dom-prop",
    "dojo/json",
    "dojo/query",
    "dojo/dom-construct",
    "dojo/request",
    "dojo/_base/array",
    "dojo/parser", 
    "dojo/ready",
    "dojo/on",
    "dojo/topic",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template.html",
    "app/flight-row/index"
], function(declare, dojo, dom, html, domForm, domProp, JSON, query, domConstruct, request, arrayUtil, parser, ready, on, topic, _WidgetBase, _TemplatedMixin, template, FlightRow) {

  topic.subscribe("refreshOrder", function(text){
    var orderRowNodes  = query('.FlightRowWidget .orderFlightRow'),
        departureNodes = query('.FlightRowWidget .departureNode'),
        arrivalNodes   = query('.FlightRowWidget .arrivalNode');
    for (var order=0; order<orderRowNodes.length; order++) {
      var counter = order + 1;
      orderRowNodes[order].innerHTML = counter;
      domProp.set(departureNodes[order], 'name', 'destinations[' + order + '][departure]');
      domProp.set(arrivalNodes[order], 'name', 'destinations[' + order + '][departure]');
    }
  });

  return declare("FlightPane", [_WidgetBase, _TemplatedMixin], {
    
    templateString: template,
    baseClass: "FlightPaneWidget",

    _i: 0,
    data: null,
    rows: null,
    title: "unknown",

    photo: require.toUrl("http://placehold.it/294x165"),
    _setPhotoAttr: function(imagePath) {
      if (imagePath != "") {
        this._set("photo", imagePath);
        this.photoNode.src = imagePath;
      }
    },

    increment: function () {
      ++this._i;
    },

    constructor: function(params, srcNodeRef){
      //console.log("creating widget with params " + dojo.toJson(params) + " on node " + srcNodeRef);
    },

    postCreate: function () {
      //console.log('postCreate...', JSON.parse(this.data));
      this.render();
    },

    render: function () {
        var jsonRes = this.data,
            flightsJson = jsonRes.flights,
            flightsRowsContainer = this.rowsNode,
            json = null,
            widget = null;
        if (flightsJson.length > 0) {
          this.titleNode.value = flightsJson[0].title;
          this.photoNode.src = flightsJson[0].photo;
        }

        html.set(flightsRowsContainer, '');

        if (flightsJson.length > 0) { // Si hay mas de un elemento se hacen render de los mismos
          arrayUtil.forEach(flightsJson, function (flight) {
            
            if (this._i > 0) { // Se oculta el boton eliminar cuando sea el primer elemento
              this.canRemoveFlight = '';
            } else {
              this.canRemoveFlight = 'hidden';
            }

            json = {
              order: this._i + 1,
              index: this._i,
              departure: flight.departure.destination,
              arrival: flight.arrival.destination,
              canRemoveFlight: this.canRemoveFlight
            };

            widget = new FlightRow(json);
            widget.placeAt(flightsRowsContainer);
            
            this.increment();
          }.bind(this));
        
        } else { // si el array está vacío se agrega un elemento vacío 
          
          json = {
            order: this._i + 1,
            index: this._i,
            canRemoveFlight: 'hidden'
          };

          widget = new FlightRow(json);
          widget.placeAt(flightsRowsContainer);
      
          this.increment();
        }
    },

    addFlight: function (event) {
      event.preventDefault();
      this.increment();
      var flightsRowsContainer = this.rowsNode,
          widget = new FlightRow({order: this._i+1, index: this._i});
      widget.placeAt(flightsRowsContainer);
      topic.publish("refreshOrder");
    },

    save: function (event) {
      event.preventDefault();
      console.log('Saved!');      
    }

  });

});