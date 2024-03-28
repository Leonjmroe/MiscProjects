

	// ******************************    Chrome API's   *******************************

			var MSS;

		chrome.runtime.onInstalled.addListener(function(details){

    		if(details.reason == "install"){

       		 console.log("This is a first install!");


       		/* 	var MSS0 = [];
				 	MSS = [  "1,Globe Resources/Textures/plutoGT", 			//Globe texture (0-2), default
							 "1,Globe Resources/Textures/milkyWayBGT", 			//Background texture (0-2), default
				 	 		 "1",			//Shadow Plane Toggle
				 	 		 "1", 			//Original array (0/1)
				 	 		 "1", 			//Kb array (0/1)
				 	 		 "530", 		//Camera Z Position
				 			 "0xffffff,0xffffff", 	//Globe colour tint
				 	 		 "1,0x525151", 	//Globe glow colour tint
				 	 		 "0", 			//Performance Enhancement
				 	 		 "1", 			//Tutorial listener (0/1)
				 	 		 "0", 			//Disabler (0/1)
				 	 		 "1" ,			//3D Background toggle
				 	 		 "5,5,5,5,0",	//Lighting System
				 	 		 "Z", 			//Transparent Markers
				 	 		 "0,261,1,0x11d5c8",	//Matrix Background
				 	 		 "0,0", 		//Feedback System
				 	 		 "1",			//Toolbar Toggle
				 	 		 "0.07",		//Weight of Globe Spin
				 	 		 "0",			//Background Black Toggle
				 	 		 "0",			//Particle System
				 	 		 "1",			//Hemisphere Light Nerf
				 	 		 "1",			//Globe Preview Image
				 	 		 "1",			//Definition of Render
				 	 		 "0"			//Triangles Colour Toggle
				 		];


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
				DisableMSS = MSS[10];
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


				chrome.storage.sync.set({'MSS0': MSS}, function() {

  			});	 */


   			 }else{

       		 var thisVersion = chrome.runtime.getManifest().version;

        		console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");

   			 };
		});



 		chrome.browserAction.onClicked.addListener(function (tab) {

 			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

 			chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});
 			console.log('Refresh!');


 		});

 	});



 	/*	chrome.storage.sync.get({'MSS0': MSS}, function(data) {

 			MSS = data.MSS0;

 		});		*/






			// **********  Browser Button  ***********



		 		chrome.browserAction.onClicked.addListener(function (tab) {

		 			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

		 			chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

		 		});

		 	});



 	// ************************    Globe Background Loader   *************************



		var plutoGT = 'https://farm5.staticflickr.com/4411/36714260191_d5e4219c4b_o_d.jpg';
		var blueGasGT = 'https://farm5.staticflickr.com/4408/36018985154_ea6c0ed606_o_d.jpg';
		var saturn1GT = 'https://farm5.staticflickr.com/4362/36044567533_7006e6d74c_o_d.jpg';
		var saturn2GT = 'https://farm5.staticflickr.com/4386/36714260331_878ef4a625_o_d.jpg';
		var blueCloudsGT = 'https://farm5.staticflickr.com/4441/36714250421_904a8738aa_o_d.jpg';
		var	neptuneGT = 'https://farm5.staticflickr.com/4401/36714276161_30e1388cc8_o_d.jpg';
		var marsGT = 'https://farm5.staticflickr.com/4418/36714275611_86f197186f_o_d.jpg';
		var blueLightsGT = 'https://farm5.staticflickr.com/4374/36714254421_74af2aabfa_o_d.jpg';
		var milkyWayBGT = 'https://farm5.staticflickr.com/4432/36714274741_dfa6964c88_o_d.jpg';
		var blackStarBGT = 'https://farm5.staticflickr.com/4385/36714251341_6facf29529_o_d.jpg';
		var tropicalBGT = 'https://farm5.staticflickr.com/4406/36682600622_7c1968a79c_o_d.jpg';
		var mountainBGT = 'https://farm5.staticflickr.com/4359/36457146030_cf374efe90_o_d.jpg';
		var pyramidBGT = 'https://farm5.staticflickr.com/4340/36044585153_3b8bb7e63c_o_d.jpg';

		var globeThemeG1 = 'https://firebasestorage.googleapis.com/v0/b/globe-your-3d-homepage.appspot.com/o/Resources%2FGlobe%20Images%2Ftheme1GImg.png?alt=media&token=10eaa78c-41b6-4e10-9553-5a542e5a1de0';
		var loader = new THREE.TextureLoader();


		textureMasterLoader();


		function textureMasterLoader() {

			 plutoGT0 = loader.load(plutoGT);
			 blueGasGT0 = loader.load(blueGasGT);
			 saturn1GT0 = loader.load(saturn1GT);
			 saturn2GT0 = loader.load(saturn2GT);
			 blueCloudsGT0 = loader.load(blueCloudsGT);
			 neptuneGT0 = loader.load(neptuneGT);
			 marsGT0 = loader.load(marsGT);
			 blueLightsGT0 = loader.load(blueLightsGT);
			 milkyWayBGT0 = loader.load(milkyWayBGT);
			 blackStarBGT0 = loader.load(blackStarBGT);
			 tropicalBGT0 = loader.load(tropicalBGT);
			 mountainBGT0 = loader.load(mountainBGT);
			 pyramidBGT0 = loader.load(pyramidBGT);

		};



	// Analytics


		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here

		ga('create', 'UA-87264911-2', 'auto');

		ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200

		ga('require', 'displayfeatures');

		ga('send', 'pageview', '/Background.js');




	/*

	// *****************************    Firebase     ********************************







	// *************   Firebase Token  *************

	 var token12;

	 var config = {

    		apiKey: "AIzaSyAvK9dd0873IhtFwtIMS3ZvV78Ghup03L8",
    		authDomain: "globe-your-3d-homepage.firebaseapp.com",
    		databaseURL: "https://globe-your-3d-homepage.firebaseio.com",
    		projectId: "globe-your-3d-homepage",
    		storageBucket: "globe-your-3d-homepage.appspot.com",
    		messagingSenderId: "1019135405048"

  		};

  			firebase.initializeApp(config);

		const messaging = firebase.messaging();

		messaging.requestPermission()
		.then( function() {

			console.log( 'Permission Granted' );
			return messaging.getToken();

		})
		.then( function(token) {

				token12 = token;
				console.log('FCM Token: ' + token12);

		})
		.catch( function(err) {

			console.log( 'Error Occurred: ' + err );

		})







	// *************   Firebase Notifications  *************



	const tokenDivId = 'token_div';
 	const permissionDivId = 'permission_div';


  messaging.onTokenRefresh(function() {

    messaging.getToken()
    .then(function(refreshedToken) {

      console.log('Token refreshed.');
      setTokenSentToServer(false);
      sendTokenToServer(refreshedToken);
      resetUI();

    })
    .catch(function(err) {

      console.log('Unable to retrieve refreshed token ', err);
      showToken('Unable to retrieve refreshed token ', err);

    });
  });


  messaging.onMessage(function(payload) {

    console.log("Message received! " , payload);
    appendMessage(payload);

  });


  function resetUI() {

    clearMessages();
    showToken('loading...');

    messaging.getToken()
    .then(function(currentToken) {

      if (currentToken) {

        sendTokenToServer(currentToken);
        updateUIForPushEnabled(currentToken);

      } else {

        console.log('No Instance ID token available. Request permission to generate one.');
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);

      }
    })
    .catch(function(err) {

      console.log('An error occurred while retrieving token. ', err);
      showToken('Error retrieving Instance ID token. ', err);
      setTokenSentToServer(false);

    });
  }


  function showToken(currentToken) {

  	 	  var tokenElement = document.querySelector('#token');
   		  tokenElement.textContent = currentToken;

  }


  function sendTokenToServer(currentToken) {

    if (!isTokenSentToServer()) {

      console.log('Sending token to server...');
      setTokenSentToServer(true);

    } else {

  //    console.log('Token already sent to server so won\'t send it again ' +
    //      'unless it changes');

    }
  }


  function isTokenSentToServer() {

    return window.localStorage.getItem('sentToServer') == 1;

  }


  function setTokenSentToServer(sent) {

    window.localStorage.setItem('sentToServer', sent ? 1 : 0);

  }


  function showHideDiv(divId, show) {

    const div = document.querySelector('#' + divId);

    if (show) {

      div.style = "display: visible";

    } else {

      div.style = "display: none";

    }
  }



  function requestPermission() {

    console.log('Requesting permission...');

    messaging.requestPermission()
    .then(function() {

      console.log('Notification permission granted.');
      resetUI();

    })
    .catch(function(err) {

      console.log('Unable to get permission to notify.', err);

    });
  }


  function deleteToken() {

    messaging.getToken()
    .then(function(currentToken) {
      messaging.deleteToken(currentToken)
      .then(function() {

        console.log('Token deleted.');

        setTokenSentToServer(false);

        resetUI();

      })
      .catch(function(err) {

        console.log('Unable to delete token. ', err);

      });
    })
    .catch(function(err) {

      console.log('Error retrieving Instance ID token. ', err);
      showToken('Error retrieving Instance ID token. ', err);

    });
  }



  function appendMessage(payload) {

  	 const messagesElement = document.querySelector('#messages');
    const dataHeaderELement = document.createElement('h5');
    const dataElement = document.createElement('pre');
    dataElement.style = 'overflow-x:hidden;'
    dataHeaderELement.textContent = 'Received message:';
    dataElement.textContent = JSON.stringify(payload, null, 2);
    messagesElement.appendChild(dataHeaderELement);
    messagesElement.appendChild(dataElement);

 //   console.log(payload);

  }


  function clearMessages() {

    const messagesElement = document.querySelector('#messages');

    while (messagesElement.hasChildNodes()) {

      messagesElement.removeChild(messagesElement.lastChild);

    }
  }

  function updateUIForPushEnabled(currentToken) {

    showHideDiv(tokenDivId, true);
    showHideDiv(permissionDivId, false);
    showToken(currentToken);

  }

  function updateUIForPushPermissionRequired() {

    showHideDiv(tokenDivId, false);
    showHideDiv(permissionDivId, true);

  }

  resetUI();


	*/







// *******************	 Notification System   **************************


	var gmailNods, fbNods;


	// Gmail Notification System


	function gmailNotifications( data ){

		val0 = data.indexOf(',["ti","Priority Inbox",');
		gmailNods = data.substring( val0 + 24 , val0 + 26 );
		gmailNods0 = gmailNods.substring( 1 , 2 );

		if( gmailNods0 == ',' ) {

			gmailNods = Number(gmailNods.substring( 0 , 1 ));

		};

	};


	function gmailSearch(){

     	req = new XMLHttpRequest();

    	req.onreadystatechange = function () {

        if ( req.readyState == 4 && req.status == 200 ) {

            gmailNotifications( req.responseText );

        };
    };

  		 req.open("GET", "http://www.gmail.com", true);
    	 req.send(null);

	};



	// Facebook Notification System


	function facebookNotifications( data ){

		val0 = data.indexOf('requestsCountValue');
		val00 = data.substring( val0 + 20 , val0 + 21 );

		val1 = data.indexOf('mercurymessagesCountValue');
		val11 = data.substring( val1 + 27 , val1 + 28 );

		val2 = data.indexOf('notificationsCountValue');
		val22 = data.substring( val2 + 25, val2 + 26 );

		fbNods = ( Number(val00) + Number(val11) + Number(val22) );

	};


	function facebookSearch(){

     	req2 = new XMLHttpRequest();

    	req2.onreadystatechange = function () {

        if ( req2.readyState == 4 && req2.status == 200 ) {

            facebookNotifications( req2.responseText );
						console.log(req2.responseText);

        };
    };

  		 req2.open("GET", "https://facebook.com/", true);
    	 req2.send(null);

	};





		function timeoutNod() {

			facebookSearch();

			setTimeout(timeoutNod,3000);

		};

			timeoutNod();


		function timeoutNod2() {

			gmailSearch();

			setTimeout(timeoutNod,60000);

		};

			timeoutNod2();






		// Outlook Notification System

/*
	function outlookNotifications( data ){

		console.log(data.indexOf('roe'));

	};


	function outlookSearch(){

     	req3 = new XMLHttpRequest();

    	req3.onreadystatechange = function () {

        if ( req3.readyState == 4 && req3.status == 200 ) {

            outlookNotifications( req3.responseText );

        };
    };

  		 req3.open("GET", "https://www.live.com/", true);
    	 req3.send(null);

	};


		*/


		/*


	// **********  Outlook REST API  ***********


		function runOutlookAPI() {

  // Check for browser support for sessionStorage
  if (typeof(Storage) === 'undefined') {
    render('#unsupportedbrowser');
    return;
  }

  // Check for browser support for crypto.getRandomValues
  var cryptObj = window.crypto || window.msCrypto; // For IE11
  if (cryptObj === undefined || cryptObj.getRandomValues === 'undefined') {
    render('#unsupportedbrowser');
    return;
  }

  render(window.location.hash);

  	$(window).on('hashchange', function() {
    render(window.location.hash);
  });

  function render(hash) {

    var action = hash.split('=')[0];

    // Hide everything
    $('.main-container .page').hide();

    // Check for presence of access token
var isAuthenticated = (sessionStorage.accessToken != null && sessionStorage.accessToken.length > 0);
renderNav(isAuthenticated);
renderTokens();

    var pagemap = {

      // Welcome page
      '': function() {
        renderWelcome(isAuthenticated);
      },

      // Receive access token

      '#access_token': function() {
  	handleTokenResponse(hash);

	},

      // Signout

    '#error': function () {
  var errorresponse = parseHashParams(hash);
  renderError(errorresponse.error, errorresponse.error_description);
},

      // Display inbox

      // Shown if browser doesn't support session storage
      '#unsupportedbrowser': function () {
        $('#unsupported').show();
      }
    }

    if (pagemap[action]){
      pagemap[action]();
    } else {
      // Redirect to home page
      window.location.hash = '#';
    }
  }


  function renderError(error, description) {
  $('#error-name', window.parent.document).text('An error occurred: ' + decodePlusEscaped(error));
  $('#error-desc', window.parent.document).text(decodePlusEscaped(description));
  $('#error-display', window.parent.document).show();
}


  function setActiveNav(navId) {
    $('#navbar').find('li').removeClass('active');
    $(navId).addClass('active');
  }

  function renderNav(isAuthed) {
  if (isAuthed) {
    $('.authed-nav').show();
  } else {
    $('.authed-nav').hide();
  }
}

	function renderTokens() {
  if (sessionStorage.accessToken) {
    // For demo purposes display the token and expiration
    var expireDate = new Date(parseInt(sessionStorage.tokenExpires));
    $('#token', window.parent.document).text(sessionStorage.accessToken);
  $('#expires-display', window.parent.document).text(expireDate.toLocaleDateString() + ' ' + expireDate.toLocaleTimeString());
    if (sessionStorage.idToken) {
      $('#id-token', window.parent.document).text(sessionStorage.idToken);
    }
    $('#token-display', window.parent.document).show();
  } else {
    $('#token-display', window.parent.document).hide();
  }
}

  function renderWelcome(isAuthed) {
    if (isAuthed) {
  	    $('#username').text(sessionStorage.userDisplayName);
  	    $('#logged-in-welcome').show();
      setActiveNav('#home-nav');
    } else {
 	     $('#connect-button').attr('href', buildAuthUrl());
 	     $('#signin-prompt').show();
    }
  }



		var authEndpoint = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
		var redirectUri = 'http://localhost:8080';
		var appId = 'f4036502-6d23-4027-b995-9970cf334b31';
		var scopes = 'openid profile User.Read Mail.Read';


		function buildAuthUrl() {

		// Generate random values for state and nonce

  			sessionStorage.authState = guid();
  			sessionStorage.authNonce = guid();

 		 var authParams = {

   			response_type: 'id_token token',
    		client_id: appId,
    		redirect_uri: redirectUri,
    		scope: scopes,
    		state: sessionStorage.authState,
    		nonce: sessionStorage.authNonce,
    		response_mode: 'fragment'

  		};

 		 return authEndpoint + $.param(authParams);

	};

		function handleTokenResponse(hash) {


  // clear tokens
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('idToken');

  var tokenresponse = parseHashParams(hash);

  // Check that state is what we sent in sign in request
  if (tokenresponse.state != sessionStorage.authState) {
    sessionStorage.removeItem('authState');
    sessionStorage.removeItem('authNonce');
    // Report error
    window.location.hash = '#error=Invalid+state&error_description=The+state+in+the+authorization+response+did+not+match+the+expected+value.+Please+try+signing+in+again.';
    return;
  }

  sessionStorage.authState = '';
  sessionStorage.accessToken = tokenresponse.access_token;

  // Get the number of seconds the token is valid for,
  // Subract 5 minutes (300 sec) to account for differences in clock settings
  // Convert to milliseconds
  var expiresin = (parseInt(tokenresponse.expires_in) - 300) * 1000;
  var now = new Date();
  var expireDate = new Date(now.getTime() + expiresin);
  sessionStorage.tokenExpires = expireDate.getTime();

  sessionStorage.idToken = tokenresponse.id_token;

  // Redirect to home page
  window.location.hash = '#';
}


		function guid() {

 	 	var buf = new Uint16Array(8);

  			cryptObj.getRandomValues(buf);

  		function s4(num) {

    		var ret = num.toString(16);
    		while (ret.length < 4) {
    		ret = '0' + ret;

    	};

    		return ret;

  		};

  			function parseHashParams(hash) {
  var params = hash.slice(1).split('&');

  var paramarray = {};
  params.forEach(function(param) {
    param = param.split('=');
    paramarray[param[0]] = param[1];
  });

  return paramarray;
}

function decodePlusEscaped(value) {
  // decodeURIComponent doesn't handle spaces escaped
  // as '+'
  if (value) {
    return decodeURIComponent(value.replace(/\+/g, ' '));
  } else {
    return '';
  }
}

  		return s4(buf[0]) + s4(buf[1]) + '-' + s4(buf[2]) + '-' + s4(buf[3]) + '-' +
   		s4(buf[4]) + '-' + s4(buf[5]) + s4(buf[6]) + s4(buf[7]);

    };


	};

	runOutlookAPI();


*/



	function timeoutOutlookAuth() {

		var clientId = "f4036502-6d23-4027-b995-9970cf334b31";
		var redirectUrl = "www.google.com";
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


		//	window.location = authUrl;

			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

 				chrome.tabs.update(tabs[0].id, {url: authUrl});

 			});

	};


	//		setTimeout(timeoutOutlookAuth,2000);





	// Uninstall Event Handler


	(function () {

		if (chrome && chrome.runtime && chrome.runtime.setUninstallURL) {

			chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSfGYv4pBD_rn9o4VWD-nBYVLGexd6u9h5JHBO3RKMeKSFZGbQ/viewform?usp=sf_link");
			ga( 'send', 'event', 'User Uninstall', ('Days of use: ' + daysLicenced) );

		};

	})();



/*	chrome.runtime.onInstalled.addListener(function (details) {
		if (details && details.reason && details.reason == 'install') chrome.tabs.create({url: "dashboard.html"});
	});

	chrome.browserAction.onClicked.addListener(function (tab) {
		chrome.tabs.create({url: "dashboard.html"});
	});

})();		*/
