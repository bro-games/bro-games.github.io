// once everything is loaded, game will start.
function init() {
	// insert game logic and WebGL render here
	var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
		var renderer = new THREE.WebGLRenderer();
		renderer.setClearColorHex(0xEEEEEE);
		renderer.setSize(window.innerWidth, window.innerHeight);
		var axes = new THREE.AxisHelper(20);
		scene.add(axes);

	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);
	renderer.render(scene, camera);
};
window.onload = init;