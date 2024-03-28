

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







// *** *** *** *** *** *** *** *** *** *** ***     Globe Master Storage System - Storer    *** *** *** *** *** *** *** *** *** *** *** ***





// Marker Save & Delete Functions


      	function saveFunction1() {

        	id0 = arr[0];
        	url1 = arr[1];
        	img2 = arr[2];


				obj = { id:id0, url:url1, img:img2 };


        		if( markerImageVar < 3 ) {

        			Mval = Mval2;
        			Mval.push(obj);

        			chrome.storage.sync.set({'value': Mval}, function() {

       			 });

       			 		id = obj.id;
 					 	storage = chrome.storage.sync;
					 	objj= {};
						objj[id] = obj;
						storage.set(objj);


        		}else {


        			chrome.storage.sync.get({'kbA': kbArr}, function(data) {


 				 		kbArr = data.kbA;
 				 		id = obj.id;
        				kbArr.push(id);


 				 	chrome.storage.sync.set({'kbA': kbArr}, function() {

 				 		});


 				});

 					 	id = obj.id;
 					 	storage = chrome.storage.sync;
					 	objj= {};
						objj[id] = obj;
						storage.set(objj);

    	};


      };




			function deleteFunction1() {

					meshId = editID0;

					chrome.storage.sync.get({'kbA': kbArr}, function(data) {

        				kb = data.kbA;
        				found = $.inArray(meshId, kb);

						if(found == -1) {

							chrome.storage.sync.get({'value': Mval2}, function(data){

								array = data.value;

									array.forEach(function(obj) {

   									idO = obj.id;

										if(meshId == idO){

											result = $.grep(array, function(e){ return e.id == idO; });
											idx = result[0];
											idx2 = array.indexOf(idx);
											array.splice(idx2,1);
											idx01 = GC4Arr.indexOf(idO);
											GC4Arr.splice(idx01,1);
											Mval2 = array;

												chrome.storage.sync.set({'value': Mval2}, function() {

       			 							});

       			 							SAidx = TransparentMSS.search( idO );
											SAlen = idO.length;

												if ( SAidx > -1 ) {

													TransparentMSS10 = TransparentMSS.substr( 0 , (SAidx - 1) );
													TransparentMSS11 = TransparentMSS.substr( (SAidx + SAlen)  , TransparentMSS.length );
   							 						TransparentMSS12 = ( TransparentMSS10 + TransparentMSS11 );
   							 						TransparentMSS = TransparentMSS12;

												};

											MSS.splice( 13, 1, TransparentMSS );

 												chrome.storage.sync.set({'MSS0': MSS}, function() {

 											});

 												TransparentMSS = MSS[13];

										};
 				 					});
 								});

							}else {

								index = kb.indexOf(meshId);

									if (index >= 0) {

  										kb.splice( index, 1 );

									};

										chrome.storage.sync.set({'kbA': kb}, function() {

									});


										chrome.storage.sync.remove(meshId, function() {

									});
								};
							});
						};





// Chrome App Marker Function


			function chromeAppsGet() {

				calledCApps = 2;

				chrome.management.getAll(function(data) {

   				data.forEach(function(item) {

       			  if( item.type == "hosted_app" || item.type == "packaged_app" || item.type == "legacy_packaged_app" ){

       			  	item2 = item.icons;
       			  	length = item2.length;
       			  	index = ( length - 1 );
       			  	url = item2[index].url;

       			 	  name = item.name;
       			  	type = item.type;
       			  	appID = item.id;


       			  		element = $('<div id="' + name + '"; href="' +  appID + '";  data-type="' + type + '" class="appse"; style="top: -5%; background-image: url(' + url + '); float: left; opacity: 0.9; position: relative; background-size: contain; background-repeat: no-repeat; margin-left: 9%; margin-top: 12%; height: 25%; width: 14%;"></div>');
       			  		element2 = $('<div id="' + name + '"; style=" position: relative; left: 0%; top: 80%; height: 40%; width: 80%; text-align: center; line-height: 13px; overflow-y: auto;  font-size: 9px; color: #ffffff; margin-left: 9%; margin-top: 10%;  font-family: Avenir Next !important; font-weight: 100;">'+ name +'</div>');

            	 		$( "#configAppsBox" ).append(element);
            	 		element.append(element2);

            	 			element.click(function(){

            	 				href = $(this).attr('href');
								      name = $(this).attr('id');
								      type = $(this).attr('data-type');
								      style = this.currentStyle || window.getComputedStyle(this, false),
   								    icon = style.backgroundImage.slice(5, -2);
								      $('#'+ SAname).attr('href', href);
                      GC4Arr.push(SAname);
                      chromeVar2 = 2;
   								    chromeAppVar = 1;
   								    imgTrans = icon;
								      detectTransparency();


						  function timeout0() {

								meshX = new THREE.Mesh( geo, shaderMergeMat);
								GlobeContainer4.add( meshX );
								objSwish = meshX;

								meshX.position.set(pos2x,pos2y,pos2z);
								meshX.rotation = obj1.rotation;
								meshX.scale.set(-1,1,-1);
								meshX.lookAt( vectorGP );

                console.log(SAname);
								objId = SAname;
								objHref = ( type + '**' + href );
								objImg = icon;
								SAimg = objImg;
								SAimg2 = name;
								SAname = objId;
								markerImageVar = 1;
								url = objHref;
								meshX.data = objHref;
      //          createDeleteButton();

								if( name == "Gmail" ) {

									objHref = ( type + '***' + href );
									meshX.data = objHref;
									createNotification();
									notificationCheck();

								};

								if( editID0 === SAname ) {

									deleteFunction1();

								};

							function timeout() {

        /*        if( GC4Arr.length > 0 && delButtonVar == 1 ) {

                  deleteLen = ( GlobeContainer4.children.length - 1 );

                  GC4Arr.forEach(function(id) {

                    markerDelVar = 0;
                    ele = GlobeContainer4.children[deleteLen];
                    ele.visible = false;
                    deleteLen = ( deleteLen - 1);

                  });

                };    */


								meshX.name = objId;
								meshX.data = objHref;
								markerAnimation1();
								closeBoxFunction();
								meshXFunction();

								arr = [];
								arr.push( objId, objHref, objImg );
								saveFunction1();
								eventOFF = 0;

								if( appMarkerSA > 0 ) {

									appMarkerSA = 0;			//	** Potentially Discontinued **

								};

							};
								setTimeout( timeout, 100 );

						};
								setTimeout( timeout0, 100 );



						});
       			 	};
    			});
 		 	});

		};








    // Globe Colour Storage and Reset


    	function sphereColourPicker() {

    				var picker4 = $.farbtastic('#picker4');
    					picker4.linkTo(function onColorChange(colorLL) {

							colorLL2 = colorLL.replace('#','').replace('','');
							colorLL3 = '0x' + colorLL2;

							document.addEventListener( 'mouseup', mouseUpColour2, false );
    			 			colD = colorLL3;

    		  		});


    		  			function mouseUpColour2( event ) {

    		  				document.removeEventListener( 'mouseup', mouseUpColour2, false );

								 	if( colD != colDD ) {

										r = hexToRgb(colorLL2).r/100;
										g = hexToRgb(colorLL2).g/100;
										b = hexToRgb(colorLL2).b/100;

										if( themeColVar < 2 ) {

											hemiLight.color.r = r;
											hemiLight.color.g = g;
											hemiLight.color.b = b;

											Lighting2MSS2 = colorLL3;
											GColMSS0 = colorLL3;

											MSS.splice( 6, 1, GColMSS0 + ',' + GColMSS00 );

												chrome.storage.sync.set({'MSS0': MSS}, function() {

 											});


										}else

											hemiLight.groundColor.r = r;
											hemiLight.groundColor.g = g;
											hemiLight.groundColor.b = b;

											Lighting2MSS3 = colorLL3;
											GColMSS00 = colorLL3;

											MSS.splice( 6, 1, GColMSS0 + ',' + GColMSS00 );

												chrome.storage.sync.set({'MSS0': MSS}, function() {

 											});

 									};
								};
       						};




   			function resetGlobeColour() {

   					hemiLight.color.r = 0;
					hemiLight.color.g = 0;
					hemiLight.color.b = 0;
					hemiLight.groundColor.r = 0;
					hemiLight.groundColor.g = 0;
					hemiLight.groundColor.b = 0;

					$("#colourSlider12").val( 0 );

					MSS.splice( 12, 1, onetofour + '0,0x000000,0x000000' );

 							chrome.storage.sync.set({'MSS0': MSS}, function() {

 						});

    			};



		var r, g, b;

		function hexToRgb(hex) {

   			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

   				return result ? {
       			r: parseInt(result[1], 16),
        		g: parseInt(result[2], 16),
       			b: parseInt(result[3], 16)

    				} : null;
				};





	// Globe Glow Colour Selector



		function glowColourPicker() {

				 picker5 = $.farbtastic('#picker5');
    			 picker5.linkTo(function onColorChange(colGlow) {

    			 	if( globeTheme4Var3 < 1 ) {

    			   		document.addEventListener( 'mouseup', mouseUpColourGlow, false );

    			 			GGlowColMSS00 = ( '0x' + colGlow.substr(1, colGlow.length));
    			 			GGlowColMSS000 = Number(GGlowColMSS00);
							GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(GGlowColMSS000);
							GlobeGlow.material.needsUpdate = true;

    					};
    			});

    		};



    			function mouseUpColourGlow( event ) {

    					document.removeEventListener( 'mouseup', mouseUpColourGlow, false );

								MSS.splice( 7, 1, "1," + GGlowColMSS00 );

 									chrome.storage.sync.set({'MSS0': MSS}, function() {

 								});

 						};




 			function resetGlobeGlow() {


   				if( GGlowColVar2 < 2 ) {


   					GlobeGlow.material.uniforms.glowColor.value = new THREE.Color(0x525151);
					GlobeGlow.material.needsUpdate = true;

					MSS.splice( 7, 1, "1,0x525151" );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 					});

				}else if( GGlowColVar2 < 3 ){

					GGlowColVar2 = 1;
					scene.remove(GlobeGlow);
					$('#glowToggle').prop('checked', false);

					MSS.splice( 7, 1, "0,0x525151" );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 					});

				}else {

					GlobeGlowSF = 1.36;
					createGlobeGlow();
	 				GGlowColVar2 = 1;
	 				$('#glowToggle').prop('checked', true);

    				MSS.splice( 7, 1, "1," + GGlowColMSS00 );

 						chrome.storage.sync.set({'MSS0': MSS}, function() {

 					});

				};
    		};







          // *** *** *** *** *** *** ***   Licensing + Extension handling   *** *** *** *** *** *** ***


              // Identity API


            function identityAPI() {

              chrome.identity.getAuthToken({'interactive': true}, function(token) {

            		console.log('Token:' + token);
            		token2 = token;
            		verifyLicence();

        		});

          };


            	// Token & Licensing

            		var licenseCode;

            		function verifyLicence() {

            			var CWS_LICENSE_API_URL = 'https://www.googleapis.com/chromewebstore/v1.1/userlicenses/';
            			var req = new XMLHttpRequest();
            				req.open('GET', CWS_LICENSE_API_URL + chrome.runtime.id);
            				req.setRequestHeader('Authorization', 'Bearer ' + token2);
            				req.onreadystatechange = function() {

              					if (req.readyState == 4) {

                						license0 = req.responseText;
                						licenseP1 = token2.substr(12,4);
                						licenseP2 = token2.substr(17,4);
                						licenseP3 = token2.substr(32,4);
                						licenseCode = ( licenseP1 + licenseP2 + licenseP3 );

                						function timeout() {

                							license = JSON.parse(license0);
                							licenceHandle();

                						};

                							setTimeout(timeout,500);

              					};
            				};

            					req.send();
            			};


            			var daysLicenced;

            			function licenceHandle() {

            			var licenseStatus;
            			var status = license.accessLevel;
            			var time = license.createdTime;
            			var daysAgoLicenseIssued = (Date.now() - parseInt(license.createdTime, 10));
              				daysAgoLicenseIssued = (daysAgoLicenseIssued / 1000 / 60 / 60 / 24);
              				daysLicenced = Math.round(daysAgoLicenseIssued);
              				licenseCode = (licenseCode + '-' + daysLicenced);

              				val = isNaN(daysLicenced);

                      console.log('Days since licenced: ' + Math.round(daysAgoLicenseIssued));
                      ga('send', 'event', 'User Days Licence 3.0', daysAgoLicenseIssued);

            				if (license.result && license.accessLevel == "FULL") {

              					   console.log("Fully Licensed User");										// ***** Licence level of user ******
              				    licenseStatus = "FULL"

            				}else if (license.result && license.accessLevel == "FREE_TRIAL") {

              					var daysAgoLicenseIssued = Date.now() - parseInt(license.createdTime, 10);
              						daysAgoLicenseIssued = daysAgoLicenseIssued / 1000 / 60 / 60 / 24;
              						daysLeft0 = (14 - daysAgoLicenseIssued);
              						daysLeft = Math.round(daysLeft0);
              					//	console.log('Days left of Free Trial: ' + daysLeft);


              					var HoursAgoLicenseIssued = ( daysAgoLicenseIssued * 24 );
              				//		console.log(HoursAgoLicenseIssued);

              					};

              				  if (daysAgoLicenseIssued >= 14) {

                          // 2 week user

              					}else if( 30 ){

                          // month user

              					};


                    };





// *** *** *** *** *** ***    Systematic Loaders  *** *** *** *** *** *** ***



		function fileLoaderF() {

      headID3 = document.getElementsByTagName("body")[0];
			newScript3 = document.createElement('script');
			newScript3.type = 'text/javascript';
			newScript3.src = 'Globe Files/layout.js';
			headID3.appendChild(newScript3);

			headID3 = document.getElementsByTagName("body")[0];
			newScript3 = document.createElement('script');
			newScript3.type = 'text/javascript';
			newScript3.src = 'Globe Files/toolbarLayout.js';
			headID3.appendChild(newScript3);

      markerDelVarLen = GC4Arr.length;

      if( TutorialMSS == 0 ) {

        setTimeout( timeoutGA, 3000 );

      };

    //  identityAPI();

		};


    function timeoutFileLoader() {

      fileLoaderF();

    };


      $( document ).ready(function() {

        setTimeout(timeoutFileLoader, 800);

      });
