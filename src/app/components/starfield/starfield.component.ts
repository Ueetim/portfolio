import { Component, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-starfield',
  imports: [],
  templateUrl: './starfield.component.html',
  styleUrl: './starfield.component.css'
})
export class StarfieldComponent {
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private stars!: THREE.Points;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const canvas = this.el.nativeElement.querySelector('canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 1;

    this.addStars();
    this.animate();
  }

  addStars() {
    const geometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
  
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = THREE.MathUtils.randFloatSpread(200);
    }
  
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
    // Create a circular star texture using canvas
    const starTexture = this.createCircleTexture();
  
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      map: starTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  
    this.stars = new THREE.Points(geometry, material);
    this.scene.add(this.stars);
  }

  createCircleTexture(): THREE.Texture {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
  
    const ctx = canvas.getContext('2d')!;
    const center = size / 2;
  
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(center, center, center, 0, Math.PI * 2, false);
    ctx.fill();
  
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
  
    return texture;
  }  

  animate = () => {
    requestAnimationFrame(this.animate);
    this.stars.rotation.y += 0.0005;
    this.stars.rotation.x += 0.0003;
    this.renderer.render(this.scene, this.camera);
  };

  @HostListener('window:resize')
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
