
    // Variables

     
		var WIDTH = window.innerWidth,
		    HEIGHT = window.innerHeight;		
		    
		var VIEW_ANGLE = 42,
   			ASPECT = WIDTH / HEIGHT,
  		 	NEAR = 10,
			FAR = 10000;
			
    	var particleMSS = 1
        
        var greeting;
      
        var raycaster = new THREE.Raycaster(); 
		var mouse = new THREE.Vector2(); 
	    var camera, renderer, evoGroup0;

        var properties2, text4T, material, group, uniqueVar = 0, scene;
    
        
        
    function init3D() {
   
		  
	// 3D Environment


		    scene = new THREE.Scene();
		var object = new THREE.Object3D();

		    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
 		    renderer = new THREE.WebGLRenderer( { alpha: true });
			
            if( tutorialVar == 1 ) {
                
              renderer.setSize($('#nameBox').width(), $('#nameBox').height());
			  renderer.domElement.style.position = "absolute";
			  renderer.domElement.style.left = "0px";
              renderer.domElement.style.zIndex = "101";
			  renderer.domElement.style.top = "0px";
			  renderer.setPixelRatio( window.devicePixelRatio * 1.5 );
              $('#demoLuma').append( renderer.domElement );
                
            }else {
                
              renderer.setSize(WIDTH, HEIGHT);
			  renderer.domElement.style.position = "absolute";
              renderer.domElement.style.left = "0px";
			  renderer.domElement.style.top = "0px";
              renderer.setPixelRatio( window.devicePixelRatio * 1.5 );
              $('#container').append( renderer.domElement );
		  
            };
		
          
              camera.position.x = 0;
              camera.position.y = 0;		
			  camera.position.z = 700;
        
              scene.add(camera);

	  
  
      
	// Lighting		
      
     var light = new THREE.SpotLight(0xffffff, 1 );			
      	 light.position.x = 0;
      	 light.position.y = 0;
      	 light.position.z = 500;
    	 light.lookAt(scene.position);
     	 scene.add(light);


     var light2 = new THREE.SpotLight(0xffffff, 0.9 );			
      	 light2.position.x = 0;
      	 light2.position.y = 0;
      	 light2.position.z = 1000;
     	 scene.add(light2);
        
     		 
    	 
    	 
    THREE.PointLight.prototype.addSphere = function () {
    
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 15, 15), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }))
      this.add(this.sphere);
      
    };
  
    var meshT, materialT, light1T;
  
      
      light1T = new THREE.PointLight(0xffffff);
      light1T.intensity = 1.5;
      light1T.addSphere();
      light1T.position.set(0, 20, 0);
      scene.add(light1T);

      
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
          
          
          
          




    // Evo


     var dodGeom = new THREE.OctahedronGeometry(3, 0);
 
     var dodMat = new THREE.MeshPhongMaterial( { color: 0x00ffaa, transparent: true, opacity: 1 } );
     var dodMesh = new THREE.Mesh( dodGeom, dodMat );  

     var evoMat1 = new THREE.MeshPhongMaterial({ color: 0x00ffaa, transparent: true, opacity: 1 });
     var evoGeom1 = new THREE.SphereGeometry(0.5,15,15);
     var evoMesh1 = new THREE.Mesh(evoGeom1,evoMat1);
         evoMesh1.position.set(3,0,-5);
         
     var evoGeom2 = new THREE.SphereGeometry(0.5,15,15);
     var evoMesh2 = new THREE.Mesh(evoGeom2,evoMat1);
         evoMesh2.position.set(-5,0,1);

     var evoGeom3 = new THREE.SphereGeometry(0.5,15,15);
     var evoMesh3 = new THREE.Mesh(evoGeom3,evoMat1);
         evoMesh3.position.set(5,0,1);

     var torusGeo = new THREE.TorusGeometry( 0.9, 0.2, 10, 30 );
     var torusMat = new THREE.MeshPhongMaterial( { color: 0x00ffaa, transparent: true, opacity: 1 } );
     var torusMesh = new THREE.Mesh( torusGeo, torusMat );
         torusMesh.position.set(0,-18,0);
        
         if( tutorialVar == 1 ) {
             
            torusMesh.rotation.set(1.78,0.06,0);
            
         }else{
             
            torusMesh.rotation.set(1.6,0,0);
             
         };

         evoGroup0 = new THREE.Group();

     var evoGroup1 = new THREE.Group();
     var evoGroup2 = new THREE.Group();
     var evoGroup3 = new THREE.Group();

	     evoGroup1.add(evoMesh1);
         evoGroup2.add(evoMesh2);
         evoGroup3.add(evoMesh3);
         evoGroup0.add(evoGroup1);
         evoGroup0.add(evoGroup2);
         evoGroup0.add(evoGroup3);
         evoGroup0.add(dodMesh);
         evoGroup0.add(torusMesh);

         if( tutorialVar == 1 ) {

             evoGroup0.position.set(24,24,644);
             light2.intensity = 0.88;
             
         }else {
             
             evoGroup0.position.set(-1.2,-3,600);
             
         };
        
         dodMesh.position.set(0,-12,0);
         dodMesh.rotation.set(0,0,0);
		
         light2.lookAt(evoGroup0.position);
  



			
			
	// ********************  Time3D  ***********************
			
	
	var	text3D = 1, initScene = 1, textVar = 0, properties, once = 0, material;
			
	
	if( text3D == 1 ) {
			
		var h, m, s, time, mVar, hVar;
			
		function getTime() {
			
			today = new Date();
 		  	h = today.getHours();
  			m = today.getMinutes();
  			s = today.getSeconds();
  			
  			if( initScene == 1 )  {
  			
  				mVar = m;
  			
  			};
  			
  			if( initScene == 1 )  {
  			
  				hVar = h;
  			
  			};
  		
  			if( mVar != m ) {
  				
  				if( m < 10 ) {
  				
  					m = ( "0" + m );
  		
  				};
  			
  				mVar = m;
  				group.remove(text3T);
  				geometry3 = new THREE.TextGeometry( m, properties );
		 		text3T = new THREE.Mesh( geometry3, materialText );
				text3T.position.set( 11, 5.5, 90 );  	
				group.add(text3T);
				yy3 = 1, yyVar3 = 1;
                annimateText1T();
  
  			};
  			
  			if( hVar != h ) {
  				
  				if( h < 10 ) {
  				
  					h = ( "0" + h );
  				
  				};
  				
  				hVar = h;
  				group.remove(text1T);
  				geometry1 = new THREE.TextGeometry( h, properties );
		 		text1T = new THREE.Mesh( geometry1, materialText );
				text1T.position.set( -125, 7, 100 );  	
				group.add(text1T);
				yy = 1, yyVar = 1;
        	    annimateText1T();
            
  			};


  			initScene = 0;
  			time = ( h + ':' + m );
  			yy2 = 1, yyVar2 = 1;
            
            if( uniqueVar == 1 ) {
                
                annimateText2T();
                
            };

			setTimeout(getTime,1000);
			
		};
        
        if( tutorialVar == 0 ) {
		
		    getTime();
		
        };
        
		var loader = new THREE.FontLoader();

			loader.load( 'Resources/Fonts/TitiusFont.json', function ( font ) {

		 	properties = 
		{
			font: font,
			size: 65,
			height: 30,     
			curveSegments: 30,
			bevelEnabled: false,
			bevelThickness: 3,
			bevelSize: 8,
			bevelSegments: 12
			
		};
                
            properties2 = 
		{
			font: font,
			size: 23,
			height: 12,      
			curveSegments: 30,
			bevelEnabled: false,
			bevelThickness: 3,
			bevelSize: 8,
			bevelSegments: 12
			
		};
		
			if( m < 10 ) {
			
				m = ( "0" + m );
			
			};
			
			if( h < 10 ) {
			
				h = ( "0" + h );
			
			};
		
		var geometry1T = new THREE.TextGeometry( h, properties );
		var geometry2T = new THREE.TextGeometry( ':', properties );
		var geometry3T = new THREE.TextGeometry( m, properties );
                
        var geometry4T = new THREE.TextGeometry( ( 'Hi ' + userName + ', how can I help?' ), properties2 );
   	             
            group = new THREE.Group();
			materialText = new THREE.MeshPhongMaterial( { color: 0x666666, transparent: true, opacity: 1 } );
		
		 	text1T = new THREE.Mesh( geometry1T, materialText );
		 	text2T = new THREE.Mesh( geometry2T, materialText );
		 	text3T = new THREE.Mesh( geometry3T, materialText );
            text4T = new THREE.Mesh( geometry4T, materialText );   
		 	
    		text1T.position.set( -125, 7, 100 );
    		text2T.position.set( -15, 15, 100 );
    		text3T.position.set( 11, 5.5, 90 );  	
            text4T.position.set( -165, -40, 110 );  // -147
		
    		group.add(text1T);
    		group.add(text2T);
    		group.add(text3T);
            group.add(text4T);
    		
			textVar = 2;
                
            if( tutorialVar == 1 ) {
                
                scene.add(evoGroup0);
                
            }else {
                
                scene.add(evoGroup0);
                scene.add(group);
                uniqueVar = 1;
                
            };
                
            if( tutorialVar == 0 ) {
        
                annimateText1T();
		
            };
	
		});
		
		
		var yy = 1, yyVar = 1;
	
		function annimateText1T() {
		
			function timeoutA() {
			
				if( yy > 24 ) {
				
					yyVar = - 1;
				
				};
					
					yy = ( yy + yyVar );
					text1T.position.z = ( 100 + yy );
                    text2T.position.z = ( 100 + yy );
                    text3T.position.z = ( 90 + yy );
                    text4T.position.z = ( 90 + yy );
					evoGroup0.position.z = ( 590 + yy/6 );
                    
					if( yy > 0 ) {
				
						setTimeout(timeoutA,8);
				
					};
			
			};
			
				setTimeout(timeoutA,0);
		
		};
		
		
		
		var yy2 = 1, yyVar2 = 1;
	
		function annimateText2T() {
		
			function timeoutB() {
			
				if( yy2 > 24 ) {
				
					yyVar2 = - 1;
				
				};
					
					yy2 = ( yy2 + yyVar2 );
					text2T.position.z = ( 100 + yy2 );
                    text2T.position.y = ( yy2/70 + 15 );
					
					if( yy2 > 0 ) {
				
						setTimeout(timeoutB,5);
				
					};
			
			};
			
				setTimeout(timeoutB,0);
		
		};
		
		
		
		
		var yy3 = 1, yyVar3 = 1;
	
		function annimateText3T() {
		
			function timeoutC() {
			
				if( yy3 > 24 ) {
				
					yyVar3 = - 1;
				
				};
					
					yy3 = ( yy3 + yyVar3 );
					text3T.position.z = ( 90 + yy3 );
					
					if( yy3 > 0 ) {
				
						setTimeout(timeoutC,5);
				
					};
			
			};
			
				setTimeout(timeoutC,0);
		
		};
        
    };
	
	



    // User AI Chat


        var chatString = '', textTag;

         document.addEventListener( 'keypress', onDocumentKeyPress, false );
         document.addEventListener("keydown", KeyCheck);  

        function KeyCheck(event) {
   
        var KeyID = event.keyCode;
            switch(KeyID)
   
        {
     
            case 8:
            chatString = chatString.substring( 0, chatString.length - 1 ); 
            textTag = 0;
            updateText();
            break; 
            case 46:
            chatString = chatString.substring( 0, chatString.length - 1 );
            textTag = 0;       
            updateText();
            break;
            default:
            break;
                    
        };
    
    };




    // Event Handlers


        	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.addEventListener( 'mousedown', onDocumentMouseDown, false );
					
			
            function onDocumentMouseMove( event ) {
					
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
							
				raycaster.setFromCamera( mouse, camera );
			    intersects = raycaster.intersectObjects( evoGroup0.children );
				
                $('#container').css('cursor','auto');
                
                for( var i = 0; i < intersects.length; i++ ) {	

                   $('#container').css('cursor','pointer');
   					
			 	};
       
            };


            var intersectsE, evoInit = 0;
            
            function onDocumentMouseDown( event ) {
				
                mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
							
				raycaster.setFromCamera( mouse, camera );
				intersectsE = raycaster.intersectObjects( evoGroup0.children );
                
                document.addEventListener( 'mousemove', onDocumentMouseUp, false );
                
            };


              function onDocumentMouseUp( event ) {
                
                for( var i = 0; i < intersectsE.length; i++ ) {	

                    if( recogSwitch == 0 ) {
                        
                        speakVar = 1;
                        recogSwitch = 1;
                        
                        if( autoSpeech == 1 ) {
                            
                            spokenResponse = ( 'Hi ' + userName + ', how can I help?' );
                            respond();
                        
                        }else {
                                
                            initRecognition();
                            
                        };
                    
                    }else {
                        
                        recognition.stop();
                        recognition = null;
                        speakVar = 0;
                        recogSwitch = 0;
                        
                    };
                    
			 	};
                
              
            
                  document.removeEventListener( 'mousemove', onDocumentMouseUp, false );
                  
              };


        


          var userText, userTextMesh;
          var userTextMat = new THREE.MeshPhongMaterial( { color: 0xffffff, transparent: true } );
          var loader3 = new THREE.FontLoader();


			loader3.load( 'Resources/Fonts/TitiusFont.json', function ( font ) {

		 	properties3 = 
                
		{
                
			font: font,
			size: 3,
			height: 1.3,
			curveSegments: 30,
			bevelEnabled: false,
			bevelThickness: 3,
			bevelSize: 8,
			bevelSegments: 12
			
		};

     });

        var textVec = new THREE.Vector3(0,0,1000);

        function updateText() {
          
            if( chatString.length > 1 ) {
                
                scene.remove(userTextMesh);
                
            }else if( textTag == 0 && chatString.length > -1 ) {
                
                scene.remove(userTextMesh);
                
            };
            
            userText = new THREE.TextBufferGeometry( chatString, properties3 );
            userTextMesh = new THREE.Mesh( userText, userTextMat );
            scene.add(userTextMesh);
            userTextMesh.position.set( -48, -22, 602 ); 
            userTextMesh.lookAt(textVec);
            
        };


            








		
		
		
		
			
		// *******************  Render 3D Environment  ************************	
			
		
		var animate = function() {
			
			render();
			requestAnimationFrame( animate );		
				
		};
		
		
		var fadeVar = 0, fvar = 1, delayVar = 0, delayVar2 = 0, delayVal = 0, speakNerf, nerfVar = 0;
		
		var render = function () {
            
            if( fadeVar == 1 ) {
  
                fvar = ( fvar - 0.015 );
                userTextMesh.material.opacity = fvar;
                
                if( fvar < 0.016 ) {
                    
                    fadeVar = 0;
                    fvar = 1;
                    chatString = '';
                    scene.remove(userTextMesh);
                    userTextMesh.material.opacity = 1;
                    
                };
                
            };

			timer = Date.now() * 0.0007;
     		light1T.position.x = Math.cos(timer) * 130;
      		light1T.position.z = Math.sin(timer) * 400;
      		light1T.position.y = Math.sin(timer) * 150;
            
            
            if( speakVar == 0 ) {
                
           //     if( speakNerf < 0.46 ) {
               
                    speakNerf = 0.4;
                    
           //     }else {
                    
            //        speakNerf = ( speakNerf - 0.01 );
                    
             //   };
                
            }else {
                
            //    if( speakNerf > 0.99 ) {
               
                   speakNerf = 1;
               
              //  }else {
                    
               //     speakNerf = ( speakNerf + 0.01 );
                    
               // };
                
            };
      
            timer2 = Date.now() * 0.002 * speakNerf;
            timer3 = Date.now() * 0.0025 * speakNerf;
            timer4 = Date.now() * 0.003 * speakNerf;
            
            if( delayVal < 15 ) {
                
                delayVal = ( delayVal + 1 );
                
            }else if( delayVal < 30 ){
                
                delayVal = ( delayVal + 1 );
                delayVar = 1;  
                
            }else {
                
                delayVar2 = 1;  
                
            };
           
            
            evoMesh1.position.y = Math.sin(timer2) * 2 - 13;
            evoMesh2.position.y = Math.sin(timer3) * -2 - 13;
            evoMesh3.position.y = Math.sin(timer4) * 2 - 13;
            
         //   evoGroup0.rotation.y -= 0.03;
            
            if( speakVar == 1 ) {
                
                dodMesh.rotation.y += 0.025;
                
            };

            evoGroup1.rotation.y += (0.035 * delayVar2) * speakNerf;
            evoGroup3.rotation.y -= 0.03 * speakNerf;
            evoGroup2.rotation.y -= (0.025 * delayVar) * speakNerf;
            
            
            timer2 = Date.now() * 0.0032 * speakNerf;
            dodMesh.position.y = ((Math.sin(timer2) * - 1.5) - 13 );
            torusMesh.position.y = ((Math.sin(timer2) * -0.5) - 18);
            
      		
      		var time = Date.now() * 0.000015;

                for (i = 0; i < particleObj.children.length; i++) {

           		 var object = particleObj.children[i];

                	object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        
       			 };
       	
    		renderer.autoClear = false;
			renderer.clear();
			renderer.render(scene, camera);	

		};
		
			animate();


    };


    function changeText() {
        
        group.remove(text4T);
        geometry4T = new THREE.TextGeometry( spokenResponse, properties2 );
   	    text4T = new THREE.Mesh( geometry4T, materialText );   
        text4T.position.set( -160, -40, 120 );
		group.add(text4T);
      
    };


    
	// Particle System
	

		var particleObj = new THREE.Object3D();
			particleMSS = 3;
		
		function CreateParticleSystem() {
	
            particlesVar = 1;
            
			if( particleMSS < 3 || particleMSS == 4 ) {
	
				particlePos = -1700
				particleSize = 5;
				particleVol = 20000;
				
			}else {
						
				particlePos = -1200
				particleSize = 1;
				particleVol = 7000;
			
			};
			
			materials = []
		
			geometry = new THREE.SphereGeometry(); 

        	particleCount = particleVol; 		// 60fps with 300,000 particles, performance drop > 3000,000	//	20,000
    
   	     for (i = 0; i < particleCount; i++) {

            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 3500 - 1000;
            vertex.y = Math.random() * 3500 - 1000;
            vertex.z = Math.random() * 3500 - 1000;

            geometry.vertices.push(vertex);
            
        };

                
            particleSize = 1;
      
		    parameters = [
            [
                [1, 1, 0.5], ( 1.8 * particleSize )		
            ],
            [
                [0.95, 1, 0.5], ( 1.6 * particleSize )
            ],
            [
                [0.90, 1, 0.5], ( 1.4 * particleSize )
            ],
            [
                [0.85, 1, 0.5], ( 1.2 * particleSize )
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
            particles.position.set( 0, 0, 1000 );		// -1700
            particleObj.add(particles);
			
        };  
       		
            scene.add(particleObj);
		
		};

	
    
