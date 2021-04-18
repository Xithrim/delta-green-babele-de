Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'delta-green-babele-de',
			lang: 'de',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/delta-green-babele-de/img/fvtt-anvil-de.png";
		
	}
});
