<!DOCTYPE html>
<html>
<head>

	<title>Layout Compare</title>
	
</head>
<body>

	<h1>Your HTML/CSS layout here</h1>

<!-- Пример как подключить скрипт макета -->
<script type="text/javascript" src="http://over-layout.dev/js/upper.layer.js"></script>
<script type="text/javascript">
	upperLayout.setup({maketImg: 'img/maket.jpg'});
</script>
	
	
	<!-- script for compare picture and html/css layout in codding process -->
	
	<!-- Скопировать сюда скрипт, сделать пример -->
	
<?php /*
<div class="layer" id="upper-layer" style="background:url(img/maket.jpg) no-repeat 50% 0 transparent; display:none; position: absolute; top:0; left:0; width:100%; height: 800px; opacity:0.5;"></div>
<script type="text/javascript">

function NavigateThrough (event) {
	if (!document.getElementById) return;

	if (window.event) event = window.event;

	if ((event.ctrlKey || event.altKey) && !focusInInput){
		var maket = document.getElementById('upper-layer');
		switch (event.keyCode ? event.keyCode : event.which ? event.which : null){
			case 0x25:
				link = document.getElementById ('NextLink');
				break;
			case 0x27:
				link = document.getElementById ('PrevLink');
				break;
			case 0x26:			
			maket.style.display = (maket.style.display != 'none')?'none':'block'; 
				break;
			case 0x28:
				link = document.getElementById ('DownLink');
				break;
			case 0x24:
				href = '/';
				break;
		}

//		if (link && link.href) document.location = link.href;
//		if (href) document.location = href;
	}			
}

document.onkeydown = NavigateThrough;

</script>
*/?>
	
</body>
</html>