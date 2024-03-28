

	importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase.js');


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


		messaging.setBackgroundMessageHandler(function(payload) {

		  console.log('[firebase-messaging-sw.js] Received background message ', payload);

		  const notificationTitle = 'Background Message Title';
 		  const notificationOptions = {

			    body: 'Background Message body.',
			    icon: 'Globe Resources/firebase-logo.png'

		  };

  		return self.registration.showNotification(notificationTitle,notificationOptions);

		});
