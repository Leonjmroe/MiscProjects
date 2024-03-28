

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


// Pre Load Bookmarks

preLoaderArr = [];

function bookMarksPreLoader() {
	chrome.bookmarks.getTree( getRootFolder );

	function getRootFolder( rootFolder0 ) {
		rootFolder0["0"].children[0].children.forEach(function(ele) {
				loadElement(ele);
		});
		rootFolder0["0"].children[1].children.forEach(function(ele) {
				loadElement(ele);
		});

		function loadElement(ele) {
				if ( ele.children != null ) {
						ele.children.forEach(function(ele) {
								loadElement(ele);
						});
				} else {
						preLoaderArr.push(ele.url);
				};
		};
		preLoaderArr.forEach(function(ele) {
				url = ( "http://www.google.com/s2/favicons?domain=" + ele );
				$("#bookmarksEmpty").append('<li style="list-style-image: url(' + url + ')"></li>');
		});
	};
};



// On Chrome Buttons Click



	$('#recentlyVisited').click(function() {

		$( "#bookmarks" ).css('left','-64%');
		$( "#chromeApps" ).css('left','52%');
		$( "#chromeApps" ).fadeIn('fast');
		$( "#recentlyVisited" ).css('display','none');
		$( "#bookmarks" ).fadeIn('fast');
		$( "#recentlyVisitedBox" ).fadeIn('fast');
		$( "#bookmarksBox" ).fadeOut();
		$( "#extensionsBox" ).fadeOut();
		$( "#chromeAppsBox" ).fadeOut();
		$('#backlight7').fadeIn('fast');
		eventOFF = 1;

	});



	$('#chromeApps').click(function() {

		$( "#bookmarks" ).css('left','-54%');
		$( "#bookmarks" ).fadeIn('fast');
		$( "#recentlyVisited" ).css('left','-30%');
		$( "#recentlyVisited" ).fadeIn();
		$( "#extensions" ).css('left','76%');
		$( "#extensions" ).fadeIn('fast');
		$( "#chromeApps" ).css('display','none');
		$( "#chromeAppsBox" ).fadeIn('fast');
		$( "#bookmarksBox" ).fadeOut();
		$( "#extensionsBox" ).fadeOut();
		$( "#recentlyVisitedBox" ).fadeOut();
		$('#backlight7').fadeIn('fast');
		eventOFF = 1;

	});



	$('#extensions').click(function() {

		$( "#recentlyVisited" ).css('left','-51%');
		$( "#bookmarks" ).css('left','-75%');
		$( "#chromeApps" ).css('left','-27%');
		$( "#extensions" ).css('display','none');
		$( "#bookmarks" ).fadeIn('fast');
		$( "#chromeApps" ).fadeIn('fast');
		$( "#recentlyVisited" ).fadeIn('fast');
		$( "#extensionsBox" ).fadeIn('fast');
		$( "#bookmarksBox" ).fadeOut();
		$( "#chromeAppsBox" ).fadeOut();
		$( "#recentlyVisitedBox" ).fadeOut();
		$('#backlight7').fadeIn('fast');
		eventOFF = 1;


	});



	$('#backlight7').click(function() {

		$( "#extensionsBox" ).fadeOut();
		$( "#recentlyVisitedBox" ).fadeOut();
		$( "#bookmarksBox" ).fadeOut();
		$( "#chromeAppsBox" ).fadeOut('');
		$( "#chromeApps" ).fadeIn();
		$( "#extensions" ).fadeIn();
		$( "#bookmarks" ).fadeIn();
		$( "#recentlyVisited" ).fadeIn();
		$( "#bookmarks" ).css('left','4%');
		$( "#recentlyVisited" ).css('left','28%');
		$( "#chromeApps" ).css('left','52%');
		$( "#extensions" ).css('left','76%');
		$('#backlight7').fadeOut('fast');
		bookmarkSwitch = 1;
		bookmarksBox12bl();
		eventOFF = 0;


	});








	// ***  Master Bookmark System  ***


		var urlBM;
		var imgBM;
		var bbSelector = 1;
		var bookmarkSwitch = 0;
		var parentVal12 = 1;
		var obName120 = 1;
		var bbName120 = 1;
		var bbName12;
		var obName12;
		var bbThis;
		var preOpened1 = 1;
		var preOpened2 = 1;
		var bookSystem;
		var idxFold;
		var bPid0;
		var rootVar;
		var rootFolder;
		var rootFiles;
		var rootIdx0;
		var rootVar = 0;
		var marginVar = 15;
		var mVar = 1;
		var mVar0 = 1;
		var genVar = 0;
		var firstPrince = 2;
		var g2Idx;
		var eleMode;
		var mIdx = 1;
		var bookArr = [];
		var	folderArr = [];
		var	loggedArr = [];
		var	marginArr = [];
		var bbNameArr = [];

		$( "#bookmarks" ).click(function() {

			bookMarksPreLoader();
			initiateBookmarks();

		});


		function initiateBookmarks() {

			if( bookmarkSwitch > 1  ) {

				$( "#bookmarksBox" ).html('');
				$( "#bookmarksBox12" ).html('');
			 	bookmarkSwitch = 0;
				parentVal12 = 1;
		 		obName120 = 1;
		 		bbName120 = 1;
		 		preOpened2 = 1;
				rootVar = 0;
				marginVar = 15;
		 		mVar = 1;
		 		mVar0 = 1;
		 		genVar = 0;
		 		firstPrince = 2;
		 		mIdx = 1;
		 		bookArr = [];
				folderArr = [];
				loggedArr = [];
				marginArr = [];
		 		bbNameArr = [];
		 		val = 1;
		 		g2Idx = null;
		 		eleMode = null;
		 		bookSystem = null;
		 		idxFold = null;
		 		bPid0 = null;
		 		rootVar = null;
		 		rootFolder = null;
		 		rootFiles = null;
		 		rootIdx0 = null;
		 		bbName12 = null;
		 		obName12 = null;
		 		bbThis = null;


			};

			$( "#bookmarks" ).css('display','none');
			$( "#recentlyVisited" ).css('left','28%');
			$( "#recentlyVisited" ).fadeIn('fast');
			$( "#chromeApps" ).css('left','52%');
			$( "#chromeApps" ).fadeIn('fast');
			$( "#extensions" ).css('left','76%');
			$( "#extensions" ).fadeIn('fast');
			$( "#bookmarksBox" ).fadeIn('fast');
			$( "#extensionsBox" ).fadeOut();
			$( "#chromeAppsBox" ).fadeOut();
			$( "#recentlyVisitedBox" ).fadeOut();
			$('#backlight7').fadeIn('fast');
			eventOFF = 1;
			parentVal12 = 1;
			bbSelector = 1;

			if( preOpened1 < 2 ) {

				preOpened1 = 2;
				bookSystem = 1;

				chrome.bookmarks.getTree( getRootFolder );

				function getRootFolder( rootFolder0 ) {

					rootFolder = rootFolder0;
					rootFiles = rootFolder["0"].children;
					appendElements();

				};
			};

		};



		$( "#selectBookmarksBox0" ).click(function() {

				ga('send', 'event', 'Toolbar', 'Bookmarks');

				if( bookmarkSwitch > 0 && bookmarkSwitch < 2 ) {

					$( "#bookmarksBox" ).html('');
					$( "#bookmarksBox12" ).html('');
					bookmarkSwitch = 0;
					parentVal12 = 1;
		 			obName120 = 1;
		 			bbName120 = 1;
		 			preOpened1 = 1;
					rootVar = 0;
					marginVar = 15;
		 			mVar = 1;
		 			mVar0 = 1;
		 			genVar = 0;
		 			firstPrince = 2;
		 			mIdx = 1;
		 			bookArr = [];
					folderArr = [];
					loggedArr = [];
					marginArr = [];
		 			bbNameArr = [];
		 			val = 1;
		 			g2Idx = null;
		 			eleMode = null;
		 			bookSystem = null;
		 			idxFold = null;
		 			bPid0 = null;
		 			rootVar = null;
		 			rootFolder = null;
		 			rootFiles = null;
		 			rootIdx0 = null;
		 			bbName12 = null;
		 			obName12 = null;
		 			bbThis = null;

				};

				$( "#configBoxSelection" ).css('display','none');
				parentVal12 = 1;
				bbSelector = 2;

			if( preOpened2 < 2 ) {

				preOpened2 = 2;
				bookSystem = 2;

				$( "#bookmarksBox12" ).fadeIn(200);

				chrome.bookmarks.getTree( getRootFolder );

				function getRootFolder( rootFolder0 ) {

					rootFolder = rootFolder0;
					rootFiles = rootFolder["0"].children;
					appendElements();

				};

			}else {

				$( "#bookmarksBox12" ).fadeIn(300);

			};
		});



			function bookmarksBox12bl() {

				if( bookSystem > 1 ) {

					$( "#bookmarksBox12" ).fadeOut('fast');

				};

					bbNameArr.forEach(function(ele) {

						if( ele < 1 ) {

							parentVal12 = 2;
							bbThis = bbName12;
							bookFolderFunction();

						}else {

							parentVal12 = 2;
							bbThis = obName12;
							bookFolderFunction();

						};
					});
			  	};



		$(document).on('click', '.bookFol', function(){

			bbThis = this;
			bookFolderFunction();

		});



		function bookFolderFunction() {

			if( firstPrince > 1 )  {

				mIdx = ( mIdx + 1 );

			};

			firstPrince = 1;
			bPid0 = $(bbThis).attr("data-pId");
			bName0 = $(bbThis).attr("name");
			val = $(bbThis).attr("value");


			if( bName0 < 1 ) {

				bbName12 = bbThis;

				if( bbName120 < 2 ) {

					bbNameArr.push(0);

				};
			};


			if( bName0 < 2 && bName0 > 0 ) {

				obName12 = bbThis;

				if( obName120 < 2 ) {

					bbNameArr.push(1);

				};

			};


			marginArr.forEach(function(item0){

				idx = item0.substr(0, item0.indexOf(':'));
				pid = item0.substr(item0.indexOf(':') + 1, item0.length );

				if( bPid0 === pid ) {

					mVar0 = idx;

				};

			});

				mVar = ( Number(mVar0) + 1 );
				mIdx = mVar;
				mVar0 = mVar;
				marginVar = ( 15 * mVar );

				rootVar = 1;
				idxFold  = $(bbThis).attr("name");
				childIdx = folderArr[idxFold];
				rootFiles = childIdx;
				rootFolder = $(bbThis);


				if( val < 1 ) {

					if( parentVal12 < 2 ) {

						$(bbThis).attr("value", "1");
						g2Idx = $(bbThis).attr("data-gIdx");
						appendElements();


					}else {

						$(bbThis).attr("value", "1");
						g2Idx = $(bbThis).attr("data-gIdx");

					};

				}else {

					$(bbThis).attr("value", "0");
					idxFold  = $(bbThis).attr("name");
					unappendElements();

			};
		};




		$(document).on('click', '.bookEle', function(){

				bookmarkVar101 = 1;

			if( bbSelector > 1 ) {

				url = this.id;
				img = this.style.listStyleImage;
				imgBM = img.substr( 5, (img.length - 7 ) );
				img = imgBM;
				urlBM = ( 'Bookmark12' + url );
				url = urlBM;
				id = SAname;
				console.log(id);

				siteClickVar = 1;										// Does this run an error elseware ? ** configbox 1333 **
				shaderMergeMat = 2;
				shaderMatVar = 2;
				markerImageVar = 1;
				addMarkerVar = 1;
				chromeImg = 2;
				bookmarkShader();
				oneFunction12();
				closeBoxFunction();
	//			createDeleteButton();

				if( bbSelector > 2 ) {

					editID0 = id;
					deleteFunction1();
				//	savedArr.push(SAname);

			};


			function timeoutArr() {

					arr = [];
					arr.push( id, url, img );
					saveFunction1();

			};


			setTimeout(timeoutArr, 300);


			}else {

				idUrl = $(this).attr("id");
				bPid0 = $(this).attr("data-pId");
				window.location.href = idUrl;

			};
		});



		function appendElements() {

			if( rootFiles == null ) {

				if( bookSystem < 2 ) {

					$('#bookmarksBox').append('<ul>&nbsp;</ul>');

				}else {

					$('#bookmarksBox12').append('<ul>&nbsp;</ul>');

				};

			}else {

				if( rootVar > 0 ) {

					rootId0 = rootFolder["0"].id;

					if( bookSystem < 2 ) {

						rootLen = $('#bookmarksBox')["0"].children.length;

					}else {

						rootLen = $('#bookmarksBox12')["0"].children.length;

					};

					bookArr = [];


					for( var i = 0; i < rootLen; i++ ) {

						if( bookSystem < 2 ) {

							rootId = $('#bookmarksBox')["0"].children[i].id;


						}else {

							rootId = $('#bookmarksBox12')["0"].children[i].id;

						};

						bookArr.push(rootId);

					};

					rootIdx0 = bookArr.indexOf(rootId0);

				};


				if( firstPrince < 2 )  {

					genRoot = rootFolder["0"].getAttribute('data-gIdx');
					genPos = loggedArr.indexOf(Number(genRoot));

				};


				for( var i = 0; i < rootFiles.length; i++ ) {

					bChildren = rootFiles[i].children;
    				bTitle = rootFiles[i].title;
    				bUrl = rootFiles[i].url;
    				bPid = rootFiles[i].parentId;
    				genIdx = ( genVar + i );


					if( bChildren == null && bUrl !== "chrome://bookmarks/" ) {

						bEle = $('<li id="' + bUrl + '";  class="bookEle";  data-pId="' + bPid + '"; data-gIdx="' + genIdx  + '"; style="border-radius: 4px;  list-style-image: url(http://www.google.com/s2/favicons?domain=' + bUrl + '); margin-left:' + marginVar + 'px; height: 35px; line-height: 35px; overflow-y: auto; text-align: left; font-size: 14px;  font-family: Avenir Next !important; font-weight: 100;">' + bTitle + '</li>');
						rootIdx = ( rootIdx0 + i );

						if( bookSystem < 2 ) {

							$("#bookmarksBox li").eq(rootIdx).after(bEle);

						}else {

							$("#bookmarksBox12 li").eq(rootIdx).after(bEle);

						};

						eleMode = 1;

						if( firstPrince < 2 )  {

							loggedArr.splice(genPos + 1 + i, 0, genIdx);

						}else {

							loggedArr.push(genIdx);

						};

					}else {


						folderArr.push(bChildren);
						foldIdx = (folderArr.length - 1);
						bEle = $('<li id="' + bTitle + '";  class="bookFol"; value="0" name="' + foldIdx + '"; data-pId="' + bPid + '"; data-gIdx="' + genIdx  + '"; style="border-radius: 4px;  list-style-image: url(Globe%20resources/folder.png); margin-left:' + marginVar + 'px; height: 35px; line-height: 35px; overflow-y: auto; text-align: left; font-size: 14px; font-family: Avenir Next !important; font-weight: 100;">' + bTitle + '</li>');
						rootIdx = ( rootIdx0 + i );
						eleMode = 2;

						if( firstPrince < 2 )  {

							loggedArr.splice(genPos + 1 + i, 0, genIdx);
							marginArr.push( mIdx + ':' + bPid );


							if( i > rootFiles.length - 2 ) {

								genIdx = ( genIdx + 1 );
								loggedArr.splice(genPos + 2 + i, 0, genIdx);

							};

						}else {

							loggedArr.push(genIdx);
							marginArr.push( mIdx +':' + bPid );

						};

						if( rootVar > 0 ) {

							rootIdx = ( rootIdx0 + i );

							if( bookSystem < 2 ) {

								$("#bookmarksBox li").eq(rootIdx).after(bEle);

							}else {

								$("#bookmarksBox12 li").eq(rootIdx).after(bEle);

							};

						}else {

							if( bookSystem < 2 ) {

								$('#bookmarksBox').append(bEle);

							}else {

								$('#bookmarksBox12').append(bEle);

							};
						};
					};

						if( i > rootFiles.length - 2 ) {

							genVar = ( genIdx + 1 );

							if( firstPrince < 2 && eleMode < 2 )  {

								eleAdd = $('li[data-gIdx="' + g2Idx + '"]')["0"];
								eleAdd.setAttribute( 'data-g2Idx', genIdx );


							}else {

								if( firstPrince < 2 )  {

									eleAdd = $('li[data-gIdx="' + g2Idx + '"]')["0"];
									eleAdd.setAttribute( 'data-g2Idx', genIdx  );

								};
							};

						};
					};
				};
			};



		function unappendElements() {


				gIdx0 = rootFolder["0"].getAttribute('data-gIdx');
				ggIdx1 = loggedArr.indexOf(Number(gIdx0));
				gIdx00 = rootFolder["0"].getAttribute('data-g2Idx');
				ggIdx2 = loggedArr.indexOf(Number(gIdx00));
				gLength = ( ggIdx2 - ggIdx1 );


				if( gLength < 0 ) {

					gLength = ( gLength * -1 );

				};


			for( var i = 0; i < gLength; i++ ) {


				eleRem = loggedArr[ ggIdx1 + i + 1 ];
				eleDel = $('li[data-gIdx="' + eleRem + '"]');
				eleDel.css('display','none');


			};

				loggedArr.splice( ggIdx1 + 1, gLength );
				bbNameArr = [];

		};














	// Chrome Apps



	$( "#chromeApps" ).one('click',function() {

			ga('send', 'event', 'Toolbar', 'Chrome Apps');

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


       			  		element = $('<div id="' + name + '"; href="' +  appID + '";  data-type="' + type + '" class="appsH12"; style="top: -5%; opacity: 0.85; padding: 0 0 30px 0; background-image: url(' + url + '); float: left; background-repeat: no-repeat; position: relative; background-size: contain; margin-left: 35px; margin-top: 35px; height: 20%; width: 21%;"></div>');
       			  		element2 = $('<div id="' + name + '"; style="left: 6%; color: #ffffff; position: relative; top: 75px; height: 30px; padding: 20px 0 0 0; width: 90px; margin-left: -5px; line-height: 13px; text-align: centre; font-size: 12px; font-family: Avenir Next !important; font-weight: 100;">'+ name +'</div>');

            	 		$( "#chromeAppsBox" ).append(element);
            	 		element.append(element2);

            	 		element.mouseover(function() {

            	 			$(this).css('opacity','1');

            	 		});

            	 		element.mouseout(function() {

            	 			$(this).css('opacity','0.85');

            	 		});

            	 			element.one('click',function(){

								id = $(this).attr('href');
								name = $(this).attr('id');
								type = $(this).attr('data-type');

								chrome.management.launchApp(id);

								if( type == "legacy_packaged_app" || type == "hosted_app" ) {

									chrome.tabs.getCurrent(function(tab) {

    									chrome.tabs.remove(tab.id, function() { });

									});
								};
							});
       			 		};
    				});
 		 		});
 		 	});







		// Extensions



		var boxWidth;

	$( "#extensions" ).one('click',function() {

			ga('send', 'event', 'Toolbar', 'Extensions');

			boxWidth = $('#extensionsBox').width();

			chrome.management.getAll(function(data) {

   				data.forEach(function(item) {


       			  if( item.type == "theme" || item.type ==  "extension" ){


       			  		name = item.name;
       			  		perm = item.hostPermissions;
       			  		id = item.id;
       			  		des = item.description;
       			  		page = item.optionsUrl;
       			  		ver = item.version;

       			  		if( item.type ==  "extension" ) {

       			  			icons = item.icons;
       						length = icons.length;
       			  			index = ( length - 1 );
       			  			url = icons[index].url;

       			  		}else {

       			  			url = "Globe%20Resources/themeLogo.png";

       			  		};


       			  		boxWidth2 = (boxWidth/4.5);
       			  		boxWidth3 = (boxWidth - boxWidth2);
       			  		boxWidth4 = (boxWidth/6);
       			  		boxWidth5 = (boxWidth - boxWidth4);
       			  		boxWidth6 = (boxWidth/5.4);
       			  		boxWidth7 = (boxWidth - boxWidth6);

       			  		$('#extensionsShortcut').css('left', boxWidth7 + 'px');

       			  		parent = $('<div class= "appsE"; style="position: relative; margin-left: 22px; margin-bottom: 30px; margin-top:0px; height: 50px; width: 50px;"></div>');
       			  		element = $('<div id="' + name + 'Image"; href="' +  page + '"; style="background-image: url(' +  url + '); cursor: default; position: absolute; background-size: contain; margin-left: 0px; margin-bottom: 30px; margin-top: -8px; height: 50px; width: 50px;"></div>');
       			  		element2 = $('<div id="' + name + '2"; class="appsEEC"; style="position: absolute; top: 0px; left: 75px; height: 20px; cursor: default; width: 300px; overflow: hidden; white-space: nowrap; text-align: left; line-height: 18px; overflow: none; text-align: centre;  font-size: 18px;  font-family: Avenir Next !important; font-weight: 100;"><strong>'+ name + '</strong> - ' + ver + '</div>');
       			  		element3 = $('<div id="' + name + 'Des"; class="appsEE"; href="' +  page + '"; style="position: absolute; cursor: default; top: 20px; left: 75px; height: 30px; width: 300px; text-align: left; line-height: 13px; font-size: 11px; font-family: Avenir Next !important; font-weight: 100;">'+ des +'</div>');
            	 		enability = $('<input id="' + id + 'C"; type="checkbox"; href="' +  id + '"; style="position: absolute; cursor: pointer; left:'+ boxWidth3 +'px; top: 0px;"</input>');

            	 		label = $("<label id='" + id + "Lab'; class='appsEEC2'; style='position: absolute; left:"+ boxWidth5 +"px; top: -5px; font-size: 15px; font-family: Avenir Next !important; font-weight: 100; '>").text('Enable');

       			  		$( "#extensionsBox" ).append(parent);
       			  		parent.append(element);
       			  		parent.append(element2);
       			  		parent.append(element3);
       			  		parent.append(enability);
       			  		parent.append(label);


							if(item.enabled){

									name = item.name;
									id = item.id;
									enability.prop('checked', true);
									label.text('Enabled');

                              };


       		/*	  			element.click(function(){

								id = $(this).attr('href');

								chrome.runtime.getBackgroundPage(function (backgroundPage) {

							});
						});				*/


							enability.change(function() {

    							if(this.checked) {

    								enabled = true;
    								id = $(this).attr('href');
    								$('#'+ id + 'Lab').text('Enabled');

    									chrome.management.setEnabled(id, enabled, function (){

    						});

    					} else {

    							enabled = false;
    							id = $(this).attr('href');
    							$('#'+ id + 'Lab').text('Enable');

    								chrome.management.setEnabled(id, enabled, function (){

    						});
    					};
					});
       			  };

    		});
 		 });

	});



		$( "#extensionsShortcutBox" ).one('click',function() {


			chrome.tabs.update({ url: 'chrome://extensions' });


		});












		// Recently Visited



   $( "#recentlyVisited" ).click(function() {

   		ga('send', 'event', 'Toolbar', 'Recently Visited');
   		$('#recentlyVisitedBox').fadeIn('fast');
   		recentlyVisitedBox();

   	});

		if( TutorialMSS == 0 ) {

		//	preLoadRecentlyVisited();

		};

		function preLoadRecentlyVisited() {

			$('#recentlyVisitedBox').css('display','inline');
			$('#recentlyVisitedBox').css('opacity','0');
			recentlyVisitedBox();
			$('#recentlyVisitedBox').css('display','none');
			$('#recentlyVisitedBox').css('opacity','0.8');

		};

   	function recentlyVisitedBox() {

			chrome.history.search({'text': '', 'maxResults': 50}, function(data) {

   			 data.forEach(function(item) {


    				url = item.url;
					url2 = url.substring(0, 4);

    				if(item.title == ''){

    					element = $('<li id="................."; href="' +  item.url + '"; class="ul0"; style=" list-style-image: url(http://www.google.com/s2/favicons?domain=' + item.url + '); margin-left: 15px; height: 30px; line-height: 35px; overflow-y: hidden; text-align: left; font-size: 12px; font-family: Avenir Next !important; font-weight: 100;">Undefined...</li>');
            			$( "#recentlyVisitedBox" ).append(element);

    				} else if (url2 == 'file') {


				} 	else {

       					element = $('<li id="' + item.title + '"; href="' +  item.url + '"; class="ul0"; style=" list-style-image: url(http://www.google.com/s2/favicons?domain=' + item.url + '); margin-left: 15px; height: 30px; line-height: 30px; overflow-y: hidden; text-align: left; font-size: 12px;  font-family: Avenir Next !important; font-weight: 100;">' + item.title + '</li>');
            	 		$( "#recentlyVisitedBox" ).append(element);

       				}


       					element.one('click',function(){

							id = $(this).attr('href');
							window.location.href = id;

					});

    		});
    	});

	};
