//>>built
require({cache:{"url:flight-pane/template.html":'\x3cform id\x3d"flightsForm" method\x3d"post" enctype\x3d"multipart/form-data"\x3e\r\n  \x3cdiv class\x3d"container"\x3e\r\n    \x3cp\x3e\x26nbsp;\x3c/p\x3e\r\n    \x3cdiv class\x3d"well"\x3e\r\n      \x3cdiv class\x3d"row"\x3e\r\n        \x3cdiv class\x3d"col-sm-2"\x3e\r\n          \x3cp\x3e\x3cimg class\x3d"${baseClass}Photo" data-dojo-attach-point\x3d"photoNode" width\x3d"158"\x3e\x3c/p\x3e\r\n          \x3cbutton class\x3d"btn btn-success btn-block" data-dojo-attach-event\x3d"onclick:save"\x3eSave\x3c/button\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"col-sm-10"\x3e\r\n          \x3cinput type\x3d"text" class\x3d"form-control" data-dojo-attach-point\x3d"titleNode" placeholder\x3d"Title" name\x3d"flights[0][\'title\']"\x3e\r\n          \x3ch3\x3eDestinations\x3c/h3\x3e\r\n          \x3cdiv class\x3d"flights-rows" data-dojo-attach-point\x3d"rowsNode"\x3e\x3c/div\x3e\r\n          \x3cbutton class\x3d"btn btn-default" data-dojo-attach-event\x3d"onclick:addFlight"\x3eAdd flight\x3c/button\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/form\x3e'}});
define("flight-pane/index","dojo/_base/declare dojo dojo/dom dojo/html dojo/dom-form dojo/dom-prop dojo/json dojo/query dojo/dom-construct dojo/request dojo/_base/array dojo/parser dojo/ready dojo/on dojo/topic dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./template.html flight-row/index".split(" "),function(k,r,s,l,t,g,u,e,v,w,m,x,y,z,h,n,p,q,f){h.subscribe("refreshOrder",function(a){a=e(".FlightRowWidget .orderFlightRow");for(var c=e(".FlightRowWidget .departureNode"),d=e(".FlightRowWidget .arrivalNode"),
b=0;b<a.length;b++)a[b].innerHTML=b+1,g.set(c[b],"name","destinations["+b+"][departure]"),g.set(d[b],"name","destinations["+b+"][departure]")});return k("FlightPane",[n,p],{templateString:q,baseClass:"FlightPaneWidget",_i:0,data:null,rows:null,title:"unknown",photo:require.toUrl("http://placehold.it/294x165"),_setPhotoAttr:function(a){""!=a&&(this._set("photo",a),this.photoNode.src=a)},increment:function(){++this._i},constructor:function(a,c){},postCreate:function(){this.render()},render:function(){var a=
this.data.flights,c=this.rowsNode,d=null,b=null;0<a.length&&(this.titleNode.value=a[0].title,this.photoNode.src=a[0].photo);l.set(c,"");0<a.length?m.forEach(a,function(a){this.canRemoveFlight=0<this._i?"":"hidden";d={order:this._i+1,index:this._i,departure:a.departure.destination,arrival:a.arrival.destination,canRemoveFlight:this.canRemoveFlight};b=new f(d);b.placeAt(c);this.increment()}.bind(this)):(d={order:this._i+1,index:this._i,canRemoveFlight:"hidden"},b=new f(d),b.placeAt(c),this.increment())},
addFlight:function(a){a.preventDefault();this.increment();a=this.rowsNode;(new f({order:this._i+1,index:this._i})).placeAt(a);h.publish("refreshOrder")},save:function(a){a.preventDefault()}})});
//# sourceMappingURL=index.js.map