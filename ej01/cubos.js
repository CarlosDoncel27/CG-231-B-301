var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT);
camera.position.z =5;
camera.position.x = -2.2;
camera.position.y = 3;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


const vertices = [
  0, 1, 0, // Vértice superior
  -1, -1, 1, // Vértice frontal izquierdo
  1, -1, 1, // Vértice frontal derecho
  1, -1, -1, // Vértice trasero derecho
  -1, -1, -1 // Vértice trasero izquierdo
];

const indices = [
  0, 1, 2, // Cara frontal
  0, 2, 3, // Cara derecha
  0, 3, 4, // Cara trasera
  0, 4, 1, // Cara izquierda
  1, 2, 3,  // Cara inferior
  1, 3, 4   // Cara inferior
];

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
geometry.setIndex(indices);

// Creamos un material rojo y una malla a partir de la geometría y el material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);



// Definimos una función para renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();



const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

var arrowSize = 2; // Tamaño flecha eje
    var origin = new THREE.Vector3(0, 0, 0); // Definir origen
    var x = new THREE.Vector3(1, 0, 0); // vector unitario en X
    var y = new THREE.Vector3(0, 1, 0); // Vector unitario en Y
    var z = new THREE.Vector3(0, 0, 1); // Vector unitario en Z
    var colorR = new THREE.Color(0xAA0000); // Color Rojo - Red
    var colorG = new THREE.Color(0x00AA00); // Color Verde - Green
     var colorB = new THREE.Color(0x0000AA); // Color Azul -Blue

    // Ejes X, Y, Z
    var arrowX = new THREE.ArrowHelper(x, origin, arrowSize, colorR); // Creación flecha en eje X
    var arrowY = new THREE.ArrowHelper(y, origin, arrowSize, colorG); // Creación flecha en eje Y
    var arrowZ = new THREE.ArrowHelper(z, origin, arrowSize, colorB); // Creación flecha en eje Z

     scene.add(arrowX); // Agregar flecha eje X
      scene.add(arrowY); // Agregar flecha eje Y
     scene.add(arrowZ); // Agregar flecha eje Z

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

