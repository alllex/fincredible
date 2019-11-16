AUI.add('hundev-responsive', function(A) {
	//Basic settings and elements
var Lang = A.Lang,
	getClassName = A.getClassName,
	defaults = YUI.AUI.namespace('defaults.hundevresponsive'),
	DEFAULTS_COLUMNS = defaults.columns || (defaults.columns = {
		'mobile': 320,
		'tablet': 720,
		'desktop': 1000
	}),
	DOC_EL = A.config.doc.documentElement,
	WIN = A.getWin();

	var currentVersion;
	
	//Decision making if build necessary
	var responsiveControl = function(event) {
		var viewportWidth = viewportSize.getWidth();
		var toBuild = versionOfWidth(viewportWidth);
		if(currentVersion != toBuild){
			buildElements(toBuild);
		}
		currentVersion = toBuild;
	};
	
	//Determine which version is suitable for actual window size
	var versionOfWidth = function(width){
		var last = null;
		for (var i in DEFAULTS_COLUMNS) {
			if(width <= DEFAULTS_COLUMNS[i]){
				if(last == null){
					last = i;
				}
				return last;
			}
			last = i;
		}
		
		if(typeof forceVersion != "undefined" && forceVersion != null){
			return forceVersion;
		}
		
		return last;			
	};

	
	var buildElements = function(toBuild){
		A.on('domready', function(event){
		
		//Global variable
		currentMode = toBuild;
		for(i in responsiveContent){
			responsiveContent[i].preCall(toBuild);
			
			//clean elements
			for(j in responsiveContent[i].content){
				var place = A.one(responsiveContent[i].content[j].target);
				if(place != null){
					place.setContent("");
				}
			}
			
			//build elements
			if(typeof responsiveContent[i].content[toBuild] != "undefined"){
				var target = A.one(responsiveContent[i].content[toBuild].target);
				if(target != null){
					target.setContent(responsiveContent[i].content[toBuild].content);
				}
			}
			
			responsiveContent[i].afterCall(toBuild);
		}
		});
	};
	
	//Set up action listener
	var resizeHandle = WIN.on('resize', A.debounce(responsiveControl, 50));

//Delegate functions
A.Responsive = {
	responsiveControl: responsiveControl,
	_resizeHandle: resizeHandle,
};

}, '1.5.0' ,{requires:['aui-base'], skinnable:false});

//Global parts and interfaces

var responsiveContent = [];
var currentMode = "";

function responsiveData(_name, _content, _precall, _aftercall){
	responsiveContent.push({
		name: _name,
		content: _content,
		preCall: _precall,
		afterCall: _aftercall
	});
}

/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function (window) {

	window.viewportSize = {};

	window.viewportSize.getHeight = function () {
		return getSize("Height");
	};

	window.viewportSize.getWidth = function () {
		return getSize("Width");
	};

	var getSize = function (Name) {
		var size;
		var name = Name.toLowerCase();
		var document = window.document;
		var documentElement = document.documentElement;
		if (window["inner" + Name] === undefined) {
			size = documentElement["client" + Name];
		}
		else if (window["inner" + Name] != documentElement["client" + Name]) {
			var bodyElement = document.createElement("body");
			bodyElement.id = "vpw-test-b";
			bodyElement.style.cssText = "overflow:scroll";
			var divElement = document.createElement("div");
			divElement.id = "vpw-test-d";
			divElement.style.cssText = "position:absolute;top:-1000px";
			divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
			bodyElement.appendChild(divElement);
			documentElement.insertBefore(bodyElement, document.head);
			if (divElement["offset" + Name] == 7) {
				size = documentElement["client" + Name];
			}
			else {
				size = window["inner" + Name];
			}
			documentElement.removeChild(bodyElement);
		}
		else {
			size = window["inner" + Name];
		}
		return size;
	};
})(this);