# Three.js的基本组件和类有哪些？
Three.js的基本组件有场景(Scene)、相机(Camera)、渲染器(Renderer)；

常见的类有Object3D、BufferGeometry、Geometry、BufferAttribute、Layers、Raycaster等；
1. Object3D类：Object3D是ThreeJs中对物体抽象的基类,包括相机和灯光都是Object3D的子类.一般情况下,我们不会直接使用这个类,对于构造物体,一般我们都是使用的Mesh.
2. BufferGeometry类：是面片、线或点几何体的有效表述.包括顶点位置,面片索引、法相量、颜色值、UV坐标和自定义缓存属性值.使用BufferGeometry可以有效减少向 GPU 传输上述数据所需的开销.
3. Geometry类：Geometry 是对 BufferGeometry 的替代,Geometry利用Vector3或Color存储了几何体的相关 attributes(如顶点位置,面信息,颜色等),但比起BufferGeometry更容易读写,但是运行效率不如有类型的队列.
4. BufferAttribute类：这个类用于存储与BufferGeometry相关联的attribute(例如顶点位置向量,面片索引,法向量,颜色值,UV坐标以及任何自定义attribute).利用BufferAttribute,可以更高效的向GPU传递数据.详情和例子见该页.
在BufferAttribute中,数据被存储为任意长度的矢量(通过itemSize进行定义),下列函数如无特别说明, 函数参数中的index会自动乘以矢量长度进行计算. 当想要处理类似向量的数据时, 可以使用在Vector2,Vector3,Vector4以及Color这些类中的.fromBufferAttribute(attribute,index) 方法来更为便捷地处理.
Layers类：Layers对象为Object3D分配1个到32个图层.32个图层从0到31编号标记.在内部实现上,每个图层对象被存储为一个bit mask,默认的,所有Object3D对象都存储在第0个图层上.图层对象可以用于控制对象的显示.当camera的内容被渲染时与其共享图层相同的物体会被显示.每个对象都需要与一个camera共享图层.每个继承自Object3D的对象都有一个Object3D.layers对象.
4. Raycaster类：这个类用于进行raycasting(光线投射）.光线投射用于进行鼠标拾取(在三维空间中计算出鼠标移过了什么物体).

# three.js中的相机有哪些类型？它们的特点是什么？

OrthographicCamera:正交相机,在这种投影模式下,无论物体距离相机距离远或者近,在最终渲染的图片中物体的大小都保持不变.这对于渲染2D场景或者UI元素是非常有用的.
PerspectiveCamera:透视相机,这一投影模式被用来模拟人眼所看到的景象,它是3D场景的渲染中使用得最普遍的投影模式。
StereoCamera:双透视摄像机（立体相机）,常用于创建 3D 立体影像,比如3D电影之类或VR.
ArrayCamera:包含着一组子摄像机,常用于多人同屏的渲染,更好地提升VR场景的渲染性能.
CubeCamera:有6个渲染,分别是立方体的6个面,常用于渲染环境、反光等。

# three.js中的场景 (scene)、相机 (camera)和渲染器 (renderer)的作用？
场景是Three.js 中所有 3D 对象的容器。它定义了 3D 空间中的位置、方向和光照。
相机定义了 3D 场景中的视角。通过设置相机的位置和角度，可以控制场景中的视觉效果。
渲染器将场景和相机中的 3D 对象渲染到屏幕上。Three.js 提供了多个渲染器，包括 CanvasRenderer、WebGLRenderer 和 SVGRenderer。


# three.js中的材质(Material)和网格(Mesh)的作用？
材质(Material)定义了 3D 对象的外观。它决定了对象的颜色、纹理、透明度等属性。Three.js 提供了多种材质，包括 MeshBasicMaterial、MeshLambertMaterial 和 MeshPhongMaterial 等。
网格(Mesh)是将几何体和材质结合在一起的对象。它定义了 3D 对象的形状和外观。通过设置网格的位置、旋转和缩放，可以控制对象在场景中的位置和大小。

# three.js中的几何体(Geometry)和缓冲区几何体(BufferGeometry)的区别？
几何体(Geometry)是 Three.js 中用于定义 3D 对象形状的对象。它包含了顶点位置、面片索引、法向量、颜色值、UV 坐标等属性。几何体可以通过代码动态创建，也可以从外部文件中加载。几何体是可读写的，可以修改顶点位置、面片索引等属性。
缓冲区几何体(BufferGeometry)是 Three.js 中用于定义 3D 对象形状的对象。它包含了顶点位置、面片索引、法向量、颜色值、UV 坐标等属性。缓冲区几何体是只读的，不能直接修改顶点位置、面片索引等属性。但是，它可以更高效地传递数据到 GPU，从而提高渲染性能。

# three.js中的动画(Animation)和动画控制器(AnimationController)的作用？
动画(Animation)是 Three.js 中用于控制 3D 对象的动画的对象。它包含了动画的关键帧、插值方式、循环方式等属性。通过设置动画的属性，可以控制对象在场景中的运动。
动画控制器(AnimationController)是 Three.js 中用于控制动画的对象。它包含了动画的播放、暂停、停止等操作。通过设置动画控制器的属性，可以控制动画的播放状态。

# three.js中的光照(Light)的作用？
光照是 Three.js 中用于定义场景中光源的对象。它决定了场景中的光照效果，包括环境光、平行光、点光源和聚光灯等。通过设置光照的位置、颜色和强度，可以控制场景中的光照效果。

# three.js中的阴影(Shadow)的作用？
阴影是 Three.js 中用于定义场景中物体阴影的对象。它决定了物体在场景中的阴影效果。通过设置阴影的属性，可以控制物体在场景中的阴影效果。

# three.js中的纹理(Texture)的作用？
纹理是 Three.js 中用于定义物体表面的图像的对象。它决定了物体的表面颜色和纹理效果。通过设置纹理的属性，可以控制物体在场景中的纹理效果。

# three.js中的加载器(Loader)的作用？
加载器是 Three.js 中用于加载外部资源（如模型、纹理、音频等）的对象。它可以将外部资源转换为 Three.js 中可用的对象，以便在场景中使用。Three.js 提供了多种加载器，如 OBJLoader、MTLLoader、GLTFLoader 等。

# 哪一种三维物体格式能够得到最好地支持？
推荐使用GLTF(gl传输格式)来对三维物体进行导入和导出,glTF(gl传输格式)是一种开放格式的规范 (open format specification), 用于更高效地传输、加载3D内容。该类文件以JSON(.gltf)格式或二进制（.glb）格式提供,外部文件存储贴图(.jpg、.png)和额外的二进制数据(.bin).一个glTF组件可传输一个或多个场景， 包括网格、材质、贴图、蒙皮、骨架、变形目标、动画、灯光以及摄像机等

# Three.js 的光照模型有哪些种类？如何应用？

Three.js常见的光源类型有****环境光(AmbientLight)** ** **点光源(PointLight) ** **聚光灯(SpotLight) ** **平行光(DirectinalLight) **等。
1. **环境光(AmbientLight) **：类似于漫反射，没有光照起点，环境光可以放在任意一个位置，不会衰减，不需要设置光强，各个点都一样，所以不用设置位置。
2. **点光源(PointLight) **：类似于照明弹，点光源是从一个点出发，向各个方向发射光线。其第一个参数表示光颜色；第二个参数表示光照强度，范围为0～1；第3个参数表示光照距离，默认为0，表示无限远；第4个参数表示光照强度随着光照防线逐渐衰减的量，默认为1。
3. **聚光灯(SpotLight) **：聚光灯从开始位置以锥形的照射向目标位置发射光线，默认目标位置为原点。第一个参数表示颜色，默认为白色；第二个参数表示光强，默认为1，范围0～1；第三个参数表示光照距离，默认为根据光源距离，线性衰减光源的最大距离；第4个参数表示Math.PI/2；第5个参数表示根据光照锥形计算的阴影的百分比；第6个参数表示光照强度随着光照防线逐渐衰减的量。
4. **平行光(DirectinalLight) **：从其位置开始，向目标方向照射，不会随着距离而衰减；目标方向默认是原点，可以自定义，然而对于自定义目标位置，也需要加入到场景中才会生效；类似于太阳光；方向光的创建接收2个参数，第一个表示光照颜色，第二个表示光照强度，光照强度取值范围为0～1，光照递增；
在 three.js 中，实现一个基本的光照模型需要创建一个光源对象 (light)，并设置光源的位置，颜色和强度。接下来，需要将光源对象添加到场景对象中，并将场景对象渲染到屏幕上。
点光源，聚光灯，方向光；环境光不支持阴影；

# three.js中如何使用材质和纹理来改变物体的外观？
1.创建集合体

2.引入纹理贴图加载器TextureLoader并加载纹理贴图。

3.使用这个纹理贴图来创建了一个材质对象；

4.使用这个材质对象来创建了一个网格对象；

5.几何体和材质相结合放到场景中并渲染。

# three.js如何实现镜面反射和折射效果？
镜面反射和折射效果可以使用立方体贴图和反射向量来实现。Three.js 提供了 THREE.CubeCamera 来捕获环境贴图，以实现镜面反射。但是CubeCamera更适用于创建物体自身对环境的反射，但是如果想要创建一面镜子的话使用CubeCamera会难调试所反射物体的位置，而且镜面中的物体不会随着控制器的缩放而变动。
