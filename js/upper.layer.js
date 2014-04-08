/**
 * @author @xainse
 */


var upperLayout = {
	
	layer_img: '',
	layer_top_pos: 0,
	layer_lft_pos: 0,
	
	//layer_wrap: '<div class="layer" id="upper-layer" style="background:url(img/maket.jpg) no-repeat 50% 0 transparent; display:none; position: absolute; top:0; left:0; width:100%; height: 800px; opacity:0.5;"></div>',
	
	layer_id: 'upper-layer',
		
	setup: function (settings) {
		
		this.initSettings(settings);				
		this.addMaketLayer();		
	},
	
	addMaketLayer: function () {
		var newDiv = document.createElement('div');
		newDiv.className = 'layer';
		newDiv.id = 'upper-layer';
			newDiv.style.background	= "url("+this.layer_img+") no-repeat 50% 0 transparent";
			newDiv.style.display = 'none'; 
			newDiv.style.position	= 'absolute'; 
			newDiv.style.top		= 0; 
			newDiv.style.left		= 0; 
			newDiv.style.width		= '100%'; 
			newDiv.style.height		= '800px'; 
			newDiv.style.opacity	= '0.5'; //.backgroundColor = 'red';
			newDiv.style.zIndex		= 1000;
		
		document.body.appendChild(newDiv);
	
	},
	
	initSettings: function (settings) {		
		this.layer_img = typeof(settings['maketImg'])!='undefined'?settings['maketImg']:false;
		//this.layer_wrap = '<div class="layer" id="upper-layer" style="background:url('+this.layer_img+') no-repeat 50% 0 transparent; display:none; position: absolute; top:0; left:0; width:100%; height: 800px; opacity:0.5;"></div>';
	},
	
	NavigateThrough: function (event) {
		if (!document.getElementById) return;

		if (window.event) event = window.event;

		if ((event.ctrlKey || event.altKey)/* && !focusInInput*/){
			var maket = document.getElementById(upperLayout.layer_id);
			switch (event.keyCode ? event.keyCode : event.which ? event.which : null){
				case 0x26:			
				maket.style.display = (maket.style.display != 'none')?'none':'block'; 
					break;
			}
		}			
	}
};

document.onkeydown = upperLayout.NavigateThrough;
