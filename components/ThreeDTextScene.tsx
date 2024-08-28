import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const ThreeDTextScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  let textMesh: THREE.Mesh;
  useEffect(() => {
    if (rendererRef.current) return;

    const scene = new THREE.Scene();
    const sizes = {
      width: containerRef.current?.clientWidth || window.innerWidth,
      height: containerRef.current?.clientHeight || window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 0, 4);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    scene.add(camera);

    //lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-1, -1, 3);
    scene.add(directionalLight);

    // lights optimization
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.top = 2;
    directionalLight.shadow.camera.right = 2;
    directionalLight.shadow.camera.bottom = -2;
    directionalLight.shadow.camera.left = -2;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 6;
    directionalLight.shadow.radius = 10;

    // lights helper

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x00000080, 0);
    containerRef.current?.appendChild(renderer.domElement);
    rendererRef.current = renderer; // Save the renderer instance

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const heartTexture = textureLoader.load('/textures/matcaps/12.png');
    const coneTexture = textureLoader.load('/textures/matcaps/8.png');
    const donutTexture = textureLoader.load('/textures/matcaps/1.png');

    // Font Loader
    const fontLoader = new FontLoader();

    const textGroup = new THREE.Group();
    textGroup.name = 'textGroup'; // Set a name for the text group

    fontLoader.load(
      '/textures/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new TextGeometry('L E V E L', {
          font: font,
          size: 0.5,
          depth: 0.2,
          curveSegments: 4,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 12,
        });

        textGeometry.center();
        textGeometry.computeBoundingBox();

        const material = new THREE.MeshMatcapMaterial({
          color: 'white',
        });
        textMesh = new THREE.Mesh(textGeometry, material);
        textGroup.add(textMesh);
      }
    );

    // Plane
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 0.8, 1, 1),
      new THREE.MeshBasicMaterial({
        color: 0x72bf44,
        side: THREE.DoubleSide,
      })
    );
    textGroup.add(plane);
    textGroup.scale.set(1.5, 1.5, 1.5);
    scene.add(textGroup);

    // Objects (donuts, octahedrons, hearts)
    const donutMaterial = new THREE.MeshMatcapMaterial({
      matcap: donutTexture,
    });
    const donutGeometry = new THREE.TorusGeometry(0.2, 0.1, 20, 45);

    const coneMaterial = new THREE.MeshMatcapMaterial({ matcap: coneTexture });

    const heartGeometry = createHeartGeometry();
    const heartMaterial = new THREE.MeshMatcapMaterial({
      matcap: heartTexture,
    });

    const octahedronGeometry = new THREE.OctahedronGeometry(0.3);

    for (let i = 0; i < 20; i++) {
      const donut = new THREE.Mesh(donutGeometry, donutMaterial);
      const octahedron = new THREE.Mesh(octahedronGeometry, coneMaterial);
      const heart = new THREE.Mesh(heartGeometry, heartMaterial);

      [donut, octahedron, heart].forEach((mesh) => {
        mesh.position.x = (Math.random() - 0.5) * 10;
        mesh.position.y = (Math.random() - 0.5) * 10;
        mesh.position.z = (Math.random() - 0.5) * 10;

        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        const scale = Math.random();
        mesh.scale.set(scale, scale, scale);

        scene.add(mesh);
      });
    }

    // Handle window resize
    const handleResize = () => {
      sizes.width = containerRef.current?.clientWidth || window.innerWidth;
      sizes.height = containerRef.current?.clientHeight || window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.parent?.name !== 'textGroup') {
          child.rotation.x += 0.015;
          child.rotation.y += 0.015;
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      containerRef.current?.removeChild(renderer.domElement);
      rendererRef.current = undefined;
    };
  }, []);

  return (
    <div
      className=" w-full h-full flex justify-center items-center"
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '300px',
        minWidth: '500px',
      }}
    ></div>
  );
};

function createHeartGeometry(): THREE.ExtrudeGeometry {
  const x = 0,
    y = 0;
  const heartShape = new THREE.Shape();

  heartShape.moveTo(x + 0.5, y + 0.5);
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
  heartShape.bezierCurveTo(
    x - 0.6,
    y + 1.1,
    x - 0.3,
    y + 1.4,
    x + 0.5,
    y + 1.9
  );
  heartShape.bezierCurveTo(
    x + 1.2,
    y + 1.54,
    x + 1.6,
    y + 1.1,
    x + 1.6,
    y + 0.7
  );
  heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
  heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);
  const extrudeSettings = {
    steps: 2,
    depth: 0.1,
    bevelEnabled: false,
  };

  return new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
}

export default ThreeDTextScene;
