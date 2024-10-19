import * as THREE from "three";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
)

camera.position.z = 2

const geometry = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array(1000);

for(let i=0; i<=1000; i++){
  vertices[i] = (Math.random() - 0.5) * 2
}

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true } );

const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh)

const canvas = document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({ canvas : canvas})
renderer.setSize(window.innerWidth,  window.innerHeight)

function animate(){
  window.requestAnimationFrame(animate);
  // cube.rotation.x = 0.01;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;
  renderer.render(scene, camera)
}
animate()
    






// import * as THREE from "three";

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// )

// camera.position.z = 6

// const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
// const material = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
// const cube = new THREE.Mesh(geometry, material);


// scene.add(cube)





// const canvas = document.querySelector("canvas")
// const renderer = new THREE.WebGLRenderer({ canvas : canvas})
// renderer.setSize(window.innerWidth,  window.innerHeight)

// let clock = new THREE.Clock()
// function animate(){
//   window.requestAnimationFrame(animate);
//   cube.rotation.x = 0.01;
//   cube.rotation.y += 0.01;
//   cube.rotation.z += 0.01;
//   console.log(clock.getElapsedTime())
//   renderer.render(scene, camera)
// }
//     animate()
    
    
//fps :- frame per second

//using Clock 

// because sab ki device ke fps diff hotey h to vo khi tej or dhire na chlne lagey that's why we use Clock

// Example:-

// let clock = new THREE.Clock()
// function animate(){
//   window.requestAnimationFrame(animate);
//   cube.rotation.x = clock.getElapsedTime() * 2;
//   // cube.rotation.y += 0.01;
//   // cube.rotation.z += 0.01;
//   console.log(clock.getElapsedTime())
//   renderer.render(scene, camera)
// }


// diff geometry

// const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
// const material = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
// const cube = new THREE.Mesh(geometry, material);

// const geometry = new THREE.ConeGeometry(1, 3, 10);
// const material = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
// const cube = new THREE.Mesh(geometry, material);

// const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
// const material = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
// const cube = new THREE.Mesh(geometry, material);
