

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




// Layout Variables

		var markerDelVarLen;
	  var markerDelVar0 = 0;
		var markerDelVar = 0;
		var tranglesCreatedVar = 0;
		var matrixBoxOpen = 0;
		var clearGlobeVar = 0;
		var drumbeat = 1;
		var themeData;
		var previewData;
		var buttonInduce = 0;
		var loadPreviewImagesVar = 1;
		var markerB3Var = 0;
		var chromeAppVar = 0;
		var markerB1Var = 0;
		var screenVar = 0;
 		var arrowVar = 0;
		var buzz5 = 0;				// Check if in use **
		var tutorialOn = 0;
		var greenTickVar00 = 0;
		var greenTickVar0 = 0;
		var greenTickVar = 0;
		var performanceVar = 0;
		var stats;
		var selector0 = 0;
		var whiteBackgroundVar = 0;
		var tutorialOn = 0;
		var BGVarMSSPlus = 0;
		var welcomeVar = 0;
		var feedBVar;
		var thank = 0;
		var bookmarkVar101 = 0;
		var saveDataVar;
		var deleteButtonAAVar = 0;
		var deleteButtonBBVar = 0;
		var lightsTut = 1;
		var matrixTutorial = 0;
		var backlightTintVar = 1;
		var mButton1 = 1;
		var mButton2 = 1;
		var mButton3 = 1;
 		var calledCApps = 1;
		var grape = 1;
		var drumbeat = 1;
		var editID0;
		var	zVal = -3;
		var zzVal = -3;
		var GC2nam;
		var id123;
		var objE;
		var IDkb;
		var globeTheme4Var = 4;
		var globeTheme4Var2 = 0;
		var globeTheme4Var3 = 0;
		var numbTheme;
			editArr = [];



	// Marker Button 1 Toggle


				$( "#addNewMarker" ).click(function() {

						addNewMarker();

				});


			function addNewMarker() {

						$('#backlight5').css('display', 'none');
						delButtonVar = 0;

					if( buttonInduce < 1 ) {

						markerButton1Induce1();
						buttonInduce = 1;

					}else {

						 buttonInduce = 0;
						 markerButton1Induce2();

					};

					if( markerDelVar == 0 ) {

						deleteLen = ( GlobeContainer4.children.length - 1 );

						GC4Arr.forEach(function() {

							markerDelVar = 1;
							ele = GlobeContainer4.children[deleteLen];
							ele.visible = true;
							deleteLen = ( deleteLen - 1);

						});

					} else {

						deleteLen = ( GlobeContainer4.children.length - 1 );

						GC4Arr.forEach(function() {

							markerDelVar = 0;
							ele = GlobeContainer4.children[deleteLen];
							ele.visible = false;
							deleteLen = ( deleteLen - 1 );

						});

					};

			};



			if( addNewMarkerVar == 1 ) {

				 	eventOFF = 1;
					addNewMarker();

			};


				function checkPermissions() {
					chrome.permissions.contains({
			 		permissions: ['history','bookmarks']
		 	}, function(result) {
			 	if (result) {

					// Permissions Already Granted

			 } else {

				 chrome.permissions.request({
					permissions: ['bookmarks', 'history']
				}, function(granted) {
					if (granted) {

						// Permissions Granted

					} else {

						// Permissions Denied

					}
				});
			 }
		 });
	 };


					function markerButton1Induce1() {

						scene.add( GlobeContainer2 );
						GlobeContainer2.visible = true;
						GlobeContainer2.position.set(0, 0, -40);

						GC2len = GlobeContainer2.children.length;
						GC2chi = GlobeContainer2.children;

						eventOFF2 = 1;
						markerB1Var = 1;

						savedArr.forEach(function(id) {

							eleidx = $( "#" + id ).attr('data-index');
							eleM = GlobeContainer2.children[eleidx];
							eleM.visible = false;

						});

						button1Function();
						$('#settingsBox').fadeOut('slow');
						$('#markerButton3').css('color','#555555');
						markerB3Var = 0;

					};



					function button1Function() {

						GlobeContainer2.visible = true;
						GlobeContainer2.position.set(0, 0, -40);

							myLoopM(0);
							zVal = -3;

			 			function myLoopM(i) {

			 				if( zVal < 6 ) {

			  					function timeMarkers100() {

									zVal2 = ( zVal + 1 );
									zVal = zVal2;
									zVal3 = ( zVal2 - 2 );
									GlobeContainer2.position.set(0, 0, zVal3);
									GlobeContainer4.position.set(0, 0, zVal2);
									myLoopM(i + 1);


							};
								setTimeout(timeMarkers100, 15);

						}else {

								function timeMarkers122() {

									antiZPos = ( 10 - zVal );

										if( antiZPos > -4 ) {

											antiZPos22 = ( antiZPos - 1 );
											GlobeContainer2.position.set(0, 0, antiZPos22);
											GlobeContainer4.position.set(0, 0, antiZPos);
											zVal = (zVal + 1);
  											myLoopM(i + 1);

										}else {

							//				geometryS.renderOrder = 1;					// Fix transparency flash bug **************************

										};
									};

									setTimeout(timeMarkers122, 15);
						};
			 		 };

						objVar = 12;
						objVar2 = 10;
						mButton1 = 2;
						buttonInduce = 1;
						button9();
						grape = 2;
						drumbeat = 2;

					};




					function markerButton1Induce2() {

						if( grape != 1 ) {

							button2Function();
							eventOFF2 = 0;
							markerB1Var = 2;

    					};
					};


					function button2Function() {

						$('#settingsBox').fadeOut('slow');
						$('#markerButton3').css('color','#555555');
						markerB3Var = 0;

						zzVal = -3;
						myLoopM(0);

			 			function myLoopM(i) {

			 				if( zzVal < 6 ) {

			  					function timeMarkers() {

									zzVal2 = ( zzVal + 1 );
									zzVal = zzVal2;
									zzVal3 = ( zzVal2 - 2 );
									GlobeContainer2.position.set(0, 0, zzVal3);
									GlobeContainer4.position.set(0, 0, zzVal2);
									myLoopM(i + 1);

							};

								setTimeout(timeMarkers, 15);

						}else {

							function timeMarkersEE() {

									antiZPos2 = ( 10 - zzVal );

										if( antiZPos2 > -4 ) {

											antiZPos3 = ( antiZPos2 - 3 );
											GlobeContainer2.position.set(0, 0, antiZPos3);
											GlobeContainer4.position.set(0, 0, antiZPos2);
											zzVal = (zzVal + 1);
  											myLoopM(i + 1);

												}else {

													zVal = -3;
													GlobeContainer2.position.set(0, 0, -60);
													GlobeContainer2.visible = false;
													GC2len = GlobeContainer2.children.length;
													GC2chi = GlobeContainer2.children;

											};
										};

											setTimeout(timeMarkersEE, 15);
									};
								};


								objVar = 13;
								objVar2 = 11;
								mButton1 = 1;
								buttonInduce = 0;
								button8();
								drumbeat = 1;

						};





		// Marker Button 2 Toggle


					button3();

					function button3() {

						$( "#markerButton2" ).one('click',function() {

							document.addEventListener( 'mouseup', onDocumentMouseUpX, false );
							$markerButton2.css("border","solid 3px #999999");
							$markerButton2.css("color", "#999999");
							mButton2 = 2;
							$('#settingsBox').fadeOut('fast');
							$('#backlight3').css('display', 'none');
							document.removeEventListener( 'mousedown', onDocumentMouseDownM2, false );
							contextCursor = 2;
							button4();

					});
					};


					function button4() {

						$( "#markerButton2" ).one('click',function() {

							document.removeEventListener( 'mouseup', onDocumentMouseUpX, false );
							$markerButton2.css("border","solid 2px #555555");
							$markerButton2.css("color", "#555555");
							mButton2 = 1;
							$('#settingsBox').fadeOut('fast');
							$('#backlight3').css('display', 'none');
							contextCursor = 1;
							button3();

					});
					};



					function button8() {

						$( "#addNewMarker" ).one('click',function() {

							$markerButton.css("font-weight","300");
							mButton2 = 1;

						});
					};


					function button9() {

						$( "#markerButton2" ).one('click',function() {

   						$markerButton2.css("border","solid 3px #999999");
							$markerButton2.css("color", "#999999");
							mButton2 = 2;


					});
				};




	// Settings Box Functions


		var idMarker;

			$( "#markerButton3" ).click(function() {

				if( GC4Arr.length != markerDelVarLen ) {

					markerDelVar0 = 2;

				};

				if( markerDelVar == 0  && markerDelVar0 == 0 ) {

					GC4Arr.forEach(function(id) {

						idMarker = id;
						createDeleteButton();

					});

						markerDelVar0 = 1;
						markerDelVarLen = GC4Arr.length;

				}else if( markerDelVar0 == 2 ){

					if( GlobeContainer4.children.length == 1 ) {

						deleteLen = ( GlobeContainer4.children.length - 1 );

					} else {

						deleteLen = ( GlobeContainer4.children.length - 2 );

					};

					for( var i = 0; i < GlobeContainer4.children.length; i++ ) {

						userData = GlobeContainer4.children[ deleteLen - i ].userData;

						if( userData == "delButton" ) {

							ele = GlobeContainer4.children[deleteLen - i];
							GlobeContainer4.remove(ele);

						};

					};

					GC4Arr.forEach(function(id) {

						idMarker = id;
						createDeleteButton();

					});

					markerDelVar0 = 1;
					markerDelVarLen = GC4Arr.length;

				};


				if( markerB3Var < 1 ) {

					$('#settingsBox').fadeIn('fast');
					$( "#markerButton3" ).css("color", "#666666");
					$('#backlight5').css('display', 'inline');
					mButton3 = 2;
					markerB3Var = 1;

				}else {

					$('#settingsBox').fadeOut('fast');
					$('#backlight5').css('display', 'none');
					$( "#markerButton3" ).css("color", "#555555");
					mButton3 = 1;
					markerB3Var = 0;

				};

			});






			$( "#backlight5" ).click(function() {

				$('#backlight5').css('display', 'none');
				$('#settingsBox').fadeOut('fast');
				$( "#markerButton3" ).css("color", "#555555");
				mButton3 = 1;
				markerB3Var = 0;

			});



			$("ul.tabs li").click(function() {

					$("ul.tabs li").removeClass("active");
					$(this).addClass("active");
					$(".tab_content").hide();
				 	activeTab = $(this).attr("rel");
					$("#"+activeTab).fadeIn();
					$container.css('cursor', 'default');

					if( activeTab == "tab1" && theme3DContVar0 == 0 ) {

							create3DThemeContainer();

					};

					$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")');


				});




	$( "#themeSelection" ).click(function() {

		$('#tab_container').fadeIn();
		$('#tab_container').css('opacity','1');
		$('#switch101').css('display','none');
		$('.slider').css('display','inline');
		$('#settingsBox').fadeOut('fast');
		$('#backlight3').css('z-index', '122');
		$('#backlight3').css('opacity', '0.2');
		$("#tab11").addClass("active");
		$("#tab1").fadeIn();
		$("#tab22").removeClass("active");
		$("#tab33").removeClass("active");
		$("#tab44").removeClass("active");
		$('#backlight3').css('display', 'inline');
		$('#backlight5').css('display', 'none');
		$('#settingsClose').css('display', 'inline');
		$('#selectThemeImg').css('background-image', 'url("' + window[ 'globeThemeG' + previewMSS ] + '")');
		mButton3 = 1;
		eventOFF = 1;
		textureMasterLoader();
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")');
		ga('send', 'event', 'Themes', 'Button Select', ('ID: ' + daysLicenced));

		if( theme3DContVar0 == 0 ) {

				create3DThemeContainer();

		};

	});


	$( "#customTheme" ).click(function() {

		$('#tab_container').fadeIn();
		$('#tab_container').css('opacity','1');
		$('.slider').css('display','inline');
		$('#switch101').css('display','none');
		$('#settingsBox').css('display', 'none');
		$('#backlight3').css('display', '3');
		$('#backlight3').css('opacity', '0.2');
		$('#customTheme').addClass("active");
		$("#tab22").addClass("active");
		$("#tab2").fadeIn();
		$("#tab11").removeClass("active");
		$("#tab33").removeClass("active");
		$("#tab44").removeClass("active");
		$('#backlight3').css('display', 'inline');
		$('#backlight5').css('display', 'none');
		$('#settingsClose').css('display', 'inline');
		$('#selectThemeImg').css('background-image', 'url("' + window[ 'globeThemeG' + previewMSS ] + '")');
		mButton3 = 1;
		eventOFF = 1;
		textureMasterLoader();
		ga('send', 'event', 'Custom Theme', 'Button Select', ('ID: ' + daysLicenced));

	});



	$( "#moreOptions" ).click(function() {

		$('#tab_container').fadeIn();
		$('#selectThemeImg').css('background-image',previewData);
		$('#tab_container').css('opacity','1');
		$('.slider').css('display','inline');
		$('#switch101').css('display','none');
		$('#settingsBox').fadeOut('fast');
		$('#backlight3').css('display', '3');
		$('#backlight3').css('opacity', '0.2');
		$('#moreOptions').addClass("active");
		$("#tab44").addClass("active");
		$("#tab4").fadeIn();
		$("#tab11").removeClass("active");
		$("#tab22").removeClass("active");
		$("#tab33").removeClass("active");
		$('#backlight3').css('display', 'inline');
		$('#backlight5').css('display', 'none');
		$('#settingsClose').css('display', 'inline');
		$('#selectThemeImg').css('background-image', 'url("' + window[ 'globeThemeG' + previewMSS ] + '")');
		mButton3 = 1;
		eventOFF = 1;
		textureMasterLoader();
		ga('send', 'event', 'Options', 'Button Select', ('ID: ' + daysLicenced));

	});


	$( "#selectThemeO" ).click(function() {

		$("ul.tabs li").removeClass("active");
		$("#tab44").addClass("active");
		$(".tab_content").hide();
	 	activeTab = $("#tab44").attr("rel");
		$("#"+activeTab).fadeIn();
		$container.css('cursor', 'default');

	});


	function loadPreviewImages() {

		loadPreviewImagesVar = 0;
		$('#tab_container').css('opacity','0');
		$('#themeSelectionBox').css('opacity','0');
		$('#themeSelectionBox2').css('opacity','0');
		$('#themeSelectionBox3').css('opacity','0');
		$('#tab_container').css('display','inline');
		$('#themeSelectionBox').css('display','inline');
		$('#themeSelectionBox2').css('display','inline');
		$('#themeSelectionBox3').css('display','inline');

		function timeout() {

			$('#tab_container').css('display','none');
			$('#themeSelectionBox').css('display','none');
			$('#themeSelectionBox2').css('display','none');
			$('#themeSelectionBox3').css('display','none');
			$('#themeSelectionBox').css('opacity','1');
			$('#themeSelectionBox2').css('opacity','1');
			$('#themeSelectionBox3').css('opacity','1');
			$('#tab_container').css('opacity','1');


		};

			setTimeout(timeout,100);

	};




	/*	function previewImageLoad() {

			url = window[ 'globeThemeG' + previewMSS ];

			getDataUri(url, function(dataUri) {

				previewData = dataUri;

			});

		};	*/












// ************************       New Theme Selection System     ******************************


	// Theme Selector

		$('#selectTheme').click(function() {

			$("#tab_container").fadeOut('slow');
      	 	$("#backlight3").css('display','inline');
      	 	$("#themeSelectionBox").fadeIn('slow');

      	 	if( TutorialMSS < 1 ) {

      	 		$("#settingsClose").fadeIn('slow');

      	 	};

		});





	//  Theme Save System


		function saveThemeSystem() {

			if( TutorialMSS == 1 ) {

				MSS.splice( 9, 1, "0" );
				tutorialLoaderVar = 1;

			};

			MSS.splice( 0, 1, GTextureMSS0 + GTextureMSS00 );
			MSS.splice( 1, 1, BGTextureMSS0 + BGTextureMSS00 );
			MSS.splice( 2, 1, ShadowMSS );
			MSS.splice( 5, 1, cameraMSS );
			MSS.splice( 6, 1, GColMSS0 + ',' + GColMSS00 );
 			MSS.splice( 7, 1, GGlowColMSS0 + ',' + GGlowColMSS00 );
			MSS.splice( 11, 1, BGToggleMSS );
			MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );
 			MSS.splice( 14, 1, matrixMSS0 + ',' + matrixDen + ',' + matrixSpe  + ',' + matrixCol );
 			MSS.splice( 18, 1, backgroundMSS );
 			MSS.splice( 19, 1, particleMSS );
 			MSS.splice( 20, 1, nerfMSS );
			MSS.splice( 21, 1, previewMSS );
			MSS.splice( 22, 1, definitionMSS );
			MSS.splice( 23, 1, trianglesMSS );

 			chrome.storage.sync.set({'MSS0': MSS}, function() {

				if( tutorialLoaderVar == 1 ) {

						chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

							chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

						});

				};

 		});

 	};



	// Theme Selection System


		$( ".themeSelect" ).click(function() {

			id = $(this)[0].id;
			numbTheme = id.substr(10, 1, id.length);

			if( numbTheme < 12 ) {

				window[ id + 'F' ]();

			};

		});


		$( ".themeSelect" ).click(function() {

			$( "#themeSelectionBox" ).fadeOut('Slow');
			$( "#themeConfirmBox" ).fadeIn('Slow');

			updateCreate3DThemeContainer();

			if( GTextureMSS0 == 4 ) {

				contObj2.remove(trianglesMesh);
				trianglesGlobe();
				GlobeContainer5.add(trianglesMesh);
				tranglesCreatedVar = 1;

			};

		});



			$('#themeSelectYes').click(function() {

				$( "#themeConfirmBox" ).fadeOut('Slow');
				$( "#themeSelectionBox" ).fadeIn('Slow');

				if( GTextureMSS0 == 4 ) {

					updateCreate3DThemeContainer();
					tranglesCreatedVar = 0;

				};

			});

			$('#themeSelectNo').click(function() {

				$( "#themeConfirmBox" ).fadeOut('Slow');
				settingsClose();
				saveThemeSystem();
				tranglesCreatedVar = 0;

			});



	// Globe Structure Selector


		function globeStructure() {

			if( GTextureMSS0 == 3 ) {

				if( trianglesVar > 0 ) {

					GlobeContainer5.add(sphere);
					trianglesMesh.visible = false;

				};

				if( clearGlobeVar == 1 ) {

					GlobeContainer5.add(sphere);
					sphere.visible = true;

				};

				matrixMSS0 = 1;
				matrixDen = 180;
				matrixSpe = 4;
				matrixCol = 0x3e3e3e;
				matrixMatLoader();
				sphere.material = matrixMaterial;
				sphere.material.needsUpdate = true;
				trianglesVar = 0;

			}else if( GTextureMSS0 == 4 ) {

				sphere.visible = false;

				if( trianglesVar < 1 ) {

					trianglesGlobe();

				}else {

					if( trianglesMSS == 1 ) {

						trianglesGeom.addAttribute( 'color', new THREE.BufferAttribute( colours, 3 ).onUpload( disposeArray ) );

					}else {

						trianglesGeom.removeAttribute( 'color', new THREE.BufferAttribute( colours, 3 ).onUpload( disposeArray ) );

					};

				};

			}else {

				if( GTextureMSS0 == 5 ) {

						sphere.visible = false;

				}else {

						sphere.visible = true;

				};


				if( trianglesVar > 0 ) {

					GlobeContainer5.add(sphere);
					trianglesMesh.visible = false;

				};

				if( GTextureMSS00 == ',null' ) {

					sphere.material.map = null;

				}else {

					sphere.material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture(GTexture), overdraw: true } );

				};

				sphere.material.needsUpdate = true;
				trianglesVar = 0;

			};

		};



	// Custom Theme System


	$('#selectThemeGT').click(function() {

		$('#tab1tutorial').fadeOut('slow');
		$('#tab_container').fadeOut('slow');
	  $('#themeSelectionBox2').fadeIn('slow');

	});

	$('#selectTheme').click(function() {

		$('#tab1tutorial').fadeOut('slow');

	});

	$('#selectThemeBGT').click(function() {

		$('#tab1tutorial').fadeOut('slow');
		$('#tab_container').fadeOut('slow');
	  $('#themeSelectionBox3').fadeIn('slow');

	});



	var themeSelectBG, themeSelectG;


	$('.themeSelectG').click(function() {

		if( TutorialMSS > 0 ) {

			$('#themeSelectionBox2').fadeOut('slow');
			$( "#tab1tutorial" ).fadeIn('slow');

			if( greenTickVar0 < 1 ) {

				$('#greenTick1').fadeIn('slow');
				greenTickVar = ( greenTickVar + 1 );
				greenTickVar0 = 1;

			};

			if( greenTickVar > 1 ) {

				$('#greenTickText').fadeOut('slow');

			};
		};

		id = $(this).attr('id');
		numb = id.substr(11, id.length);
		text = $(this).attr('name');
		globeLight0 = $(this).data('lights');
		previewMSS = $(this).data('idx');
		globeLight = 1;
		lightingLoadingSystem();
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );
		MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );
		MSS.splice( 21, 1, previewMSS );
 		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")');
 		themeSelectG = id;
 		themeData = (themeSelectG + ', ' + themeSelectBG);

		if( numb < 13 ) {

			if( TutorialMSS < 1 ) {

				$('#themeSelectionBox2').fadeOut('slow');
				$('#tab_container').fadeIn('slow')
				$("ul.tabs li").removeClass("active");
				$("#tab11").addClass("active");
				$(".tab_content").hide();
	 			activeTab = $("#tab11").attr("rel");
				$("#"+activeTab).fadeIn();
				$container.css('cursor', 'default');

			};

		};


		if( id == "globeThemeG2" ) {

			trianglesCol = 1;
			trianglesMSS = 1;


		}else if( id == "globeThemeG3" ){

			trianglesCol = 0;
			trianglesMSS = 0;

		}else {

			if( id == "globeThemeG4" && TutorialMSS > 0 ){

				// Digital Rain Error on Tutorial

			};

		};

		MSS.splice( 23, 1, trianglesMSS );
		GTexture = window[text];
		GTextureMSS0 = $(this).data('stats');

		if( GTexture == null ) {

			GTexture = '';

		};

		if(id == "globeThemeG1" ) {

			sphere.visible = false;
			GTextureMSS0 = 5;
			clearGlobeVar = 1;

		};

		GTextureMSS00 = ( ',' + GTexture );
		GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );
		globeStructure();
		updateCreate3DThemeContainer();

	});




	$('.themeSelectBG').click(function() {

		id = $(this).attr('id');
		numb = id.substr(12, id.length);
		text = $(this).attr('name');
		themeSelectBG = id;
		themeData = (themeSelectG + ', ' + themeSelectBG);

		if( TutorialMSS > 0 && numb < 10 ) {

			$('#themeSelectionBox3').fadeOut('slow');
			$( "#tab1tutorial" ).fadeIn('slow');

			if( greenTickVar00 < 1 ) {

				$('#greenTick2').fadeIn('slow');
				greenTickVar = ( greenTickVar + 1 );
				greenTickVar00 = 1;

			};

			if( greenTickVar > 1 ) {

				$('#greenTickText').fadeOut('slow');

			};
		};

		if( numb < 10 ) {

			if( TutorialMSS < 1 ) {

				$('#themeSelectionBox3').fadeOut('slow');
				$('#tab_container').fadeIn('slow')
				$("ul.tabs li").removeClass("active");
				$("#tab11").addClass("active");
				$(".tab_content").hide();
	 			activeTab = $("#tab11").attr("rel");
				$("#"+activeTab).fadeIn();
				$container.css('cursor', 'default');

			};

		};

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( numb < 6 ) {

			BGTexture = window[text];
			texture13 = THREE.ImageUtils.loadTexture(BGTexture);
			BGTextureMSS0 = 1;
			BGTextureMSS00 = ( ',' + BGTexture );
			ShadowMSS = 0;
			plane.visible = false;
			BGToggleMSS = 1;
			createPanBackground();

			if( particleMSS > 0 ) {

				scene3.remove(particles);

			};


			particleMSS = 0;


			}else if( numb < 8 ) {

				if( BGVarMSS < 2 )  {

					scene.remove(panoramaMesh);

				}else {

					scene.remove(BGmesh);

				};

				BGTextureMSS0 = 0;
				BGTextureMSS00 = ( ',' );

				if( particleMSS < 1 ) {

					particleMSS = 1;
					CreateParticleSystem();
					$('#particleCheckbox1').prop('checked', true);

				}else {

					particleMSS = 1;
					scene3.remove(particles);
					CreateParticleSystem();

					};

					if( numb < 7 ) {

						renderer.setClearColor(0xffffff, 1);
						ShadowMSS = 1;
						plane.visible = true;

					}else {

						renderer.setClearColor(0x000000, 1);
						ShadowMSS = 0;
						plane.visible = false;

					};

						particleMSS = 1;

			}else {

				if( particleMSS > 0 && TutorialMSS < 1 ) {

					particleMSS = 0;
					scene3.remove(particles);

				};

				if( numb < 9 && TutorialMSS < 1 ) {

					renderer.setClearColor(0xffffff, 1);
					ShadowMSS = 1;
					backgroundMSS = 0;
					GGlowColMSS0 = 0;
					plane.visible = true;
					BGTextureMSS0 = 0;
					BGTextureMSS00 = ( ',' );

				}else if( numb < 10 && TutorialMSS < 1 ) {

					renderer.setClearColor(0x000000, 1);
					ShadowMSS = 0;
					backgroundMSS = 1;
					GGlowColMSS0 = 1;
					plane.visible = false;
					BGTextureMSS0 = 0;
					BGTextureMSS00 = ( ',' );

				}else {

					// Do Nothing

				};

			};

		if( numb == 2 || numb == 1 ) {

			if( particleMSS < 1 ) {

				particleMSS = 3;
				CreateParticleSystem();

			}else {

				particleMSS = 3;
				scene3.remove(particles);
				CreateParticleSystem();

			};

		};

		if( numb == 6 ) {

			renderer.setClearColor(0x000000, 1);
			ShadowMSS = 0;
			plane.visible = false;
			backgroundMSS = 1;

		};

		if( numb == 7 ) {

			renderer.setClearColor(0xffffff, 1);
			ShadowMSS = 1;
			plane.visible = true;
			backgroundMSS = 0;
			GGlowColMSS0 = 0;

		};

	});


	$('#globeThemeGBack').click(function() {

		if( TutorialMSS > 0 ) {

			$('#themeSelectionBox2').fadeOut('slow');
			$( "#tab1tutorial" ).fadeIn('slow');

		}else {

			$('#themeSelectionBox2').fadeOut('slow');
			$('#tab_container').fadeIn('slow')
			$("ul.tabs li").removeClass("active");
			$("#tab11").addClass("active");
			$(".tab_content").hide();
		 	activeTab = $("#tab11").attr("rel");
			$("#"+activeTab).fadeIn();
			$container.css('cursor', 'default');

		};

	});

	$('#globeThemeBGBack').click(function() {

		if( TutorialMSS > 0 ) {

			$('#themeSelectionBox3').fadeOut('slow');
			$( "#tab1tutorial" ).fadeIn('slow');

		}else {

			$('#themeSelectionBox3').fadeOut('slow');
			$('#tab_container').fadeIn('slow')
			$("ul.tabs li").removeClass("active");
			$("#tab11").addClass("active");
			$(".tab_content").hide();
		 	activeTab = $("#tab11").attr("rel");
			$("#"+activeTab).fadeIn();
			$container.css('cursor', 'default');

		};

	});

	$('#globeThemeTBack').click(function() {

		if( TutorialMSS > 0 ) {

			$('#themeSelectionBox').fadeOut('slow');
			$( "#tab1tutorial" ).fadeIn('slow');

		}else {

			$('#themeSelectionBox').fadeOut('slow');
			$('#tab_container').fadeIn('slow')
			$("ul.tabs li").removeClass("active");
			$("#tab11").addClass("active");
			$(".tab_content").hide();
	 		activeTab = $("#tab11").attr("rel");
			$("#"+activeTab).fadeIn();
			$container.css('cursor', 'default');

		};

	});



	// Toolbar Select


	$('#toolbarToggleButton').click(function() {

		if( ToolbarMSS > 0 ) {

			$('#toggleToolbar0').prop('checked', true);

		}else {

			$('#toggleToolbar0').prop('checked', false);

		};

		$('#tab_container').fadeOut('slow');
		$('#toogleToolbar0box').fadeIn('slow');
		$('#backlight3').fadeIn('slow');

	});





	// Screen Saver Mode


		$('#screensaverButton').click(function() {

			eventOFF = 1;
			screenVar = 1;
			camera.position.z = 650;

		/*	if( markerB1Var < 1 || markerB1Var > 1 ) {

				markerButton1Induce1();

			};		*/

			$('#buttonBox').css('display','none');
			$('#screensaverButton').css('display','none');
			$('#buttonBox2').css('display','none');
			$('#backlightScreen').css('display','inline');


		});


		$('#backlightScreen').click(function() {

			if( markerB1Var < 2 && markerB1Var > 0 ) {

				markerButton1Induce2();

			};

				screenVar = 0;
				eventOFF = 0;
				camera.position.z = 600;
				$('#buttonBox').css('display','inline');
				$('#buttonBox2').css('display','inline');
				$('#screensaverButton').css('display','inline');
				$('#backlightScreen').css('display','none');

			});





	// Themes


	//  Milky Way

	function globeTheme6F() {

		BGTexture = milkyWayBGT;
		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 1;																 	// 1
		BGTextureMSS00 = ( ',' + BGTexture );											 	// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 1;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 6;
		two = 7;
		three = 8;
		four = 6;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS > 0 ) {

			scene3.remove(particles);

		};


		// Specifics

			sphere.visible = false;
			createPanBackground();															// Panoramic Background
			particleMSS = 0;																// 19
			globeStructure();
			themeData = 'MilkyWay';
			saveThemeSystem();

	};




	//  Sky Blue

	function globeTheme11F() {

		BGTexture = mountainBGT;
		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 1;																 	// 1
		BGTextureMSS00 = ( ',' + BGTexture );											 	// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 3;																		// 20
		previewMSS = 2;																	// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 3;
		two = 3;
		three = 3;
		four = 4;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS > 0 ) {

			scene3.remove(particles);

		};


		// Specifics

		sphere.visible = false;
		createPanBackground();															// Panoramic Background
		particleMSS = 0;																// 19
		globeStructure();
		themeData = 'SkyBlue';
		saveThemeSystem();

	};






	//  Digital Rain

	function globeTheme4F() {

		// Save System

		GTextureMSS0 = 3;																 	// 0
		GTextureMSS00 = ( ',' );											 				// 0
		BGTextureMSS0 = 0;																 	// 1
		BGTextureMSS00 = ( ',' );											 				// 1
		ShadowMSS = 1;																	 	// 2
		plane.visible = true;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		matrixMSS0 = 1;																		// 14
		matrixDen = 180;																	// 14
		matrixSpe = 4;																		// 14
		matrixCol = 0x3e3e3e;																// 14
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 9;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS < 1 ) {

			CreateParticleSystem();

		}else {

			particleMSS = 1;
			scene3.remove(particles);
			CreateParticleSystem();

		};


		// Specifics

		sphere.visible = true;
		renderer.setClearColor(0xffffff, 1);												// No Background
		particleMSS = 1;																	// 19
		globeStructure();
		themeData = 'DigitalRain';
		saveThemeSystem();

	};





	//  White Space

	function globeTheme1F() {

		// Save System

		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 0;																 	// 1
		BGTextureMSS00 = ( ',' );											 				// 1
		ShadowMSS = 1;																	 	// 2
		plane.visible = true;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 12;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 6;
		two = 7;
		three = 8;
		four = 6;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS < 1 ) {

			particleMSS = 2;																// 19
			CreateParticleSystem();

		}else {

			particleMSS = 2;
			scene3.remove(particles);
			CreateParticleSystem();

		};


		// Specifics

		sphere.visible = false;
		renderer.setClearColor(0xffffff, 1);												// No Background
		particleMSS = 2;																	// 19
		globeStructure();
		themeData = 'WhiteSpace';
		saveThemeSystem();

	};




		// Star Field

	function globeTheme5F() {

		// Save System


		GTextureMSS0 = 3;																 	// 0
		GTextureMSS00 = ( ',' );											 				// 0
		BGTextureMSS0 = 0;																 	// 1
		BGTextureMSS00 = ( ',' );											 				// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 1;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = true;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		matrixMSS0 = 1;																		// 14
		matrixDen = 261;																	// 14
		matrixSpe = 1;																		// 14
		matrixCol = 0x3e3e3e;																// 14
		backgroundMSS = 1;																 	// 18
		$('#alphaCheckbox').prop('checked', true);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 9;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 6;
		two = 7;
		three = 8;
		four = 6;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( particleMSS < 1 ) {

			particleMSS = 1;																// 19
			CreateParticleSystem();

		}else {

			particleMSS = 1;
			scene3.remove(particles);
			CreateParticleSystem();

		};


		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};


		// Specifics

		sphere.visible = true;
		renderer.setClearColor(0x000000, 1);												// Background
		particleMSS = 1;																	// 19
		globeStructure();
		themeData = 'StarField';
		saveThemeSystem();

	};



	//  Desert Sea

	function globeTheme9F() {

		BGTexture = pyramidBGT;
		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 1;																 	// 1
		BGTextureMSS00 = ( ',' + BGTexture );											 	// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 4;																		// 20
		previewMSS = 4;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 2;
		two = 2;
		three = 1.5;
		four = 4;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS > 0 ) {

			scene3.remove(particles);

		};


		// Specifics

			sphere.visible = false;
			createPanBackground();															// Panoramic Background
			particleMSS = 0;																// 19
			globeStructure();
			themeData = 'DesertSea';
			saveThemeSystem();

	};



	// Tropical Sea

	function globeTheme10F() {

		BGTexture = tropicalBGT;
		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 1;																 	// 1
		BGTextureMSS00 = ( ',' + BGTexture );											 	// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 3;																	// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 4;
		two = 4.5;
		three = 4;
		four = 6;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS > 0 ) {

			scene3.remove(particles);

		};


		// Specifics

		sphere.visible = false;
		createPanBackground();															// Panoramic Background
		particleMSS = 0;																// 19
		globeStructure();
		themeData = 'TropicalSea';
		saveThemeSystem();

	};




	// Pluto

	function globeTheme7F() {

		BGTexture = blackStarBGT;
		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 1;																 	// 1
		BGTextureMSS00 = ( ',' + BGTexture );											 	// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 2;																		// 20
		previewMSS = 7;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 2.2;
		two = 2.7;
		three = 2.2;
		four = 4.5;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS < 1 ) {

			particleMSS = 3;																// 19
			CreateParticleSystem();

		}else {

			particleMSS = 3;																// 19
			scene3.remove(particles);
			CreateParticleSystem();

		};


		// Specifics

		sphere.visible = false;
		createPanBackground();																// Panoramic Background
		particleMSS = 3;																	// 19
		globeStructure();
		themeData = 'Pluto';
		saveThemeSystem();

	};



	// Mars

	function globeTheme8F() {

		BGTexture = blackStarBGT;
		texture13 = THREE.ImageUtils.loadTexture(BGTexture);
		GTextureMSS0 = 5;
		GTextureMSS00 = ( ',' );
		BGTextureMSS0 = 1;																 	// 1
		BGTextureMSS00 = ( ',' + BGTexture );											 	// 1
		ShadowMSS = 0;																	 	// 2
		plane.visible = false;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 8;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21

		// Lighting System

		lightingLoadingSystem();
		one = 3;
		two = 3.5;
		three = 3;
		four = 5;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS < 1 ) {

			particleMSS = 3;	 															// 19
			CreateParticleSystem();

		}else {

			particleMSS = 3;
			scene3.remove(particles);
			CreateParticleSystem();

		};


		// Specifics

		sphere.visible = false;
		createPanBackground();															// Panoramic Background
		particleMSS = 3;																// 19
		globeStructure();
		themeData = 'Mars';
		saveThemeSystem();

	};





	// Multicoloured Matrix


	function globeTheme2F() {

		// Save System

		GTextureMSS0 = 4;																 	// 0
		GTextureMSS00 = ( ',' );														 	// 0
		BGTextureMSS0 = 0;																 	// 1
		BGTextureMSS00 = ( ',' );											 				// 1
		ShadowMSS = 1;																	 	// 2
		plane.visible = true;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 10;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21
		trianglesMSS = 1;																	// 22

		// Lighting System

		lightingLoadingSystem();
		one = 3;
		two = 4;
		three = 4;
		four = 3;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS < 1 ) {

			particleMSS = 2;																// 19
			CreateParticleSystem();

		}else {

			particleMSS = 2;
			scene3.remove(particles);
			CreateParticleSystem();

		};

		if( trianglesVar > 0 ) {

			trianglesGeom.addAttribute( 'color', new THREE.BufferAttribute( colours, 3 ).onUpload( disposeArray ) );

		};

		// Specifics

		sphere.visible = true;
		renderer.setClearColor(0xffffff, 1);												// No Background
		particleMSS = 2;																	// 19
		trianglesCol = 1;
		globeStructure();
		themeData = 'Matrix1';
		saveThemeSystem();

	};



	// Black Matrix

	function globeTheme3F() {

		// Save System

		GTextureMSS0 = 4;
		GTextureMSS00 = ( ',' );														 	// 0
		BGTextureMSS0 = 0;																 	// 1
		BGTextureMSS00 = ( ',' );											 				// 1
		ShadowMSS = 1;																	 	// 2
		plane.visible = true;															 	// 2
		cameraMSS = 600;																	// 5
		camera.position.z = 600;															// 5
		GColMSS0 = '0xffffff';														 	 	// 6
		GColMSS00 = '0xffffff';														 	 	// 6
		GGlowColMSS0 = 0;																 	// 7
		GGlowColMSS00 = Number(0x525151);												 	// 7
		GlobeGlow.visible = false;														 	// 7
		GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS00);	 	// 7
		BGToggleMSS = 1;																	// 11
		$('.switchbox3D').prop('checked', true);											// 11
		backgroundMSS = 0;																 	// 18
		$('#alphaCheckbox').prop('checked', false);											// 18
		nerfMSS = 1;																		// 20
		previewMSS = 11;																		// 21
		$('#selectThemeImg').css('background-image', 'url("Globe Resources/Images/theme' + previewMSS + 'GImg.png")'); 	// 21
		trianglesMSS = 0;																	// 22

		// Lighting System

		lightingLoadingSystem();
		one = 3;
		two = 4;
		three = 4;
		four = 3;
		five = 0;
		light21.intensity = ( one / 2 );
		light22.intensity = ( two / 2 );
		pointLight2.intensity = ( three / 2 );
		light42.intensity = ( four / 4 );
		hemiLight.intensity = ( 0 );

		// Functions

		if( BGVarMSS < 2 )  {

			scene.remove(panoramaMesh);

		}else {

			scene.remove(BGmesh);

		};

		if( particleMSS < 1 ) {

			particleMSS = 4;
			CreateParticleSystem();

		}else {

			particleMSS = 4;
			scene3.remove(particles);
			CreateParticleSystem();

		};

		if( trianglesVar > 0 ) {

			trianglesGeom.removeAttribute( 'color', new THREE.BufferAttribute( colours, 3 ).onUpload( disposeArray ) );

		};

		// Specifics

		sphere.visible = true;
		renderer.setClearColor(0xffffff, 1);												// No Background
		particleMSS = 4;
		trianglesCol = 0;
		globeStructure();
		themeData = 'Matrix2';
		saveThemeSystem();

	};


// ***********************************************************************************************************************






// Digital Rain Functionality


	$('#spannerIcon').click(function() {

		if( matrixMSS0 > 0 ) {

			spannerSelect();

		};

	});

	$('#spannerIcon2').click(function() {

		if( matrixMSS0 > 0 ) {

			spannerSelect();

		};

	});

	$('#spannerIcon3').click(function() {

		if( matrixMSS0 > 0 ) {

			spannerSelect();

		};

	});



	function spannerSelect() {

		$('#backlight2').fadeIn('fast');
		$('#matrixSelectionBox').fadeIn('slow');
		$('#matrixSelectionDone').fadeIn('slow');
		$('#matrixBacklight').css('display','inline');
		settingsClose();
		eventOFF = 1;

    $("#matrixSlider1").val( matrixDen );
    $("#matrixSlider2").val( matrixSpe );

		matrixBoxOpen = 1;

	};


	function saveMatrixChange() {

		if( tutorialOn < 1 ) {

			eventOFF = 0;

		};

		if( matrixTutorial < 1 ) {

			$('#matrixBacklight').css('display','none');
			$('#matrixSelectionBox').fadeOut('slow');
			$('#matrixSelectionDone').fadeOut('slow');
			$('#wheelBorder6').fadeOut('slow')


		}else {

			$('#matrixBacklight').css('display','none');
			$('#matrixSelectionBox').fadeOut('slow');
			$('#matrixSelectionDone').fadeOut('slow');
			$('#wheelBorder6').fadeOut('slow');
			background3Dselector();
			matrixTutorial = 0;

		};

			saveThemeSystem();

	};


	$('#matrixBacklight').click(function() {

			eventOFF = 0;
			$('#matrixBacklight').css('display','none');
			$('#matrixSelectionBox').fadeOut('slow');
			$('#matrixSelectionDone').fadeOut('slow');
			$('#wheelBorder6').fadeOut('slow')

	});



	$('#matrixColourButton').click(function() {


		$('#wheelBorder6').css('display','inline');

		var picker6 = $.farbtastic('#picker6');

    		picker6.linkTo(function onColorChange(col) {


    	 		matrixCol = col.replace('#','').replace('','');
				matrixCol = '0x' + matrixCol;

					MSS.splice( 14, 1, matrixMSS0 + ',' + matrixDen + ',' + matrixSpe + ',' + matrixCol );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

    		});

		});




		$("#matrixSlider1").on("change", function(){

      	 		matrixDen = this.value;
				$("#matrixSlider1").val( matrixDen );

      	      	MSS.splice( 14, 1, matrixMSS0 + ',' + matrixDen + ',' + matrixSpe + ',' + matrixCol );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

    	  	 });


		$("#matrixSlider2").on("change", function(){

      	 		$("#matrixSlider2").val( this.value );
      	 		matrixSpe = (this.value/2);

      	      	MSS.splice( 14, 1, matrixMSS0 + ',' + matrixDen + ',' + matrixSpe + ',' + matrixCol  );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

      		 });



			$('.matrixChange').change(function() {

			 		matrixDen = $("#matrixSlider1").val();
			 		matrixSpe = $("#matrixSlider2").val();
			 		matrixMatLoader();
			 		sphere.material = matrixMaterial;
			 		sphere.material.needsUpdate = true;

		 	});





// ************************************  Custom Theme System  ***********************************************



		// Custom Globe System


		$( "#globeCustomSubmit" ).click(function() {

			GTexture = document.getElementById('customInput8').value;

			if( GTextureMSS0 == 1 || GTextureMSS0 == 0 ) {

				sphere.material.map = THREE.ImageUtils.loadTexture(GTexture);
				sphere.material.needsUpdate = true;
				GTextureMSS0 = 1;
				GTextureMSS00 = ( ',' + GTexture );
				GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );

			} else {

				GTextureMap = THREE.ImageUtils.loadTexture(GTexture);
				GTextureMSS0 = 1;
				GTextureMSS00 = ( ',' + GTexture );
				GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );
				globeStructure();

			};

			MSS.splice( 0, GTextureMSS  );
			chrome.storage.sync.set({'MSS0': MSS}, function() {

			});

			updateCreate3DThemeContainer();
			$("ul.tabs li").removeClass("active");
			$("#tab11").addClass("active");
			$(".tab_content").hide();
			activeTab = $("#tab11").attr("rel");
			$("#"+activeTab).fadeIn();

		});



		$( "#globeCustomReset" ).click(function() {

			globeCustomReset();
			$( "#customInput8" ).val('');

		});


		function globeCustomReset() {

			sphere.material.map = null;
			sphere.material.needsUpdate = true;
			GTextureMSS0 = 1;
			GTextureMSS00 = ( ',null' );
			GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );

			lightingLoadingSystem();
			one = 2;
			two = 2;
			three = 2;
			four = 2;
			five = 0;
			light21.intensity = ( one / 2 );
			light22.intensity = ( two / 2 );
			pointLight2.intensity = ( three / 2 );
			light42.intensity = ( four / 4 );
			hemiLight.intensity = ( 0 );

			globeStructure();

      		MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );
      		MSS.splice( 0, GTextureMSS );

 			chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

		};


		$('#globeCustomFile').change(function() {

			openFile(event);

		});


		 var openFile = function(event) {

    	 	var input = event.target;
			var reader = new FileReader();

   			 reader.onload = function(){

    			$( "#customInput8" ).val('');
    			GTexture = reader.result;

			if( GTextureMSS0 == 1 || GTextureMSS0 == 0 ) {

				sphere.material.map = THREE.ImageUtils.loadTexture(GTexture);
				sphere.material.needsUpdate = true;
				GTextureMSS0 = 1;
				GTextureMSS00 = ( ',' + GTexture );
				GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );

			} else {

				GTextureMap = THREE.ImageUtils.loadTexture(GTexture);
				GTextureMSS0 = 1;
				GTextureMSS00 = ( ',' + GTexture );
				GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );
				globeStructure();

			};

				GTextureMSS0 = 2;
				GTextureMSS00 = ( ',' );
				GTextureMSS = ( GTextureMSS0 + GTextureMSS00 );

				MSS.splice( 0, GTextureMSS  );
				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

				CompGBGvar = reader.result;
				chrome.storage.local.set({'CompGBG': CompGBGvar}, function(data) {

   			 });

				updateCreate3DThemeContainer();
	 			$("ul.tabs li").removeClass("active");
	 			$("#tab11").addClass("active");
	 			$(".tab_content").hide();
	 			activeTab = $("#tab11").attr("rel");
	 			$("#"+activeTab).fadeIn();


    	};

    		reader.readAsDataURL(input.files[0]);

  	};






		// Custom Background System


		var customBGTexture;

		$( "#customBackgroundSubmit" ).click(function() {

			BGTexture = $( "#customInput1" ).val();
			BGTextureMSS00 = (',' + BGTexture);
			BGTextureMSS = (BGTextureMSS0 + BGTextureMSS00);

			if( BGTextureMSS0 == 1 ) {

				if( BGToggleMSS > 0 ) {

					panoramaMesh.material.map.dispose();
					panoramaMesh.material.map = THREE.ImageUtils.loadTexture(BGTexture);
					panoramaMesh.material.needsUpdate = true;

				}else {

					BGmesh.material.map.dispose();
					BGmesh.material.map = THREE.ImageUtils.loadTexture(BGTexture);
					BGmesh.material.needsUpdate = true;

				};

			} else if( BGTextureMSS0 == 0 ){

				if( BGToggleMSS > 0 ) {

					BGVarMSS = 0;
					mat = new THREE.MeshBasicMaterial();
					mat.map = THREE.ImageUtils.loadTexture(BGTexture);
					geo = new THREE.SphereGeometry(550, 80, 60);
					geo.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
					panoramaMesh = new THREE.Mesh( geo, mat );
					scene.add( panoramaMesh );


				}else {

					BGVarMSS = 2;
					mat = new THREE.MeshBasicMaterial();
					mat.map = THREE.ImageUtils.loadTexture(BGTexture);
					geo = new THREE.PlaneGeometry( 1000, 560 );
					BGmesh = new THREE.Mesh( geo, mat );
					scene.add( BGmesh );

				};

					BGTextureMSS0 = 1;
					MSS.splice( 1, BGTextureMSS  );
					MSS.splice( 11, 1, BGToggleMSS );
					chrome.storage.sync.set({'MSS0': MSS}, function() {

				});

		};

	});






		$( "#customBackgroundReset" ).click(function() {

			customBackgroundReset();

		});


		function customBackgroundReset() {

			$( "#customInput1" ).val('');
			BGTextureMSS0 = 0;
			BGTextureMSS00 = ( ',' );
			BGTextureMSS = ( BGTextureMSS0 + BGTextureMSS00 );
			ShadowMSS = 1;
			plane.visible = true;
			backgroundMSS = 0;
			$('#alphaCheckbox').prop('checked', false);
			renderer.setClearColor(0xffffff, 1);
			GGlowColMSS0 = 0;
			GlobeGlow.visible = false;


			if( BGVarMSS < 2 )  {

				scene.remove(panoramaMesh);

			}else {

				scene.remove(BGmesh);

			};

			if( particleMSS > 0 ) {

				scene3.remove(particles);
				particleMSS = 0;

			};

			saveThemeSystem();

		};




		$('#backgroundCustomFile').change(function() {

			openFile2(event);

		});


		 var openFile2 = function(event) {

    	 	var input = event.target;
			var reader = new FileReader();

   			 reader.onload = function(){

    			BGTexture = reader.result;
    			$( "#customInput1" ).val('');

			if( BGTextureMSS0 == 1 ) {

				if( BGToggleMSS > 0 ) {

					panoramaMesh.material.map.dispose();
					panoramaMesh.material.map = THREE.ImageUtils.loadTexture(BGTexture);
					panoramaMesh.material.needsUpdate = true;

				}else {

					BGmesh.material.map.dispose();
					BGmesh.material.map = THREE.ImageUtils.loadTexture(BGTexture);
					BGmesh.material.needsUpdate = true;

				};

			} else if( BGTextureMSS0 == 0 ){

				if( BGToggleMSS > 0 ) {

					BGVarMSS = 1;
					BGToggleMSS = 1;
					mat = new THREE.MeshBasicMaterial();
					mat.map = THREE.ImageUtils.loadTexture(BGTexture);
					geo = new THREE.SphereGeometry(550, 80, 60);
					geo.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
					panoramaMesh = new THREE.Mesh( geo, mat );
					scene.add( panoramaMesh );

				}else {

					BGVarMSS = 0;
					BGToggleMSS = 0;
					mat = new THREE.MeshBasicMaterial();
					mat.map = THREE.ImageUtils.loadTexture(BGTexture);
					geo = new THREE.PlaneGeometry( 1000, 560 );
					BGmesh = new THREE.Mesh( geo, mat );
					scene.add( BGmesh );

				};

			};

				BGTextureMSS0 = 2;
				BGTextureMSS00 = ( ',' );
				BGTextureMSS = ( BGTextureMSS0 + BGTextureMSS00 );
				MSS.splice( 1, BGTextureMSS  );
				chrome.storage.sync.set({'MSS0': MSS}, function() {

				});

				CompBGvar = reader.result
				chrome.storage.local.set({'CompBG': CompBGvar}, function(data) {

				});

    		};

    		reader.readAsDataURL(input.files[0]);

  		};





//**************************************************************************************************************************************************************************************





	// Settings Box Close Functions


		$( "#settingsClose" ).click(function() {

			settingsClose();
			saveThemeSystem();

		});


		$( "#backlight3" ).click(function() {

			if( tutorialOn > 0 ) {

				// Do Nothing

			}else {

				settingsClose();
				saveThemeSystem();

			};
		});


			function settingsClose() {

					display = $('#tab_container').css('display');

					if( GTextureMSS0 == 4 && tranglesCreatedVar == 0 && display != 'none' ) {

						contObj2.remove(trianglesMesh);
						trianglesGlobe();
						GlobeContainer5.add(trianglesMesh);
						tranglesCreatedVar = 1;

					};

					$( "#customInput1" ).val('');
					$( "#customInput8" ).val('');
					$('#backlight3').css('z-index', '118');
					$( "#backlightLink" ).fadeOut('slow');
					$('#linkBox').fadeOut('slow');
					$('#backlight2').fadeOut('slow');
					$('#themeSelectionBox3').fadeOut('slow');
					$('#themeSelectionBox2').fadeOut('slow');
					$('#themeConfirmBox').fadeOut('slow');
					$('#themeSelectionBox').fadeOut('slow');
					$('#particleBox').fadeOut('slow');
			//		$('#particleButton').fadeOut('slow');
					$('#alphaBox').fadeOut('slow');
			//		$('#alphaCofirmButton').fadeOut('slow');
					$('#configBox').fadeOut('fast');
					$('#zoomBox').fadeOut('slow');
					$("#globeLightBox").fadeOut('slow');
					$('#confirmResetBox').fadeOut('slow');
					$('#backlight3').fadeOut('slow');
					$('#tab_container').fadeOut('slow');
					$("#searchEngineSelection").fadeOut('slow');
					$('#settingsClose').fadeOut('slow');
					$('#definitionBox').fadeOut('slow');
					$(".tab_content").hide();
					$( "#recentlyVisitedBox" ).css('display','none');
					$( "#extensionsBox" ).css('display','none');
					$( "#bookmarksBox" ).css('display','none');
					$( "#chromeAppsBox" ).css('display','none');
					$( "#extensions" ).fadeIn('fast');
					$( "#recentlyVisited" ).fadeIn('fast');
					$("#modeSelectionBox").fadeOut('slow');
					$('#backlight2').css('z-index','10');
					$( "#bookmarks" ).fadeIn('fast');
					$( "#chromeApps" ).fadeIn('fast');
					$('#toogleToolbar0box').fadeOut('slow');
					$( "#recentlyVisited" ).css('left','28%');
					$( "#bookmarks" ).css('left','4%');
					$( "#chromeApps" ).css('left','52%');
					$( "#extensions" ).css('left','76%');
					$('#wheelBorder3').css('display', 'none' );
					$('#wheelBorder4').css('display', 'none' );
					$('#configBoxSelection').fadeOut('fast');
					$('#backlight6').css('display', 'none' );
					$('#customColour2Box').css('display','none');
					$('#tab3PasswordSet2').css('display','none');
					$( "#markerButton3" ).css("color", "#555555");
					$('#weightBox').fadeOut('slow');
			//		$('#weightBoxConfirm').fadeOut('slow');
					$('#performanceBox4').fadeOut('slow');
					$('#performanceBacklight').fadeOut('slow');
					$('#revertDefinitionBox').fadeOut('slow');
					mButton3 = 1;
				//	customColour2F1();		 **	check this **
					eventOFF = 0;
					tutorialOn = 0;
					markerB3Var = 0;
					theme3DContVar0 = 0;

					if( PerformanceMSS > 3 && PerformanceMSS < 5 ) {

						document.body.removeChild( stats.domElement );

					};

					function timeoutTri() {

							tranglesCreatedVar = 0;

					};

					if( GTextureMSS0 ==  4 ) {

						setTimeout( timeoutTri, 800 );

					};

			};






// *** *** *** *** ***   MSS - Lighting   *** *** *** *** *** ***




			$("#globeLight1").on("change", function(){

				LightSF1 = this.value;
      	      	light21.intensity = ( LightSF1 / 2 );
				lightingLoadingSystem();

      	      	MSS.splice( 12, 1, LightSF1 + ',' + two +  ',' + three + ',' + four + ',' + five );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});


      	 });


      	 	$("#globeLight2").on("change", function(){

      	 		LightSF2 = this.value;
      	 		light22.intensity = ( LightSF2 / 2 );
      			lightingLoadingSystem();

      	 		MSS.splice( 12, 1, one + ',' + LightSF2 +  ',' + three + ',' + four + ',' + five);

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});


      	 	});


      	 	$("#globeLight3").on("change", function(){

      	 		LightSF3 = this.value;
      	 		pointLight2.intensity = ( LightSF3 / 2 );
						lightingLoadingSystem();

      	 		MSS.splice( 12, 1, one + ',' + two +  ',' + LightSF3 + ',' + four + ',' + five );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

      	 	});


      	 	$("#globeLight4").on("change", function(){


      	 		LightSF4 = this.value;
      	 		light42.intensity = ( LightSF4 / 4 );
      	 		lightingLoadingSystem();


      	 		MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + LightSF4 + ',' + five );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

      	 	});





		$( "#glowThemeTint" ).click(function() {

			$('#wheelBorder5').css('display', 'inline' );
			$('#backlight6').css('display', 'inline' );
			$('#backlight6').css('opacity', '0' );
		    glowColourPicker();

		});



      	 $("#globeThemeTint").click(function() {

     	 	 $("#globeThemeTintBox").fadeIn('slow');
      	 	 $("#tab_container").fadeOut('slow');
      	 	 $("#settingsClose").fadeIn('slow');
      	 	 $("#backlightTint").css('display','inline');
      	 	 $('#backlight3').css('opacity','0');
      	 	 $("#colourSlider12").val( (five*2.5) );


      	 });



      	  $("#backlightTint").click(function() {

      	 	if( backlightTintVar > 1 ) {

      	 		// Do nothing;

      	 	}else {

   	   	     $("#globeThemeTintBox").fadeOut('slow');
   	   	     $('#wheelBorder4').fadeOut('slow');
   	   	     $("#backlightTint").css('display','none');
   	   	     $('#wheelBorder4').fadeOut('slow');
 		 	 $('#wheelBorder5').fadeOut('slow');
      	 	 settingsClose();

      	 	};
      	 });



		 $("#globeThemeCol1").click(function() {

      	 	$('#wheelBorder5').css('display', 'none' );
      	 	$('#wheelBorder4').css('display','none');
      	 	$('#wheelBorder4').fadeIn('fast');
					$('#backlight6').css('display', 'inline' );
					$('#backlight6').css('opacity', '0' );
					tintVal = $("#colourSlider12").val();

			if( lightsTut > 0 ) {

      	 	 if( tintVal < 1 ) {

      	 	 	lightingLoadingSystem();
      	      	hemiLight.intensity = (1/nerfMSS);
      	      	$("#colourSlider12").val( 1 );
				five = 1;


				    MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

      	      };

      	  	}else {


 					MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

 			};


			themeColVar = 1;
		    sphereColourPicker();


      	 });


      	 $("#globeThemeCol2").click(function() {

      	 	$('#wheelBorder5').css('display', 'none' );
      	 	$('#wheelBorder4').css('display','none');
      	 	$('#wheelBorder4').fadeIn('fast');
			$('#backlight6').css('display', 'inline' );
			$('#backlight6').css('opacity', '0' );
			tintVal = $("#colourSlider12").val();

			if( lightsTut > 0 ) {

			 if( tintVal < 0.5 ) {

      	 	    lightingLoadingSystem();
      	      	hemiLight.intensity = (1/nerfMSS);
      	      	$("#colourSlider12").val( 1 );
      	      	five = 1;


      	      		MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

 			};

 			}else {



      	      		MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

 			};

			themeColVar = 2;
		    sphereColourPicker();


      	 });


		$("#colourSlider12").on("change", function(){

      	 	if( lightsTut > 0 ) {

				lightingLoadingSystem();

			};

      	 		five = this.value;
				$("#colourSlider12").val( five );
				five = (five/nerfMSS);
				five = ( five / 5 );
      	      	hemiLight.intensity = ( five );


      	      	MSS.splice( 12, 1, one + ',' + two +  ',' + three + ',' + four + ',' + five );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

 				lightsTut = 1;

      	 });


		 $("#tab4lightButton").click(function() {

			 $("#globeLight1").val( one );
			 $("#globeLight2").val( two );
 			 $("#globeLight3").val( three );
			 $("#globeLight4").val( four );
			 $("#globeLightBox").fadeIn('slow');
    	 $("#tab_container").fadeOut('slow');
     	 $("#settingsClose").fadeIn('slow');
  	 	 $("#backlightLight").css('display','inline');
       $("#backlight3").css('display','inline');

		});


		 $("#backlightLight").click(function() {

			 $("#globeLightBox").fadeOut('slow');
     	 $("#backlightLight").css('display','none');
    	 settingsClose();

		 });


		 $("#searchEngineButton").click(function() {

			  $('#searchEngineSelection').css('top','48%');
			  $('#searchEngineSelection').css('border','1px solid #333333');
			  $('#searchEngineSelection').css('background-color','#222222');
			  $('#googleSearchText').css('color','#ffffff');
			  $('#bingSearchText').css('color','#ffffff');
			  $('#yahooSearchText').css('color','#ffffff');
			 	$('#ecosiaSearchText').css('color','#ffffff');
				$("#searchEngineSelection").fadeIn('slow');
				$("#tab_container").fadeOut('slow');
				$("#settingsClose").fadeIn('slow');
				$("#backlightLight").css('display','inline');
				$("#backlight3").css('display','inline');

		 });

		  $(".searchEngine").click(function() {

				if( TutorialMSS == 0 ) {

		 				$("#searchEngineSelection").fadeOut('slow');
						searchEngineMSS = $(this).attr('data-idx');
						MSS.splice( 27, 1, searchEngineMSS );

						chrome.storage.sync.set({'MSS0': MSS}, function() {

								chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

									chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

								});

		 				});

				};

			});


// *** *** *** *** ***  MSS - 3D Background Toggle   *** *** *** *** *** ***



		$(".switch").on("change", function(){


      	 	if( BGToggleMSS < 1 ) {

      	 		if( BGTextureMSS0 > 0 ) {

 					$('#customText140').text('3D Background ON:');
 					scene.remove(BGmesh);
 					createPanBackground();
 					BGVarMSS = 1;

 				};


 				BGToggleMSS = 1;

 				MSS.splice( 11, 1, BGToggleMSS );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});


   			 }else {

 					if( BGTextureMSS0 > 0 ) {

 						$('#customText140').text('3D Background OFF:');
 						scene.remove(panoramaMesh);
 						createPlaneBackground();
 						BGVarMSS = 2;


 				};


   			 	BGToggleMSS = 0;

   			 	MSS.splice( 11, 1, BGToggleMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});


   			 };
      	 });







	//	Adding Selection System


		 $('#selectConfigBox0').click(function(){

		 	$('#infoButton2').css('display','inline');
			$('#infoButton10').css('display','none');
		 	$( "#configBox" ).fadeIn( "slow" );
		 	$("#SiteURL").val('');
		 	$('#infoButton2').css('display','inline');
		 	fileSystemVarInfo = 0;
		 	$( "#configBoxSelection" ).fadeOut( "fast" );
			$( "#configBox" ).fadeIn( "slow" );
			$('#settingsClose').fadeIn( "slow" );
			$('#text0').html('Site URL:');
			$( "#infoButton1" ).css( 'display','inline' );
			$( "#SiteURL12" ).focus();

			function timeout() {

				$( "#loadingCover" ).css('display','inline');
				$('#previewBox4').css('background-color','#333333');
				$( "#infoButton3" ).css('display','none');

			};

				setTimeout(timeout,300);


		 });



		  $('#selectAppsBox0').click(function(){

		 	$( "#configBoxSelection" ).fadeOut( "fast" );
			$( "#configAppsBox" ).fadeIn( "slow" );


		 		if( calledCApps < 2 ) {

					chromeAppsGet();

			};

		 });





	// Info Button Functions



		 $( "#infoButton4" ).hover(function(){

		 		$( "#infoTextButton4" ).fadeIn('fast');
		 		$( "#infoButton4" ).css('background', '#444444');

		 });


		 $( "#infoButton4" ).mouseout(function(){

		 		$( "#infoTextButton4" ).fadeOut('fast');
		 		$( "#infoButton4" ).css('background', '#333333');

		 });


		 $( "#infoButton5" ).hover(function(){

		 		$( "#infoTextButton5" ).fadeIn('fast');
		 		$( "#infoButton5" ).css('background', '#444444');

		 });


		 $( "#infoButton5" ).mouseout(function(){

		 		$( "#infoTextButton5" ).fadeOut('fast');
		 		$( "#infoButton5" ).css('background', '#333333');

		 });

		  $( "#infoButton7" ).hover(function(){

		 		$( "#infoTextButton7" ).fadeIn('fast');
		 		$( "#infoButton7" ).css('background', '#444444');

		 });


		 $( "#infoButton7" ).mouseout(function(){

		 		$( "#infoTextButton7" ).fadeOut('fast');
		 		$( "#infoButton7" ).css('background', '#333333');

		 });

		 $( "#infoButton10" ).hover(function(){

		 		$( "#infoTextButton10" ).fadeIn('fast');
		 		$( "#infoButton10" ).css('background', '#444444');

		 });


		 $( "#infoButton10" ).mouseout(function(){

		 		$( "#infoTextButton10" ).fadeOut('fast');
		 		$( "#infoButton10" ).css('background', '#333333');

		 });

		  $( "#infoButton8" ).hover(function(){

		 		$( "#infoTextButton8" ).css('display','inline');
		 		$( "#infoButton8" ).css('background', '#444444');

		 });

		   $( "#infoButton2" ).hover(function(){

		 		$( "#infoTextButton2" ).fadeIn('fast');

		 });

		  $( "#infoButton2" ).mouseout(function(){

		 		$( "#infoTextButton2" ).fadeOut('fast');
		 		$( "#infoButton8" ).css('background', '#333333');

		 });





	// Reset Functions


		$( "#reset1" ).click(function() {

				reset1function();

		});


		$( "#reset2" ).click(function() {

			 	resetGlobeColour();
			 	resetGlobeGlow();
			 	$('#wheelBorder4').css('display','none');
			 	$('#wheelBorder5').css('display','none');

		});


		$( "#resetLightsT" ).click(function() {


				 pointLight2.intensity = 2.5;
				 light21.intensity = 2.5;
				 light22.intensity = 2.5;
      	 		 light42.intensity = 1.25;

				 $("#globeLight1").val( 5 );
				 $("#globeLight2").val( 5 );
 				 $("#globeLight3").val( 5 );
			 	 $("#globeLight4").val( 5 );


			 	MSS.splice( 12, 1, '5,5,5,5,' + five );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});


		});




		$( "#globeThemeReset" ).click(function() {

			GGlowColVar2 = 2;
			reset1function();
			resetGlobeColour();
			resetGlobeGlow();
			createShadow();
			globeThemeReset();
			customBackgroundReset();
			createCloudVar = 1;


		});





	// Systematic Globe Reset



		$('#resetGlobeSettings').click(function() {

			$( "#confirmResetBox" ).fadeIn('slow');
			$("#tab_container").fadeOut('slow');
			confirmResetBox();

		});

		$('#resetBacklight').click(function() {

			$( "#confirmResetBox" ).fadeOut('slow');

		});


			function confirmResetBox() {

				$('#confirmReset').click(function() {

					resetFinal();

			});

				$('#cancelReset').click(function() {

					$( "#confirmResetBox" ).fadeOut('slow');
					$("#tab_container").fadeIn('slow');

			});

		};



				function resetFinal() {

					chrome.storage.local.clear();
					chrome.storage.sync.clear();
					$( "#confirmResetBox" ).fadeOut('slow');


					if( FeedbackComplete > 0 ) {

						feedBVar = 1;

					}else {

						feedBVar = 0;

					};


							MSS.splice(0,1,"1,Globe Resources/Textures/plutoGT.jpeg");
							MSS.splice(1,1,"1,Globe Resources/Textures/milkyWayBGT.jpeg");
							MSS.splice(2,1,"1");
							MSS.splice(3,1,"1");
							MSS.splice(4,1,"1");
							MSS.splice(5,1,"530");
							MSS.splice(6,1,"0xffffff,0xffffff");
							MSS.splice(7,1,"1,0x525151");
							MSS.splice(8,1,"0");
							MSS.splice(9,1,"1");
							MSS.splice(10,1,"0");
							MSS.splice(11,1,"1");
							MSS.splice(12,1,"5,5,5,5,0");
							MSS.splice(13,1,"Z");
							MSS.splice(14,1,"0,261,1,0x11d5c8");
							MSS.splice(15,1,"0," + feedBVar + "");
							MSS.splice(16,1,"1");
							MSS.splice(17,1,"0.07");
							MSS.splice(18,1,"0");
							MSS.splice(19,1,"0");
							MSS.splice(20,1,"1");
							MSS.splice(21,1,"1");
							MSS.splice(22,1,"1.4");
							MSS.splice(23,1,"0");
							MSS.splice(24,1,"0");
							MSS.splice(25,1,feedback2MSS);
							MSS.splice(26,1,definitionCheckMSS);
							MSS.splice(27,1,"0");
							MSS.splice(28,1,"name")


							chrome.storage.sync.set({'MSS0': MSS}, function() {

  						});


							function timeoutReset() {

        						chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

 								chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

 							});

 									console.log(MSS);

 						};

 							setTimeout( timeoutReset, 300 );

 					};





		// Full Version Navigation



		$('#paidNavigation').click(function() {


				window.location.href = 'https://chrome.google.com/webstore/detail/globe-your-first-3d-tab-p/ljbepbcfkmbpoleofmfndmfhldomkdlb';


			});






	// Increment Hex Colour


		function LightenDarkenColor(col, amt) {

    		var usePound = false;

    		if (col[0] == "#") {

        		col = col.slice(1);
        		usePound = true;

   		 };

    		var num = parseInt(col,16);
    		var r = (num >> 16) + amt;

   			if (r > 255) r = 255;
   			else if  (r < 0) r = 0;

    		var b = ((num >> 8) & 0x00FF) + amt;

   		 	if (b > 255) b = 255;
   		 	else if  (b < 0) b = 0;

   		 	var g = (num & 0x0000FF) + amt;

   		 	if (g > 255) g = 255;
   		 	else if (g < 0) g = 0;

   		 	return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

	};






	// Remove Globe Navigation


	$('#paidNavigation2').click(function() {

		chrome.tabs.update({ url: 'chrome://extensions' });

	});






	// Globe Feedback System


		var feedbackSubmitVar = 0;
		var feedVal;
		var savedForm1;
		var savedForm2;
			formArr = []
			feedCount = 0;
			feedCount2 = 0;


		$('#feedbackButton').click(function() {

			feedbackFlashVar = 0;
			$('#feedbackQuery').fadeIn('slow');
			$('#feedbackButton').fadeOut('slow');
			$('#feedbackBacklight').fadeIn('slow');
			eventOFF = 1;
			ga('send', 'event', 'Feedback', 'Button Clicked', ('ID: ' + daysLicenced));

		});

		$('#feedbackBacklight').click(function() {

			feedbackFlashVar = 1;
			feedbackSystemFunctionFlash1();
			$('#feedbackQuery').fadeOut('slow');
			$('#feedbackButton').fadeIn('slow');
			$('#feedbackBox2').fadeOut('slow');
			$('#feedbackBacklight').fadeOut('slow');
			eventOFF = 0;

		});

		$('#feedbackQuery1').click(function() {

			feedbackFlashVar = 0;
			$('#feedbackQuery').fadeOut('slow');
			$('#feedbackBox2').fadeIn('slow');
			ga('send', 'event', 'Feedback', 'OK', ('ID: ' + daysLicenced));
			feedbackLoadListener();

		});

		$('#feedbackQuery2').click(function() {

			feedbackFlashVar = 1;
			feedbackSystemFunctionFlash1();
			$('#feedbackQuery').fadeOut('slow');
			$('#feedbackButton').fadeIn('slow');
			$('#feedbackBox2').fadeOut('slow');
			$('#feedbackBacklight').fadeOut('slow');
			ga('send', 'event', 'Feedback', 'NO', ('ID: ' + daysLicenced));
			eventOFF = 0;

		});



	function feedbackLoadListener() {

		 $('#feedbackFrame').on('load', function(){

		 	ga('send', 'event', 'Feedback', 'Sent', ('ID: ' + daysLicenced));

	 		function timeout() {

       			 	$('#feedbackBox2').fadeOut('slow');

        			function timeout() {

       			 		sendFeedbackForm();

        		};

        		setTimeout( timeout, 300 );

        	};

        		setTimeout( timeout, 300 );


   		 });

	};


		function sendFeedbackForm() {

			feedback2MSS = 0;
			$('#feedbackButton').fadeOut('slow');
			$('#feedbackBacklight').fadeOut('slow');
			eventOFF = 0;
			thank = 1;

			MSS.splice( 15, 1, '0,1' );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

 			MSS.splice( 25, 1, feedback2MSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

		};




		// Toolbar Toggle


		$( ".toolbarToggle2" ).click(function() {

			if(this.checked) {

				$('#buttonBox2').fadeIn('slow');

    			MSS.splice( 16, 1, "1" );

 					chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});

				checkPermissions();


   			 }else {

   			 	$('#buttonBox2').fadeOut('slow');

    			MSS.splice( 16, 1, "0" );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 				});
   			 };
		});




	// Globe Zoom Controls


	$('#zoomButton2').click(function() {

		val = ( ( cameraMSS - 500 )/ 20 );

		$("#zoomSlider").attr('value', val);
		$('#zoomBox').fadeIn('slow');
		$('#tab_container').fadeOut('slow');


	});



	$("#zoomSlider").on("change", function(){

       	 	$('#list').css('display','none');
      	 	val = this.value;
      	 	val = ( (val*20) + 540 );

      	 	camera.position.z = val;
			cameraMSS = val;


      	 	MSS.splice( 5, 1, val );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

      	 });





	// File Selection System


	$("#selectFileBox0").click(function() {

		fileSystemVarInfo = 1;
		$('#BoxSelection').fadeOut('slow');
		$( "#configBoxSelection" ).fadeOut( "fast" );
		$( "#configBox" ).fadeIn( "slow" );
		$( "#loadingCover" ).fadeIn( "slow" );
		$('#text0').html('Enter File Path:');
		$('#infoButton2').css('display','none');
		$('#infoButton10').css('display','inline');
		$( "#SiteURL12" ).focus();
		$('#settingsClose').fadeIn('slow');


	});




	// Globe Weight Spin Functionality


	var weightVar = 0;


	$('#globeWeightSelector').click(function() {

		$('#weightBox').fadeIn('slow');
	//	$('#weightBoxConfirm').fadeIn('slow');
		$('#tab_container').fadeOut('slow');
		$("#weightSlider").val(SpinMSS*100);
		weightVar = 0;

	});


	$('#weightBoxConfirm').click(function() {

		if( weightVar < 1 ) {

			$('#weightBox').fadeOut('slow');
		//	$('#weightBoxConfirm').fadeOut('slow');
			settingsClose();

		};

	});


	$("#weightSlider").on("change", function(){

      	 	val = this.value;
      	 	val = (val/100);
      		SpinMSS = val;


      	 	MSS.splice( 17, 1, val );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

      	 });




	// Alpha toggle


	$('#alphaCheckbox').click(function() {

		if(this.checked) {

			backgroundMSS = 1;
			renderer.setClearColor (0x000000, 1);
			plane.visible = false;
			ShadowMSS = 0;

			MSS.splice( 2, 1, ShadowMSS );
			MSS.splice( 18, 1, backgroundMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

		}else {

			renderer.setClearColor (0xffffff, 1);
			backgroundMSS = 0;

			if( oneTimeVar < 1 ) {

				createShadow();

			};

			plane.visible = true;
			ShadowMSS = 1;

			MSS.splice( 2, 1, ShadowMSS );
			MSS.splice( 18, 1, backgroundMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

		};

	});


		$('#alphaCofirmButton').click(function() {

			$('#alphaBox').fadeOut('slow');
		//	$('#alphaCofirmButton').fadeOut('slow');

			if( tutorialOn < 1 ) {

				settingsClose();

			};

		});


		$('#alphaSelector').click(function() {

			$('#alphaBox').fadeIn('slow');
	//		$('#alphaCofirmButton').fadeIn('slow');
			$('#tab_container').fadeOut('slow');


			if( backgroundMSS > 0 ) {

				$('#alphaCheckbox').prop('checked', true);

			}else {

				$('#alphaCheckbox').prop('checked', false);

			};

		});





		// Particle System


	$('.particleCheckboxC').click(function() {

		id = $(this).attr('id');
		idx = id.substr((id.length - 1), id.length);

		if( idx < 1) {

			$('#particleCheckbox1').prop('checked', false);
			$('#particleCheckbox2').prop('checked', false);
			$('#particleCheckbox3').prop('checked', false);

			if( particleMSS > 0 ) {

				particleMSS = 0;
				scene3.remove(particles);

			};

		}else if( idx < 2 ) {

			$('#particleCheckbox0').prop('checked', false);
			$('#particleCheckbox2').prop('checked', false);
			$('#particleCheckbox3').prop('checked', false);

			if( particleMSS < 1 ) {

				particleMSS = 1;
				CreateParticleSystem();

			}else {

				particleMSS = 1;
				scene3.remove(particles);
				CreateParticleSystem();

			};

		}else {

			if( idx < 3 ) {

				if( particleMSS < 1 ) {

					particleMSS = 2;
					CreateParticleSystem();

				}else {

					particleMSS = 2;
					scene3.remove(particles);
					CreateParticleSystem();

				};

				$('#particleCheckbox0').prop('checked', false);
				$('#particleCheckbox1').prop('checked', false);
				$('#particleCheckbox3').prop('checked', false);


			}else {

				if( particleMSS < 1 ) {

					particleMSS = 3;
					CreateParticleSystem();

				}else {

					particleMSS = 3;
					scene3.remove(particles);
					CreateParticleSystem();

				};

				$('#particleCheckbox0').prop('checked', false);
				$('#particleCheckbox1').prop('checked', false);
				$('#particleCheckbox2').prop('checked', false);

			};
		};
	});





		$('#particleSelector').click(function() {

			particleVar = 0;											// Check if discontinued
			$('#particleBox').fadeIn('slow');
			$('#tab_container').fadeOut('slow');
			$('#particleCheckbox0').prop('checked', false);
			$('#particleCheckbox1').prop('checked', false);
			$('#particleCheckbox2').prop('checked', false);
			$('#particleCheckbox3').prop('checked', false);
			$('#particleCheckbox' + particleMSS ).prop('checked', true);

		});



	// Save Theme


		$('#saveTheme').click(function() {

			settingsClose();
			saveThemeSystem();

		});




	// Performance Enhancement System


		function performanceSave() {

			MSS.splice( 8, 1, PerformanceMSS );

				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

		};


		$('#questionmark').click(function() {

			ga('send', 'event', 'QuestionMark', 'Click');

			if( PerformanceMSS > 2 && PerformanceMSS < 4 ) {

				$('#performanceBox3').fadeIn('slow');
				$('#performanceBacklight').fadeIn('slow');
				questionmarkVar = 0;

			}else if( PerformanceMSS > 3 && PerformanceMSS < 5 ){

				$('#performanceBox4').fadeIn('slow');
				$('#performanceBacklight').fadeIn('slow');
		  	    $('#settingsClose').fadeIn('slow');
		  	    $('#questionmark').fadeIn('slow');
		  	    questionmarkVar = 0;
				eventOFF = 1;

				stats = new Stats();
		   	  	stats.domElement.style.position	= 'absolute';
			  	stats.domElement.style.right	= '48%';
			  	stats.domElement.style.bottom	= '82%';
			  	stats.domElement.style.zIndex   = '200';
			  	document.body.appendChild( stats.domElement );
			  	performanceFeedbackListener();

			}else {

				$('#performanceBox').fadeIn('slow');
				$('#performanceBacklight').fadeIn('slow');
				questionmarkVar = 0;

			};
		});

		$('#performanceButton2').click(function() {

			ga('send', 'event', 'QuestionMark', 'PoorPerformance', 'No');
			$('#performanceBox').fadeOut('slow');
			$('#performanceBacklight').fadeOut('slow');
			$('#questionmark').fadeOut('slow');
			PerformanceMSS = 1;
			performanceSave();

		});

		$('#performanceButton1').click(function() {

			ga('send', 'event', 'QuestionMark', 'PoorPerformance', 'Yes');
			PerformanceMSS = 2;
			eventOFF = 1;
			$('#performanceBox').fadeOut('slow');
			$('#performanceBox2').fadeIn('slow');
			$('#performanceBacklight').fadeIn('slow');
		  	performanceSave();

		});

		$('#performanceButton3').click(function() {

			ga('send', 'event', 'QuestionMark', 'Performance Enhance', 'Completed');
			questionmarkVar = 1;
			questionmarkFlash1();
			$('#performanceBox2').fadeOut('slow');
			$('#performanceBacklight').fadeOut('slow');
			PerformanceMSS = 1;
			eventOFF = 0;
			performanceSave();

		/*	function timeout() {

				if( PerformanceMSS < 4 ) {

					$('#performanceBox3').fadeIn('slow');
					$('#performanceBacklight').fadeIn('slow');

				};
			};

				setTimeout( timeout, 20000);		*/

		});

		$('#performanceButton4').click(function() {

			  ga('send', 'event', 'QuestionMark', 'Performance Enhance', 'Not Completed');
			  PerformanceMSS = 0;
			  eventOFF = 0;
			  questionmarkVar = 1;
			  $('#performanceBox2').fadeOut('slow');
			  $('#performanceBacklight').fadeOut('slow');
			  performanceSave();
			  questionmarkFlash1();

		});

		$('#performanceInstruct').click(function() {

		    PerformanceMSS = 2;
		    eventOFF = 1;
				settingsClose();

				function timeout() {

					$('#performanceBox').fadeOut('slow');
			 		$('#performanceBox2').fadeIn('slow');
					$('#performanceBacklight').fadeIn('slow');
		    	performanceSave();

				};

				setTimeout( timeout, 300 );

		});

		$('#performanceBacklight').click(function() {

				$('#performanceBacklight').fadeOut('slow');
				$('#performanceBox2').fadeOut('slow');
				PerformanceMSS = 1;
		    eventOFF = 0;
				performanceSave();


		});

		$('#performanceButton5').click(function() {

			  ga('send', 'event', 'QuestionMark', 'Increased Performance', 'Yes');
			  PerformanceMSS = 1;
			  $('#performanceBox3').fadeOut('slow');
			  $('#performanceBacklight').fadeOut('slow');
			  $('#questionmark').fadeOut('slow');
			  performanceSave();

		});

		$('#performanceButton6').click(function() {

			  headID2 = document.getElementsByTagName("body")[0];
			  newScript2 = document.createElement('script');
		   	 newScript2.type = 'text/javascript';
			  newScript2.src = 'Globe Files/Resource Files/stats.js';
			  headID2.appendChild(newScript2);

			  function timeout() {

				  ga('send', 'event', 'QuestionMark', 'Increased Performance', 'No');
		    	  stats = new Stats();
		   		  stats.domElement.style.position  = 'absolute';
				  stats.domElement.style.right	= '48%';
				  stats.domElement.style.bottom	= '82%';
				  stats.domElement.style.zIndex   = '200';
				  document.body.appendChild( stats.domElement );

				  PerformanceMSS = 4;
				  eventOFF = 1;
				  $('#performanceBox3').fadeOut('slow');
				  $('#performanceBox4').fadeIn('slow');
				  $('#performanceBacklight').fadeIn('slow');
				  $('#settingsClose').fadeIn('slow');
				  performanceSave();

				  if( performanceVar < 1 ) {

					  performanceFeedbackListener();

					};

				};

					setTimeout(timeout,500);

			});


		function performanceFeedbackListener() {

		 	$('#performanceFrame').on('load', function(){

	 			ga('send', 'event', 'QuestionMark', 'Performance Report', 'Sent');

	 			if( performanceVar < 1 ) {

	 				function timeout() {

       					 $('#performanceBox4').fadeOut('slow');
       					 $('#performanceBacklight').fadeOut('slow');
       					 $('#settingsClose').fadeOut('slow');
       					 $('#questionmark').fadeOut('slow');
       					 document.body.removeChild( stats.domElement );

        				function timeout2() {

       		 				eventOFF = 0;
							PerformanceMSS = 5;
							performanceVar = 1;
							performanceSave();

        			};
        				setTimeout( timeout2, 300 );

        			};
        				setTimeout( timeout, 300 );

        		}else {

        			performanceVar = 0;

        		};

   			 });
   		};




	// Randomise Texture Function


		var randomTO1 = 0;
		var randomTO2 = 0;


		$( "#randomiseGT" ).click(function() {

			randomGTexture = [plutoGT,blueGasGT,saturn1GT,saturn2GT,blueCloudsGT,neptuneGT,marsGT,blueLightsGT];
			randomGTextureN = Math.floor(Math.random()*randomGTexture.length);
			sphere.material.map = THREE.ImageUtils.loadTexture(randomGTexture[randomGTextureN]);
			sphere.material.needsUpdate = true;
			GTextureMSS00 = ( ',' + randomGTexture[randomGTextureN] );

			if( randomTO1 > 0 ) {

		 		clearTimeout(timeout);
		 		randomTO1 = 0;

		 	};

				timeout = setTimeout(function() { saveRandomGT(); }, 5000);
				randomTO1 = 1;

		});


		$( "#randomiseBGT" ).click(function() {

			randomTO2 = 0;
		    randomBGTexture = [milkyWayBGT,blackStarBGT,tropicalBGT,mountainBGT,pyramidBGT];
		    randomBGTextureN = Math.floor(Math.random()*randomBGTexture.length);
			panoramaMesh.material.map = THREE.ImageUtils.loadTexture( randomBGTexture[randomBGTextureN] );
			panoramaMesh.material.needsUpdate = true;
			BGTextureMSS00 = ( ',' + randomBGTexture[randomBGTextureN] );

			if( randomTO2 > 0 ) {

		 		clearTimeout(timeout);
		 		randomTO2 = 0;

		 	};

				timeout = setTimeout(function() { saveRandomBGT(); }, 5000);
				randomTO2 = 1;

		});



		function saveRandomGT() {

			GTextureMSS0 = 1;

			MSS.splice( 0, 1, GTextureMSS0 + GTextureMSS00 );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

		};

		function saveRandomBGT() {

			BGTextureMSS0 = 1;

			MSS.splice( 1, 1, BGTextureMSS0 + BGTextureMSS00 );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

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

  				textureX = THREE.ImageUtils.loadTexture( imgTrans );
				textureX.repeat.set( 1 / 30, 1 / 30 );
				textureX.offset.set( -0.19, -0.17 );
				materialX = new THREE.MeshLambertMaterial( { map: textureX, transparent: true, opacity: 0.85 } );
				shaderMatVar = 1;
				chromeImg = 1;

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

			};

		};
	 };













// *****************************   Config Box Remastered   *******************************



		var colourAdd = 0;
		var siteClickVar = 0;
		var fileSystemVar = 0;
		var fileSys0;
		var fileSys1;
		var fileSysName;
		var objHref;
		var objImg;
		var objId;
		var htmlBox;
		var linkImgData;
		var imageSize;
		var active;
		var objSwish;
		var dandilion = 2;
		var img1BF = 1;
		var abcVar2;
		var uniVar1;
		var uniVar2;
		var failSafe = 1;
		var failSafe2 = 1;
		var imgTrans;
		var shaderMergeMat;
		var shaderMergeMat0;
		var plane0;
		var abcMotion;
		var abcMeshX = 1;
		var shaderMatVar;
		var texture000;
		var url2;
		var foundURl = 1;
		var errorDom = 1;
		var safeFail = 1;

		var Img4 = document.getElementById("previewBox4");
		var Img4T = document.getElementById("previewBox4Text");
		var Img5 = document.getElementById("googleSearchImage");
		var save = document.getElementById("save");
		var domain = "";
		var $linkBox = $('#linkBox');
		var $linkTextbox = $('#linkURL');
		var $siteName = $('#previewBox4');
		var $wheelBorder = $('#wheelBorder');
		var $wheelBorder2 = $('#wheelBorder2');
		var $mColour = $("#markerColour");
		var $fColour = $("#fontColour");
		var $canvasT = $("#canvasT");
		var $Img4T = $("#Img4T");
		var imageDemo = document.getElementById("imageDemo");
		var imageDemo2 = document.getElementById("imageDemo2");




	// Custom Coloured Marker


		markerColour();

		function markerColour() {

		  $( "#markerColour" ).one('click',function() {

			$wheelBorder.css('display', 'inline' );
			markercolourOff();
			fontColour();
			$wheelBorder2.css('display', 'none' );
			document.getElementById("linkURL").value = "";
			$linkBox.fadeOut('fast');

			  $(document).ready(function() {

    				var picker = $.farbtastic('#picker');
    					picker.linkTo(function onColorChange(colorFF) {

    						$( '#markerColour' ).css('background-color', colorFF);
    						$( '#previewBox4' ).css('background-color', colorFF);
    						colourFF();

    		  		})
  				});
  				});
			};



		function markercolourOff(){

		  $( "#markerColour" ).one('click',function() {

			$wheelBorder.css('display', 'none' );
			markerColour();

			});
		};



		fontColour();

		function fontColour() {


		  $( "#fontColour" ).one('click',function() {

			$wheelBorder2.css('display', 'inline' );
			fontcolourOff();
			markerColour();
			$wheelBorder.css('display', 'none' );
			document.getElementById("linkURL").value = "";
			$linkBox.fadeOut('fast');


			  $(document).ready(function() {

    			var picker2 = $.farbtastic('#picker2');


    					picker2.linkTo(function onColorChange2(colorFFF) {

    						$( '#previewBox4Text' ).css('color', colorFFF);
    						$( '#fontColour' ).css('background-color', colorFFF);
    						colourFFF();

					});
  				});
  			});
		};


				canvasT = document.getElementById("canvasT")
			    canvasTX = canvasT.getContext('2d');



			function colourFF() {

				colorFF = $( '#previewBox4' ).css('background-color');
				canvasTX.fillStyle  = colorFF;
				canvasTX.fillRect  (0,   0, 350, 350);
		//		markerColoursSet2();

			};

			function colourFFF() {

		 		colorFFF = $( '#previewBox4Text' ).css( "color" );
				canvasTX.fillStyle = colorFFF;

			};


			function fontcolourOff(){

				$( "#fontColour" ).one('click',function() {

				fontColour();
				$wheelBorder2.css('display', 'none' );

				});
			};



		function closeBoxFunction() {

			if( matrixBoxOpen == 1 ) {

				matrixBoxOpen = 0;
				saveMatrixChange();

			};

			$('#backlight2').fadeOut('slow');
			$('#matrixSelectionBox').fadeOut('slow');
			$('#settingsClose').fadeOut('slow');
			$('#matrixSelectionBox').fadeOut('slow');
			$('#fileSystemBox').fadeOut('slow');
			$('#configBox').fadeOut('fast');
			$siteName.fadeOut('slow');
			$wheelBorder.fadeOut('slow');
			$wheelBorder2.fadeOut('slow');
			$backlight2.fadeOut('slow');
			$linkBox.fadeOut('fast');
			$( "#deleteButtonM" ).fadeOut('slow');
			$('#configBoxSelection').fadeOut('fast');
			$( "#configAppsBox" ).fadeOut('fast');
			$( "#bookmarksBox12" ).fadeOut('fast');
			$( "#deleteButtonA" ).fadeOut('slow');
			$( "#deleteButtonA" ).css('top','74%');
			$("#deleteButtonAA").fadeOut('slow');
			document.addEventListener( 'mousedown', onDocumentMouseDownM2, false );
			markerColour();
			fontColour();
			bookmarksBox12bl();
			bookmarkSwitch = 2;
			eventOFF = 0;

			function timeout() {

				$('#notificationMessage').css('display','none');
				$( "#addButtonCover" ).css('display','inline');
				$( "#previewBox12" ).attr('src','Globe Resources/transparent.png');
				$( "#SiteURL12" ).val('');
				$( "#linkURL" ).val('');
				$( "#SiteName" ).val('');


			};

				setTimeout(timeout,1000);

		};



       		$( "#removeImage" ).click(function() {

				$( "#previewBox12" ).attr('src','Globe Resources/transparent.png');
				$( "#infoButton3" ).css('display','none');
				$( "#addButtonCover" ).css('display','inline');
				$( "#SiteURL12" ).val('');
				$( "#infoButton3" ).css('top','47%');

				document.getElementById("SiteName").value = "";
				document.getElementById("linkURL").value = "";
				$('#notificationMessage').css('display','none');
				$linkBox.fadeOut('fast');
				$siteName.css('display', 'none' );
				$wheelBorder.css('display', 'none' );
				$wheelBorder2.css('display', 'none' );
				$('#infoButton6').css('display','none');
				resetCustomBoxColours();
				markerColour();
				fontColour();

			 	$( '#markerColour' ).css('background-color', '#333333');
    			$( '#previewBox4' ).css('background-color', '#333333');
    			$( '#previewBox4Text' ).css('color', '#ffffff');
    			$( '#fontColour' ).css('background-color', '#333333');
			 	Img4T.innerHTML = ' ';
			 	canvasTX.fillStyle = '';
			 	$( "#loadingCover" ).css('display','inline');

		});




		var area;
		var resetLink = 0;
		var siteUrl;
		var searchIdx;
		var errorVar;
		var uriVar;
		var markerImageVar;
		var siteImg;
		var siteId;
		var faviconLoaded = 0;



		$( "#addButton" ).click(function() {

				document.addEventListener( 'mousedown', onDocumentMouseDownM2, false );
				eventOFF = 0;
				chromeAppVar = 0;
				$( "#addButtonCover" ).css('display','inline');
				imgTrans = siteImg;
				detectTransparency();

			function timeout0() {

				addMarkerFunction();
				saveMarkerFunction();
				settingsClose();

			};
				setTimeout(timeout0,300);

			function timeout() {

				$( "#previewBox12" ).attr('src','Globe Resources/transparent.png');
				$('#notificationMessage').css('display','none');
				$( "#SiteURL12" ).val('');
				$( "#linkURL" ).val('');
				closeBoxFunction();
				resetCustomBoxColours();

			};
				setTimeout(timeout,1500);

		});




		$('#backlight2').click(function(){

			$( "#bookmarksBox12" ).fadeOut('fast');
			$( "#configAppsBox" ).fadeOut( "fast" );
			$("#modeSelectionBox").fadeOut('slow');
			$('#configBox').fadeOut('fast');
			$('#backlight2').fadeOut('fast');
			$('#settingsClose').fadeOut('fast');
			$( "#configBoxSelection" ).fadeOut( "fast" );
			document.addEventListener( 'mousedown', onDocumentMouseDownM2, false );
			eventOFF = 0;

			function timeout() {

					closeBoxFunction();
					resetCustomBoxColours();
					$('#notificationMessage').css('display','none');

			};
				setTimeout(timeout,1500);


		});



		$( "#fromLink" ).click(function() {

			$( "#backlightLink" ).fadeIn('slow');
			$( "#linkBox" ).fadeIn('fast');
			$( "#linkURL" ).focus();

		});

		$( "#markerColour" ).click(function() {

			$("#previewBox4").css('z-index','20');
			$( "#backlightWheel" ).fadeIn('fast');

		});

		$( "#fontColour" ).click(function() {

			$("#previewBox4").css('z-index','20');
			$( "#backlightWheel" ).fadeIn('fast');

		});

		$( "#backlightWheel" ).click(function() {

			$( "#backlightWheel" ).fadeOut('fast');
			$( "#wheelBorder" ).fadeOut('fast');
			$( "#wheelBorder2" ).fadeOut('fast');

		});


		function resetCustomBoxColours() {

			$( '#markerColour' ).css('background-color', '#333333');
    		$( '#previewBox4' ).css('background-color', '#333333');
    		$( '#previewBox4Text' ).css('color', '#ffffff');
			$( '#fontColour' ).css('background-color', '#333333');
		 	$( '#previewBox4Text' ).html('');
		 	canvasTX.fillStyle = '';

	 	};



		$( "#addButton2" ).click(function() {

			if( resetLink > 0 ) {

				resetLink = 0;
				$("#linkURL").val('');
				$("#warningLinkText").css('display','none');
				$("#addButton2").html('Confirm');
    			$("#addButton2").css('padding','5px 0px 2px 22px');
    			$("#addButton2").css('width','12%');
    			$("#infoButton33").css('display','none');

			}else {

				$( "#loadingCover" ).css('display','none');
				val = $('#linkURL').val();
				$("#imgTest").attr("src", val);
    			height = $("#imgTest")[0].naturalHeight;
    			width = $("#imgTest")[0].naturalWidth;
    			area = ( height * width );

    			if( area < 1 ) {

    				$("#infoButton33").css('display','inline');
    				$( "#loadingCover" ).css('display','inline');

    			}else {

    		function timeout() {

    			if( area > 500000 ) {

    				resetLink = 1;
    				$("#warningLinkText").css('display','inline');
    				$("#infoButton33").css('display','none');
    				$("#addButton2").html('Reset');
    				$("#addButton2").css('padding','5px 0px 2px 24px');
    				$("#addButton2").css('width','10%');
    				$( "#loadingCover" ).css('display','inline');

    			}else {

    				siteImg = $("#linkURL").val();
    				$("#coverLinkButton").css('display','none');
    				$("#warningLinkText").css('display','none');
    				$( "#backlightLink" ).fadeOut('slow');
    				$("#infoButton33").css('display','none');
    				$('#linkBox').fadeOut('fast');
    				$( "#previewBox12" ).attr('src',val);
    				$( "#previewBox4" ).css('z-index', '18');
    				$("#linkURL").val('');
    				Img4T.removeAttribute('src');
    				$( "#loadingCover" ).css('display','inline');

    			};

    		};
    			setTimeout(timeout,1000);
    	};
    };

    		$( "#infoButton3" ).css('display','none');
  			$( "#infoButton3" ).css('top','47%');

			if( siteUrl.length > 0 ) {

 				$( "#addButtonCover" ).css('display','none');

			};

		});




		$( "#backlightLink" ).click(function() {

			$("#linkURL").val('');
			$("#warningLinkText").css('display','none');
			$( "#backlightLink" ).fadeOut('slow');
			$( "#linkBox" ).fadeOut('fast');
			$("#infoButton33").css('display','none');

		});



			$( "#SiteName" ).keydown(function() {

				Img4T.setAttribute('background', document.getElementById("SiteName").value );
				Img4T.innerHTML = document.getElementById("SiteName").value;
				htmlBox = document.getElementById("SiteName").value;
				$Img4T.css('display', 'inline' );
				$( "#loadingCover" ).css('display','inline');

				$( "#previewBox4" ).css('z-index', '20');
				$( "#previewBox4" ).css('display', 'inline');
  				markerImageVar = 3;

       			if( siteUrl.length > 0 ) {

 					$( "#addButtonCover" ).css('display','none');
 					$( "#infoButton3" ).css('display','none');
  					$( "#infoButton3" ).css('top','47%');

 				}else {

 					$( "#addButtonCover" ).css('display','inline');

 				};

       		});


       		$( "#SiteName" ).focus(function() {

       			siteNameLen = $( "#SiteName" ).val().length;

       			if( siteNameLen > 0 ) {

       				$( "#previewBox4" ).css('z-index', '20');
					$( "#previewBox4" ).css('display', 'inline');
					$( "#infoButton3" ).css('display','none');
  					$( "#infoButton3" ).css('top','47%');
  					markerImageVar = 3;

  					if( siteUrl.length > 0 ) {

 						$( "#addButtonCover" ).css('display','none');

 					}else {

 						$( "#addButtonCover" ).css('display','inline');

 					};

       			};

       		});


       		$('#SiteURL12').keyup(function(e){

    			if( e.keyCode == 13  ) {

      				siteUrlLoad();

   				 };

			});



       		$( "#SiteURL12" ).focus(function() {

				$( "#SiteName" ).val('');
				resetCustomBoxColours();
				$( "#previewBox4" ).css('z-index', '18');
				markerImageVar = 1;

       		});


       		  $( "#addButtonCover" ).click(function() {

				$( "#infoButton3" ).css('display','inline');

			 });



			$( "#SiteURL12" ).focusout(function() {

				siteUrlLoad();

			});



			function siteUrlLoad() {

				errorVar = 0;
				searchIdx = 0;
				faviconLoaded = 0;
				siteUrl = $( "#SiteURL12" ).val();
				siteUrlF = siteUrl.substr(0, 8);

				if( siteUrl.length > 0 ) {

					$( "#loadingCover" ).css('display','none');

				};


				if( siteUrlF == 'file:///' ) {

				 	fileSys0 = siteUrl.substring(siteUrl.lastIndexOf("/") + 1);
    				fileSys1 = fileSys0.substring(fileSys0.lastIndexOf(".") + 1);
    			 	fileSysName = fileSys0.substr( 0, (fileSys0.length - (fileSys1.length + 1)) );
    			 	fileSys1 = fileSys1.toUpperCase();
    			 	siteImg = ( 'Globe Resources/FileIcons/icon' + fileSys1 + '.png' );


    			 	$( "#previewBox12Test" ).attr('src',siteImg);

					$( "#previewBox12Test" ).on("error", function () {

  					 	errorVar = 1;

 				 	});


 				 	function timeout4() {

    			 		if( errorVar < 1 ) {

    	 					$( "#previewBox12" ).attr('src',siteImg);
    	 					$( "#loadingCover" ).css('display','inline');
    	 					$( "#addButtonCover" ).css('display','none');

						}else {

							$( "#previewBox12" ).attr('src','Globe Resources/errorimage.png');
    	 					$( "#loadingCover" ).css('display','inline');

						};
					};
						setTimeout(timeout4, 500);

				}else {

					siteValArr = siteUrl.split('.');
					siteValVar = siteUrl.indexOf('//www.')

					if( siteValVar < 0 ) {

						siteIdx0 = siteUrl.substr(0, siteUrl.indexOf('//'));
						siteIdx1 = siteUrl.substr((siteIdx0.length + 2), (siteUrl.indexOf('.') - siteIdx0.length - 2));
						siteValArr.push(siteIdx1);

					};

					siteValArrLen = siteValArr.length;


					function timeout() {

						errorVar = 0;

						if( searchIdx < siteValArrLen ) {

							siteDomain = siteValArr[searchIdx];
							markerIdx = markerArr.indexOf(siteDomain);

							if( markerIdx < 0 ) {

								errorVar = 1;

							};

 					 		function timeout2() {

 					 			if( errorVar < 1 ) {

 					 	//			stringVar = ( siteDomain + 'ICON' );
 					 		//		firebaseImg = window[stringVar];
 					 				siteImg = ('Markers/' + siteDomain + '.png');
 					 				$( "#previewBox12" ).attr('src',siteImg);
 					 				$( "#infoButton3" ).css('display','none');
 					 				$( "#infoButton3" ).css('top','47%');
 					 				$( "#loadingCover" ).css('display','inline');
 					 				markerImageVar = 1;


    	 							if( siteDomain == "facebook" || siteDomain == "gmail" ) {

    	 								$('#notificationMessage').css('display','inline');

    	 							};

 					 				if( siteUrl.length > 0 ) {

 					 					$( "#addButtonCover" ).css('display','none');

 					 				};

 					 			}else {

 					 				searchIdx = ( searchIdx + 1 );
 					 				setTimeout(timeout,0);

 					 			};

 					 		};
 					 			setTimeout(timeout2,50);

						}else {


							function timeout3() {

								if( faviconLoaded < 1 ) {

									$( "#previewBox12" ).attr('src','Globe Resources/errorimage.png');
  									$( "#addButtonCover" ).css('display','inline');
  									$( "#loadingCover" ).css('display','inline');
  									$( "#infoButton3" ).css('top','18%');

								};
							};

							if( siteUrl.length > 0 ) {

								setTimeout(timeout3,2000);

							};

							testUrl = ( 'http://www.google.com/s2/favicons?domain=asd234sfjadaafhgsd4hejgfdas3242as' );
							favUrl = ( 'http://www.google.com/s2/favicons?domain=' + siteUrl );
							$( "#previewBox12Test" ).attr('src',favUrl);

								getDataUri(favUrl, function(dataUri) {

  									uriVar = dataUri;

  									getDataUri(testUrl, function(dataUri) {

  										if( dataUri == uriVar ) {

  											$( "#previewBox12" ).attr('src','Globe Resources/errorimage.png');
  											$( "#addButtonCover" ).css('display','inline');
  											$( "#loadingCover" ).css('display','inline');
  											$( "#infoButton3" ).css('top','18%');

  										}else {

  											faviconLoaded = 1;
  											$( "#previewBox12" ).attr('src','http://www.google.com/s2/favicons?domain=' + siteUrl);
  											$( "#infoButton3" ).css('display','none');
  											$( "#loadingCover" ).css('display','inline');
  											$( "#infoButton3" ).css('top','47%');
  											siteImg = ( 'http://www.google.com/s2/favicons?domain=' + siteUrl );
  											markerImageVar = 2;

  											if( siteUrl.length > 0 ) {

 					 							$( "#addButtonCover" ).css('display','none');

 					 						};

  										};

									});

								});

							};

						};
							setTimeout(timeout,0);
					};
				};



		function getDataUri(url, callback) {

   	 		var image = new Image();

   	 		image.onload = function () {

       			var canvas = document.createElement('canvas');
        			canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        			canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        			canvas.getContext('2d').drawImage(this, 0, 0);

        			callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
        			callback(canvas.toDataURL('image/png'));

    			};

   					 image.src = url;

			};




			function addMarkerFunction() {

				id = siteId;
				url = siteUrl;
				img = siteImg;
				addMarkerVar = 1;
			//	SAname = siteId;

				if( markerImageVar < 3 ) {

					texture = THREE.ImageUtils.loadTexture( img );
					texture.repeat.set( 1 / 30, 1 / 30 );
					texture.offset.set( -0.19, -0.17 );
					oneFunction12();

				}else {

					colourFF();
					colourFFF();
					textContent = $( "#SiteName" ).val();
					canvasT = document.getElementById("canvasT")
			    canvasTX = canvasT.getContext('2d');
			   	x = canvasT.width / 2;
      		y = canvasT.height / 1.6;
			    canvasTX.font="700 42px Arial";
			    canvasTX.textAlign = 'center';
					canvasTX.fillText( textContent , x, y);
					canvasTX.width = $('#previewBox4').width();
   				canvasTX.height = $('#previewBox4').height();
   				siteImg = canvasTX.canvas.toDataURL();
   				texture = THREE.ImageUtils.loadTexture( siteImg );
					texture.repeat.set( 1 / 30, 1 / 30 );
					texture.offset.set( -0.19, -0.17 );
					oneFunction13();

				};

			//		createDeleteButton();

			};




			function saveMarkerFunction() {

				objId = siteId;
				objHref = siteUrl;
				objImg = siteImg;

				arr = [];
				arr.push( objId, objHref, objImg );
				saveFunction1();

			};




		var prevDefinition;

		// Render Definition System


		$('#definitionButton').click(function() {

			prevDefinition = definitionMSS;
			val = ( 30 - definitionMSS * 10 );
			$('#definitionSlider').val(val);
			$('#tab_container').fadeOut('fast');
			$('#definitionBox').fadeIn('slow');

		});



		$('#definitionSlider').change(function() {

			val = (Math.round((((26 - $(this).val())/10) + 0.4)*10)/10);
			definitionMSS = val;

			MSS.splice( 22, 1, definitionMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

			console.log(MSS);

		});


		$('#definitionConfirm').click(function() {

 		//	if( background.MSS == null ) {

 						MSS = [ 	(GTextureMSS0 + GTextureMSS00),
				 			   		(BGTextureMSS0 + BGTextureMSS00),
				 			   		ShadowMSS,
				 			   		"1",
				 			   		"1",
				 			   		cameraMSS,
							   		(GColMSS0 + ',' + GColMSS00),
 									(GGlowColMSS0 + ',' + GGlowColMSS00),
							   		"0",
		 					   		"0",
				 			   		"0",
				 			   		"1",
				 			   		(one + ',' + two + ',' + three + ',' + four + ',' + five),
				 			   		"Z",
				 			   		"0,261,1,0x11d5c8",
				 			   		"0,0",
				 			   		"1",
				 			   		"0.07",
				 			   		backgroundMSS,
				 			   		particleMSS,
				 			   		nerfMSS,
				 			   		previewMSS,
							   		definitionMSS,
				 			   		trianglesMSS,
				 			   		modeMSS,
				 			   		feedback2MSS,
				 			   		definitionCheckMSS,
										searchEngineMSS,
										nameMSS ];

 							chrome.storage.sync.set({'MSS0': MSS}, function() {

 						});

						console.log(MSS);


 		//		};

 			function timeout() {

				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

 					chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

 				});

			};
				setTimeout(timeout,500);

		});


		$('#revertYes').click(function() {

			definitionCheckMSS = 2;
			eventOFF = 0;

			MSS.splice( 26, 1, definitionCheckMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

 			$('#revertDefinitionBox').fadeOut('slow');
 			$('#backlight3').fadeOut('slow');
 			$( "#backlight12" ).fadeOut('slow');
			$( "#backlight12" ).css('z-index','12');

		});


		$('#revertNo').click(function() {

			definitionCheckMSS = 0;

			MSS.splice( 26, 1, definitionCheckMSS );

 				chrome.storage.sync.set({'MSS0': MSS}, function() {

 			});

 			function timeout() {

				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

 					chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

 				});

			};
				setTimeout(timeout,300);

		});


        if( mode1Tut == 1 ) {

         	textureMasterLoader();
					themeSelectorT();

        };





							// Globe Mode System


									$('#selectModeMenu').click(function(){

											$('#modeSelectionBox').fadeIn('slow');
											$('#backlight2').fadeIn('fast');
											$('#backlight2').css('z-index','300');
											$('#settingsBox').css('z-index','300');
											$('#settingsBox').fadeOut('fast');

									});

									$('#mode1Box').click(function(event) {

											$('#modeSelectionBox').fadeOut(800);

											modeMSS = 1;
											MSS.splice( 24, 1, modeMSS );

											if( TutorialMSS == 1 ) {

												chrome.storage.sync.set({'MSS0': MSS}, function() {

													selectYourTheme();

												});

											}else {

												chrome.storage.sync.set({'MSS0': MSS}, function() {

													reloadGlobe();

												});

											};

									});


									$('#mode2Box').click(function(event) {

											$('#modeSelectionBox').fadeOut(800);

											modeMSS = 2;
											MSS.splice( 24, 1, modeMSS );

											if( TutorialMSS == 1 ) {

												chrome.storage.sync.set({'MSS0': MSS}, function() {

													newsModeSetup();

												});

											}else {

												chrome.storage.sync.set({'MSS0': MSS}, function() {

													reloadGlobe();

												});

											};

									});
