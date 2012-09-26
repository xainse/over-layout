/**
 * @author @xainse
 */


var uperLayer = {
		
	layer_img: '',
	layer_top_pos: 0,
	layer_lft_pos: 0,
	
	layer_wrap: '<div class="upper-layer"></div>',
	layer_id: 'upper-layer',
		
	setup: function (settings) {
		this.layer_img = typeof(settings['layer_img'])!='undefined'?settings['layer_img']:false;
		
	},
	
	initSettings: function (settings) {		
		
	},
	
	initKeySwitch: function () {
	
	}
	
};


/*
document.onkeydown = NavigateThrough;

var focusInInput = false;

if (document.getElementsByTagName)
    onload = function () {
        var e, i = 0;
        while (e = document.getElementsByTagName('INPUT')[i++]) {
            if (e.type == 'text' || e.type == 'search') e.onfocus = function () {focusInInput = true};
            if (e.type == 'text' || e.type == 'search') e.onblur = function () {focusInInput = false};
        }
        i = 0;
        while (e = document.getElementsByTagName('TEXTAREA')[i++]) {
            e.onfocus = function () {focusInInput = true};
            e.onblur = function () {focusInInput = false};
        }
    };

function NavigateThrough (event) {
	if (!document.getElementById) return;

	if (window.event) event = window.event;

	if ((event.ctrlKey || event.altKey) && !focusInInput){
		var link = null;
		var href = null;
		switch (event.keyCode ? event.keyCode : event.which ? event.which : null){
			case 0x25:
				link = document.getElementById ('NextLink');
				break;
			case 0x27:
				link = document.getElementById ('PrevLink');
				break;
			case 0x26:
				link = document.getElementById ('UpLink');
				break;
			case 0x28:
				link = document.getElementById ('DownLink');
				break;
			case 0x24:
				href = '/';
				break;
		}

		if (link && link.href) document.location = link.href;
		if (href) document.location = href;
	}			
}

jQuery(function(){
  if(jQuery('.howcr').size() > 0){
    if(navigator.userAgent.toLowerCase().indexOf("mac os x 10_7")!=-1){
      jQuery('.howcr').html('Alt');
    }
  }
});

*/