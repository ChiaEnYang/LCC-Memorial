<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
    data() {
        return {
            shelf: null, // 保存3D模型對象
            rotationSpeed: 1, // 滾輪旋轉速度
            currentRotation: Math.PI, // 模型初始角度（背面朝前）
            targetRotation: 0, // 模型目標角度（正面朝前）
            inSection: false, // 是否已經進入指定區域
            totalScroll: 0, // 總滾動距離
            maxScroll: 300, // 最大滾動距離，滾動超過該值模型會完全轉到前面
        };
    },
    mounted() {
        this.initThree();
        this.setupScrollObserver();
    },
    beforeDestroy() {
        window.removeEventListener('wheel', this.handleWheel);
    },
    methods: {
        initThree() {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffffff);
            const camera = new THREE.PerspectiveCamera(75, this.$refs.threeCanvas.clientWidth / this.$refs.threeCanvas.clientHeight, 0.1, 1000);
            camera.position.set(0, 10, 300);

            const renderer = new THREE.WebGLRenderer();

            renderer.setSize(this.$refs.threeCanvas.clientWidth, this.$refs.threeCanvas.clientHeight);
            this.$refs.threeCanvas.appendChild(renderer.domElement);

            const allLight = new THREE.AmbientLight(0x404040, 10);
            scene.add(allLight); 

            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(0, 10, 100).normalize();
            scene.add(light);

            const loader = new GLTFLoader();
            let shelf = new THREE.Object3D();
            loader.load('src/model/COLORSHELF2.glb',
                (item) => {
                    shelf.add(item.scene);
                    this.shelf = shelf;  // 將模型儲存到 data 中
                }, undefined, function (error) {
                    console.error(error);
                });

            shelf.position.set(0, -50, 0);
            shelf.scale.set(80, 80, 80);

            scene.add(shelf);

            // 4. 動畫循環
            const animate = () => {
                requestAnimationFrame(animate);

                if (this.shelf && this.inSection) {
                    const rotationProgress = this.totalScroll / this.maxScroll;
                    this.currentRotation = Math.PI * (1 - rotationProgress); // 旋轉進度從背面到正面
                    if (this.currentRotation < this.targetRotation) {
                        this.currentRotation = this.targetRotation;
                    }
                    this.shelf.rotation.y = this.currentRotation;
                };

                renderer.render(scene, camera);
            };

            animate();
        },
        setupScrollObserver() {
            const section = this.$refs.threeCanvas;  // 使用 Vue 的 ref
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.inSection = true;
                        window.addEventListener('wheel', this.handleWheel);
                    } else {
                        this.inSection = false;
                        window.removeEventListener('wheel', this.handleWheel);
                    }
                });
            });

            observer.observe(section);
        },
        handleWheel(event) {
            if (this.inSection) {
                // 根據滾輪滾動的方向來調整總滾動距離
                const deltaY = event.deltaY;
                this.totalScroll += deltaY;

                // 確保滾動距離在範圍內
                if (this.totalScroll > this.maxScroll) {
                    this.totalScroll = this.maxScroll;
                } else if (this.totalScroll < 0) {
                    this.totalScroll = 0;
                }
            }
        },
    },
}
</script>

<template>
    <div class="w-full h-screen">
        <div id="shelf" ref="threeCanvas"></div>
    </div>
</template>

<style scoped>
#shelf {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
