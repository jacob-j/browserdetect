(function(){
	"use strict";

	function br(){

		var ua = navigator.userAgent;
		var tem;
		var uainfo = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 

		if(/trident/i.test(uainfo[1])){ /* Chec kif the browser is IE 11 */
			tem = /\brv[ :]+(\d+)/g.exec(ua) || []; 
			return { name: 'ie', version: (tem[1] || '') };
		}
		if(uainfo[1] === 'Chrome'){ /* Check if the browser is Edge */
			tem = ua.match(/\b(Edge)\/(\d+)/);
			var version = ua.split("/").pop();
			version = version.split(".");
			if(tem != null){
				return { name: "edge", version: version[0] };
			}
		}
		if(uainfo[1] === 'Chrome'){ /* Check if the browser is Opera */
			tem = ua.match(/\bOPR\/(\d+)/);
			if(tem!=null){
				return { name:'opera', version: tem[1] };
			}
		}   

		uainfo = uainfo[2] ? [uainfo[1], uainfo[2]] : [navigator.appName, navigator.appVersion, '-?'];

		if( (tem=ua.match(/version\/(\d+)/i)) != null){
			M.splice(1, 1, tem[1]);
		}

		if(uainfo[0] == "IE" || uainfo[0] == "MSIE"){
			uainfo[0] = "ie";
		}

		var results = {
		  name: uainfo[0].toLowerCase(),
		  version: uainfo[1]
		};
		
		return results;
	}

	var results = br();

	var html = document.getElementsByTagName("html")[0];

	html.setAttribute("browser", results.name);
	html.setAttribute("version", results.version);

	var className = html.className;

	if(className.length > 0){
		html.className = html.className + " " + results.name + " " + results.name + results.version;
	} else {
		html.className = results.name + results.version + " " + results.name;
	}

})();
