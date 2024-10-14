<template>
  <div class="character relative ">
    <div id="character" class="absolute left-0 top-0" ref="sceneContainer"></div>

  </div>
</template>
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
  components: {

  },

  data() {
    return {

    };
  },
  methods: {

    Model() {
      const scene = new THREE.Scene();
      const character = document.querySelector('#character');
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      

      
      camera.position.set(0, 0, 5); // 設定攝影機的位置


      //渲染

      const renderer = new THREE.WebGLRenderer({ alpha: true });  //渲染透明色
      renderer.setSize(character.clientWidth, character.clientHeight);
      this.$refs.sceneContainer.appendChild(renderer.domElement);

      function resize() {
        renderer.setSize(character.clientWidth, character.clientHeight);
        camera.aspect = character.clientWidth / character.clientHeight;
        camera.updateProjectionMatrix();
      }
      window.addEventListener('resize', resize);
      resize(); // 初始調用
      //-----------------------------------------------
      scene.background = null;   //背景空白
      const light = new THREE.AmbientLight(0xFFFFFF, 5); // 環境光
      scene.add(light);

      const light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 20);
      scene.add(light2);
      //----------------------------------------------


      const object = new THREE.Object3D();
      const loader = new GLTFLoader();

      loader.load('src/model/LCC.glb', function (gltf) {

        console.log(gltf);
        object.add(gltf.scene);
        object.position.set(0, 0, 0);
        object.scale.set(1, 1, 1);

        scene.add(object);
        


      }, undefined, function (error) {

        console.error(error);

      });
      //-----------------------------------------------------------
      function animate() {
        camera.lookAt(object.position);
        renderer.render(scene, camera);

      }
      renderer.setAnimationLoop(animate);

    }
  },
  mounted() {
    this.Model()

  },

};
</script>
<style scoped>
#character {
  width: 500px;
  height: 500px;

}
</style>
