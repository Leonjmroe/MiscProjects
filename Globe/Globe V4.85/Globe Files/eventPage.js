

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



	// ************  Background & Firebase  *************



		var connection = navigator.onLine;
		var background = chrome.extension.getBackgroundPage();
		var THREE = background.THREE;
	//	var $ = background.$;

		var	fcmToken = background.token12;
		//	console.log('FCM Token: ' + fcmToken);



	var serverString1 =

	`cURL

curl -X POST -H "Authorization: key=AAAA7Uk0K_g:APA91bHk8M7-aPCPCui-q0u48AYnaSI-7_scJE2tbcRmg7PqbGM-N8FzWVREVxuZ6odQzmx9228bdr5UUSLFSMi5V-lLL_C7cBLQBtBCi294B1wQhJNeVNHqrY8xfahwOoCpDG-o_zvK" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Globe Notification Test",
    "body": "Message Successfully Sent!",
    "icon": "Globe Resources/firebase-logo.png",
    "click_action": "https://chrome.google.com/webstore/detail/globe-your-3d-homepage/ljbepbcfkmbpoleofmfndmfhldomkdlb?hl=en"
  },
  "to": "`


  	var serverString2 =

  	 	 `"
}' "https://fcm.googleapis.com/fcm/send"`


	var serverRequest = ( serverString1 + fcmToken + serverString2 );
	//	console.log(serverRequest);



	//	console.log(connection);


// *******************************************************   Texture and Image Library  *************************************************************


	/*	var plutoGT = 'Globe Resources/Textures/plutoGT.jpeg';
		var blueGasGT = 'Globe Resources/Textures/blueGasGT.jpeg';
		var saturn1GT = 'Globe Resources/Textures/saturn1GT.jpeg';
		var saturn2GT = 'Globe Resources/Textures/saturn2GT.jpeg';
		var blueCloudsGT = 'Globe Resources/Textures/blueCloudsGT.jpeg';
		var	neptuneGT = 'Globe Resources/Textures/neptuneGT.jpeg';
		var marsGT = 'Globe Resources/Textures/marsGT.jpeg';
		var blueLightsGT = 'Globe Resources/Textures/blueLightsGT.jpeg';
		var milkyWayBGT = 'Globe Resources/Textures/milkyWayBGT.jpeg';
		var blackStarBGT = 'Globe Resources/Textures/blackStarBGT.jpeg';
		var tropicalBGT = 'Globe Resources/Textures/tropicalBGT.jpeg';
		var mountainBGT = 'Globe Resources/Textures/mountainBGT.jpeg';
		var pyramidBGT = 'Globe Resources/Textures/pyramidBGT.jpeg';	*/


		// Flickr Storage System

		var plutoGT = 'https://farm5.staticflickr.com/4411/36714260191_d5e4219c4b_o_d.jpg';
		var blueGasGT = 'https://farm5.staticflickr.com/4408/36018985154_ea6c0ed606_o_d.jpg';
		var saturn1GT = 'https://farm5.staticflickr.com/4362/36044567533_7006e6d74c_o_d.jpg';
		var saturn2GT = 'https://farm5.staticflickr.com/4386/36714260331_878ef4a625_o_d.jpg';
		var blueCloudsGT = 'https://farm5.staticflickr.com/4441/36714250421_904a8738aa_o_d.jpg';
		var	neptuneGT = 'https://farm5.staticflickr.com/4401/36714276161_30e1388cc8_o_d.jpg';
		var marsGT = 'https://farm5.staticflickr.com/4418/36714275611_86f197186f_o_d.jpg';
		var blueLightsGT = 'https://farm5.staticflickr.com/4374/36714254421_74af2aabfa_o_d.jpg';
		var blackStarBGT = 'https://farm5.staticflickr.com/4385/36714251341_6facf29529_o_d.jpg';
	//	var milkyWayBGT = 'https://farm5.staticflickr.com/4517/24015551317_015bd73c5b_o_d.jpg';
	//	var tropicalBGT = 'https://farm5.staticflickr.com/4529/38165032854_54261af364_o_d.jpg';
	//	var mountainBGT = 'https://farm5.staticflickr.com/4586/24015549537_53971ef8d1_o_d.jpg';
	//	var pyramidBGT = 'https://farm5.staticflickr.com/4517/24015550387_2f44669f42_o_d.jpg';


		// Amazon S3 Storage System

		var milkyWayBGTs = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/milkyWaySmall.jpeg';
		var milkyWayBGTm = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/milkyWayMedium.jpeg';
		var milkyWayBGTl = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/milkyWayLarge.jpeg';
		var milkyWayBGTel = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/milkyWayExtraLarge.jpg';

		var milkyWayBGT = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/milkyWayLarge.jpeg';
		var tropicalBGT = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/tropicalPanLarge.jpg';
		var pyramidBGT = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/mountiansLarge.jpg';
		var mountainBGT = 'https://s3.eu-west-2.amazonaws.com/globe-homepage/whiteMountainsLarge.jpg';


		var textureArr = ['https://farm5.staticflickr.com/4411/36714260191_d5e4219c4b_o_d.jpg','https://farm5.staticflickr.com/4408/36018985154_ea6c0ed606_o_d.jpg','https://farm5.staticflickr.com/4362/36044567533_7006e6d74c_o_d.jpg','https://farm5.staticflickr.com/4386/36714260331_878ef4a625_o_d.jpg','https://farm5.staticflickr.com/4441/36714250421_904a8738aa_o_d.jpg','https://farm5.staticflickr.com/4401/36714276161_30e1388cc8_o_d.jpg','https://farm5.staticflickr.com/4418/36714275611_86f197186f_o_d.jpg','https://farm5.staticflickr.com/4374/36714254421_74af2aabfa_o_d.jpg','https://farm5.staticflickr.com/4432/36714274741_dfa6964c88_o_d.jpg','https://farm5.staticflickr.com/4385/36714251341_6facf29529_o_d.jpg','https://farm5.staticflickr.com/4406/36682600622_7c1968a79c_o_d.jpg','https://farm5.staticflickr.com/4359/36457146030_cf374efe90_o_d.jpg','https://farm5.staticflickr.com/4340/36044585153_3b8bb7e63c_o_d.jpg']
		var nameArr = ['plutoGT','blueGasGT','saturn1GT','saturn2GT','blueCloudsGT','neptuneGT','marsGT','blueLightsGT','milkyWayBGT','blackStarBGT','tropicalBGT','mountainBGT','pyramidBGT'];



		function textureMasterLoader() {

			 plutoGT0 = THREE.ImageUtils.loadTexture(plutoGT);
			 blueGasGT0 = THREE.ImageUtils.loadTexture(blueGasGT);
			 saturn1GT0 = THREE.ImageUtils.loadTexture(saturn1GT);
			 saturn2GT0 = THREE.ImageUtils.loadTexture(saturn2GT);
			 blueCloudsGT0 = THREE.ImageUtils.loadTexture(blueCloudsGT);
			 neptuneGT0 = THREE.ImageUtils.loadTexture(neptuneGT);
			 marsGT0 = THREE.ImageUtils.loadTexture(marsGT);
			 blueLightsGT0 = THREE.ImageUtils.loadTexture(blueLightsGT);
			 milkyWayBGT0 = THREE.ImageUtils.loadTexture(milkyWayBGT);
			 blackStarBGT0 = THREE.ImageUtils.loadTexture(blackStarBGT);
			 tropicalBGT0 = THREE.ImageUtils.loadTexture(tropicalBGT);
			 mountainBGT0 = THREE.ImageUtils.loadTexture(mountainBGT);
			 pyramidBGT0 = THREE.ImageUtils.loadTexture(pyramidBGT);

		};




		// Check Connection System


		function connectionError() {

			if( connection == false ) {

				$('#connectionMessage').fadeIn('slow');

				function timeout1() {

					if( navigator.onLine == false ) {

						$('#connectionMessage').html('No Internet Connection.');
						setTimeout(timeout2,400);

					}else {

						$('#connectionMessage').fadeOut('slow');

					};

				};

				function timeout2() {

					if( navigator.onLine == false ) {

						$('#connectionMessage').html('No Internet Connection..');
						setTimeout(timeout3,400);

					}else {

						$('#connectionMessage').fadeOut('slow');

					};

				};

				function timeout3() {

					if( navigator.onLine == false ) {

						$('#connectionMessage').html('No Internet Connection...');
						setTimeout(timeout1,400);

					}else {

						$('#connectionMessage').fadeOut('slow');

					};

				};

				setTimeout(timeout1,400);

			};

		};


		function checkConnection() {

			connectionError();
			setTimeout(checkConnection,10000);

		};


			connectionError();
			checkConnection();



// *** *** *** *** *** *** *** *** ***     Master Loader System      *** *** *** *** *** *** *** *** ***




  		var GTextureMSS, BGTextureMSS, ShadowMSS, OrigArrMSS, KbArrMSS,
  			GColMSS, GGlowColMSS, ShaderMSS, TutorialMSS, GGlowMSS, LightingMSS, BGToggleMSS,
  			Lighting2MSS, PerformanceMSS, HexMSSVar = 0, eventOFF = 0, DisableMSS, matrixMSS, matrixMSS0,
  			feedbackMSS, ToolbarMSS, cameraZ = 530, SpinMSS = 0.07, backgroundMSS, particleMSS, nerfMSS;
			var previewMSS, definitionMSS, definitionMSS0, modeMSS, feedback2MSS = 0, definitionCheckMSS;
  		var GTexture, BGTexture, BGVarMSS = 1, panoramaMaterial, panoramaMesh, CompBG, kbLen,
  			colorL2, GColMSS0, GColMSS00, GTextureMSS0, GTextureMSS00, CompGBG, GVarMSS = 1, GGlowColVar = 1,
  			colGlow, Lighting2MSS1, Lighting2MSS2, Lighting2MSS3, themeColVar, createCloudVar = 0,
  			BGTexture, BGTextureMSS00, TutorialMSS0 = 0;
  		var	GlobeGlow, GlobeGlowSF = 0, GGlowColVar2 = 1, SingleLoad = 1, switch3D = 1,
  			BGVarMSS12 = 0, FeedbackToggle, FeedbackComplete, globeLight = 0, globeLight0, trianglesVar = 0,
  			nodVarOn = 0, nodRunVar = 0, trianglesMSS, dimLoadio = 0, feedBVar, matrixTheme = 0, matrixDefault = 0,
				matrixCol = 0, matrixDen = 0, matrixSpe= 0, mode1Tut = 0, BBBVAR = 0, panPlaneNerf = 0, searchEngineType,
				tutorialLoaderVar = 0;
  			CompBGvar = [];
  			CompGBGvar = [];
  			MSS = [];
  			savedArr = [];
  			TransparentMSS = [];
  			matrixMSSA = [];
  			GC4Arr = [];
				searchEngineArr = [ "google", "bing", "yahoo", "ecosia" ];





		// Master Loading System


  			chrome.storage.sync.get({'MSS0': MSS}, function(data) {

 				MSS = data.MSS0;

 				if( MSS.length < 1 ) {

 					MSS = [  "1,Globe Resources/Textures/plutoGT.jpg",
							 "1,Globe Resources/Textures/milkyWayBGT.jpg",
							 "1",
					 		 "1",
				 	 		 "1",
				 	 		 "530",
					 		 "0xffffff,0xffffff",
		 	 		 		 "1,0x525151",
			 		 		 "0",
		 	 				 "1",
			 				 "0",
			 				 "1" ,
			 				 "5,5,5,5,0",
			 				 "Z",
			 				 "0,261,1,0x11d5c8",
			 				 "0,0",
			 				 "1",
			 				 "0.07",
			 				 "0",
		 	 				 "0",
			 				 "1",
			 				 "1",
			 				 "1.4",
			 				 "0",
			 				 "0",
			 				 "1",
							 "0",
							 "0",
							 "name"
						];

						MasterLoader();

				//		$('#modeBox').fadeIn('slow');
				//		$('#modeSlider').val(modeMSS);
  				//	$('#modeSliderText').html('Mode: ' + modeMSS);
				//		ga('send', 'event', 'Globe Load', 'Mode Selection');

 					}else {

 						MasterLoader();

 				//		ga('send', 'event', 'Globe Load', 'Saved Settings');

 					};

 				});



  			function MasterLoader() {

  				console.log(MSS);

  				GTextureMSS = MSS[0];
					BGTextureMSS = MSS[1];
					ShadowMSS = MSS[2];
					OrigArrMSS = MSS[3];
					KbArrMSS = MSS[4];
					cameraMSS = MSS[5];
					GColMSS = MSS[6];
					GGlowColMSS = MSS[7];
					PerformanceMSS = MSS[8];
					TutorialMSS = MSS[9];
					DisableMSS = MSS[10];			// unused?
					BGToggleMSS = MSS[11];
					Lighting2MSS = MSS[12];
					TransparentMSS = MSS[13];
					matrixMSS = MSS[14];
					feedbackMSS = MSS[15];
					ToolbarMSS = MSS[16];
					SpinMSS = MSS[17];
					backgroundMSS = MSS[18];
					particleMSS = MSS[19];
					nerfMSS = MSS[20];
					previewMSS = MSS[21];
					definitionMSS = MSS[22];
					trianglesMSS = MSS[23];
					modeMSS = MSS[24];
					feedback2MSS = MSS[25];
					definitionCheckMSS = MSS[26];
					searchEngineMSS = MSS[27];
					nameMSS = MSS[28];


				if( feedback2MSS == 1 ) {

					$('#questionmark').css('left','94.6%');

				};

				if( definitionCheckMSS == 1 ) {

						$('#revertDefinitionBox').fadeIn('slow');
						$('#revertDefinitionBox').css('z-index','321');
						$( "#backlight12" ).css('display','inline');
						$( "#backlight12" ).css('z-index','320');
						$('#backlight12').css('opacity','0.1');

				};

				if( TutorialMSS == 0 && definitionCheckMSS == 0 ) {

						$('#definitionBox').fadeIn('fast');
						$('#definitionBox').css('z-index','321');
						$( "#backlight12" ).css('display','inline');
						$( "#backlight12" ).css('z-index','320');
						$('#backlight12').css('opacity','0.1');
						definitionCheckMSS = 1
						MSS.splice(26,1,definitionCheckMSS);

						chrome.storage.sync.set({'MSS0': MSS}, function() {

						});

				};


				GlobeTextureLoader();
				BackgroundTextureLoader();
				lightingLoadingSystem();
				GColMSS0 = GColMSS.substr(0, GColMSS.indexOf(','));
				GColMSS00 = GColMSS.substr(9, GColMSS.length);
				GGlowColMSS0 = GGlowColMSS.substr(0, GGlowColMSS.indexOf(','));
				GGlowColMSS00 = GGlowColMSS.substr(2, GGlowColMSS.length);
				GGlowColMSS00 = Number(GGlowColMSS00);
				matrixMSS0 = matrixMSS.substr(0, matrixMSS.indexOf(','));
				$('#particleCheckbox' + particleMSS ).prop('checked', true);
				GlowColourToggle();
				feedbackSystemFunction();

				tutorialListener();
				toolbarToggleFunction();
				PerformanceListener();

				searchEngineType = searchEngineArr[Number(searchEngineMSS)];


				if( matrixMSS0 == 1 ) {

					matrixVariables();

				};

				console.log(modeMSS);

        if( modeMSS == 1 ) {

          loadMainOnce();
          $('#selectNews').css('display','none');
					$('#buttonBox').css('display','inline');

        }else if( modeMSS == 2 ) {

          loadMainOnce();
          $('#themeSelection').css('display','none');
          $('#customTheme').css('display','none');
          $('#addNewMarker').css('display','none');
          $('#selectNews').css('height','33.3%');
          $('#selectModeMenu').css('height','33.3%');
          $('#moreOptions').css('height','33.3%');
          $('#settingsBox').css('height','230px');
					$('#buttonBox').css('display','inline');

        }else {

					loadMainOnce();

				};

				feedback2Run();

				$('#modeSwitch').val(modeMSS);
  			$('#modeSliderText').html('Mode: ' + modeMSS);

			};





// *****************  Master Storage System   ****************


	var colorL, hex, colDD, OmaterialX, KBmaterialX;
		Mval = [];
		Mval2 = [];
		savedArr = [];
		kbArr = [];
		kb = [];

	var chromeImg;
	var chromeVar2;
	var appMarkerSA = 0;
	var bookUrlCheck;
	var cameraY = 3;

  var panoramaMaterial;
	var feedbackFlashVar = 0;
	var initRen0 = 0;
	var renderPass = 1;
	var texture12, texture13;
	var addMarkerVar;
	var SAimg;
	var SAimg2;



	// Matrix Background


		function matrixVariables() {

			matrixMSSA = matrixMSS.split(',');

			matrixDen = matrixMSSA[1];
			matrixSpe = matrixMSSA[2];
			matrixCol = matrixMSSA[3];

		};





	// MSS Globe Texture Loader


			function GlobeTextureLoader() {

					GTextureMSS0 = GTextureMSS.substr(0, GTextureMSS.indexOf(','));
					GTextureMSS00 = ( ',' + GTextureMSS.substr(2, GTextureMSS.length) );

				if( GTextureMSS0 === "0" ) {									// Texture off

					GVarMSS = 0;


				}else if( GTextureMSS0 === "1" && THREE != null ) {								// Jpeg url

					GTexture = GTextureMSS.substr(2, GTextureMSS.length);
					texture12 = THREE.ImageUtils.loadTexture( GTexture );
					GVarMSS = 1;
					trianglesVar = 0;

				}else {

					if( GTextureMSS0 === "2" ) {								// From Computer

						chrome.storage.local.get({'CompGBG': CompGBGvar}, function(data) {

 				 			GTexture = data.CompGBG;
 				 			texture12 = THREE.ImageUtils.loadTexture( GTexture );
 							GVarMSS = 2;
							trianglesVar = 0;

 						});

 					}else if( GTextureMSS0 === "3" ) {														// Shader Texture

 						GVarMSS = 3;
 						trianglesVar = 0;

 					}else {

						if( GTextureMSS0 === "4" ) {

 							GVarMSS = 4;
 							trianglesVar = 1;

						}else {

							GVarMSS = 5;
							trianglesVar = 0;

						};
 					};
				};
			};





	// MSS Background Texture Loader


			function BackgroundTextureLoader() {

					BGTextureMSS0 = BGTextureMSS.substr(0, BGTextureMSS.indexOf(','));
					BGTextureMSS00 = BGTextureMSS.substr(1, BGTextureMSS.length);

				if( BGTextureMSS0 === "0" ) {										// None

					$('.switchbox3D').prop('checked', false);
					BGToggleMSS = 0;
					BGVarMSS = 0;
					BGVarMSS12 = 0;
					createCloudVar = 1;
					cameraY = -5;
					globeTheme4Var = 0;
					globeTheme4Var3 = 1;


				}else if( BGTextureMSS0 === "1" && THREE != null ) {									// Jpeg url


					if( BGToggleMSS < 1 ) {

						BGTexture = BGTextureMSS.substr(2, BGTextureMSS.length);
						texture13 = THREE.ImageUtils.loadTexture(BGTexture);
						BGVarMSS = 3;
						BGToggleMSS = 0;
						$('.switchbox3D').prop('checked', false);

					}else {

						BGTexture = BGTextureMSS.substr(2, BGTextureMSS.length);
						texture13 = THREE.ImageUtils.loadTexture(BGTexture);
						BGVarMSS = 1;
						BGToggleMSS = 1;

					};

				}else {																// From Computer

					BGVarMSS12 = 0;

					if( BGToggleMSS > 0 ) {

						BGVarMSS = 1;

					};

					chrome.storage.local.get({'CompBG': CompBGvar}, function(data) {

 				 		BGTexture = data.CompBG;
 				 		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
 				 		BGVarMSS = 1;


 				 		if( BGToggleMSS < 1 ) {

								if( panPlaneNerf == 0 ) {

									createPanBackground();

								};

						}else {

							if( panPlaneNerf == 0 ) {

									createPlaneBackground();

							};

						};
					});
				};
			};




		function casheBackground() {

			function fetchLive(callback) {
		doSomething(function(texture13) {
			chrome.storage.local.set({cache: texture13, cacheTime: Date.now()}, function() {
				callback(texture13);
			});
		});
	}

	function fetch(callback) {
		chrome.storage.local.get(['cache', 'cacheTime'], function(items) {
			if (items.cache && items.cacheTime && items.cacheTime) {
				if (items.cacheTime > Date.now() - 3600*1000) {
					return callback(items.cache); // Serialization is auto, so nested objects are no problem
				}
			}

			fetchLive(callback);
		});
	}


};



	// Lighting System


			var one, two, three, four, five, onetofour, fivetoseven, lightDiv1, lightDiv2,
				lightDiv3, lightDiv1;


		function lightingLoadingSystem() {

				if( globeLight > 0 ) {

					Lighting2MSS = globeLight0;

				}else {

					Lighting2MSS = MSS[12];

				};


				Lighting2MSSA = Lighting2MSS.split(',');

				one = Lighting2MSSA[0];
				two = Lighting2MSSA[1];
				three = Lighting2MSSA[2];
				four = Lighting2MSSA[3];
				five = Lighting2MSSA[4];

				onetofour = ( one + ',' + two + ',' + three + ',' + four + ',' + five );
				globeLight = 0;

		};



	// Globe Glow Colour + Toggle Loader


		function GlowColourToggle() {

			if( GGlowColMSS0 === "1" ) {

				GGlowColVar = 1;
				$('#glowToggle').prop('checked', true);


			}else {

				GGlowColVar = 2;
				$('#glowToggle').prop('checked', false);


			};
		};






				// Tutorial System


						function tutorialListener() {

							if( TutorialMSS === "1" ) {

								TutorialMSS0 = 1;

								function timeout() {

									if( modeMSS == 0) {

										textureMasterLoader();
										tutorialInitiate();

									};

								};

								setTimeout( timeout, 1000);

							};
						};


						function tutorialInitiate() {

								console.log(modeMSS);

								$( "#tutorialContainer" ).css("display","inline");
								particleMSS = 1;
								CreateParticleSystem();

								function timeoutRender() {

									render();

								};

								setTimeout( timeoutRender, 100 );

								function timeoutWelcome() {

									welcomeToGlobe();

								};

								setTimeout( timeoutWelcome, 800 );

						};


						function welcomeToGlobe() {

								$('#welcomeToGlobe').fadeIn(1700);

								function timeoutWelcome2() {

									$('#welcomeToGlobe').fadeOut(800);

									function timeoutName() {

											whatsYourName();

									};

									setTimeout( timeoutName, 2000 );

								};

								setTimeout( timeoutWelcome2, 500 );

						};


						function whatsYourName() {

								$('#whatsYourName').fadeIn(1500);

								function timeoutName2() {

										$('#nameInput').fadeIn(1000);
										$('#nameInput').focus();

								};

								setTimeout( timeoutName2, 1000 );

						};


						$('#nameInput').change(function() {

								nameMSS = $('#nameInput').val();
								MSS.splice(28,1,nameMSS);
								$('#nameInput').fadeOut(800);
								$('#whatsYourName').fadeOut(800);

								function timeoutName2() {

										$('#nameGreeting').html('Hello ' + nameMSS);
										$('#nameGreeting').fadeIn(1500);

										function timeoutName3() {

												$('#nameGreeting').fadeOut(800);

												function searchEngineTimeout() {

														$('#selectEngineMessage').fadeIn(1500);

														function searchEngineTimeout2() {

																selectYourSearchEngine();

														};

														setTimeout( searchEngineTimeout2, 1000 );

												};

												setTimeout( searchEngineTimeout, 1000 );

										};

										setTimeout( timeoutName3, 1400 );

								};

								setTimeout( timeoutName2, 1000 );

						});


						function selectYourSearchEngine() {

							$('#searchEngineSelection').css('top','56%');
							$('#searchEngineSelection').css('border','none');
							$('#googleSearchText').css('color','#000000');
							$('#bingSearchText').css('color','#000000');
							$('#yahooSearchText').css('color','#000000');
							$('#ecosiaSearchText').css('color','#000000');
							$('#searchEngineSelection').fadeIn(1500);

						};


						$('.searchEngine').click(function() {

							if( TutorialMSS == 1 ) {

								searchEngineMSS = $(this).attr('data-idx');
								MSS.splice(27,1,searchEngineMSS);
								$('#searchEngineSelection').fadeOut(800);
								$('#selectEngineMessage').fadeOut(800);

								function searchEngineTimeout2() {

									$('#searchEngineSelection').css('top','48%');
									$('#searchEngineSelection').css('border','1px solid #333333');
									$('#searchEngineSelection').css('background-color','#222222');
									$('#googleSearchText').css('color','#ffffff');
									$('#bingSearchText').css('color','#ffffff');
									$('#yahooSearchText').css('color','#ffffff');
									$('#ecosiaSearchText').css('color','#ffffff');
									selectToolbarOption();

								};

								setTimeout( searchEngineTimeout2, 1500 );

								chrome.storage.sync.set({'MSS0': MSS}, function() {

								});

							};

						});


						function selectToolbarOption() {

								$('#toolbarChooseText').fadeIn(1500);

								function toolbarTimeout() {

									$('#buttonBox2Cover').css('display','inline');
									$('#buttonBox2').fadeIn(1500);
									$('#bookmarks').fadeIn(1500);
									$('#extensions').fadeIn(1500);
									$('#recentlyVisited').fadeIn(1500);
									$('#chromeApps').fadeIn(1500);

									function toolbarTimeout2() {

										$('#toolbarChooseYes').fadeIn(1500);
										$('#toolbarChooseNo').fadeIn(1500);

									};

									setTimeout( toolbarTimeout2, 800 );

								};

								setTimeout( toolbarTimeout, 800 );

						};


					$('#toolbarChooseYes').click(function(event) {

					 	chrome.permissions.request({
						 permissions: ['bookmarks', 'history','management']
					 }, function(granted) {
						 if (granted) {

							 ToolbarMSS = 1;
							 MSS.splice(16,1,ToolbarMSS);
							 $('#toolbarChooseYes').fadeOut(800);
							 $('#toolbarChooseNo').fadeOut(800);
							 $('#toolbarChooseText').fadeOut(800);
							 $('#buttonBox2Cover').css('display','inline');

					/*		 function toolbarTimeout3() {

								 $('#selectYourMode').fadeIn(1200);

								 function toolbarTimeout4() {

									$('#selectYourMode').fadeOut(800);
									selectYourMode();

								};

								setTimeout( toolbarTimeout4, 1500 );

							};

							setTimeout( toolbarTimeout3, 1500 );


						 } else {

							 // Do Nothing

						 }		*/
						 
						 function toolbarTimeout4() {
					 	
					 		selectYourTheme();
					 		
					 };
					 
					 setTimeout( toolbarTimeout4, 1500 );	

				 };
						 
					 });

				 });


				 $('#toolbarChooseNo').click(function(event) {

					 ToolbarMSS = 0;
					 MSS.splice(16,1,ToolbarMSS);
					 $('#toolbarChooseYes').fadeOut(800);
					 $('#toolbarChooseNo').fadeOut(800);
					 $('#toolbarChooseText').fadeOut(800);
					 $('#buttonBox2').fadeOut(800);
					 $('#bookmarks').fadeOut(800);
					 $('#extensions').fadeIn(800);
					 $('#recentlyVisited').fadeOut(800);
					 $('#chromeApps').fadeOut(800);

				/*	 function toolbarTimeout3() {

						 $('#selectYourMode').fadeIn(1200);

						 function toolbarTimeout4() {

							$('#selectYourMode').fadeOut(800);
							selectYourMode();

						};

						setTimeout( toolbarTimeout4, 1500 );		
						
						selectYourTheme();

					 };

					 setTimeout( toolbarTimeout3, 1500 );		*/
					 
					 function toolbarTimeout3() {
					 	
					 		selectYourTheme();
					 		
					 };
					 
					 setTimeout( toolbarTimeout3, 1500 );	

				 });

/*

					function selectYourMode() {

						function toolbarTimeout5() {

						 $('#modeSelectionBox').fadeIn(1200);

					 };

					 setTimeout( toolbarTimeout5, 1000 );

					};

*/

					function selectYourTheme() {

						function selectYourThemeTimeout7() {

						 $('#selectThemeMessage').fadeIn(1200);

						 		function selectYourThemeTimeout8() {

						 				$('#selectThemeTutorial').fadeIn(1200);

						 		};

						 		setTimeout( selectYourThemeTimeout8, 1000 );

						 	};

								setTimeout( selectYourThemeTimeout7, 1200 );

					 };



						$('#selectThemeTutorial').click(function() {

								$('#selectThemeMessage').fadeOut(800);
								$('#selectThemeTutorial').fadeOut(800);

								function selectYourThemeTimeout2() {

										$('#globeThemeTBack').css('display','none');
										$('#themeSelectionBox').fadeIn(1500);

								};

								setTimeout( selectYourThemeTimeout2, 1000 );

						});


						function newsModeSetup() {

							function toolbarTimeout6() {

							 $('#newsBox').fadeIn(1200);

						 };

						 setTimeout( toolbarTimeout6, 800 );

						};





	// Performance Listener


		function PerformanceListener() {

			if( PerformanceMSS < 1 && TutorialMSS === "0" ) {

				$('#questionmark').fadeIn('slow');
				questionmarkVar = 1;
				questionmarkFlash1();

			};

			if( PerformanceMSS > 1 && PerformanceMSS < 3) {

				$('#performanceBox2').fadeIn('slow');
				$('#performanceBacklight').fadeIn('slow');
				$('#questionmark').fadeIn('slow');
				questionmarkVar = 1;
				eventOFF = 1;

			};

			if( PerformanceMSS > 2 && PerformanceMSS < 4 ) {

				$('#performanceBox3').fadeIn('slow');
				$('#performanceBacklight').fadeIn('slow');
				$('#questionmark').fadeIn('slow');
				questionmarkVar = 0;

			};

			if( PerformanceMSS > 3 && PerformanceMSS < 5 ) {

					headID2 = document.getElementsByTagName("body")[0];
			  	newScript2 = document.createElement('script');
		   	  newScript2.type = 'text/javascript';
			  	newScript2.src = 'Globe Files/Resource Files/stats.js';
			  	headID2.appendChild(newScript2);

			  	function timeout() {

					$('#performanceBox4').fadeIn('slow');
					$('#performanceBacklight').fadeIn('slow');
		  	  $('#settingsClose').fadeIn('slow');
		  	  $('#questionmark').fadeIn('slow');
		  	  questionmarkVar = 0;
		  	  performanceVar = 1;
					eventOFF = 1;

					stats = new Stats();
		   	  stats.domElement.style.position	= 'absolute';
			  	stats.domElement.style.right	= '48%';
			  	stats.domElement.style.bottom	= '82%';
			  	stats.domElement.style.zIndex   = '200';
			  	document.body.appendChild( stats.domElement );

			 	 	performanceFeedbackListener();

				};

					setTimeout(timeout,500);


			};

		};



	// Feedback System

		var gaFeedback = 0;

		function feedbackSystemFunction() {

			FeedbackToggle = feedbackMSS.substr(0,1);
			FeedbackComplete = feedbackMSS.substr(2,1);

			if( FeedbackToggle > 0 ) {

				if( TutorialMSS == "0" || TutorialMSS == 0 ) {

				$('#questionmark').css('left','94.6%');

				function timeout() {

					feedbackFlashVar = 1;
					$('#feedbackButton').fadeIn('slow');
					gaFeedback = 1;
					feedbackSystemFunctionFlash1();

				};

				setTimeout( timeout, 500);

				};

			};

		};


		function feedbackSystemFunctionFlash1() {

		//	if( feedbackFlashVar > 0 ) {

				function timeout() {

					$('#feedbackButton').fadeOut('slow');
					feedbackSystemFunctionFlash2();

				};

				setTimeout( timeout, 1500);

		//	};
		};


		function feedbackSystemFunctionFlash2() {

			function timeout() {

				if( feedback2MSS == 1 || feedback2MSS == "1" ) {

					$('#feedbackButton').fadeIn('slow');
					feedbackSystemFunctionFlash1();

				};

			};

			setTimeout( timeout, 500);

		};


	function feedback2Run() {

		if( feedback2MSS == 1 || feedback2MSS == "1" ) {

			if( TutorialMSS == 0 || TutorialMSS == "0" ) {

				feedbackSystemFunctionFlash2();

			};

		};

	};


	//  Performance Enhancement Flash Function


		function questionmarkFlash1() {

			if( questionmarkVar > 0 ) {

				function timeout() {

					$('#questionmark').fadeOut('slow');
					questionmarkFlash2();

				};

				setTimeout( timeout, 1500);

			};
		};


		function questionmarkFlash2() {

			function timeout() {

				$('#questionmark').fadeIn('slow');
				questionmarkFlash1();

			};

			setTimeout( timeout, 500);

		};





	// Toolbar Toggle


		function toolbarToggleFunction() {

			if( ToolbarMSS < 1 ) {

				$('#buttonBox2').css('display','none');
				$("#toolbarToggle2").prop("checked", false);

			};

		};






// *** *** *** *** *** *** *** *** *** *** ***    Globe Master Storage System - Loader     *** *** *** *** *** *** *** *** *** *** *** ***








      	var len99;
      	var loaderIdx = 0;

	// Marker Loader Functions


		function markerLoader() {

				addMarkerVar = 0;

   	   		chrome.storage.sync.get({'value': Mval}, function(data){

    	  		array = data.value;
    	  		len99 = array.length;
    	  		index = (len99 - 1);


    	  		if( len99 < 1 && TutorialMSS == 0 ) {

    	  		//	len99 = 100;				// *****
    	  		//	obj = { id:"E6", img:"Markers/google.png", url:"NULL" };			// First marker load error - Quick fix (4hrs)
				//	array.push(obj);
				//	console.log(obj);

						scene.add( GlobeContainer4 );
						scene2.add( GlobeContainer5 );
						scene.add( GlobeContainer );

						if( BGToggleMSS > 0 && BGVarMSS !== 2 && BGVarMSS !== 0  ) {

			 				scene.add(panoramaMesh);

						}else if( BGToggleMSS < 1 && BGVarMSS !== 2 && BGVarMSS !== 0 ) {

			 				scene.add( BGmesh );

						}else {

						};

						if( ShadowMSS == 1 ) {

        					scene2.add(plane);
         					plane.visible = true;
  	 						BGToggleMSS = 2;

    					}else {

       						scene2.add(plane);
       						plane.visible = false;

     					};

     					if( GGlowColMSS0 === "1" ) {

							GlobeGlow.visible = true;
         					scene.add(GlobeGlow);

        				}else {

        					GlobeGlow.visible = false;
         					scene.add(GlobeGlow);

        				};

						renderPass = 1;		// Check this var **

    	  		};


    	  		array.forEach(function(obj) {

    	  			loaderIdx = ( loaderIdx + 1 );

    	  			id = obj.id;
		 			url = obj.url;
					img = obj.img;
					bookUrlCheck = url.substr( 0, 10 );

    	  			image = obj.img;
   					imgTrans = image;
   				var	imgTrans2 = imgTrans.substr(0, imgTrans.indexOf(':'));
 				var transIdx = TransparentMSS.indexOf(id);


 					if( imgTrans2 == 'chrome' || transIdx > -1 ) {

						chromeImg = 2;
						shaderMerge();

					}else {

						if( bookUrlCheck === "Bookmark12" ) {

							urlBM = url.substr( 10, url.length );
							chromeImg = 2;
							bookmarkShader();

						}else {

							texture = THREE.ImageUtils.loadTexture( image );
							texture.repeat.set( 1 / 30, 1 / 30 );
							texture.offset.set( -0.19, -0.17 );
							imgTrans = image;
							chromeImg = 1;
					//		shaderMerge();

						};
					};


					if( len99 > 0 ) {

    	  				savedArr.push(id);

    	  			};

						if(url != 'http:'){

		 					oneFunction12();
		 					index = (index - 1);

		 					if( len99 > 0 ) {

		 						Mval2.push(obj);

		 					};
				 		};
					});


					function timeMarkersSave() {

	  					chrome.storage.sync.set({'value': Mval2}, function() {

  					});
	  			};
	  					setTimeout(timeMarkersSave, 500);

   		  	});
      	};




    		function oneFunction12() {

    			initRen = ( initRen0 + 1 );
    			initRen0 = initRen;

    			if( chromeImg < 2 ) {

					 OmaterialX = new THREE.MeshLambertMaterial( { map: texture, transparent: true, opacity: 0.9 } );

				};

				 	if( chromeImg < 2 ) {

						meshX = new THREE.Mesh( geo, OmaterialX);
						GlobeContainer4.add( meshX );

					}else {

						meshX = new THREE.Mesh( geo, shaderMergeMat);
						GlobeContainer4.add( meshX );

					};

						rx = $('#'+ id).data('rx');
     				ry = $('#'+ id).data('ry');
     				rz = $('#'+ id).data('rz');
     				x = $('#' + id).data('xx');
						y = $('#' + id).data('yy');
						z = $('#' + id).data('zz');

						pos = new THREE.Vector3(x,y,z);
						rot = new THREE.Vector3(rx,ry,rz);

						pos2x = (x/180.5)*179;
     					pos2y = (y/180.5)*179;
     					pos2z = (z/180.5)*179;

     				GC4Arr.push(id);
						meshX.position.set(pos2x,pos2y,pos2z);
				//		meshX.lookAt(GlobeContainer4.position);
						meshX.scale.set(-1,1,-1);
						meshX.lookAt( vectorGP );							//********************
						objSwish = meshX;

 						$('#'+ id).attr('href', url);
 						$('#'+ id).attr('name', img );

						SAname = id;
						SAimg = img;
						meshX.name = id;
						meshX.data = url;
						meshXFunction();

						if( addMarkerVar > 0 ) {

							markerAnimation1();

						};
/*

						if( GC4Arr.length > 0 && delButtonVar == 1 ) {

							deleteLen = ( GlobeContainer4.children.length - 1 );

							GC4Arr.forEach(function() {

								markerDelVar = 0;
								ele = GlobeContainer4.children[deleteLen];
								ele.visible = false;
								deleteLen = ( deleteLen - 1);

							});

						};		*/


 				 		 ID3 = url.substr(0, 13);

						if( img == "Markers/facebook.png" || img == "Markers/gmail.png" || ID3 == "hosted_app***" ) {

							redTagSwitch = 0;
							createNotification();

						};


						if( initRen == len99 && TutorialMSS == 0 ) {

							scene.add( GlobeContainer4 );
							scene2.add( GlobeContainer5 );
							scene.add( GlobeContainer );


							if( BGToggleMSS > 0 && BGVarMSS !== 2 && BGVarMSS !== 0  ) {

								scene.add(panoramaMesh);

							}else if( BGToggleMSS < 1 && BGVarMSS !== 2 && BGVarMSS !== 0 ) {

			 					scene.add( BGmesh );

							}else {

							};

							if( ShadowMSS == 1 ) {

         						scene2.add(plane);
         						plane.visible = true;
  	 							BGToggleMSS = 2;

    						}else {

       							scene2.add(plane);
       							plane.visible = false;

     						};

     						if( GGlowColMSS0 === "1" ) {

								GlobeGlow.visible = true;
         						scene.add(GlobeGlow);

        					}else {

        						GlobeGlow.visible = false;
         						scene.add(GlobeGlow);

        					};

							renderPass = 1;		// Check this var **
							nodRunVar = 1;
							notificationCheck();

					};

				};



      		function kbMarkerLoader() {

      				chrome.storage.sync.get({'kbA': kbArr}, function(data) {

        					kb = data.kbA;

        					kb.forEach(function(kbM) {

        						chrome.storage.sync.get(kbM, function(data) {

									val = data[kbM];
									id = val.id;

									savedArr.push(id);

										url = val.url;
										img = val.img;
										texture = THREE.ImageUtils.loadTexture( img );

										texture.repeat.set( 1 / 30, 1 / 30 );
										texture.offset.set( -0.2, -0.18 );


										if(url != 'http:'){

											imgTrans = img;
									//		shaderMerge();
											oneFunction13();

       			 					};
        					});
						});
       				});
      			};



			function oneFunction13() {

					initRen = ( initRen0 + 1 );
    			initRen0 = initRen;

				 	KBmaterialX = new THREE.MeshLambertMaterial( { map: texture, transparent: true, opacity: 0.9 } );
					meshX = new THREE.Mesh( geo, KBmaterialX);
					GlobeContainer4.add( meshX );

					rx = $('#'+ id).data('rx');
     			ry = $('#'+ id).data('ry');
     			rz = $('#'+ id).data('rz');
     			xx = $('#' + id).data('xx');
					yy = $('#' + id).data('yy');
					zz = $('#' + id).data('zz');

					pos = new THREE.Vector3(xx,yy,zz);
					rot = new THREE.Vector3(rx,ry,rz);

					pos2x = (xx/180.5)*179;
     			pos2y = (yy/180.5)*179;
     			pos2z = (zz/180.5)*179;

					GC4Arr.push(id);
				  meshX.position.set(pos2x,pos2y,pos2z);
					meshX.rotation.updateQuaternion = rot;
					meshX.scale.set(-1,1,-1);
					meshX.lookAt( vectorGP );
					objSwish = meshX;

					$('#'+ id).attr('href', url);
 					$('#'+ id).attr('name', img );

					meshX.name = id;
					meshX.data = url;
					meshXFunction();

					if( addMarkerVar > 0 ) {

						markerAnimation1();

					};

					if( GC4Arr.length > 0 && delButtonVar == 1 ) {

						deleteLen = ( GlobeContainer4.children.length - 1 );

						GC4Arr.forEach(function(id) {

							markerDelVar = 0;
							ele = GlobeContainer4.children[deleteLen];
							ele.visible = false;
							deleteLen = ( deleteLen - 1);

						});

					};


					if( initRen = len99 && TutorialMSS == 0 ) {

						scene.add( GlobeContainer4 );
						scene2.add( GlobeContainer5 );
						scene.add( GlobeContainer );

						if( BGToggleMSS > 0 && BGVarMSS !== 2 && BGVarMSS !== 0  ) {

			 				scene.add(panoramaMesh);

						}else if( BGToggleMSS < 1 && BGVarMSS !== 2 && BGVarMSS !== 0 ) {

			 				scene.add( BGmesh );

						}else {

						};

						if( GGlowColVar < 2 ) {

							scene.add(GlobeGlow);

						};

						if( backgroundMSS > 0 ) {

							scene2.add(plane);

						};

						if( ShadowMSS == 1 ) {

         				scene2.add(plane);
         				plane.visible = true;
  	 						BGToggleMSS = 2;

    					}else {

       					scene2.add(plane);
       					plane.visible = false;

     					};

						renderPass = 1;
						nodRunVar = 1;
						notificationCheck();

					};

			};




	// Transparency Detection and Correction


		function detectTransparency() {

			var canvas1 = document.getElementById("canvas1T");
			var ctx1 = canvas1.getContext("2d");

			var img1 = new Image();
				img1.crossOrigin = 'anonymous'
				img1.onload = start1;
				img1.src = imgTrans;

			function start1(){

  				canvas1.width = img1.width;
  				canvas1.height = img1.height;

  				ctx1.drawImage( img1, 0, 0 );

  			var imgData = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
  			var data = imgData.data;
  			var found1 ='Transparency Absent';

  				for( var i=0; i<data.length; i+=4 ){

    				if( data[i+3] < 255 ){ found1 = 'Transparency Present'; }

  				};


  			if( found1 == 'Transparency Absent' ) {

  				shaderMatVar = 1;
				chromeImg = 1;

				if( transLoadVar > 0 ) {

					id = siteId;
					url = siteUrl;
					img = siteImg;
					addMarkerVar = 1;
					SAname = siteId;
					transLoadVar = 0;
					oneFunction12();

				};

			}else {

  				chromeImg = 2;

  				if( chromeAppVar < 1 ) {

  					MSS.splice( 13, 1, TransparentMSS + ',' + siteId );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 					});

 					TransparentMSS = MSS[13];

 				};

  				shaderMatVar = 2;
  				shaderMerge();

  				if( transLoadVar > 0 ) {

					id = siteId;
					url = siteUrl;
					img = siteImg;
					addMarkerVar = 1;
					SAname = siteId;
					transLoadVar = 0;
					oneFunction12();

				};

			};

		};
	 };




		function shaderMerge() {

			var	whiteBG = ( 'Globe Resources/whiteBG.png' );

				textureX = THREE.ImageUtils.loadTexture( imgTrans );
				textureX.needsUpdate = true; // important

			var	textureX2 = THREE.ImageUtils.loadTexture( whiteBG );
				textureX2.needsUpdate = true; // important


			var uniforms101 = {

				 percent: { type: "f", value: 0.85 },
	 			 tOne: { type: "t", value: textureX2 },
        		 tSec : { type: "t", value: textureX }

			};



	/*			var uniforms101 = THREE.UniformsUtils.merge( [

				 THREE.UniformsLib[ "ambient" ],
   				 THREE.UniformsLib[ "lights" ]

			]);		*/


	 			shaderMergeMat = new THREE.ShaderMaterial({

	 				uniforms: uniforms101,
	  				vertexShader: vertex_shh,
	  				fragmentShader: fragment_shh,
	  				transparent: true,
	  				name: "shader"
	  		//		lights: true									// Apply light effects to shader markers


	  		});

	  	};




		function bookmarkShader() {

			var	whiteBG = ( 'Globe Resources/chromeIcon4.png' );
			var	whiteBG2 = ( 'Globe Resources/blueBG.png' );

				textureX = THREE.ImageUtils.loadTexture( img );
				textureX.wrapS = textureX.wrapS = 1001;
				textureX.needsUpdate = true;

			var	textureX2 = THREE.ImageUtils.loadTexture( whiteBG2 );
				textureX2.needsUpdate = true;


			var uniforms102 = {

				 percent: { type: "f", value: 0.8 },
	 			 tOne: { type: "t", value: textureX2 },
        		 tSec: { type: "t", value: textureX }

			};

	 			shaderMergeMat = new THREE.ShaderMaterial({

	 				uniforms: uniforms102,
	  				vertexShader: vertex_shh,
	  				fragmentShader: fragment_shhBM,
	  				transparent: true,
	  				color: 0xFF0000,
	  				name: "shader"

	  		});


		};






	// **********  Notifications  ***********


		var fbNods = '', gmailNods = '';


		function facebookNotifications() {

			fbNods = background.fbNods;
			num = isNaN(fbNods);

			if( num == true ) {

				fbNods = '';

			};

			dynamicTexture3.clear('#ff0000');
			dynamicTexture3.context.font = '20px Lato, sans-serif';
			dynamicTexture3.context.textAlign = 'left';
			dynamicTexture3.texture.anisotropy = renderer.getMaxAnisotropy();
			dynamicTexture3.drawText(fbNods, undefined, 25, 'white');
			dynamicTexture3.texture.needsUpdate  = true;
			setTimeout(facebookNotifications, 5000);

		};

		function gmailNotifications() {

			gmailNods = background.gmailNods;
			num = isNaN(gmailNods);

			if( num == true ) {

				gmailNods = '';

			};

			dynamicTexture2.clear('#ff0000');
			dynamicTexture2.context.font = '20px Lato, sans-serif';
			dynamicTexture2.context.textAlign = 'left';
			dynamicTexture2.texture.anisotropy = renderer.getMaxAnisotropy();
			dynamicTexture2.drawText(gmailNods, undefined, 25, 'white');
			dynamicTexture2.texture.needsUpdate  = true;
		//	setTimeout(gmailNotifications, 5000);

		};


		function notificationCheck() {

			if( nodVarOn == 1 ) {

				gmailNotifications();

			}else if( nodVarOn == 2 ) {

				facebookNotifications();

			}else {

				if( nodVarOn == 3 ) {

					gmailNotifications();
					facebookNotifications();

				}else {

					// Do Nothing

				};

			};

		};



	// **************  File Loader  *************



			 loadMainOnce = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;

            if( THREE != null ) {

        		headID = document.getElementsByTagName("body")[0];
						newScript = document.createElement('script');
						newScript.type = 'text/javascript';
						newScript.src = 'Globe Files/main.js';
						headID.appendChild(newScript);

						headIDS = document.getElementsByTagName("body")[0];
						newScriptS = document.createElement('script');
						newScriptS.type = 'text/javascript';
						newScriptS.src = 'Globe Files/storage.js';
						headIDS.appendChild(newScriptS);

			}else {

			//		textureMasterLoader();

					chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

 						chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

 				});

		};

 }
    };
})();







			/*


	function timeoutOutlookAuth() {

		var clientId = "f4036502-6d23-4027-b995-9970cf334b31";
		var redirectUrl = "";
		var authServer = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?";
		var responseType = "token";
		var stateParam = Math.random() * new Date().getTime();
			document.cookie = "myEventsState=" + stateParam;

		var authUrl = authServer +
              "response_type=" + encodeURI(responseType) +
              "&client_id=" + encodeURI(clientId) +
              "&scope=" + encodeURI("https://outlook.office.com/Calendars.Read") +
              "&redirect_uri=" + encodeURI(authServer) +
              "&state=" + stateParam;

			console.log(authUrl);


			window.location = authUrl;

	};
		//	setTimeout(timeoutOutlookAuth,6000);			*/







	function timeoutGA() {

		if( modeMSS == 1 ) {

			val1 = GTextureMSS00.substr(1, GTextureMSS00.length);
			idx1 = textureArr.indexOf(val1);
			text1 = nameArr[idx1];

			if( text1 == null ) {

				if( GTextureMSS0 == 4 && trianglesMSS == 1 ) {

					text1 = 'ColouredMatrixGT';

				}else if( GTextureMSS0 == 4 && trianglesMSS == 0 ) {

					text1 = 'BlackMatrixGT';

				}else {

					if( GTextureMSS0 == 3 ) {

						text1 = 'DigitalGT';

					}else {

						text1 = ( 'Undefined: ' + GTextureMSS0 );

					};

				};

			};

			var text21, text22;
				val2 = BGTextureMSS00.substr(1, BGTextureMSS00.length);
				idx2 = textureArr.indexOf(val2);
				text2 = nameArr[idx2];

			if( text2 == null ) {

				if( backgroundMSS == 0 ) {

					text20 = 'White Background & ';

				}else {

					text20 = 'Black Background & ';

				};

				if( particleMSS == 0 ) {

					text21 = 'No Particles';

				}else if( particleMSS == 1 ){

					text21 = 'Coloured Particles';

				}else {

					if( particleMSS == 3 ) {

						text21 = 'White Particles';

					}else if( particleMSS == 2 ){

						text21 = 'Blue Particles';

					}else {

						text21 = 'Black Particles';

					};

				};

					text2 = ( text20 + text21 );

			};


			if( text1 == null ) {

				text1 = MSS;

			};

			themeVal = ( text1 + ' + ' + text2 );

			//	console.log(themeVal);

				ga( 'send', 'event', 'User Theme 3.0', themeVal, ('ID: ' + daysLicenced) );
				ga( 'send', 'event', 'User Globe Type', text1, );
				ga( 'send', 'event', 'User Background Type', text2 );
				ga( 'send', 'event', 'User Data 3.0', ('Orig: ' + array.length + '; kb: ' +  kb.length + '; Def: ' + definitionMSS + '; Tool: ' +  ToolbarMSS + '; Zoom: ' + cameraMSS + '; Perf: ' + PerformanceMSS + ';'), ('ID: ' + daysLicenced));

		};

	};


			$('#modeSwitch').change(function() {

				modeMSS = this.value;
				$('#modeSliderText').html('Mode: ' + modeMSS);

				MSS.splice( 24, 1, modeMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

			})


			$('#modeSelector').click(function() {

  				MSS.splice( 9, 1, "1" );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

  				function timeout() {

						reloadGlobe();

  			};

  				setTimeout(timeout,1000);

		});



			function reloadGlobe() {

				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

					chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

				});

			};




			/*

		// Uninstall Listener


			chrome.management.onUninstalled.addListener(function('ljbepbcfkmbpoleofmfndmfhldomkdlb') {


				window.alert('Uninstall!');
				window.location.href('www.youtube.com');


			});


*/
