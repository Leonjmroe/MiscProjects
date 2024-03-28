

/*	Ⓒ	**************************************************************************

 *
 * Globe - Tab Page CONFIDENTIAL Ⓒ
 * __________________
 *
 *  2015 Leon Roe Sole Proprietor
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Leon Roe.
 * The intellectual/technical concepts, 3D Sphere Design and all source code contained
 * herein are proprietary to Leon Roe.
 * Dissemination, reproduction, editing, publishing of this information, material design
 * and concept is strictly forbidden. Unless prior written permission is obtained.
 * This application is supported by Copyright, Designs and Patents Act 1988. Ⓒ
 *

	*************************************************************************/





// ******************  Variables  ******************

		var addNewMarkerVar = 0;
		var delButtonVar = 0;
		var aa = 0;
		var b = 0;
		var a = 0;
	  var closeMarkerVar = 0;
		var redTagSwitch = 0;
		var nodDownVar = 0;
		var texture;
		var mouseDownVar = 0;
		var screenVar = 0;
		var pointerVar = 0;
		var particleVar = 0;
		var particles;
		var fileSystemVarInfo;
		var listAdjust;
		var listAdjust0;
		var geometryS;
		var exclude = 1;
		var abcCount = 1;
		var sourVal = 1;
		var abcRot2;
		var abcRot4;
		var hovVar3 = 5;
		var count = 0;
		var topOffsetD = 0;
		var objMG;
		var hovVar = 12;
		var hovVar2 = 8;
		var objVar = 12;
		var objVar2 = 11;
		var dragonfly;
		var mango = 11;
		var lime = 1;
		var contextCursor = 1;
		var	obj1 = [];
		var colourAdd = 2;
		var edge00 = 1;
		var canC = 1;
		var	meshPlaneCC;
		var eventOFF2 = 0;
		var panSpin = 0;
		var panSpinOff = 0;
		var plane, planeObject, oneTimeVar = 0;


		var WIDTH = window.innerWidth,
		    HEIGHT = window.innerHeight;
		var VIEW_ANGLE = 42,
   			ASPECT = WIDTH / HEIGHT,
  		 	NEAR = 10,
			FAR = 10000;
		var radius = 100,
   		 	segments = 26,
 		   	rings = 26;
 		var centre = { x: 0, y: 0 };
 		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;
		var mouse = { x: 0, y: 0 }, mouseOnDown = { x: 0, y: 0 };
		var mouse2 = { x: 0, y: 0 }, mouseOnDown2 = { x: 0, y: 0 };
		var rotation = { x: 0, y: 0 },
    		target = { x: Math.PI*3/2, y: Math.PI / 6.0 },
    		targetOnDown = { x: 0, y: 0 };
    var target2 = { x: Math.PI*3/2, y: Math.PI / 6.0 },
    		targetOnDown2 = { x: 0, y: 0 };
    var PI_HALF = Math.PI / 2;
  	var zoomDamp = 0.8;

  	var raycaster0 = new THREE.Raycaster();
		var mouse0 = new THREE.Vector2();


    var $configBox = $('#configBox');
	 	var $configBoxBG = $('#configBoxBG');
	 	var $configBoxBG2 = $('#configBoxBG2');
	 	var $SiteURL = $('#SiteURL');
	 	var $imageDemo = $('#imageDemo');
	 	var $backlight2 = $('#backlight2');
	 	var $searchBar = $('#' + searchEngineType + 'Search');
		var $searchButton = $("#searchButton");
		var $list = $("#list");

		var shadow = 'Globe Resources/shadow2.png';
		var searchImg = 'Globe Resources/blueSearchButton2.png';
		var searchImg2 = THREE.ImageUtils.loadTexture( searchImg );

		var $container = $('#container');
		var $markerButton = $('#markerButton');
		var $markerButton2 = $('#markerButton2');







	// ******************  Three.js Scene Rendering  ******************



		var scene = new THREE.Scene();
		var scene2 = new THREE.Scene();
		var scene3 = new THREE.Scene();
		var GlobeContainer = new THREE.Object3D();
		var GlobeContainer2 = new THREE.Object3D();
		var GlobeContainer4 = new THREE.Object3D();
		var GlobeContainer5 = new THREE.Object3D();
			GlobeContainer.scale.y = GlobeContainer.scale.x = GlobeContainer.scale.z = 1;
			GlobeContainer4.scale.y = GlobeContainer4.scale.x = GlobeContainer4.scale.z = 1;
			GlobeContainer4.position.set(0, 0, -3);
	//		GlobeContainer4.visible = false;



		var camera = new THREE.PerspectiveCamera(
  		    VIEW_ANGLE,
 		     ASPECT,
 		     NEAR,
 		     FAR);

 		var renderer = new THREE.WebGLRenderer({

 		    alpha: true

 		//	preserveDrawingBuffer   : true 							** Off improves performance
 		//	autoClear : false										Unknown Function

 		});


 		renderer.setPixelRatio(definitionMSS);		// Higher the figure, the more sharp the picture but the lower the performance


 		if( backgroundMSS > 0 ) {

 			renderer.setClearColor(0x000000, 1);

 		};

		renderer.setSize(WIDTH, HEIGHT);
		renderer.domElement.style.position = "absolute";
		renderer.domElement.style.left = "0px";
		renderer.domElement.style.top = "0px";
	//	renderer.setPixelRatio( window.devicePixelRatio );
		$container.append(renderer.domElement);

		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = cameraMSS;
		scene.add(camera);





// ******************  Matrix Shader  ******************


	var matrixMaterial;
	var clock;
	var uniformsMat;


		function matrixMatLoader() {

			 matrixCol = Number(matrixCol);

		 	 clock = new THREE.Clock();

			uniformsMat = THREE.UniformsUtils.merge([

    			THREE.UniformsLib["ambient"],
    			THREE.UniformsLib["lights"]

  			]);


  			uniformsMat.colour = { type: "c", value: new THREE.Color(matrixCol) };
  			uniformsMat.rows = { type: "f", value: matrixDen};
  			uniformsMat.glow = { type: "f", value: 2};
  			uniformsMat.glowRadius = { type: "f", value: 10.0};
  			uniformsMat.charDetail = { type: "f", value: 0.0};
  			uniformsMat.iGlobalTime = { type: "f", value: clock.getDelta(), hidden: 1};
  			uniformsMat.speed = { type: "f", value: matrixSpe};
				uniformsMat.diffuse = { type: 'c', value: new THREE.Color(0xff00ff) };


     	/*

		  uniformsMat = {

       		colour: { type: "c", value: new THREE.Color(matrixCol) },
        	rows: { type: "f", value: matrixDen},
    		glow: { type: "f", value: 2},
    		glowRadius: { type: "f", value: 1.0},
    		charDetail: { type: "f", value: 0.0},
        	speed: { type: "f", value: matrixSpe},
       		iGlobalTime: { type: "f", value: clock.getDelta(), hidden: 1}

   		 };		*/

   			 matrixMaterial = new THREE.ShaderMaterial(

        {

          	uniforms : uniformsMat,
          	vertexShader : matrixVertexShader,									// Threw random error: "matrixVertexShader not defined" - Globe didn't load..
          	fragmentShader : matrixFragmentShader,
          	lights: true

        });

	};

	// if( matrixMSS0 == 1 ) {

		matrixMatLoader();				// Check if efficiency can be improved, error occurs if changed **

//	};








	//  ****************** Lighting  Shader Test  ******************

	/*


    THREE.PointLight.prototype.addSphere = function () {
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), new THREE.MeshBasicMaterial({ color: this.color }))
      this.add(this.sphere);
    }

    var meshT, materialT, light1T, light2T;



      // Add lights
      light1T = new THREE.PointLight(0xff0000);
      light1T.addSphere();
      light1T.position.set(0, 0, 0);
      GlobeContainer5.add(light1T);

      light2T = new THREE.PointLight(0x00ff00);
      light2T.addSphere();
      light2T.position.set(0, 0, 0);
      GlobeContainer5.add(light2T);

      light3T = new THREE.PointLight(0x0000ff);
      light3T.addSphere();
      light3T.position.set(0, 0, 0);
      GlobeContainer5.add(light3T);


      var uniformsT = THREE.UniformsUtils.merge([

          THREE.UniformsLib['lights'],
          { diffuse: { type: 'c', value: new THREE.Color(0xff00ff) } }

      ]);


      materialT = new THREE.ShaderMaterial({

            uniforms: uniformsT,
            vertexShader: matrixVertexShader2,
            fragmentShader: matrixFragmentShader2,
            lights: true,
            transparent: true

          });


*/




	// ******************  3D Theme Tab Container System  ******************


	var sceneCont2, contObj2, cameraCont2, renderer2, theme3DContVar0 = 0, theme3DContVar = 0, sphereClone, container2Clone;


		function create3DThemeContainer() {

				 	sceneCont2 = new THREE.Scene();
				 	contObj2 = new THREE.Object3D();
					sphereClone = sphere.clone();
					sphereClone.rotation.x = 0;
					sphereClone.rotation.y = 0;

					if( GTextureMSS0 == 4 ) {

							GlobeContainer5.remove(trianglesMesh);
							trianglesGlobe();
							contObj2.add(trianglesMesh);

					} else if( GTextureMSS0 != 5 ) {

							contObj2.add(sphereClone);

					};

					if( GC4Arr.length == 0 ) {

						contObj2.add(container2Clone);

					};

					contObj2.add(GlobeContainer4.clone());
					contObj2.add(GlobeContainer.clone());

					sceneCont2.add(contObj2);
					sceneCont2.add(pointLight2.clone());
					sceneCont2.add(light4.clone());

				 	cameraCont2 = new THREE.PerspectiveCamera(
		  		   VIEW_ANGLE,
		 		     ASPECT,
		 		     NEAR,
		 		     FAR);

		 		 renderer2 = new THREE.WebGLRenderer({
		 		    alpha: true
		 		});

				width = $('#theme3DContainer').width();
				height = $('#theme3DContainer').height();

		 		renderer2.setPixelRatio(definitionMSS);
				renderer2.setSize(width, height);
				renderer2.domElement.style.position = "absolute";
				renderer2.domElement.style.left = "0px";
				renderer2.domElement.style.top = "0px";
				$('#theme3DContainer').append(renderer2.domElement);

				cameraCont2.position.x = 0;
				cameraCont2.position.y = 0;
				cameraCont2.position.z = 600;
				sceneCont2.add(cameraCont2);
				theme3DContVar0 = 1;
				theme3DContVar = 1;

			};

		function updateCreate3DThemeContainer() {

				if( GTextureMSS0 == 4 ) {

					contObj2.remove(sphereClone);

					if( trianglesVar > 0 ) {

						contObj2.remove(trianglesMesh);
						GlobeContainer5.remove(trianglesMesh);

					};

					trianglesGlobe();
					contObj2.add(trianglesMesh);

				}else if( GTextureMSS0 == 5 ) {

					if( trianglesVar > 0 ) {

						contObj2.remove(trianglesMesh);

					};

					contObj2.remove(sphereClone);

				}else {

					if( trianglesVar > 0 ) {

						contObj2.remove(trianglesMesh);
						GlobeContainer5.remove(trianglesMesh);

					};

					contObj2.remove(sphereClone);
					sphereClone = sphere.clone();
					contObj2.add(sphereClone);

				};

		};




		// ******************  RSS Feed  ******************

		/*


		$(document).ready(function() {
    //feed to parse
    var feed = "http://feeds.bbci.co.uk/news/world/rss.xml";

    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });

        }
    });


});

*/



// 	******************  Triangles Globe System  ******************

			var trianglesGeom, colours, colour;

		function trianglesGlobe() {

				 trianglesVar = 1;
		 var triangles = 50000;
			 	 trianglesGeom = new THREE.BufferGeometry();

			var positions = new Float32Array( triangles * 3 * 3 );
			var normals = new Float32Array( triangles * 3 * 3 );
			 	colours = new Float32Array( triangles * 3 * 3 );

			 	colour = new THREE.Color();

			var n = 180, n2 = n*1.5;	// triangles spread in the cube
			var d = 12, d2 = d/2;	// individual triangle size

			var pA = new THREE.Vector3();
			var pB = new THREE.Vector3();
			var pC = new THREE.Vector3();

			var cb = new THREE.Vector3();
			var ab = new THREE.Vector3();

			for ( var i = 0; i < positions.length; i += 9 ) {

				var x, y, z;
				var theta = THREE.Math.randFloatSpread(360);
        var phi = THREE.Math.randFloatSpread(360);

				if( i < 400000 ) {

					randomPos = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize().multiplyScalar( n * Math.random() + 1);
					x = randomPos.x;
            		y = randomPos.y;
            		z = randomPos.z;

            	}else {

					x = n * Math.sin(theta) * Math.cos(phi)
            		y = n * Math.sin(theta) * Math.sin(phi);
            		z = n * Math.cos(theta);

            	};

				var ax = x + Math.random() * d - d2;
				var ay = y + Math.random() * d - d2;
				var az = z + Math.random() * d - d2;

				var bx = x + Math.random() * d - d2;
				var by = y + Math.random() * d - d2;
				var bz = z + Math.random() * d - d2;

				var cx = x + Math.random() * d - d2;
				var cy = y + Math.random() * d - d2;
				var cz = z + Math.random() * d - d2;

					positions[ i ]     = ax;
					positions[ i + 1 ] = ay;
					positions[ i + 2 ] = az;

					positions[ i + 3 ] = bx;
					positions[ i + 4 ] = by;
					positions[ i + 5 ] = bz;

					positions[ i + 6 ] = cx;
					positions[ i + 7 ] = cy;
					positions[ i + 8 ] = cz;

					// flat face normals

					pA.set( ax, ay, az );
					pB.set( bx, by, bz );
					pC.set( cx, cy, cz );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					cb.normalize();

					var nx = cb.x;
					var ny = cb.y;
					var nz = cb.z;

					normals[ i ]     = nx;
					normals[ i + 1 ] = ny;
					normals[ i + 2 ] = nz;

					normals[ i + 3 ] = nx;
					normals[ i + 4 ] = ny;
					normals[ i + 5 ] = nz;

					normals[ i + 6 ] = nx;
					normals[ i + 7 ] = ny;
					normals[ i + 8 ] = nz;

					// colours

					var vx = ( x / n ) + 0.5;
					var vy = ( y / n ) + 0.5;
					var vz = ( z / n ) + 0.5;

					colour.setRGB( vx, vy, vz );

					colours[ i ]     = colour.r;
					colours[ i + 1 ] = colour.g;
					colours[ i + 2 ] = colour.b;

					colours[ i + 3 ] = colour.r;
					colours[ i + 4 ] = colour.g;
					colours[ i + 5 ] = colour.b;

					colours[ i + 6 ] = colour.r;
					colours[ i + 7 ] = colour.g;
					colours[ i + 8 ] = colour.b;

				}


					trianglesGeom.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ).onUpload( disposeArray ) );
					trianglesGeom.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ).onUpload( disposeArray ) );

					if( trianglesMSS == 1 ) {

						trianglesGeom.addAttribute( 'color', new THREE.BufferAttribute( colours, 3 ).onUpload( disposeArray ) );

					};

					trianglesGeom.computeBoundingSphere();

				var trianglesMat = new THREE.MeshPhongMaterial( {
					color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
					side: THREE.DoubleSide, vertexColors: THREE.VertexColors
				} );


					trianglesMesh = new THREE.Mesh( trianglesGeom, trianglesMat );
					GlobeContainer5.add( trianglesMesh );

			};


				function disposeArray() { this.array = null; }


				if( trianglesVar > 0 ) {

					trianglesGlobe();

				};




// ******************  Tester Shader  ******************


		 var uniformsTester = {

       		time: { type: "f", value: 1 },
        	resolution: { type: "v2", value: new THREE.Vector2( 1000 , 1000 ) },
        	mouse: { type: "v2", value: new THREE.Vector2( 1 , 1 ) },

   		 };


   /*		 var uniformsTester = THREE.UniformsUtils.merge([

    	  THREE.UniformsLib[ "lights" ],
          { diffuse: { type: 'c', value: new THREE.Color(0xff00ff) } }
      ]);

   			*/

		var testerMaterial = new THREE.ShaderMaterial(

        {

          	uniforms : uniformsTester,
          	vertexShader : testerVertexShader,
          	fragmentShader : testerFragmentShader,
          	lights: true

        });




		if( particleMSS > 0 ) {

			 CreateParticleSystem();

		};


		function CreateParticleSystem() {

			if( particleMSS < 3 || particleMSS == 4 ) {

				particlePos = -1700
				particleSize = 5;

				if( TutorialMSS == 1 ) {

						particleVol = 40000;

				}else {

						particleVol = 20000;

				};

			}else {

				particlePos = -1200
				particleSize = 1;
				particleVol = 5000;

			};

			materials = []

			geometry = new THREE.SphereGeometry();

        	particleCount = particleVol; 		// 60fps with 300,000 particles, performance drop > 3000,000	//	20,000

   	     for (i = 0; i < particleCount; i++) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 3000 - 1500;
            vertex.y = Math.random() * 3000 - 1500;
            vertex.z = Math.random() * 3000 - 1500;

            geometry.vertices.push(vertex);

        };


		    parameters = [
            [
                [1, 1, 0.5], ( 5 * particleSize )
            ],
            [
                [0.95, 1, 0.5], ( 4 * particleSize )
            ],
            [
                [0.90, 1, 0.5], ( 3 * particleSize )
            ],
            [
                [0.85, 1, 0.5], ( 2 * particleSize )
            ],
            [
                [0.80, 1, 0.5], ( 1 * particleSize )
            ]
     	   ];

     	   parameterCount = parameters.length;


       	 for (i = 0; i < parameterCount; i++) {

            color = parameters[i][0];
            size = parameters[i][1];

            materials[i] = new THREE.PointCloudMaterial({
                size: size
            });


            particles = new THREE.PointCloud(geometry, materials[i]);
            particles.position.set(0,0, particlePos );		// -1700


       //    particles.rotation.x = Math.random() * 6;
         //  particles.rotation.y = Math.random() * 6;
          // particles.rotation.z = Math.random() * 6;

        };

			scene3.add(particles);
			particleVar = 1;

		};






	// ******************  Globe Shadow  ******************


		var	textureP = THREE.ImageUtils.loadTexture( shadow );
	  	var	materialP = new THREE.MeshBasicMaterial( { map: textureP, transparent: true, overdraw: true } );
     	var	plane = new THREE.Mesh(new THREE.CircleGeometry(280,100), materialP);

      	 	plane.rotation.x = -1.8;
         	plane.position.y = -500;
         	plane.position.z = -780;

      		oneTimeVar = 1;			// *** Check Var ***






// ******************  Globe & Background Loaders  ******************



		var	geometry = new THREE.SphereGeometry( 183, 60, 30);
		var material = new THREE.MeshPhongMaterial( { map: texture12 } );



		function createPanBackground() {

				BBBVAR = 1;
				BGVarMSS = 1;

		//	var panoramaArray = ["Globe Textures/panorama1.jpg","Globe Textures/panorama2.jpg","Globe Textures/panorama3.jpg","Globe Textures/panorama4.jpg","Globe Textures/panorama5.jpg","Globe Textures/panorama6.jpg","Globe Textures/panorama7.jpg","Globe Textures/panorama8.jpg"];
		//	var panoramaNumber = Math.floor(Math.random()*panoramaArray.length);

				panoramaMaterial = new THREE.MeshBasicMaterial();
			//	panoramaMaterial.map = THREE.ImageUtils.loadTexture(panoramaArray[panoramaNumber]);
				panoramaMaterial.map = texture13;


			var panoramaSphere = new THREE.SphereGeometry(550, 80, 60);
				panoramaSphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));



			if( matrixMSS0 == 1 ) {

			//	panoramaMaterial = matrixMaterial;

			};

				panoramaMesh = new THREE.Mesh(panoramaSphere, panoramaMaterial);				// ************ Select Background Material ************
				BGVarMSS12 = 3;


				if( renderPass > 0 ) {

  					newPanorama = 1;
         			scene.add( panoramaMesh );

        		};

		};


		if( GTextureMSS0 == 3 || GTextureMSS0 == "3" ) {

			material = matrixMaterial;

		};



		function createPlaneBackground() {

				BGVarMSS12 = 2;
				BGVarMSS = 2;

				BGmat = new THREE.MeshBasicMaterial();
				BGmat.map = THREE.ImageUtils.loadTexture(BGTexture);
				BGgeo = new THREE.PlaneGeometry( 1000, 560 );


		/*	if( matrixMSS0 == 1 ) {

				BGmat = matrixMaterial;

			};		*/

				BGmesh = new THREE.Mesh( BGgeo, BGmat );

				if( renderPass > 0  ) {

        			scene.add( BGmesh );

        		};

		};

		if( BBBVAR == 1 ) {

			BGVarMSS = 1;

		};

		var nerf = 0;

		if( BGToggleMSS > 0 && BGVarMSS !== 2 && BGVarMSS !== 0  ) {

			 panPlaneNerf = 1;
			 createPanBackground();

		}else if( BGToggleMSS < 1 && BGVarMSS !== 2 && BGVarMSS !== 0 ) {

			 panPlaneNerf = 1;
	 		 createPlaneBackground();

		}else {

			// Do Nothing

		};




	// ******************  Notification Markers  ******************


		var	dynamicTexture2 = new THREEx.DynamicTexture(35,35);
			dynamicTexture2.clear('#ff0000');
			dynamicTexture2.context.font = '20px Lato, sans-serif';
			dynamicTexture2.context.textAlign = 'left';
			dynamicTexture2.texture.anisotropy = renderer.getMaxAnisotropy();
			dynamicTexture2.drawText(gmailNods, undefined, 25, 'white');
			dynamicTexture2.texture.needsUpdate  = true;

 		var	dynamicTexture3 = new THREEx.DynamicTexture(35,35);
			dynamicTexture3.clear('#ff0000');
			dynamicTexture3.context.font = '20px Lato, sans-serif';
			dynamicTexture3.context.textAlign = 'left';
			dynamicTexture3.texture.anisotropy = renderer.getMaxAnisotropy();
			dynamicTexture3.drawText(fbNods, undefined, 25, 'white');
			dynamicTexture3.texture.needsUpdate  = true;

		var	cylinderGeo = new THREE.CylinderGeometry( 5, 5, 2.5, 32 );
		var cylinderMat2 = [ new THREE.MeshPhongMaterial( { color: 0xaa0000, opacity: 1 } ), new THREE.MeshPhongMaterial( { map: dynamicTexture2.texture } ), new THREE.MeshPhongMaterial( { color: 0xaa0000 } )];
		var cylinderMat3 = [ new THREE.MeshPhongMaterial( { color: 0xaa0000, opacity: 1 } ), new THREE.MeshPhongMaterial( { map: dynamicTexture3.texture } ), new THREE.MeshPhongMaterial( { color: 0xaa0000 } )];



	// ******************  Globe Outer Glow Shader  ******************


			var materialS = new THREE.ShaderMaterial( {

	    		uniforms: {
					"c":   { type: "f", value: 1 },
					"p":   { type: "f", value: 6 },
					glowColor: { type: "c", value: new THREE.Color(GGlowColMSS00) },
					viewVector: { type: "v3", value: camera.position }
				},

				vertexShader: glowVertexShader,
				fragmentShader: glowFragmentShader,
				side: THREE.BackSide,
				blending: THREE.AdditiveBlending,
				transparent: true

			});

				geometryS = new THREE.SphereGeometry( 184, 40, 20);
	 			GlobeGlow = new THREE.Mesh( geometryS, materialS );
				GlobeGlow.scale.y = GlobeGlow.scale.x = GlobeGlow.scale.z = 1.36;
				GlobeGlow.renderDepth = -1;







	// ******************  Lighting  ******************


      var light21 = new THREE.DirectionalLight(0xffffff, ( one / 2 ) );			// Bottom
          light21.position.x = 0;
      	  light21.position.y = -800;
      	  light21.position.z = -400;
      	  light21.lookAt(GlobeContainer.position);
      	  scene2.add(light21);


      var light22 = new THREE.DirectionalLight(0xffffff, ( two / 2 ) );			// Left
          light22.position.x = -600;
      	  light22.position.y = 600;
      	  light22.position.z = -400;
      	  light22.lookAt(GlobeContainer.position);
      	  scene2.add(light22);


     var pointLight2 = new THREE.SpotLight(0xFFFFFF, ( three / 2 ) );			// Spot
      	 pointLight2.position.x = 300;
      	 pointLight2.position.y = 300;
      	 pointLight2.position.z = 100;
     	 scene2.add(pointLight2);


     var light42 = new THREE.DirectionalLight(0xffffff, ( four / 4 ) );				// Main
         light42.position.x = 20;
      	 light42.position.y = -1.2;
      	 light42.position.z = 100;

     var light4 = new THREE.DirectionalLight(0xffffff, ( 1.7 ) );				// Main
         light4.position.x = 20;
      	 light4.position.y = -1.2;
      	 light4.position.z = 100;
         scene.add(light4);
      	 scene2.add(light42);


	 var hemiLightSF = Number(GColMSS0);
     var hemiLightSF2 = Number(GColMSS00);
     var hemiLight = new THREE.HemisphereLight( hemiLightSF, hemiLightSF2, ( five * 1.35 ) );
    	 scene2.add(hemiLight);






// ******************  3D Search box Geometry  ******************


		var settings = {

    		amount: 14.5,
   		 	steps : 1,
    		bevelEnabled: false,
    		curveSegments: 300,
    		material: 0,
            extrudeMaterial: 1
		};

		var shape = new THREE.Shape();
			shape.moveTo( 0, 0 );
		//	shape.absarc( 70, 110, 100, 0, Math.PI * 0.27, false );
		//	shape.lineTo( 300, 300 );
			shape.absarc( -30, -30, 200, 0, Math.PI * 0.27, false );
			shape.lineTo( 89, 120 );

			shape.lineTo( 94, 115.5 );
			shape.lineTo( 101.5, 116 );
			shape.lineTo( 117, 100 );
			shape.lineTo( 140, 68 );
			shape.lineTo( 156.5, 30 );
			shape.lineTo( 164.5, -5 );
			shape.lineTo( 167, -27 );
			shape.lineTo( 162, -32 );

			shape.lineTo( 161 , -40 );


		var trackGeometry = new THREE.ExtrudeGeometry( shape, settings );


			trackGeometry.computeBoundingBox();
		var maxTG = trackGeometry.boundingBox.max;
    	var	minTG = trackGeometry.boundingBox.min;
		var offsetTG = new THREE.Vector2(0 - minTG.x, 0 - minTG.y);
		var rangeTG = new THREE.Vector2(maxTG.x - minTG.x, maxTG.y - minTG.y);
		var	facesTG = trackGeometry.faces;
			trackGeometry.faceVertexUvs[0] = [];



			for ( var i = 0; i < facesTG.length; i ++ ) {

    			var fLength = facesTG[i].c;

    				if( i < 2418 && i > 1217  ) {


    				//	console.log( 'Face4: Curve Faces' );
    				//	facesTG[ i ].color.setHex( Math.random() * 0xffffff );
    					facesTG[ i ].color.setHex( 0xffffff );

    					// 0x9f9f9f

    					if( i < 1350 && i > 1201 ) {

    						facesTG[ i ].color.setHex( 0x0066ff );

    					};


			/*		var v1TG = trackGeometry.vertices[facesTG[i].a];
      				var	v2TG = trackGeometry.vertices[facesTG[i].b];
        			var	v3TG = trackGeometry.vertices[facesTG[i].c];

    					trackGeometry.faceVertexUvs[0].push([

        					new THREE.Vector2((v1TG.x + offsetTG.x)/rangeTG.x ,(v1TG.y + offsetTG.y)/rangeTG.y),
        					new THREE.Vector2((v2TG.x + offsetTG.x)/rangeTG.x ,(v2TG.y + offsetTG.y)/rangeTG.y),
       						new THREE.Vector2((v3TG.x + offsetTG.x)/rangeTG.x ,(v3TG.y + offsetTG.y)/rangeTG.y)

   					 ]);		*/


				}else {

					//	console.log( 'White' );
    					facesTG[ i ].color.setHex( 0xcccccc );
			};

		};

		//		trackGeometry.uvsNeedUpdate = true;



		var longitude = 60;
		var latitude = 3;

		var x = 75 * Math.cos(latitude * Math.PI/180) * Math.cos( longitude * Math.PI/180);
		var y = 75 * Math.sin(latitude * Math.PI/180);
		var z = 75 * Math.cos(latitude * Math.PI/180) * Math.sin( longitude * Math.PI/180);


		var curvedPlane2mat	= new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, opacity: 1 } );


		var CplaneMesh = new THREE.Mesh( trackGeometry, curvedPlane2mat );
				CplaneMesh.position.x = x - 37;
				CplaneMesh.position.y = y + 4;
				CplaneMesh.position.z = z - 33;
				CplaneMesh.rotation.set( 1.5, 0.036, 0.62);

				GlobeContainer.add(CplaneMesh);


		var abc = curvedPlane2mat;





// ******************  SearchBox Button Mesh  ******************


	var coverGeo = new THREE.PlaneGeometry( 20, 15 );
	var coverMat = new THREE.MeshBasicMaterial( { map: searchImg2, transparent: true, opacity: 1 } );
	var coverMesh = new THREE.Mesh( coverGeo, coverMat );
		GlobeContainer.add( coverMesh );

		coverMesh.position.x = 151;
		coverMesh.position.y = 10.2;
		coverMesh.position.z = 114;
 		coverMesh.rotation.set( -0.08, 0.85 , 0.13);





// ******************  Search Query Geometry  ******************



		var boxGeo = new THREE.CubeGeometry( 140, 2, 1 );
		var boxMat = new THREE.MeshLambertMaterial( { color: 0xcccccc } );
		var boxMesh = new THREE.Mesh( boxGeo, boxMat );
				boxMesh.position.set(-8.6, 3, 190);




// ******************  Globe  ******************


	var	sphere = new THREE.Mesh( geometry, material );
	 	sphere.rotation.set( 0, Math.random() * 30, 0 );

	 	if( trianglesVar < 1 ) {

	 		GlobeContainer5.add(sphere);

	   	};


	   	if( GTextureMSS0 == 5 ) {

	   		sphere.visible = false

				if( definitionCheckMSS != 2 ) {

					addNewMarkerVar = 1;

				};

	   	};


	   	if( GTextureMSS00 == ',null' ) {

			sphere.material.map = null;

		};






// ******************  Marker Custom Geometry  ******************


	var corner = new THREE.Shape();


		corner.moveTo( 0, 2.7 );
		corner.lineTo( 0.025, 2.5 );
		corner.lineTo( 0.075, 2.25 );
		corner.lineTo( 0.125, 2 );
		corner.lineTo( 0.225, 1.75 );
		corner.lineTo( 0.35, 1.5 );
		corner.lineTo( 0.5, 1.25 );
		corner.lineTo( 0.675, 1 );
		corner.lineTo( 1, 0.675 );
		corner.lineTo( 1.25, 0.5 );
		corner.lineTo( 1.5, 0.35 );
		corner.lineTo( 1.75, 0.225 );
		corner.lineTo( 2, 0.125 );
		corner.lineTo( 2.25, 0.075 );
		corner.lineTo( 2.5, 0.025 );
		corner.lineTo( 2.7, 0 );


		corner.lineTo( 39.7, 0 );
		corner.lineTo( 39.9, 0.025 );
		corner.lineTo( 40.15, 0.075 );
		corner.lineTo( 40.4, 0.125 );
		corner.lineTo( 40.65, 0.225 );
		corner.lineTo( 40.9, 0.35 );
		corner.lineTo( 41.15, 0.5 );
		corner.lineTo( 41.4, 0.675 );
		corner.lineTo( 41.725, 1 );
		corner.lineTo( 41.9, 1.25 );
		corner.lineTo( 42.05, 1.5 );
		corner.lineTo( 42.175, 1.75 );
		corner.lineTo( 42.275, 2 );
		corner.lineTo( 42.325, 2.25 );
		corner.lineTo( 42.375, 2.5 );
		corner.lineTo( 42.4, 2.7 );


		corner.lineTo( 42.4, 39.7 );
		corner.lineTo( 42.375, 39.9 );
		corner.lineTo( 42.325, 40.15 );
		corner.lineTo( 42.275, 40.4 );
		corner.lineTo( 42.175, 40.65 );
		corner.lineTo( 42.05, 40.9 );
		corner.lineTo( 41.9, 41.15 );
		corner.lineTo( 41.725, 41.4 );
		corner.lineTo( 41.4, 41.725 );
		corner.lineTo( 41.15, 41.9 );
		corner.lineTo( 40.9, 42.05 );
		corner.lineTo( 40.65, 42.175 );
		corner.lineTo( 40.4, 42.275 );
		corner.lineTo( 40.15, 42.325 );
		corner.lineTo( 39.9, 42.375 );
		corner.lineTo( 39.7, 42.4 );


		corner.lineTo( 2.7, 42.4 );
		corner.lineTo( 2.5, 42.375 );
		corner.lineTo( 2.25,  42.325 );
		corner.lineTo( 2,  42.275 );
		corner.lineTo( 1.75, 42.175 );
		corner.lineTo( 1.5,  42.05 );
		corner.lineTo( 1.25,  41.9 );
		corner.lineTo( 1,  41.725 );
		corner.lineTo( 0.675,  41.4 );
		corner.lineTo( 0.5,  41.15 );
		corner.lineTo( 0.35, 40.9 );
		corner.lineTo( 0.225, 40.65 );
		corner.lineTo( 0.125, 40.4 );
		corner.lineTo( 0.075, 40.15 );
		corner.lineTo( 0.025, 39.9 );
		corner.lineTo( 0, 39.7 );

		corner.moveTo( 0, 2.7 );


		var extrudeSettings = { amount: 1, bevelEnabled: true, bevelSegments: 2, steps: 4, bevelThickness: 3 };
		var geo = new THREE.ExtrudeGeometry( corner, extrudeSettings );
			geo.applyMatrix( new THREE.Matrix4().makeTranslation( -11, -11, -3 ) );
		//	geo.computeFaceNormals();


		var arrOff = ['0.7','0.7','0.7','0.75','0.8','1.0','1.2','1.32','1.42','1.52'];
		var x2 = x;
		var y2 = y;
		var z2 = z;








// ******************  Globe Container 2 Marker Creator  ******************



			 $('.marker0').each( function() {

		 	 		material = new THREE.MeshLambertMaterial( { color: 0xaaaaaa, transparent: true, opacity: 0.85 } );
					longitude = $(this).data('long');
					latitude = $(this).data('lat');
			 		ID = $(this).attr('id');
			 		markerMesh = new THREE.Mesh( geo, material);
					markerMesh.scale.set(-1,1,-1);
				  GlobeContainer2.add( markerMesh );
					children = GlobeContainer2.children;
					markerMesh.name = ID;

				    x = 190 * Math.cos(latitude * Math.PI/180) * Math.cos(longitude * Math.PI/180);
				    y = 190 * Math.sin(latitude * Math.PI/180);
				    z = 190 * Math.cos(latitude * Math.PI/180) * Math.sin(longitude * Math.PI/180);

				    xx = 190 * Math.cos((latitude - 0.3) * Math.PI/180) * Math.cos((longitude + 0.3) * Math.PI/180);
				    yy = 190 * Math.sin((latitude - 0.3) * Math.PI/180);
				    zz = 190 * Math.cos((latitude - 0.3) * Math.PI/180) * Math.sin((longitude + 0.3) * Math.PI/180);

			 			sVal3 = 9;
				    mult = arrOff[sVal3];

				    oset = $(this).data('oset');
				    oset2 = $(this).data('oset2');
				    vectorGP = new THREE.Vector3( oset * mult, oset2 * mult, 0 );
						markerMesh.position.x = x;
						markerMesh.position.y = y;
						markerMesh.position.z = z;
						markerMesh.lookAt( vectorGP );
						rot = markerMesh.rotation;

					$('#'+ ID).attr('data-x', x);
     				$('#'+ ID).attr('data-y', y);
     				$('#'+ ID).attr('data-z', z);
     				$('#'+ ID).attr('data-rx', rot.x);
     				$('#'+ ID).attr('data-ry', rot.y);
    				$('#'+ ID).attr('data-rz', rot.z);
     				$('#'+ ID).attr('data-xx', xx);
     				$('#'+ ID).attr('data-yy', yy);
     				$('#'+ ID).attr('data-zz', zz);

						if( GlobeContainer2.children.length > 51 ) {

								container2Clone = GlobeContainer2.clone();
								container2Clone.rotation.set(0,-0.6,0);

						};


			});






	// ******************  SearchBox Mesh Measurements  ******************


		var Lx, Ly, Lz, Rx, Ry, Rz, Tx, Ty, Tz, Bx, By, Bz;
		var measurePro;

		function searchBoxMeas() {

		var mesureGeo = new THREE.SphereGeometry( 0.1, 100, 100 );
		var mesureMat = new THREE.MeshLambertMaterial( { transparency: true, opacity: 0 } );

		var measureMeshL = new THREE.Mesh( mesureGeo, mesureMat );
		var measureMeshR = new THREE.Mesh( mesureGeo, mesureMat );
		var measureMeshT = new THREE.Mesh( mesureGeo, mesureMat );
		var measureMeshB = new THREE.Mesh( mesureGeo, mesureMat );

			GlobeContainer.add( measureMeshL );
			GlobeContainer.add( measureMeshR );
			GlobeContainer.add( measureMeshT );
			GlobeContainer.add( measureMeshB );

		 	Lx = measureMeshL.position.x = x2 - 19.5;
		 	Ly = measureMeshL.position.y = y2 + 5;
		 	Lz = measureMeshL.position.z = z2 + 119;

		 	Rx = measureMeshR.position.x = x2 + 108;
		 	Ry = measureMeshR.position.y = y2 + 5;
		 	Rz = measureMeshR.position.z = z2 + 48;

		 	Tx = measureMeshT.position.x = x2 + 60;
		 	Ty = measureMeshT.position.y = y2 + 16.5;
		 	Tz = measureMeshT.position.z = z2 + 89;

			Bx = measureMeshB.position.x = x2 + 61.5;
			By = measureMeshB.position.y = y2 + 1;
			Bz = measureMeshB.position.z = z2 + 91;


			measurePro = new THREE.Projector();


   	 };










	// ******************	Event Listeners - Remastered 	************************



			$('#container').mousedown(function(event) {


				if( eventOFF < 1 ) {


					$('#container').css('cursor','pointer');

  				    mouseOnDown.x = - event.clientX;
  				    mouseOnDown.y =  event.clientY;
  				    mouseOnDown2.x = - event.clientX;

  		   	 	    targetOnDown.x = target.x;
    			    targetOnDown.y = target.y;
    			    targetOnDown2.y = target2.y;

    				mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    				mouse2.x = (event.clientX / window.innerWidth) * 2 - 1;
					mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
					mouse.z = 0.5;
					mouseDownVar = 1;

				};

			});


			$('#container').mousemove(function(event) {


				if( mouseDownVar > 0 ) {

					event.preventDefault();

					$('#container').css('cursor','pointer');

					mouse.x = - event.clientX;
   					mouse.y = event.clientY;
   					mouse2.x = - event.clientX;

  					target.y = targetOnDown.y + (mouse.x - mouseOnDown.x) * 0.003;
  					target2.y = targetOnDown2.y + (mouse2.x - mouseOnDown2.x) * 0.003;
   				    target.x = targetOnDown.x + (mouse.y - mouseOnDown.y) * 0.002;


	 			    target.x = target.x > PI_HALF ? PI_HALF : target.x;
	    	  		target.x = target.x < - PI_HALF ? - PI_HALF : target.x;

				  	zoomDamp = 0.07;

					$searchBar.css('display','none');
					$('#searchButton').css('display','none');
					$('#list').css('display','none');
					stopVal = 2;

					if( TutorialMSS < 1 && oneTimeRen > 0 ) {

						oneTimeRen0 = 1;

					};

					if( boxVar > 1 ) {

						scene.remove( boxMesh );
       					boxVar = 1;

					};

					if( panSpinOff < 1 ) {

						panSpin = 1;

					};

				 };

			});


			$('#container').mouseup(function() {

				if( mouseDownVar > 0 ) {

					mouseDownVar = 0;
					$('#container').css('cursor','default');

				};

			});



			$('#container').mouseout(function() {

				if( mouseDownVar > 0 ) {

					mouseDownVar = 0;
					$('#container').css('cursor','default');

				};

			});








	// ********************************************  System and Rendering Control  ********************************************



			$( window ).resize(function() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );

				$searchBar.css('display', 'none');
				$searchButton.css('display', 'none');
				$list.css('display', 'none');

				});




		// Performance Indicators

	/*		var rendererStats = new THREEx.RendererStats();

				rendererStats.domElement.style.position	= 'absolute';
				rendererStats.domElement.style.left	= '3px';
				rendererStats.domElement.style.bottom	= '3px';
				document.body.appendChild( rendererStats.domElement );		*/



	/*		var stats = new Stats();
				stats.domElement.style.position	= 'absolute'
				stats.domElement.style.right	= '48%'
				stats.domElement.style.bottom	= '82%'
				stats.domElement.style.zIndex   = '200'
				document.body.appendChild( stats.domElement )			*/





			var animate = function() {

				requestAnimationFrame( animate );
				controls.update();

			};


		var stop;
		var tick = 80;
		var lava = 0;
		var buzz = 0.05;
		var got = 0;
		var got0;
		var gotZ = 0;
		var loadV = 0;
		var zoom = 1;
		var buzz2 = 0.07;
		var dubbed = 1;
		var buzz3 = 0.1;
		var buzz4 = 0;
		var oneTimeRen = 0;
		var oneTimeRen0 = 0;
    	var newPanorama = 0;


		var render = function () {


			if( oneTimeRen < 1 && TutorialMSS < 1 ) {

				buzz4 = 1;

			};

			if( buzz4 < 1.01 && oneTimeRen > 0 && oneTimeRen0 > 0 ) {

				buzz4 = (buzz4 + 0.01);

				if( buzz4 > 0.99 ) {

					oneTimeRen = 0;
					oneTimeRen0 = 0;
					buzz2 = 0.07;

				};

			};


				target.x -= (target.x - GlobeContainer.rotation.x) * zoomDamp ;
				target.x -= (target.x - GlobeContainer2.rotation.x) * zoomDamp ;

	  	    	target.x = target.x > PI_HALF ? PI_HALF : target.x;
	    	  	target.x = target.x < - PI_HALF ? - PI_HALF : target.x;


	    	 	if( screenVar < 1 ) {

	    	 		abcRot = ( GlobeContainer.rotation.y -= (target.y + GlobeContainer.rotation.y) * buzz2 );
    				GlobeContainer.rotation.x += (target.x - GlobeContainer.rotation.x) * ((buzz2 + 0.03)*buzz4);
    				GlobeContainer.updateMatrixWorld();

    				abcRot = ( GlobeContainer5.rotation.y -= (target.y + GlobeContainer5.rotation.y) * buzz2 );
    				GlobeContainer5.rotation.x += (target.x - GlobeContainer5.rotation.x) * ((buzz2 + 0.03)*buzz4);
    				GlobeContainer5.updateMatrixWorld();

    			};


    			if( screenVar > 0 ) {

    				abcRot = 0;

    			};

    			abcRot = Math.round(100000*abcRot)/100000;

    			if( abcRot2 !== abcRot ) {

    				abcRot3 = (abcRot2 - abcRot)*1000;
    				abcRot4 = Math.abs(abcRot3);


    			}else {

    				abcRot4 = 0;

    			};

    			abcRot2 = abcRot;


    			if( screenVar < 1 ) {

    				sphere.rotation.y += 0.00015;

    			}else {

    					GlobeContainer.rotation.y += 0.00415;
    					GlobeContainer2.rotation.y += 0.00415;
							GlobeContainer4.rotation.y += 0.00415;
							GlobeContainer5.rotation.y += 0.00415;

    			};


  				 if( screenVar < 1 ) {

   					GlobeContainer2.rotation.y -= (target.y + GlobeContainer2.rotation.y) * buzz2;
    				GlobeContainer2.rotation.x += (target.x - GlobeContainer2.rotation.x) * ((buzz2 + 0.03)*buzz4);
    				GlobeContainer2.updateMatrixWorld();

    				GlobeContainer4.rotation.y -= (target.y + GlobeContainer4.rotation.y) * buzz2;
    				GlobeContainer4.rotation.x += (target.x - GlobeContainer4.rotation.x) * (buzz2 + 0.03);
    				GlobeContainer4.updateMatrixWorld();

    			};



    			// ZOOM

    			fov = camera.position.z;


    			loadV2 = (loadV + 1);
    			loadV = loadV2;


    			if( loadV < 25 && loadV > 3 ) {

    				loadV3 = (loadV/48);

    		//		GlobeContainer.scale.y = GlobeContainer.scale.x = GlobeContainer.scale.z = (0.5+loadV3);
    		//		GlobeContainer4.scale.y = GlobeContainer4.scale.x = GlobeContainer4.scale.z = (0.5+loadV3);


					if( loadV > 0 && GGlowColVar < 2 ) {

				//		GlobeGlow.scale.y = GlobeGlow.scale.x = GlobeGlow.scale.z = (0.5+loadV3) * 1.37;

					};

    			};



    			if( loadV > 50 && loadV < 52 ) {

					buzz = 0.07;

				};


					if( BGToggleMSS > 0 && BGVarMSS == 1 ) {

    					if( newPanorama > 0 ) {

    						target2.y = 0;
    						targetOnDown2.y = 0;
    						newPanorama = 0;

    					};

					//		panoramaMesh.rotation.y -= 0.0003;

    					panoramaMesh.rotation.y -= (target2.y + panoramaMesh.rotation.y) * buzz2;
    					panoramaMesh.rotation.x += (target.x - panoramaMesh.rotation.x) * (buzz2 + 0.03);
    					panoramaMesh.updateMatrixWorld();
    					nerf = 0.07;
    					panSpinOff = 1;


    				};

    			if(fov<620){

    				zoom = 1.0025;

    				aa = Math.round(fov);
    				dragonfly = aa;


  				};


    			if( fov > (Number(cameraMSS) + 20 ) ){

    				zoom = 1;
    				zoomDamp = 0;

    			};

    				got2 = (got + 2);
    				got = got2;


    			if( got > 0 && got < 100 ) {

    				if( got > 70 ) {

    					dubbed = 1.2;

    				};

    				buzz2 = (got + 2);
    				buzz2 = (buzz2/2)
    				buzz2 = (0.0011*(buzz2/dubbed) + 0.015);
    		//		console.log(buzz2);


    			};


    			if( got > 80 && got < 83 ) {

    		//		buzz2 = 0.07;
    		//		console.log(buzz2);


    				};

    			if( got > 15 && got < 50 ) {

    				got0 = (got - 19);

    					if( got0 > 8 && got0 < 10 ) {

    						$('.uil-ring-css').css('display', 'none');				// 	Loading GIF off!

    					};

    			}else if( got > 50 && got < 85 ) {

    				got1 = (got - 52);
    				got11 = (got0 - got1);

    			};

    			if( got > 70 ) {

    				buzz2 = Number(SpinMSS);
					buzz3 = ( Number(SpinMSS) + 0.03);

    			};


    			if( particleMSS > 0 ) {

    			 var time = Date.now() * 0.00005;

    			for (i = 0; i < scene3.children.length; i++) {

           		 var object = scene3.children[i];

                	object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

       			 };

      		  for (i = 0; i < materials.length; i++) {

            		color = parameters[i][0];

            		h = (360 * (color[0] + time) % 360) / 360;


				    if( particleMSS < 2 ) {

           			 	materials[i].color.setHSL(h, color[1], color[2]);

           			 }else if( particleMSS < 3 ) {

           			 	h = 0.63;
           			 	materials[i].color.setHSL(h, color[1], color[2]);

           			 }else {

           			 	if( particleMSS < 4 ) {

           			 		// Default: White Particles

           			 	}else {

           					materials[i].color.setHSL(0, 0, 0);

           			 	};

           			 };


           		 	if( GTextureMSS0 == 3 ) {

           				sphere.material.uniforms.colour.value = materials[i].color;

           		 	};

       			 };

				};

				if( trianglesVar > 0 ) {

					trianglesMesh.rotation.y += 0.0005;

				};

		//		 var timer = Date.now() * 0.00050;
     	//			 light1T.position.x = Math.cos(timer) * 120;
      	//			 light1T.position.z = Math.sin(timer) * 120;
      	//			 light2T.position.y = Math.cos(timer) * 120;
      	//			 light2T.position.z = Math.sin(timer) * 120;
      	//			 light3T.position.y = Math.cos(timer) * 120;
      	//			 light3T.position.z = Math.sin(timer) * 120;



			var delta = clock.getDelta();
				uniformsTester.time.value += delta * 5;

		//		console.log(fov);
    			camera.position.z = fov * zoom;
      			camera.updateProjectionMatrix();
	  			stop = requestAnimationFrame(render);
	  			uniformsMat.iGlobalTime.value = clock.getElapsedTime();

	  	//		t = clock.getElapsedTime();
		//		customUniforms.time.value = t;

	  		renderer.autoClear = false;
				renderer.clear();
				renderer.render(scene2, camera);
				renderer.render(scene, camera);

				if( particleMSS > 0 ) {

					renderer.render(scene3, camera);

				};


				if( PerformanceMSS > 3 && PerformanceMSS < 5 ) {

					stats.update();

				};

			//	rendererStats.update(renderer);



				// 3D theme renderer

				if( theme3DContVar == 1 ) {

					contObj2.rotation.y -= 0.005;

					cameraCont2.position.z = fov * zoom;
      		cameraCont2.updateProjectionMatrix();

					renderer2.autoClear = false;
					renderer2.clear();
					renderer2.render(sceneCont2, cameraCont2);

				};

			};

					markerLoader();
      		 		kbMarkerLoader();


      		 if( TutorialMSS === "1" ) {

      		 	// Do Nothing

      		 }else {


				if( renderPass > 0 ) {

					render();

					function timeout() {

						$("#sliderSize").css('display','inline');
						$("#buttonBox").css('display','inline');
						$("#switchBox").css('display','inline');
						$("#switchBoxBG").css('display','inline');
						$("#chromeApps").css('display','inline');
						$("#bookmarks").css('display','inline');
						$("#extensions").css('display','inline');
						$("#recentlyVisited").css('display','inline');

					};

						setTimeout(timeout,100);
				};
			};










// ********************************************  Marker Mouse Events   ********************************************





	// Marker Hover Highlight New


				var obj2;
				var obj2var = 1;

				if( TutorialMSS < 1 ) {

					document.addEventListener( 'mousemove', onDocumentMouseMove0, false );

				};

				function onDocumentMouseMove0( event ) {

					mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
					mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

					raycaster0.setFromCamera( mouse0, camera );
					intersects0 = raycaster0.intersectObjects( GlobeContainer2.children );
					intersects000 = raycaster0.intersectObject( sphere );

				/*	intersects12 = raycaster0.intersectObject( sphere );


					 for( var i = 0; i < intersects12.length; i++ ) {

   						console.log('intersect');

			 		};	*/


				 	 for( var i = 0; i < intersects000.length; i++ ) {

   						$container.css('cursor','auto');

   						if( obj2var > 1 ) {

							obj2.material.opacity = 0.85;
							obj2var = 1;

					};
			 	};

				 	 for( var i = 0; i < intersects0.length; i++ ) {

						dist0 = intersects0[0].distance;
						visible = intersects0[0].object.visible

					//	console.log('Marker');


					/*	 if( dist < 600 && visible == true) {					//   ***

				 			intersection = intersects0[ i ],
     						obj2 = intersection.object;
							obj2.material.opacity = 0.95;
   							$container.css('cursor','pointer');
   							objVar2 = 10;
   							obj2var = 2;

				 	};	*/
			 	};
			 };




	// Marker Hover Highlight


			var moveVar0 = 0, objNod, ID3;


			if( TutorialMSS < 1 ) {

				document.addEventListener( 'mousemove', onDocumentMouseMoveM, false );

			};

				function onDocumentMouseMoveM() {

						if( pointerVar > 0 ) {

							$container.css('cursor','auto');
							moveVar0 = (moveVar0 + 1);

						};

						mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
						mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

						raycaster0.setFromCamera( mouse0, camera );
						intersectsMGC2 = raycaster0.intersectObjects( GlobeContainer2.children );
					 	intersectsM = raycaster0.intersectObjects( GlobeContainer4.children, true );
					 	intersectsMM = raycaster0.intersectObject( sphere );


					for( var i = 0; i < intersectsM.length; i++ ) {

						nodDownVar = 1;

					};

					if( eventOFF < 1 ) {

					  if( moveVar0 > 1 ) {

					  		$container.css('cursor','auto');
					  		count = (count + 1);

					  		if( count > 1 && hovVar == 11 ) {

					  			hovVar3 = 6;

					  		};


					  		if( hovVar == 11 && hovVar3 == 6 ) {

   								pos = objMG.position;
   								x = (pos.x/181.75)*180.8;
   								y = (pos.y/181.75)*180.8;
   								z = (pos.z/181.75)*180.8;


   								if( SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || ID3 == "hosted_app***" ) {

   									pos2 = objNod.position;
   									x2 = (pos2.x/181.75)*180.8;
   									y2 = (pos2.y/181.75)*180.8;
   									z2 = (pos2.z/181.75)*180.8;

   								};

   								matType = objMG.material.name;

							if( matType == "shader" ) {

								objMG.material.uniforms.percent.value = 0.8;

							}else {

								objMG.material.opacity = 0.8;

							};

   								if( abcRot5 < 5 ) {

									objMG.position.set(x, y, z);

									if( SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || ID3 == "hosted_app***" ) {

   										if( nodDownVar > 0 ) {

   											objNod.position.set(x2, y2, z2);

										};

									};

										hovVar = 12;
   									hovVar3 = 5;


							}else {

										hovVar = 12;
   									hovVar3 = 5;

							};
   						};

					};


					for( var i = 0; i < intersectsM.length; i++ ) {

							dist = intersectsM[0].distance;

							intersectionUserData = intersectsM[0],
	     				objUserData = intersectionUserData.object.parent;

							if( objUserData.userData == "delButton" ) {

									$container.css('cursor','pointer');

							};


				 	 if( dist < 635 && eventOFF2 < 1 ) {

				 		intersectionM = intersectsM[0],
     					objM = intersectionM.object;
     					idxF = intersectionM.faceIndex;

     					if( contextCursor < 2 ) {

     						GC4Len = GlobeContainer4.children.length;

     						if( objM.name == "E6" && GC4Len < 2  ) {		// If user adds first marker on E6, no pointer cursor

     							// Do Nothing

     						}else {

     							$container.css('cursor','pointer');
     							moveVar0 = 0;
     							pointerVar = 1;

     						};

     					}else {

     						$container.css('cursor','context-menu');

     					};


     					if( hovVar == 12 ) {

   							pos = objM.position;
   							x = (pos.x/180.8)*181.75;
   							y = (pos.y/180.8)*181.75;
   							z = (pos.z/180.8)*181.75;

   							if( objM.material.name != "shader" ) {

   								SAimg = objM.material.map.image.currentSrc;

     						}else {

     							SAimg = objM.material.uniforms.tSec.value.image.currentSrc;

     						};

     							url = objM.data;
   								ID3 = url.substr(0, 13);

   							if( SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || ID3 == "hosted_app***" ) {

   								val0 = ( GC4Arr.indexOf(objM.name) + 1 );
									objNod = GlobeContainer4.children[val0];

									pos2 = objNod.position;
   								x2 = (pos2.x/180.8)*181.75;
   								y2 = (pos2.y/180.8)*181.75;
   								z2 = (pos2.z/180.8)*181.75;

   							};

							abcRot5 = abcRot4;
							objMG = objM;
							count = 0;

							matType = objMG.material.name;

							if( matType == "shader" ) {

								objMG.material.uniforms.percent.value = 1;

							}else {

								objMG.material.opacity = 1;

							};

								if( abcRot4 < 5 ) {

									objM.position.set(x, y, z);

									if( SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || ID3 == "hosted_app***" ) {

   										objNod.position.set(x2, y2, z2);

									};

   									hovVar = 11;
   									hovVar2 = 9;

								}else {

									hovVar = 11;
   									hovVar2 = 9;

							};
   						};
   					};
			 	 };


		  		for( var i = 0; i < intersectsMGC2.length; i++ ) {

						dist = intersectsMGC2[0].distance;


				 	 if( dist < 635 ) {

				 	 	nodDownVar = 0;

				 			intersectsMGC2 = intersectsMGC2[0],
     					objM = intersectsMGC2.object;
     					idxF = intersectsMGC2.faceIndex;
     					objIdxyz = savedArr.indexOf(objM.name);


   						if( objIdxyz < 0 ) {

     						$container.css('cursor','pointer');
     						moveVar0 = 0;
     						pointerVar = 1;

     					};


     					count = 0;


     					if( hovVar == 12 ) {

   							pos = objM.position;
   							x = (pos.x/180.8)*181.75;
   							y = (pos.y/180.8)*181.75;
   							z = (pos.z/180.8)*181.75;
								abcRot5 = abcRot4;
								objMG = objM;

								if( abcRot4 < 5 ) {

									objM.material.opacity = 1;
									objM.position.set(x, y, z);
   									hovVar = 11;
   									hovVar2 = 9;

								}else {

									objM.material.opacity = 1;
									hovVar = 11;
   									hovVar2 = 9;

							};
   						};
   					};
			 	  };

			 	 }else {

   						// Do Nothing

   				};

			 };





	// 	**********************  Marker URL open  **********************


		 meshXFunction = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;


				document.addEventListener( 'mousedown', onDocumentMouseDownM2, false );

 }
    };
})();

				function onDocumentMouseDownM2() {

						mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
						mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

						document.addEventListener( 'mouseup', onDocumentMouseUpM2, false );
						$container.css('cursor','pointer');

						raycaster0.setFromCamera( mouse0, camera );
						intersectsM2 = raycaster0.intersectObjects( GlobeContainer4.children );

					};


				function onDocumentMouseUpM2() {

				 if( eventOFF < 1 && eventOFF2 < 1 ) {

	 				if( intersectsM2.length > 0 ) {

	 				  if( 600 > intersectsM2[0].distance ) {

				 		intersectionM2 = intersectsM2[ 0 ],
     					objM2 = intersectionM2.object;

     					name = objM2.data;
     					data = objM2.name;

						img = name.substr( 0, name.indexOf('**') );
						img2 = name.substr( name.indexOf('**') + 2, name.length );
						img3 = img.length;

						if( img3 > 0 ) {

							name = $( '#' + data ).attr('id');

							if( img == 'packaged_app' ) {

								chrome.management.launchApp(img2);

							}else {

								chrome.management.launchApp(img2);

								chrome.tabs.getCurrent(function(tab) {

    								chrome.tabs.remove(tab.id, function() { });

								});

							};

						}else{

							http = name.substring(0, 14);
     						http2 = name.substring(0, 13);
     						url = name.substring(14);
     						url2 = name.substring(13);

     						if( name == "NULL" ) {

     							// Do Nothing

     						}else {


     						if( http === 'http://https//' ){

     							window.location.href = ( 'http://' + url );

							}else if( http2 === 'http://http//' ) {

								window.location.href = ( 'http://' + url2 );

							}else {

     							bmUrl = name.substring(0, 10);
								bmUrl2 = name.substring( 10, name.length );


     							if( bmUrl === "Bookmark12" ) {

     								window.location.href = ( bmUrl2 );

     							}else {

     								if( name === 'undefined' ) {

     									window.location.href = ( objHref );

     								}else {

     								name108 = name.substr( 0, 8 );

     								if( name108 === 'file:///' ) {

     									window.location.href = ( name );

     								}else {

     									window.location.href = ( 'https://' + name );

     							};
     						};
     					};
					};
				};
			};
		};
	 };

			}else {

					// Do Nothing

			};
		};






	// ********************************************   3D Search Bar System   ********************************************


		if( TutorialMSS < 1 ) {

			document.addEventListener( 'mousemove', onDocumentMouseMoveG, false );

		};

				function onDocumentMouseMoveG() {

					mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
					mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

					raycaster0.setFromCamera( mouse0, camera );
					intersectsG = raycaster0.intersectObject( CplaneMesh );


				 if( eventOFF < 1 ) {

				 	 for( var i = 0; i < intersectsG.length; i++ ) {

							faceIdx = intersectsG[0].faceIndex;

							if( faceIdx > 1200 && faceIdx < 2418 ) {

								if( faceIdx < 1350 && faceIdx > 1201 ) {

									val = $searchBar.val().length;

									if( val > 0 ) {

										$container.css('cursor','pointer');

									};

								}else {

									val = $searchBar.val().length;

							//		if( val > 0 ) {

										$container.css('cursor','text');

								//	};
							};
  	 					};
			 		};

			 	}else {


			 		// Do Nothing

			 };
			};



					document.addEventListener( 'mousedown', onDocumentMouseDownG, false );


				function onDocumentMouseDownG() {

					mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
					mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

					raycaster0.setFromCamera( mouse0, camera );
					document.addEventListener( 'mouseup', onDocumentMouseUpG, false );


					};


				function onDocumentMouseUpG() {

				  if( eventOFF < 1 ) {

					intersectsG2 = raycaster0.intersectObject( CplaneMesh );

	 				if( intersectsG2.length > 0 ) {

	 					faceIdx = intersectsG2[0].faceIndex;

							if( faceIdx > 1200 && faceIdx < 2418 ) {

								if( faceIdx < 1350 && faceIdx > 1201 ) {

									val = $searchBar.val().length;

									if( val > 0 ) {

										window.location.href = ('http://www.' + searchEngineType + '.com/search?q=' + $searchBar.val() );

									};

								}else {

	 								searchBoxMeas();
	 								searchBoxF();

							};
						};
					};

				}else {

					// Do Nothing

				};

			};



				function searchBoxF() {

				     newPanorama = 1;

					 canvasConvert();

					 x = GlobeContainer.rotation.y;
   					 y = ( x + 0.523 );
   					 z = ( y / 6.31 );
   					 k = z.toFixed(0);

   					 a = ( z - k );
   					 b = ( a * 6.27 );
   					 c = ( b - 0.523 );

   					 d = ( z - k );
   					 e = ( d * 6.27 );
   					 f = ( e - 0.523 );


   					 if( x > 4 ){

   					 	GlobeContainer.rotation.y = c;
   					 	GlobeContainer2.rotation.y = c;
   					 	GlobeContainer4.rotation.y = c;
   						GlobeContainer5.rotation.y = c;

   					 	if( BGTextureMSS0 !== "0" )  {

   					 		panoramaMesh.rotation.y = c;

   					 	};
   					};


   					 if( x < -5 ){

   					 	GlobeContainer.rotation.y = f;
   					 	GlobeContainer2.rotation.y = f;
   						GlobeContainer4.rotation.y = f;
   						GlobeContainer5.rotation.y = f;


   						if( BGTextureMSS0 !== "0" )  {

   					 		panoramaMesh.rotation.y = c;

   					 	};
   					 };



   					  if( edge00 > 1 ) {

   					 function timeoutSB2 () {

   						target.y = 0.523;
   						target.x = 0.0137;
   					 	edge00 = 2;

   					 };

   					  setTimeout(timeoutSB2, 300);

   					 }else {

   						target.y = 0.523;
   						target.x = 0.0137;

   					};



				function showpanel() {

				// Search Box Width Correction Only System - Max Height 					** Test Multiplatform **

						vectorR = new THREE.Vector3( Rx,Ry,Rz );
   	   			 		mpR = measurePro.projectVector( vectorR, camera );
   	   			 		mpWR = (vectorR.x + 1)/2 * window.innerWidth;
   	   			 		mpWRR = (window.innerWidth - mpWR);
   	   			 		mpWRR0 = Math.round(mpWR);
						vectorL = new THREE.Vector3( Lx,Ly,Lz );
   	   			 		mpL = measurePro.projectVector( vectorL, camera );
   	    				mpWL = (vectorL.x + 1)/2 * window.innerWidth;
   	    				mpWL2 = (window.innerWidth - mpWL);

						vectorT = new THREE.Vector3( Tx,Ty,Tz );
						mpT = measurePro.projectVector( vectorT, camera );
						mpWT = - (vectorT.y - 1)/2 * window.innerHeight
						vectorB = new THREE.Vector3( Bx,By,Bz );
   	   			 		mpB = measurePro.projectVector( vectorB, camera );
   	    				mpWB = - (vectorB.y - 1)/2 * window.innerHeight;

						dimRatio = (window.innerWidth/window.innerHeight);
						dRat = (dimRatio - 1.75)/200;

						if( dRat < 0 ) {

							dRat = 0;

						};

						listAdjust = ( (cameraMSS - 540 )/20 ) ;

      	 				if( listAdjust > 5 ) {

      	 					listAdjust0 = ( 5 - listAdjust );

      	 				}else if( listAdjust < 5 ){

      	 					listAdjust0 = (14 - (listAdjust*2) );

      	 				}else {

      	 					listAdjust0 = 0;

      	 				};

						boxWid = ( mpWR - mpWL );
						boxWid2 = ( boxWid * 1.335 );
						boxWid3 = ( boxWid * (1.335 - dRat) );
						halfBox = (boxWid2/1.957);
						halfBox2 = (boxWid2/1.78);

						leftABC = (window.innerWidth/2 - halfBox);
						leftABCD = (window.innerWidth/2 - halfBox2);
						topABC = (window.innerHeight/(2.15 - topOffsetD) );
						topABCD = (window.innerHeight/2.045);
						mpHeight = (mpWB - mpWT)*1.18;


						$list.css('width', boxWid3 + listAdjust0 + 'px');
						$list.css('left', leftABCD - (listAdjust0/2) + 'px');
						$list.css('top', topABCD - edge00 + 'px');

						fontVar = (window.innerHeight/50);
						$('#list').css('font-size',  fontVar + 'px');

					    $searchBar.css('display','inline');
					    $searchBar.css('transparency','true');
					    $searchBar.css('opacity','0');
     				 	document.getElementById(searchEngineType + 'Search').focus();

				 };

					 	showpanel();

			};




	// Dynamic Text Box Mesh


		var dynamicTexture, typeFuncVar = 0;

		canvasConvert();

		function canvasConvert(){

			if( canC < 2 ) {

				canvasG = document.getElementById("canvasG");
				canvasGX = canvasG.getContext('2d');
				canvasGX.scale( 1.55, 9 );
			  dynamicTexture	= new THREEx.DynamicTexture(2812,312);

				dynamicTexture.clear('#9f9f9f');
				dynamicTexture.context.font = '150px Avenir Next';
				dynamicTexture.context.textAlign = 'left';
				dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy();
				searchBox = document.getElementById(searchEngineType + 'Search').value;

				dynamicTexture.drawText(searchBox, undefined, 212, 'black');
				dynamicTexture.texture.needsUpdate  = true;

				curvedPlane = new THREE.SphereGeometry(200.1, 140, 120, 3.125, 0.762, 1.447, 0.075);
				materialPlane = new THREE.MeshPhongMaterial( { map: dynamicTexture.texture, overdraw: true } );
				meshPlaneCC = new THREE.Mesh( curvedPlane, materialPlane);
				GlobeContainer.add( meshPlaneCC );
				meshPlaneCC.doubleSided = true;

				longitude = 60;
				latitude = 3;

				x = 75 * Math.cos(latitude * Math.PI/180) * Math.cos( longitude * Math.PI/180);
				y = 75 * Math.sin(latitude * Math.PI/180);
				z = 75 * Math.cos(latitude * Math.PI/180) * Math.sin( longitude * Math.PI/180);

				meshPlaneCC.position.x = x - 44;
				meshPlaneCC.position.y = y - 8.5;
				meshPlaneCC.position.z = z - 73.45;
				meshPlaneCC.rotation.set( 0, -1.45 , 0);

				canC = 2;
				tVal = 1;
				stopVal = 1;

				if( typeFuncVar > 0 ) {

					typeFunction();

				}else {

					canC = 1;

				};

				typeFuncVar = 1;

			}else {

				dynamicTexture.clear('#9f9f9f');
				dynamicTexture.context.font = '150px Avenir Next';
				dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy();

				searchBox = document.getElementById(searchEngineType + 'Search').value;
				omega = '\u2502';

				dynamicTexture.drawText(( '  ' + searchBox + ' |' ), undefined, 212, 'black');
				dynamicTexture.context.textAlign = 'left';
				dynamicTexture.texture.needsUpdate  = true;
				stopVal = 1;

			};
		};


			var tVal = 1;
			var ttVal = 1;
			var stopVal = 1;

			function typeFunction() {

				myLoopM(0);

			 		function myLoopM(i) {

			 			if( tVal < 2 ) {

			  				function timeMarkers100() {

								if( ttVal < 2 && stopVal < 2 ) {

									ttVal = 2;

									dynamicTexture.clear('#9f9f9f');
									dynamicTexture.context.font = '150px Avenir Next';
									dynamicTexture.textAlign = 'left';
									dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy();
									searchBox = document.getElementById(searchEngineType + 'Search').value;
									omega = '\u2502';
									dynamicTexture.drawText(( '  ' + searchBox + ' |' ), undefined, 212, 'black');
									dynamicTexture.context.textAlign = 'left';
									dynamicTexture.texture.needsUpdate  = true;

									myLoopM(i + 1);

							}else {

									ttVal = 1;

									dynamicTexture.clear('#9f9f9f');
									dynamicTexture.context.font = '150px Avenir Next';
									dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy();
									searchBox = document.getElementById(searchEngineType + 'Search').value;
									omega = '\u2502';
									dynamicTexture.drawText((searchBox ), undefined, 212, 'black');
									dynamicTexture.context.textAlign = 'left';
									dynamicTexture.texture.needsUpdate  = true;
									myLoopM(i + 1);

						};
					};

							setTimeout(timeMarkers100, 500);

				};
			};
		};




	// Google Search Auto Suggestion


		var boxVar = 1;


		$searchBar.on('input', function(e) {

			$list.css('display', 'inline' );
			window.displayBoxIndex = -1;
			code = (e.keyCode ? e.keyCode : e.which);
			value = this.value + String.fromCharCode(e.keyCode);
			value2 = $( "#list" ).children().length;
			canvasConvert();

			if( value2 < 1 ){

				$list.css('display', 'none' );

			};


			if( value.length < 2 ){

				$list.css('display', 'none' );

			};


   		 $.ajax({
    	    url: "http://clients1.google.com/complete/search",
     	    dataType: "json",
     	    data: {
      	      client: "chrome",
     			q: value

       	 }

   	 }).done(function(data){
      	  $("#list").empty();
       	 var list = data[1],
       	     type = data[4]["google:suggesttype"];
          	 $("#list").css('display', 'inline');

       	if (list === undefined || list.length == 0) {

       		$list.css('display', 'none' );

       			if( boxVar > 1 ) {

       				scene.remove( boxMesh );
       				boxVar = 1;

       			};

		}else {

			if( boxVar < 2 ) {

		//		scene.add( boxMesh );
				boxVar = 2;

			};
		};

		 var io = 9;
         var ioo = 1;

        $(list).each(function(i){

        	if(i<io){

            var entry = this;
    		var url = entry;
    		var	page = "";


        	 if (url.indexOf("https://") == 0) {
   				 url = url.substr(7); }
   			 if (url.indexOf("http://") == 0) {
   				 url = url.substr(7); }
		 	 if (url.indexOf("www.") == 0) {
       	 	     url = url.substr(4); }
    			domain = url.split('/')[0].split('.')[0]
    		if (url.split('/').length > 1) {
       	 		page = url.split('/')[1].split('.')[0]; };


			var domain2 = domain.replace(/\s/g, '');


            $("<div class='suggestions' style='padding-left: 5px; z-index: 12;'>")

                .text(domain)
                .attr('name',  domain )
                .attr('id',  domain2 )
                .appendTo("#list")
                .data("query", domain).mousedown(function(){
                	clickedVal = $(this).data("query")
                    openInGoogle($(this).data("query"))
                    $searchBar.val( clickedVal )
               })
               		.data("query", domain).mouseover(function(){
              		cssClass = "suggestions_hover";
              		$(".suggestions").removeClass(cssClass);
                	$(this).addClass(cssClass);
               })
               		.data("query", domain).mouseout(function(){
                	cssClass = "suggestions_hover";
                	$(this).removeClass(cssClass);
               });


                  $('#en').remove();
                  $('#irs').remove();
                  $('#ad').remove();
                  $('#squidoo').remove();
                  $('#https').remove();
                  $('#us').remove();
                  $('#straightdope').remove();
                  $('#lyrics007').remove();
                  $('#wiki').remove();
                  $('#zeroto60times').remove();
                  $('#oddee').remove();
          		  $('#quizrocket').remove();
          		  $('#coolnsmart').remove();
          		  $('#nhlbisupport').remove();
          		  $('#danmarkltd').remove();
          		  $('#neb').remove();
          		  $('#doe').remove();
          		  $('#m').remove();
          		  $('#sad').remove();


                  var length = $('[id='+ domain2 +']').length;


 				 if( length >= 2 ) {

					var url2 = this
					var	page2 = "";

					if (url2.indexOf("https://") == 0) {
   				 	url2 = url2.substr(7); }
   			 		if (url2.indexOf("http://") == 0) {
   					url2 = url2.substr(7); }
		 	 		if (url2.indexOf("www.") == 0) {
       	 	   	 	url2 = url2.substr(4); }
    				domainX = url2.split('/')[0].split('.')[0]
    				if (url2.split('/').length > 1) {
       	 			page2 = url2.split('/')[1].split('.')[0]; };


       	 			domainY = ( domainX + ',' + domainX );
       	 			els = $( '#' + domainX );
       	 			saved = els.clone(true);


       	 		 $('#'+ domainY ).each(function() {

						this.remove();

 				   });

 				   		saved.appendTo($('#list'));


				  };
                };
       		 });
   		 });
		});





	// Arrow Key Navigation


		window.displayBoxIndex = -1;

	$searchBar.keydown(function(e){

     	 if (e.keyCode == 40){
       	     Navigate(1);
      	  };

     	 if(e.keyCode==38){
        	    Navigate(-1);
        	    e.preventDefault();
			};
			});


		var Navigate = function(diff) {

   			displayBoxIndex += diff;
    		oBoxCollection = $(".suggestions");

   	 if (displayBoxIndex >= oBoxCollection.length)
     	    displayBoxIndex = 0;
 	 if (displayBoxIndex < 0)
      	 	displayBoxIndex = oBoxCollection.length - 1;

    		cssClass = "suggestions_hover";
    		oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
	   	    obey = oBoxCollection.eq(displayBoxIndex);
    		$searchBar.val( obey.attr('name') );

		};








	// ********************** 	Globe Add Saved Marker Controls  **********************


			var SAname;

			document.addEventListener( 'mousedown', onDocumentMouseDown0, false );

				function onDocumentMouseDown0( event ) {

					mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
					mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

					raycaster0.setFromCamera( mouse0, camera );
					intersects1 = raycaster0.intersectObjects( GlobeContainer2.children );

					document.addEventListener( 'mouseup', onDocumentMouseUp0, false );

					};


				function onDocumentMouseUp0() {

	 			  if( eventOFF < 1 ) {

	 				for( var k = 0; k < intersects1.length; k++ ) {

	 					dist = intersects1[0].distance;

				 	 if( dist < 600 && objVar == 12 && objVar2 == 10 ) {

				 			intersection1 = intersects1[0];
     					obj1 = intersection1.object;
							objIdxyz = savedArr.indexOf(obj1.name);

   						if( objIdxyz < 0 ) {

     						eventOFF2 = 0;
								delButtonVar = 1;

     						siteId = obj1.name;
     						SAname = obj1.name;
     						pos = obj1.position;
     						rota = obj1.rotation;

     						name = SAname;
								id = name;
								console.log(name);

     						xx = $('#' + name).data('xx');
								yy = $('#' + name).data('yy');
								zz = $('#' + name).data('zz');

     						pos2x = (xx/180.5)*179;
     						pos2y = (yy/180.5)*179;
     						pos2z = (zz/180.5)*179;
     						pos2 = new THREE.Vector3(pos2x, pos2y, pos2z);

								deleteLen = ( GlobeContainer4.children.length - 1 );

								GC4Arr.forEach(function() {

									markerDelVar = 0;
									ele = GlobeContainer4.children[deleteLen];
									ele.visible = false;
									deleteLen = ( deleteLen - 1 );

								});

								checkPermissions();

     						if( obj1.img == "Markers/facebook.png" || obj1.img == "Markers/gmail.com" ) {

									redTagSwitch = 0;
     							createNotification();

     						};

     						$('#'+ name).attr('data-x', pos2.x);
     						$('#'+ name).attr('data-y', pos2.y);
     						$('#'+ name).attr('data-z', pos2.z);
     						$('#'+ name).attr('data-rx', rota.x);
     						$('#'+ name).attr('data-ry', rota.y);
     						$('#'+ name).attr('data-rz', rota.z);
     						$('#'+ name).attr('data-xx', xx);
     						$('#'+ name).attr('data-yy', yy);
     						$('#'+ name).attr('data-zz', zz);

     						$backlight2.fadeIn('slow');
   							$('#configBoxSelection').fadeIn('fast');

								document.removeEventListener( 'mousedown', onDocumentMouseDownG, false );
								document.removeEventListener( 'mousedown', onDocumentMouseDownM2, false );
								grape = 1;
								pearVal00 = 1;
								button2Function();
								eventOFF = 1;

							if( colourAdd > 1 ) {

								headID = document.getElementsByTagName("body")[0];
								newScript = document.createElement('script');
								newScript.type = 'text/javascript';
								newScript.src = 'Globe Files/Resource Files/farbtastic.js';
								headID.appendChild(newScript);
								colourAdd = 1;

						};

				   };
		 		 };
				};

			}else {

				// Do Nothing

			};

		};






// *************************  Delete Marker Button System  ******************************



		var delPivot, delCylinder, delCylinderMat;

		function createDeleteButton() {

			ID3 = url.substr(0, 13);

			ID = idMarker;
			ID0 = ID.substr(0, 2);

			if( ID0 == "CC" ) {

				ID2 = ID.substr(0, 3);

			}else {

				ID2 = ID.substr(0, 1);

			};

			idx = long2Arr0.indexOf(ID2);
			long2Var = long2Arr[idx];
			lat2Var = lat2Arr[idx];

			longitude2 = ( $('#' + ID).data('long') - Number(long2Var) );
			latitude2 = ( $('#' + ID).data('lat') +  Number(lat2Var) );

			x2 = 192 * Math.cos(latitude2 * Math.PI/180) * Math.cos(longitude2 * Math.PI/180);
			y2 = 192 * Math.sin(latitude2 * Math.PI/180);
			z2 = 192 * Math.cos(latitude2 * Math.PI/180) * Math.sin(longitude2 * Math.PI/180);

			delCylinderMat = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture( 'Globe Resources/redCross.png' ) });
			delCylinder = new THREE.Mesh( cylinderGeo, new THREE.MeshFaceMaterial( delCylinderMat ) );
			delCylinder.name = ID;

			delPivot = new THREE.Object3D();
			delPivot.name = ID;
			delPivot.userData = "delButton";
			GlobeContainer4.add( delPivot );
			delPivot.position.set(x2,y2,z2);
			delPivot.add( delCylinder );
			delPivot.lookAt(GlobeContainer4.position);
			delCylinder.rotation.set(29, 29.95, -0.75);
			delPivot.visible = false;
			closeMarkerVar = 1;

		};




		// Delete Globe Marker System

		var objXHold, objXHoldVar = 0, cylinderClick = 0;

			document.addEventListener( 'mouseup', onDocumentMouseUpX, false );

				function onDocumentMouseUpX() {

						mouse0.x = ( event.clientX / window.innerWidth ) * 2 - 1;
						mouse0.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

						raycaster0.setFromCamera( mouse0, camera );
						intersectsX = raycaster0.intersectObjects( GlobeContainer4.children, true );

						for( var e = 0; e < intersectsX.length; e++ ) {

						 	intersectionX = intersectsX[ e ],
		     			objX = intersectionX.object;
							objSwish = objX;
							name = objX.name;
							type = objX.geometry.type;
							SAname = name;
							contextCursor = 1;
							lime = 2;
							mButton2 = 1;

							if( type == "CylinderGeometry" ) {

									objXHold = objX.parent;
									delPivot = objXHold;
									cylinderClick = 1;

									function timeoutHold() {

										if( objXHoldVar == 1) {

											GlobeContainer4.remove(objXHold);
											objXHoldVar = 0;

											deleteLen = ( GlobeContainer4.children.length - 1 );

											GC4Arr.forEach(function(id) {

												markerDelVar = 0;
												ele = GlobeContainer4.children[deleteLen];
												ele.visible = false;
												deleteLen = ( deleteLen - 1);

											});

											button2Function();

										};

									};

									setTimeout( timeoutHold, 300 );

							}else {

								if( cylinderClick == 1 ) {

									editID0 = SAname;
									markerAnimation1();
									deleteFunction1();
									objXHoldVar = 1;
									cylinderClick = 0;

								};

							};

					};
				};







	// *******************    Notification System   ************************


		var a = 0;
		var long2Var;
		var lat2Arr = ['6.5','7','7.3','7.5','7.2','6.5','7','7','7'];
		var long2Arr0 = ['A','B','C','D','E','CC1','CC2','CC3','CC4'];
		var long2Arr = ['13','8.5','7.5','9.5','7.5','13','8.5','7.5','9.5'];
		var lat2Var = ['A','B','C','D','E','CC1','CC2','CC3','CC4'];
		var rotation_matrix;
		var cylinder, pivot;


		function createNotification() {

			ID3 = url.substr(0, 13);

			ID = SAname;
			ID0 = ID.substr(0, 2);

			if( ID0 == "CC" ) {

				ID2 = ID.substr(0, 3);

			}else {

				ID2 = ID.substr(0, 1);

			};

			idx = long2Arr0.indexOf(ID2);
			long2Var = long2Arr[idx];
			lat2Var = lat2Arr[idx];

			longitude2 = ( $('#' + ID).data('long') - Number(long2Var) );
			latitude2 = ( $('#' + ID).data('lat') +  Number(lat2Var) );

		   x2 = 192 * Math.cos(latitude2 * Math.PI/180) * Math.cos(longitude2 * Math.PI/180);
		   y2 = 192 * Math.sin(latitude2 * Math.PI/180);
		   z2 = 192 * Math.cos(latitude2 * Math.PI/180) * Math.sin(longitude2 * Math.PI/180);

			if( SAimg == "Markers/gmail.png" || ID3 == "hosted_app***" ) {

				dynamicTexture2.clear('#ff0000');
				dynamicTexture2.context.font = '20px Lato, sans-serif';
				dynamicTexture2.context.textAlign = 'left';
				dynamicTexture2.texture.anisotropy = renderer.getMaxAnisotropy();
				dynamicTexture2.drawText(gmailNods, undefined, 25, 'white');
				dynamicTexture2.texture.needsUpdate  = true;
				cylinder = new THREE.Mesh( cylinderGeo, new THREE.MeshFaceMaterial( cylinderMat2 ) );
				cylinder.name = ID;

				if( nodVarOn == 0 ) {

					nodVarOn = 1;

				}else {

					nodVarOn = 3;

				};

				if( nodRunVar == 0 ) {

					notificationCheck();

				};

			}else {

				dynamicTexture3.clear('#ff0000');
				dynamicTexture3.context.font = '20px Lato, sans-serif';
				dynamicTexture3.context.textAlign = 'left';
				dynamicTexture3.texture.anisotropy = renderer.getMaxAnisotropy();
				dynamicTexture3.drawText(fbNods, undefined, 25, 'white');
				dynamicTexture3.texture.needsUpdate  = true;
				cylinder = new THREE.Mesh( cylinderGeo, new THREE.MeshFaceMaterial( cylinderMat3 ) );
				cylinder.name = ID;

				if( nodVarOn == 0 ) {

					nodVarOn = 2;

				}else {

					nodVarOn = 3;

				};

				if( nodRunVar == 0 ) {

					notificationCheck();

				};

			};

			pivot = new THREE.Object3D();
			pivot.name = ID;
			GlobeContainer4.add( pivot );
			pivot.position.set(x2,y2,z2);
			pivot.add( cylinder );
			pivot.lookAt(GlobeContainer4.position);
	//		GC4Arr.push(ID);
			cylinder.rotation.set(29,29.95,-0.75);

		};


		function notificationsDelete() {

			GlobeContainer4.children.forEach(function(data) {

				if( data.name == SAname && data.type == "Object3D" ) {

					objNod = data;

				};

			});

		};






			// ********************** 	Marker Animation Function  **********************


				var aVal = -3;

			function markerAnimation1() {

				savedArr.push(SAname);

					if( dandilion > 1 ) {

							dandilion = 1;
							myLoopM(0);
							aVal = -3;

			 			function myLoopM(i) {

			 				if( aVal < 12 ) {

			  					function timeMarkersA() {

									aVal2 = ( aVal + 1 );
									aVal = aVal2;
									aVal3 = ( aVal2/10 + 180.8 );
									aVal4 = ( aVal + 2 );
									aVal5 = ( aVal4/10 + 180.8 );
									pos = objSwish.position;
   								x = (pos.x/aVal3)*aVal5;
   								y = (pos.y/aVal3)*aVal5;
   								z = (pos.z/aVal3)*aVal5;
   								objSwish.position.set(x, y, z);


									if( closeMarkerVar == 1 ) {

										pos3 = delPivot.position;
										x3 = (pos3.x/aVal3)*aVal5;
										y3 = (pos3.y/aVal3)*aVal5;
										z3 = (pos3.z/aVal3)*aVal5;
										delPivot.position.set(x3, y3, z3);

									};


   									if( SAimg2 == "Gmail" || SAimg == "Markers/gmail.png" || SAimg == "Markers/facebook.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || objHref == "hosted_app***" ) {

   										val0 = ( GC4Arr.indexOf(SAname) + 1 );
											objNod = GlobeContainer4.children[val0];
   										pos2 = objNod.position;
   										x2 = (pos2.x/aVal3)*aVal5;
   										y2 = (pos2.y/aVal3)*aVal5;
   										z2 = (pos2.z/aVal3)*aVal5;
											objNod.position.set(x2, y2, z2);

   									};

									myLoopM(i + 1);


							};
								setTimeout(timeMarkersA, 5);

						}else {

									aaVal = ( 25 - aVal );

									if( aaVal > - 18 ) {					// Continous editing reduces z position  ***

										function timeMarkersA2() {

											aaVal2 = ( aaVal + 1 );
											aaVal3 = ( aaVal2/10 + 180.8 );
											aaVal4 = ( aaVal/10 + 180.8 );
											pos = objSwish.position;
   										x = (pos.x/aaVal3)*aaVal4;
   										y = (pos.y/aaVal3)*aaVal4;
   										z = (pos.z/aaVal3)*aaVal4;
   										objSwish.position.set(x, y, z);
											aVal = ( aVal + 1 );

											if( closeMarkerVar == 1 ) {

												pos3 = delPivot.position;
												x3 = (pos3.x/aaVal3)*aaVal4;
												y3 = (pos3.y/aaVal3)*aaVal4;
												z3 = (pos3.z/aaVal3)*aaVal4;
												delPivot.position.set(x3, y3, z3);

											};

											if( SAimg2 == "Gmail" || SAimg == "Markers/gmail.png" || SAimg == "Markers/facebook.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || objHref == "hosted_app***" ) {

   												val0 = ( GC4Arr.indexOf(SAname) + 1 );
													objNod = GlobeContainer4.children[val0];
   												pos2 = objNod.position;
   												x2 = (pos2.x/aaVal3)*aaVal4;
   												y2 = (pos2.y/aaVal3)*aaVal4;
   												z2 = (pos2.z/aaVal3)*aaVal4;
													objNod.position.set(x2, y2, z2);

   											};

  											myLoopM(i + 1);

										};

									setTimeout(timeMarkersA2, 5);

								}else {

									aVal = -3;

									function timeMarkersD() {

										dandilion = 2;

									};

									setTimeout(timeMarkersD, 500);

									if( lime > 1 ) {

										if( objX.name === SAname ) {

											GlobeContainer4.remove(objX);

											if( SAimg == "Markers/gmail.png" || SAimg == "Markers/facebook.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/gmail.png" || SAimg == "chrome-extension://ljbepbcfkmbpoleofmfndmfhldomkdlb/Markers/facebook.png" || objHref == "hosted_app***" ) {

   												GlobeContainer4.remove(objNod);
   												idx = GC4Arr.indexOf(SAname);
													GC4Arr.splice(idx,1);

   											};

										};

										savedIdx = savedArr.indexOf(objX.name);
										savedArr.splice(savedIdx, 1);
										lime = 1;

										nameGC2x = objX.name;
										GC2eleIdx = savedArr.indexOf(nameGC2x);

										savedArr.splice( GC2eleIdx, 1 );
										deleteButtonAAVar = 0;

										eleGC2id = $( "#" + nameGC2x ).attr('data-index');
										eleGC2vis = GlobeContainer2.children[eleGC2id];
										eleGC2vis.visible = true;


									};
								};
							};
						};
					};
				};
