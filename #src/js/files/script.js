
if (document.getElementById('bm')) {
	var animation = bodymovin.loadAnimation({
		container: document.getElementById('bm'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'data.json'
	})
}


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});