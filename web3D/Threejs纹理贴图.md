# Three.js 如何创建和加载纹理贴图（Texture）？
通过纹理贴图加载器TextureLoader的load()方法加载一张图片可以返回一个纹理对象Texture,纹理对象Texture可以作为模型材质颜色贴图. map属性的值。
材质的颜色贴图属性. map设置后,模型会从纹理贴图上采集像素值,这时候-般来说不需要在设置材质颜色. color。. map贴图之所以称之为颜色贴图就是因为网格模型会获得颜色贴图的颜色值RGB。

    // 纹理贴图映射到- -个矩形平面上
    var geometry = new THREE.PlaneGeometry(204，102); //矩形平面
    // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
    var textureLoader = new THREE.TextureLoader() ;
    // 执行1oad方法，加载纹理贴图成功后，返回- -个纹理对象Texture
textureLoader.1oad('Earth. png', function(texture) {
    var material = new THREE .MeshL amber tMaterial({
    // color: 0x0000ff,
    // 设置颜色纹理贴图: Textur e对象作为材质map属性的属性值
    map: texture,//设置 颜色贴图属性值
    }); //材质对象Material
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    // 纹理贴图加载成功后，调用渲染函数执行渲染操作
    // render();
})

# 什么是法线贴图（Normal Mapping）和环境贴图（Environment Mapping）？
法线贴图就是在原物体的凹凸表面的每个点上均作法线，通过RGB颜色通道来标记法线的方向，你可以把它理解成与原凹凸表面平行的另一个不同的表面，但实际上它又只是一个光滑的平面。对于视觉效果而言，它的效率比原有的凹凸表面更高，若在特定位置上应用光源，可以让细节程度较低的表面生成高细节程度的精确光照方向和反射效果。比如红砖墙面。
通过设置场景的背景（background），增强显示效果，环境贴图一般使用全景图，分成6张图片，以立体贴图（CubeTexture）的方式进行加载。比如不锈钢栏杆的扶手球。

# three.js中的材质（Material）、纹理（Texture）、贴图(Texture Map)的区别？
1. **材质（Material） **是描述物体外观和光学特性的属性集合。它包括物体的颜色、反射属性（如漫反射、高光反射）、透明度、折射率等。材质定义了物体如何与光线进行交互，决定了物体在渲染时的外观效果。
2. **纹理（Texture） **是一种图像，用于模拟物体表面的细节和纹理。它可以包含颜色信息、细节图案、纹理细节等。通过将纹理映射到模型表面，可以赋予模型更加真实的外观和细节。
3. **贴图（Texture Map） **是将纹理应用到3D模型表面的过程。贴图是通过将纹理图像与模型的顶点或像素相匹配，使得纹理图像覆盖在模型表面，在渲染过程中，根据贴图的坐标信息来确定模型表面的颜色、纹理细节等。

# 什么 **是几何体 (geometry)，材质 (material)，网格 (mesh) ****， **以及它们在 Three.js 中的作用。
几何体 (geometry) 是 three.js 中的一个基本概念，它表示一个 3D 对象的形状和结构。
材质 (material) 用于定义几何体的外观，例如颜色，纹理等。
网格 (mesh) 是 three.js 中的一个基本对象，它表示一个由多个几何体组成的3D对象。
