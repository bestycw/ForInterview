# threejs 多层透明度问题
在Three.js中，多层透明物体可能会出现混合问题，导致透明度异常。这是因为WebGL渲染器默认使用的是不写入透明度的混合方式，也就是常说的premultipliedAlpha。

为了解决多层透明度问题，你可以尝试以下几种方法：

1. 确保你的透明物体使用的纹理图像格式支持透明通道（如PNG）。

2. 使用THREE.CustomBlending并将blendSrc和blendDst设置为适当的值，例如使用THREE.OneFactor和THREE.OneMinusSrcAlphaFactor来实现标准的透明度混合。

3. 如果使用的是THREE.MeshBasicMaterial或THREE.MeshPhongMaterial等材质，可以将transparent属性设置为true，并且可以通过调整opacity属性来控制透明度。

# threejs中的后处理
在Three.js中，后处理（Post-processing）是一种常用的技术，用于在渲染场景后对图像进行进一步的处理，例如添加模糊、亮度、对比度等效果。后处理通常使用WebGL的帧缓冲对象（Framebuffer Object）来实现。

在Three.js中，后处理通常使用THREE.EffectComposer类来实现。EffectComposer类可以创建一个帧缓冲对象，并将场景渲染到该对象中。然后，你可以使用各种后处理效果来处理帧缓冲对象中的图像。

以下是一个简单的后处理示例，它使用THREE.ShaderPass类来添加一个简单的模糊效果：
```javascript
// 创建一个场景
var scene = new THREE.Scene();

// 创建一个相机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建一个渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建一个EffectComposer
var composer = new THREE.EffectComposer(renderer);
composer.setSize(window.innerWidth, window.innerHeight);

// 创建一个渲染场景的Pass
var renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

// 创建一个模糊效果的Pass
var blurPass = new THREE.ShaderPass(THREE.BlurShader);
blurPass.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
composer.addPass(blurPass);

// 渲染场景
function animate() {
    requestAnimationFrame(animate);
    composer.render();
}
animate();
```