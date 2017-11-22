var app={
	inicio: function(){
		this.iniciaBotones();
		this.iniciaFastClick();
		this.iniciaHummer();
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaBotones: function(){
		var botonClaro = document.querySelector('#claro');
		var botonOscuro = document.querySelector('#oscuro');

		botonClaro.addEventListener('click',this.ponloClaro,false);
		botonOscuro.addEventListener('click',this.ponloOscuro,false);
	},

	iniciaHummer: function(){
		var zona = document.getElementById('zona-gestos');
		var hammerTime = new Hammer(zona);

		//Por defecto, la librería Hammer no inicia 'pinch' y 'rotate'
		hammerTime.get('pinch').set({ enable: true});
		hammerTime.get('rotate').set({ enable: true});

		hammerTime.on('tap doubletap swipe press rotate', function(ev) {
			document.querySelector('#info').innerHTML= ev.type+'!';
		}); 
	},

	ponloClaro: function(){
		document.body.className = 'claro';
	},


	ponloOscuro: function(){
		document.body.className = 'oscuro';
	},
};

	if('addEventListener' in document){
		document.addEventListener('DOMContentLoaded', function() {
			app.inicio();
		}, false);
	}

