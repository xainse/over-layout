/**
 * @author @xainse
 * Скрипт написан для того, что-бы подгонять верстку страницы под макет полученный от дизайнера.
 * В исходнике страницы, над которой рабтаем, нужно загрузить скрипт и передать настройки с путем к макету.
 * TODO: 1. нужно добавить рабочий пример.
 * TODO: 2. нужно вывести на странице подсказку, что стиль загруен
 */

var upperLayout = {
	
	layer_img: '',
	layer_top_pos: 0,
	layer_lft_pos: 0,
	
	//layer_wrap: '<div class="layer" id="upper-layer" style="background:url(img/maket.jpg) no-repeat 50% 0 transparent; display:none; position: absolute; top:0; left:0; width:100%; height: 800px; opacity:0.5;"></div>',
	layer_id: 'upper-layer',

    /**
     * Вызов скрипта настроек и передача параметров
     * @param settings
     */
	setup: function (settings) {
		this.initSettings(settings);				
		this.addMaketLayer();		
	},

    /**
     * Create transparent maket over the html page, to correct
     */
	addMaketLayer: function () {
		var newDiv = document.createElement('div');
		newDiv.className = 'layer';
		newDiv.id = this.layer_id;
			newDiv.style.background	= "url("+this.layer_img+") no-repeat 50% 0 transparent";
			newDiv.style.display    = 'none';
			newDiv.style.position	= 'absolute'; 
			newDiv.style.top		= this.top; 
			newDiv.style.left		= this.left;
			newDiv.style.width		= this.width;
			newDiv.style.height		= this.height;
			newDiv.style.opacity	= this.opacity
			newDiv.style.zIndex		= this.zIndex;
		
		document.body.appendChild(newDiv);
	},

    /**
     * Set params from server side
     * @param settings
     */
	initSettings: function (settings) {		
		this.layer_img  = settings.maketImg ? settings.maketImg:'none';
		this.top        = settings.top      ? settings.top:0;
		this.left       = settings.left     ? settings.left:0;
		this.zIndex     = settings.zIndex   ? settings.zIndex:1000;
        this.width      = settings.width    ? settings.width:'100%';
        this.height     = settings.height   ? settings.height:'1000px';
        this.opacity    = settings.opacity  ? settings.opacity:'0.5';

		//this.layer_wrap = '<div class="layer" id="upper-layer" style="background:url('+this.layer_img+') no-repeat 50% 0 transparent; display:none; position: absolute; top:0; left:0; width:100%; height: 800px; opacity:0.5;"></div>';
	},

    /**
     * Управление показом/сокрытием макета используя комбинацию клавишей Gtrl+<СтрелкаВверх>
     * @param event
     * @constructor
     */
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
