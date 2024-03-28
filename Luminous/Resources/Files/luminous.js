
    // Installation System

 // $('#container').css('background-image','url("Resources/Images/MistyRift.jpg")');

    var background = chrome.extension.getBackgroundPage();
    var modeVar = 0, MSS = [], tutorialVar = 0, tutorialCount;

    var autoListen, repeatListen, userName, userEmail, userPassword, autoSpeech, stars, particlesVar = 0, engineType, text2DVar = 0, focusClick = 0, engineIcon, lumaOveride = 0, changeTextboxVar = 0, recogitionVar = 0, lumaTextVar = 0, textBoxString = '', tutorial2Var = 1, tut2Var = 0,
        tutorial2MSS, searchSelectorVar = 1, textbox2Var = 0;

  
    // Google Analytics

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here

        ga('create', 'UA-106796929-1', 'auto');

        ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200

        ga('require', 'displayfeatures');

        // ga('require', 'dnt');

        ga('send', 'pageview', '/Luminous.html');



    var grassLand = 'https://s3.eu-west-2.amazonaws.com/luminateai/GrassLandscape.jpg';
    var mistyRift = 'https://s3.eu-west-2.amazonaws.com/luminateai/MistyRift.jpeg';

    var testImg = 'https://unsplash.com/search/photos/nature?photo=JU2MgHOHDsw';

    var searchEngineArr = [ "https://google.com/search?q=", "https://www.bing.com/search?q=", "https://search.yahoo.com/search?p=", "https://www.ecosia.org/search?q=" ]
  
    var engineIconArr = ["googleLogo.png","bingLogo.png","yahooLogo.png","ecosiaLogo.png"];
    

     var day = new Date();
     var n = day.getDay();
     
/*

     backgroundArr = [ “https://s3.eu-west-2.amazonaws.com/luminateai/G rassLandscape.jpg”, “https://s3.eu-west-2.amazonaws.com/luminateai/BrightSands.jpg”,”https://s3.eu-west-2.amazonaws.com/luminateai/GrassLandscape.jpg”,”https://s3.eu-west-2.amazonaws.com/luminateai/GrassLandscape.jpg”,”https://s3.eu-west-2.amazonaws.com/luminateai/BrightSands.jpg”,”https://s3.eu-west-2.amazonaws.com/luminateai/BrightSands.jpg”,”https://s3.eu-west-2.amazonaws.com/luminateai/BrightSands.jpg”];

*/

backgroundArr = [ "https://s3.eu-west-2.amazonaws.com/luminateai/stefan-stefancik-105376.jpg", 		          
				  "https://s3.eu-west-2.amazonaws.com/luminateai/BlueMountains.jpg",
		          "https://s3.eu-west-2.amazonaws.com/luminateai/MistyRift.jpeg",
		          "https://s3.eu-west-2.amazonaws.com/luminateai/abigail-keenan-16898.jpg",
		          "https://s3.eu-west-2.amazonaws.com/luminateai/GrassLandscape.jpg",
		          "https://s3.eu-west-2.amazonaws.com/luminateai/GrassLandscape.jpg",
		          "https://s3.eu-west-2.amazonaws.com/luminateai/jon-flobrant-65429.jpg"];
		          
	//		    "https://s3.eu-west-2.amazonaws.com/luminateai/luca-bravo-24241.jpg",
	//			  "https://s3.eu-west-2.amazonaws.com/luminateai/krystian-tambur-101317.jpg",

    
     $('#container').css( 'background-image', 'url(' + backgroundArr[n] + ')');
     $('#textBox2D').val('');
      
//   $('#container').attr( 'data-src', testImg );
//   $('#container').lazy();


    chrome.storage.sync.get({'MSS0': MSS}, function(data) {
 				
        MSS = data.MSS0;
        mode = MSS[0];
        console.log(MSS);
        
 			if( MSS.length < 1 || mode == 0 ) {
		
                MSS = [ 
                    
                        0,      // Mode Selection 
                        0,      // Auto Speech
                        0,      // Auto Listen
                        1,      // Repeat Listen 
                        0,      // 3D Particles
                        0,      // Background
                        '',     // Name
                        0,      // Search Engine
                        1       // Tutorial2
                       
                    ];
                
                saveSystem();
                $('#figure').css('opacity','0');
                $('#containerCover2').fadeIn(1500);
                $('#containerCover').fadeOut(1500);	
                
          /*      function timeoutMode0() {
                    
                    $('#installContainer').fadeIn(1800);
                    
                };
                
                setTimeout(timeoutMode0,1000);
                
                
                function timeoutMode00() {
                    
                    $('#modeText3').fadeOut(1500);
                    
                };      
                
                setTimeout(timeoutMode00,3500); 
                
                function timeoutMode() {
                    
                    $('#mode1').fadeIn(2000);
                    $('#mode2').fadeIn(2000);
                    $('#modeText1').fadeIn(2000);
                    $('#modeText2').fadeIn(2000);
                    
                };
                
                setTimeout(timeoutMode,5000);       */
                
                mode = MSS[0];
                
                function timeoutLoad() {
                    
                    Tutorial();
                
                };
                
                setTimeout(timeoutLoad,1500);
                
            }else {
            
                
                voiceSetup();
                $('#containerCover').fadeOut(1200);	
            
                mode = MSS[0];
                autoSpeech = MSS[1];
                autoListen = MSS[2];
                stars = MSS[4];
                userName = MSS[6];
                engineType = MSS[7];
                tutorial2MSS = MSS[8];
                engineIcon = engineIconArr[engineType];
                
                ga( 'send', 'event', 'Auto Speech', autoSpeech );
                ga( 'send', 'event', 'Auto Listen', autoListen );
                ga( 'send', 'event', 'Search Engine', engineType );
                ga( 'send', 'event', 'Name', userName );
                
                if( tutorial2MSS == 1 ) {

                    Tutorial();

                }else if( tutorial2MSS == 2 ) {
                    
                    tutorial2();
                    
                };

                if( mode == 2 ) {
                    
           //         $('.switch3')[0].children[0].checked = false;
                    
                }else if( mode == 0 ) {
                    
                    Tutorial();
                    
                };
                
                if( autoListen == 0 ) {
                    
                    $('.switch2')[0].children[0].checked = false;
                    
                };
                
                if( autoSpeech == 0 ) {
                    
                    $('.switch1')[0].children[0].checked = false;
                    
                };
                
                 if( stars == 0 ) {
                    
            //        $('.switch4')[0].children[0].checked = false;
                    
                };
                
                if( autoListen == 1 && autoSpeech == 0 ) {
        
                    againListen();
        
                };
                
                if( stars == 1 ) {
        
                    function timeoutStars() {
    
                        CreateParticleSystem();
 
                    };
                    
                    setTimeout(timeoutStars,800);

                };
              
                if( MSS[0] == 1 ) {
                                    
                    init3D();
                         
                }else if( MSS[0] == 2 ){
                    
                    init2D();
                    
                }else {
                    
                    // Reset Funtion 
                    
                };
                
            };
           
        });

    
    $('#mode1').click(function() {
        
        if( modeVar == 0 ) {
        
            modeVar = 1;
            MSS[0] = modeVar;
            mode = MSS[0];
            MSS[4] = 1;
            voiceSetup();
            modeFade();
            $('#installContainer').fadeOut(3000); 
       
            function timeout() {
          
                Tutorial();
                
            };
        
            setTimeout(timeout,2500);
            
        };  
        
    });


    $('#mode2').click(function() {
        
        if( modeVar == 0 ) {
       
            modeVar = 2;
            MSS[0] = modeVar;	
            mode = MSS[0];
            voiceSetup();
            modeFade();
            $('#installContainer').fadeOut(3000);
  
            function timeout() {
              
                Tutorial();
                
            };
        
            setTimeout(timeout,2500);
        
        };
        
    });

        function modeFade() {

            if( mode == 2 ) {
                
                $('#mode1').fadeOut(800);
                $('#modeText2').fadeOut(800);
                
                function timeoutModeSel() {
                    
                    $('#mode2').fadeOut(1000);
                    $('#modeText1').fadeOut(1000);
                    
                };
                
                setTimeout(timeoutModeSel,1000);
                
            }else {
                
                $('#mode2').fadeOut(800);
                $('#modeText1').fadeOut(800);
                
                function timeoutModeSel2() {
                    
                    $('#mode1').fadeOut(1000);
                    $('#modeText2').fadeOut(1000);
                    
                };
                
                setTimeout(timeoutModeSel2,1000); 
                
            };
            
        };


    welcomeArr = ['- ','Hello, ',"I'm ",'Luma.<br><br><br>','- ','Your ','AI ', 'assistant.<br><br><br>','- ',"What's ",'your ','name?'];

    welcomeArr2 = ['- ','Hi ', '','- ', 'Welcome ','to ','Luminous.<br><br><br>','- ',"Select ",'your ','Search ','Engine.'];

    welcomeArr3 = ['- ','Great!<br><br><br> ', '- ','Lets ','get ', 'started.<br><br><br>'];

    welcomeArr4 = ['- ','Click ','anywhere ','to ','open ','the ','search ','bar.'];

    welcomeArr5 = ['- ','Press ','space ','to ','chat ','to ','Luma.'];

    welcomeArr6 = ['- ','Click ','on ','Luma ','to ','initiate ','voice ','control.'];

    welcomeArr7 = ['- ','To ','search ','the ','web,', ' say ','the ','search ','engine ','before ','the ','search ','query.',' For ','example:<br>','- ','"Google ','the ','capital ','of ','Brazil"<br>','- ','If',' using ','Ecosia,',' say ','"Eco"',' before ','your ','search ','query.'];
                 
    welcomeArr8 = ['- ','To ','navigate ','to ','a ','.com ','website,',' say ','"Go ','to" ','before ','the ','website.',' For ','example:<br><br>','"','Go ','to ','Facebook"<br>'];

    welcomeArr9 = ['- ','You ','can ','also ','just ','chat ','to ','Luma.',' Luma ','is ','a ','new ','program,',' but ','the ','more ','user ','interaction ','Luma ','gets,',' the ','more ','helpful ','Luma ','will ','become.'];

    welcomeArr10 = ['- ','You ','can ','also ','just ','chat ','to ','Luma.',' Luma ','is ','a ','new ','program,',' but ','the ','more ','user ','interaction ','Luma ','gets,',' the ','more ','helpful ','Luma ','will ','become.'];



     /*              

Command 1 - Search the web</div>
    <div id="googleLogo2"></div>
    <div id="googleSearchExm"><strong>"Google the highest mountain in the world"</strong></div>
    <div id="bingLogo2"></div>
    <div id="bingSearchExm"><strong>"Bing the longest river in the world"</strong></div>
    
    <div id="command2">Command 2 - Navigate websites</div>
    <div id="command2Info"></div>
    <div id="websiteLogo1"></div>
    <div id="websiteExm1"><strong>"Go to facebook"</strong></div>
    <div id="websiteLogo2"></div>
    <div id="websiteExm2"><strong>"Go to wikipedia"</strong></div>
    
    <div id="command3">Command 3 - Chat to Luma</div>
    <div id="lumaLogo1"></div>
    <div id="lumaExm">Say anything to Luma that doesnt trigger commands 1 and 2</div>

    <div id="lumaInfo">Luma does not store any information from Commands 1 and 2 as they trigger the automated search system. However, Luma will have a short term memory of Command 3 queries. Luma is an AI agent that learns over time from user interaction in order to help users with more tasks.
    
    */



    function Tutorial() {
        	
        $('#nameBox').fadeIn(1500);	
        
        if( mode == 1 ) {
            
            $('#demoLuma').fadeIn(4000);
            
        }else {
            
            $('#luma2D2').fadeIn(4000);
            
        };
        
        tutorialVar = 1;
        speakVar = 1;
        tutorialCount = 0;
        welcomeMessage();
     //   init3D();
        
    };

    var counter = 0, string = '';

        function welcomeMessage() {
          
            function timeout() {
                
                if( counter == 0 && mode == 2 ) {
                    
                    lumaAniVar = 1;
                    luma2Dannimate();  
                    
                };
              
                newText = welcomeArr[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#nameText').html(string);
                
                if( counter < welcomeArr.length ) {
                
                    if( newText.length > 14 ) {
                        
                        setTimeout(timeout,650);
                        
                    }else if( newText.length < 3 ){
                        
                        setTimeout(timeout,400); 
                        
                    }else{
                        
                        if( newText == 'Hello, ' ) {
                    
                            setTimeout(timeout,600);
                            
                        }else {
                     
                            setTimeout(timeout,250);  
               
                        };
                        
                    };
                    
                }else {
                    
                    lumaAniVar = 2;
                    $('#nameInput').fadeIn(700);
                    $('#nameInput').focus();
                
                };
                
            };
            
            setTimeout(timeout,2500);
         
        };

    
        $('#demoLuma').click(function(){
            
            $('#nameInput').focus();
            
        });


        function tutorialNext() {
        
            $('#nameInput').fadeOut('slow');
            $('#nameText').fadeOut('slow');
            tutorialCount = 1;
            counter = 0;
            string = '';
            welcomeMessage2();
            
        };



        function welcomeMessage2() {
            
            $('#nameText').html('');
            $('#nameInput').val('');
            $('#nameText').fadeIn('slow');    
            
            function timeout() {
              
                if( counter == 2 ) {
                    
                    newText = (userName + '.<br><br><br>');
                    
                }else {
                    
                    newText = welcomeArr2[counter];
                    
                };
                
                if( counter == 0 && mode != 1 ) {
                    
                    lumaAniVar = 1;
                    luma2Dannimate();  
                    
                };
                
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#nameText').html(string);
                
                if( counter < welcomeArr2.length ) {
                
                    if( newText.length > 13 ) {
                       
                         setTimeout(timeout,650);
                    
                    }else {     
                        
                        if( newText == 'Search ') {
                            
                            setTimeout(timeout,200); 
                            
                        }else {
                            
                             setTimeout(timeout,350);  
                            
                        };
                     
                    };
                    
                }else {
                    
                    function timeout100() {
                   
                        searchSelectorVar = 0;
                        lumaAniVar = 2;
                        $('#nameText').fadeOut(2200); 
                     
                        if( mode == 1 ) {
                            
                            $('#demoLuma').fadeOut(2200);  
            
                        }else {
            
                             $('#luma2D2').fadeOut(2200); 
            
                        };
                    
                        function timeoutSearchE() {
                        
                            $('#searchEngineCont').fadeIn(2500);
                        
                        };
                  
                            setTimeout(timeoutSearchE,2000);
                    
                        function timeoutSearchE2() {
                        
                            $('#ecosiaText').fadeIn(1200);
                            $('#googleText').fadeIn(1200);
                            $('#bingText').fadeIn(1200);
                            $('#yahooText').fadeIn(1200);
                            $('#ecosiaInfo').fadeIn(1200);
                        
                        };
                  
                            setTimeout(timeoutSearchE2,2000);
                        
                    };
                    
                    setTimeout(timeout100,500);
                    
                };
                
            };
            
            setTimeout(timeout,1500);
            
        };


        function tutorialNext2() {
        
            $('#nameInput').fadeOut('slow');
            $('#nameText').fadeOut('slow');
            tutorialCount = 2;
            counter = 0;
            string = '';
            welcomeMessage3();
            
        };

        function welcomeMessage3() {
            
            tutorialCount = 2;
            counter = 0;
            string = '';
            $('#nameText').html('');
            $('#nameInput').val('');
            $('#nameText').fadeIn('slow');    
            
            function timeout() {
            
                if( counter == 0 && mode != 1 ) {
                    
                    lumaAniVar = 1;
                    luma2Dannimate();  
                    
                };
             
                newText = welcomeArr3[counter];            
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#nameText').html(string);
                
                if( counter < welcomeArr3.length ) {
                
                    if( newText.length > 13 ) {
    
                        setTimeout(timeout,650);
                    
                    }else {     
                        
                       setTimeout(timeout,350);  
                        
                    };
                    
                }else {
                    
                    lumaAniVar = 2;
                    $('#nameBox').fadeOut(2000);
                    $('#containerCover').fadeOut(2000);	
                    $('#containerCover2').fadeOut(2000);	
                    
                    if( mode != 1 ) {
                        
                        $('#luma2D2').fadeOut(2000);
                        
                    }else {
                        
                        $('#demoLuma').fadeOut(2000);
                        
                    };
                    
                    function timeoutMode() {
                        
                        tutorial2Var = 1;
                        tutorial2();
                        
                        if( mode != 2 ) {
                            
                            tutorialVar = 0;
                            init2D();
                            saveSystem();
                            $('#content2D').fadeIn(3000);
                      //      $('#figure').css('opacity','1');
                            $('.switch1')[0].children[0].checked = false;
                            $('.switch2')[0].children[0].checked = false;
                    //        $('.switch3')[0].children[0].checked = false;
                      //      $('.switch4')[0].children[0].checked = false;
                            
                        }else {
                            
                            tutorialVar = 0;
                            init3D();
                            CreateParticleSystem();
                            saveSystem();
                            $('#conainter').fadeIn(3000);
                    //        $('#figure').css('opacity','1');
                            $('.switch1')[0].children[0].checked = false;
                            $('.switch2')[0].children[0].checked = false;
                   //         $('.switch3')[0].children[0].checked = true;
                    //        $('.switch4')[0].children[0].checked = true;
                            
                        };
                        
                    };
                    
                        setTimeout(timeoutMode,3000);
                    
                };
                
            };
            
            setTimeout(timeout,3000);
            
        };

    /*    function tutorialNext3() {
        
            $('#nameInput').fadeOut('slow');
            $('#nameText').fadeOut('slow');
            tutorialCount = 3;
            counter = 0;
            string = '';
            welcomeMessage4();
            
        }; */


        function welcomeMessage4() {
            
            counter = 0;
            string = '';
            $('#tutorial2BoxText').css('display','inline');    
            
            function timeout() {
              
                newText = welcomeArr4[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#tutorial2Text').html(string);
                
                if( counter < welcomeArr4.length ) {
                
                    setTimeout(timeout,300);  
                    
                }else {
                    
                    tut2Var = 1;
                    counter = 0;
                    string = '';
                    
                };
                
            };
            
            setTimeout(timeout,1500);
            
        };


    
        function welcomeMessage5() {
            
            counter = 0;
            string = '';
            $('#tutorial2BoxText').css('display','inline');    
            
            function timeout() {
              
                newText = welcomeArr5[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#tutorial2Text').html(string);
                
                if( counter < welcomeArr5.length ) {
                
                    setTimeout(timeout,300);  
                    
                }else {
                    
                    tut2Var = 2;
                    counter = 0;
                    string = '';
                    
                };
                
            };
            
            setTimeout(timeout,0);
            
        };

        var clickLumaTut = 0;

        function welcomeMessage6() {
         
            counter = 0;
            string = '';
            $('#tutorial2BoxText').css('display','inline');    
            
            function timeout() {
              
                newText = welcomeArr6[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#tutorial2Text').html(string);
                
                if( counter < welcomeArr6.length ) {
                
                    setTimeout(timeout,300);  
                    
                }else {
                    
                    tut2Var = 3;
                    counter = 0;
                    string = '';
                    $('#content2D').css('zIndex','200');
                    clickLumaTut = 1;
                    
                };
                
            };
            
            setTimeout(timeout,1000);
            
        };

                 

        var tutorial2But = 0;

        function welcomeMessage7() {
         
            counter = 0;
            string = '';
            $('#tutorial2Box').css('display','inline');    
            
            function timeout() {
              
                newText = welcomeArr7[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#tutorial2Text').html(string);
                
                if( counter < welcomeArr7.length ) {
                
                    if( newText == "example:<br><br>" || newText == "query." ) {
                        
                        setTimeout(timeout,800); 
                        
                    }else if( newText == "web," || newText == 'Ecosia,' || newText == 'Brazil"<br>' ) {
                        
                        setTimeout(timeout,700);  
                        
                    }else {
                        
                        setTimeout(timeout,350);  
                        
                    };
                   
                }else {
                    
                    tut2Var = 4;
                    counter = 0;
                    string = '';
                    $('#tutorial2But').fadeIn(1200);
                    tutorial2But = 1;
                    
                };
                
            };
            
            setTimeout(timeout,500);
            
        };


        function welcomeMessage8() {
         
            counter = 0;
            string = '';
            $('#tutorial2Box').css('display','inline');    
            
            function timeout() {
              
                newText = welcomeArr8[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#tutorial2Text').html(string);
                
                if( counter < welcomeArr8.length ) {
                
                    if( newText == "website," || newText == '"Go, ' || newText == 'to" ' || newText == "website." || newText == "example:<br><br>") {
                        
                        setTimeout(timeout,600); 
                        
                    }else {
                    
                        setTimeout(timeout,300);  
                        
                    };
                   
                }else {
                    
                    tut2Var = 4;
                    counter = 0;
                    string = '';
                    $('#tutorial2But').fadeIn(1200);
                    tutorial2But = 2;
                    
                };
                
            };
            
            setTimeout(timeout,500);
            
        };


            
                    

        function welcomeMessage9() {
         
            counter = 0;
            string = '';
            $('#tutorial2Box').css('display','inline');    
            
            function timeout() {
              
                newText = welcomeArr9[counter];
                counter = ( counter + 1 );
                string = ( string + newText );
                $('#tutorial2Text').html(string);
                
                if( counter < welcomeArr9.length ) {
                
                    if( newText == "Luma." || newText == "program," || newText == "gets," ) {
                        
                        setTimeout(timeout,600); 
                        
                    }else {
                    
                        setTimeout(timeout,300);
                        
                    };
                   
                }else {
                    
                    tut2Var = 4;
                    counter = 0;
                    string = '';
                    $('#tutorial2But').fadeIn(1200);
                    tutorial2But = 3;
                    
                };
                
            };
            
            setTimeout(timeout,500);
            
        };



        $('#tutorial2But').click(function() {
             
            if( tutorial2But == 1 ) {
                
                $('#tutorial2But').fadeOut('slow');
                $('#tutorial2Text').html('');
                welcomeMessage8();
                
            }else if( tutorial2But == 2 ) {
                
                $('#tutorial2But').fadeOut('slow');
                $('#tutorial2Text').html('');
                welcomeMessage9();
                
            }else {
            
                MSS[8] = 0;
                MSS[0] = 2;
                saveSystem();
                
                function timeout12() {
                    
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 							
 			            chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

 		             });
                    
                };
                
                setTimeout(timeout12,700);
            };
                
        });
    
    

    // Tutorial 2 System

        var clickAgainVar = 0;

        function tutorial2() {
         
            $('#tutorial2Cover').css('display','inline');
            $('#tutorial2Box').fadeIn('slow');
            
            if( mode != 1 ) {
                
                $('#content2D').css('opacity','0.6');
                $('#figure').css('opacity','0.6'); 
                welcomeMessage4();
               
            }else {
                
                $('#container').css('opacity','0.3');
                $('#figure').css('opacity','0.3'); 
                
            };
               
        };


        $('#tutorial2Cover').click(function() {
            
            if( clickLumaTut == 0 ) {
                
                tutorial2B();
                
            }else {
                
                tutorial3B();
                
            };
           
        });

        $('#tutorial2Box').click(function() {
            
            if( clickLumaTut == 0 ) {
                
                tutorial2B();
                
            }else {
                
                tutorial3B();
                
            };
            
        });

        $('#content2D').click(function() {
            
            if( clickLumaTut == 1 ) {
                
                tutorial3B();
                
            };
            
        });
        
        function tutorial2B() {
            
            if( tut2Var == 1 ) {
           
                $('#textBox2DText').fadeOut(1000);
                tut2Var = 2;
                
                function timeoutTut2() {
                
                    changeTextbox();
               
                    function timeout3() {
        
                        $('#tutorial2Text').html('');
                        welcomeMessage5();
                        clickAgainVar = 1;
                
                    };
                    
                    setTimeout(timeout3,1000);
                
                };
            
                setTimeout(timeoutTut2,1000);      
                
            }else if( clickAgainVar == 1 ){
                
                changeTextbox();  
                
            };
            
        };


        function tutorial3B() {
            
            $('#luma2D').css('zoom',1.08);
            
            function timeout() {
                
                $('#luma2D').css('zoom',1.05);
                
            };
            
            setTimeout(timeout,150);
            
        };


    
        $('#menuText4').click(function() {
            
            searchSelectorVar = 1;
            $('#content2D').fadeOut(700);
            $('#figure').css('opacity','0');
            
            function timeout() {
                
                $('#searchEngineCont').fadeIn(1200);
                
                function timeoutSearchE2() {
                        
                    $('#ecosiaText').fadeIn(1000);
                    $('#googleText').fadeIn(1000);
                    $('#bingText').fadeIn(1000);
                    $('#yahooText').fadeIn(1000);
                    $('#ecosiaInfo').fadeIn(1000);
                        
                };
                  
                    setTimeout(timeoutSearchE2,500);
                
            };
            
            setTimeout(timeout,700);
            
        });



        $('#menuText6').click(function() {
                
            ga( 'send', 'event', 'Feedback', 'Clicked' );
            window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSfLwcGhiBrLAd2FxLFjh0b9Kn9No454PNp7Q2jMLkSuVYohUQ/viewform?usp=sf_link', '_blank');
            window.focus();

            
        });






    // Background Image System



    var arr3 = ["Resources/Images/ArticSummer.jpg", "Resources/Images/BlueMountains.jpg", "Resources/Images/BrightSands.jpg",
                "Resources/Images/GrassLandscape.jpg", "Resources/Images/HazeyRift.jpg", "Resources/Images/MistyRift.jpg",
                "Resources/Images/SunsetRift.jpg"];
        

    var	image3 = 'Resources/Images/MistyRift.jpg';
 // var	image3 = arr3[Math.floor(Math.random() * arr3.length)];




  /* var arr = ['https://cdn.pixabay.com/photo/2013/11/05/12/27/sunset-205717_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/10/02/15/51/tree-189852_1280.jpg',
              'https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_1280.jpg',
              'https://cdn.pixabay.com/photo/2017/02/22/20/02/landscape-2090495_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/09/15/05/27/sunrise-182302_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/10/17/20/28/sunset-197176_1280.jpg',
              'https://cdn.pixabay.com/photo/2012/06/08/06/19/sky-49520_1280.jpg',
              'https://cdn.pixabay.com/photo/2012/11/07/02/46/sunset-65024_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/10/09/02/26/sunset-192980_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/01/20/21/00/sunset-75621_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/08/17/14/32/sunrise-173392_1280.jpg',
              'https://cdn.pixabay.com/photo/2015/05/15/14/54/horizon-768759_1280.jpg',
              'https://cdn.pixabay.com/photo/2014/11/11/20/39/canary-islands-527388_1280.jpg',
              'https://cdn.pixabay.com/photo/2015/08/29/18/53/sunset-913350_1280.jpg',
              'https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_1280.jpg',
              'https://cdn.pixabay.com/photo/2014/03/17/10/00/lake-289011_1280.jpg',
              'https://cdn.pixabay.com/photo/2013/04/19/01/15/winter-105710_1280.jpg' 	];
		
	var	image = arr[Math.floor(Math.random() * arr.length)];

    var arr2 = ['http://www.morewallpapers.com/wp-content/uploads/2016/01/Mountains-lake-HD-image.jpg'];
    var	image2 = arr2[Math.floor(Math.random() * arr2.length)];     */








    


    // Check Connection System	

		
		var connection = navigator.onLine;

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


            checkConnection();





    // Systematic Functions

    
        function saveSystem() {
                
            chrome.storage.sync.set({'MSS0': MSS}, function(data) {
 	            
        });
            
            console.log(MSS);
        
    };


    
   /*

    var width = window.innerWidth;

    

        $( window ).resize(function() {
			
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );	
        
            if( ( window.innerWidth * 1.05 ) < width ) {
            
                offset = (( width - (window.innerWidth * 1.1))/3);
            
            };
				
        });
        

*/
  

/*

$('#time2DT').append('<div id="testwidth"><span>&nbsp;</span></div>');
      var w = $('#testwidth span').width();
      $('#testwidth').remove();
      $('div').css('width', (w * 10 + 1) + 'px');   
      console.log((w * 10 + 1));

*/



// Luminate 2D Mode

    var h, m, s, check;

    var timeOffsetH = [ "13.5%","15.5%","13.5%","13.5%","13%","13.5%","13.5%","14.5%","13.5%","13.5%","15%","18%","15.5%","15.5%","14.5%",
                       "15.5%", "15.5%","16%","15%","15%","14%","17%","14.5%"];


    function checkTime() {
       
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        
        if( h < 10 ) {
            
            h = ( '0' + h );
            
        };
        
        if( m < 10 ) {
            
            m = ( '0' + m );
            
        };
        
        leftOffset = Number(h);
        $('#time2D1').css('left', timeOffsetH[leftOffset]);
        $('#time2D1').html( h );
        $('#time2D3').html( m );
        setTimeout(checkTime,60000);
        
    };
    
    function init2D() {
      
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        check = ((61-s)*1000);
        setTimeout(checkTime,check);
        
        if( h < 10 ) {
            
            h = ( '0' + h );
            
        };
        
        if( m < 10 ) {
            
            m = ( '0' + m );
            
        };
        
    
        leftOffset = Number(h);
        $('#time2D1').css('left', timeOffsetH[leftOffset]);
        $('#time2D1').html( h );
        $('#time2D3').html( m );   
        len = userName.length;
        
        if( len > 3 && len < 9 ) {

            $('#textBox2DText').css('margin-left','5.3%');
            
        }else if( len > 8 && len < 13 ) {

            $('#textBox2DText').css('margin-left','4.5%');
            
        }else {
            
            if( len > 12 && len < 16 ) {
                
                $('#textBox2DText').css('margin-left','2.2%');
                
            }else if( len > 15 && len < 18 ){
                
                $('#textBox2DText').css('margin-left','-3%');
                
            }else {
                
                if( len > 17 ){
  
                    $('#textBox2DText').css('margin-left','-6%');
    
                };
            
            };
            
        };
        
        $('#textBox2DText').html( 'Hi ' + userName + ', how can I help?' );
        $('#content2D').fadeIn('slow');
        
        
        function timeoutGone() {

            $('#figure').css('display','inline');
            changeTextbox();
   
        };
        
          
           function timeout0() {
          
                if(document.hasFocus()) {
              
                    if( tutorial2Var == 0 ) {
                   
                        $('#textBox2DText').fadeOut(1200);
                        changeTextboxVar = 1;
                        setTimeout(timeoutGone,1300);
                        
                    };
        
                }else {
           
                    focusClick = 1;
                
                };
            
            };
           
                setTimeout(timeout0,1400);
             
         };




    function changeTextbox() {
        
        if( lumaOveride == 0 ) {
            
            $('#textBox2D').val(''); 
            $('#textBox2D').css('border-bottom','1px solid #ffffff');
            $('#textBox2D').fadeIn(400); 
            $('#text2DImg').css('background-image','url(Resources/Logos/' + engineIcon + ')');
            $('#text2DImg').css('display','none'); 
            $('#textBox2D').css('font-size','35px');
            $('#text2DImg').fadeIn(1000); 
            $('#textBox2D').focus();  
           
        };

    };


     
        $('#container').click(function() {
        
        	console.log(changeTextboxVar);
        	
            if( changeTextboxVar == 0 ) {
              
                $('#textBox2DText').fadeOut(2000);

                    function timeout() {
            
                        changeTextboxVar = 1;
                        changeTextbox();
                      
                    };
        
                    setTimeout(timeout,2100);
                
                }else {
                    
                    if( textbox2Var == 0 ) {
                    
                    	$('#text2DImg').css('display','none');   
                    	$('#textBox2D').val('');
                    	recognition.stop();
                    	textbox2Var =  0;
                    
                    };
                    
                };
                
            });
            
            
         $('#content2D').click(function() {
        
        	console.log(changeTextboxVar);
        	
            if( changeTextboxVar == 0 ) {
              
                $('#textBox2DText').fadeOut(2000);

                    function timeout() {
            
                        changeTextboxVar = 1;
                        changeTextbox();
                      
                    };
        
                    setTimeout(timeout,2100);
                
                }else {
                    
                    if( textbox2Var == 0 ) {
                    
                  	 	$('#text2DImg').css('display','none');   
                  	 	$('#textBox2D').val('');
                    	recognition.stop();
                    	textbox2Var =  0;
                    
                    };
                    
                };
                
            });

    


/*

    function textMarker() {
        
        function timeout1() {
            
            $('#tutorialText').css('display','inline'); 
            setTimeout(timeout2,500); 
            
        };
         
        function timeout2() {
            
            $('#tutorialText').css('display','none'); 
            
            if( text2DVar == 0 ) {
                
                setTimeout(timeout1,500);
                
            };
            
        };
        
        setTimeout(timeout1,500); 
        
    };

    */



    $('#lumaHover').mouseenter(function() {
         
        $('#luma2D').addClass('luma2D');
            
            
    });


    $('#lumaHover').mouseleave(function() {
         
        $('#luma2D').removeClass('luma2D');
            
    });

    var welcome7Var = 0;
    
    $('#lumaHover').click(function() {
        
        if( tut2Var != 3 ) {
        
            ga( 'send', 'event', 'Luma Clicked' );
            $( "#textBox2D" ).stop();
            lumaOveride = 1;
            lumaTextVar = 1;
            $('#textBox2D').focus();
            $('#text2DImg').css('background-image','url(Resources/Logos/logo128.png)');
            $('#text2DImg').css('display','inline');
            $('#textBox2D').css('display','inline');
            $('#textBox2D').css('opacity','1');
            $('#textBox2D').val(''); 
            $('#textBox2D').css('font-size','35px');
            $('#textBox2D').css('border-bottom','1px solid #ffffff');
            $("#textBox2DText").stop();
            $('#textBox2DText').css('display','none'); 
            initRecognition();
            
        }else if( welcome7Var == 0 ){
            
            clickLumaTut = 0;
            welcome7Var = 1;
            welcomeMessage7();  
            
        };
        
    });

    $('#textBox2DText').click(function() {
        
        $("#textBox2DText").stop();
        $('#textBox2DText').css('display','none'); 
        displayTextCont();
        
    });

    $('#menuText5').click(function() {
        
        tutorial2(); 
        
    });


    $('#textBox2D').click(function() {
    
        displayTextCont();
        
    });


    function displayTextCont() {
      
      	textbox2Var = 1;  
        $( "#textBox2D" ).stop();
        lumaOveride = 1;
        changeTextboxVar = 1;
        lumaTextVar = 0;
        $('#textBox2D').focus();
        $('#text2DImg').css('background-image','url(Resources/Logos/' + engineIcon + ')');
        $('#text2DImg').css('display','inline');
        $('#textBox2D').val(''); 
        $('#textBox2D').css('font-size','35px');
        $('#textBox2D').css('border-bottom','1px solid #ffffff');
        
        if( recogitionVar == 1 ) {
            
            recognition.stop();
            
        };    
        
    };
    
   $('#textBox2D').keyup(function(e){
       
       len = $('#textBox2D').val().length;
       
       if( len == 0 ) {
           
           lumaTextVar = 0;
           $('#text2DImg').css('background-image','url(Resources/Logos/' + engineIcon + ')');
           
       };
             
        if( e.keyCode == 13 && tut2Var == 0 ) {
        
            if( lumaTextVar == 0 ) {
           
                ga( 'send', 'event', 'Search Bar Used' );
                location.assign( searchEngineArr[engineType] + $('#textBox2D').val() );
                    
            }else {
                  
                ga( 'send', 'event', 'Luma Messaged' );
                userSpeech = $('#textBox2D').val();
                $('#textBox2D').val(''); 
                apiSend();
                
            };
    
        };
       
       if( e.keyCode == 32 && len < 2 ) {
        
            $('#text2DImg').css('background-image','url(Resources/Logos/logo128.png)');
            lumaTextVar = 1;
    
        };
       
       
        if( e.keyCode == 32 && tut2Var == 2 ) {
        
            tut2Var = 3;
            welcomeMessage6();
            
        };
       
         if( e.keyCode != 32 && tut2Var == 2 ) {
        
            $('#textBox2D').val('');
             
        };
       

   });

    var lumaVar12 = 0, lumaAniVar = 0; 

    function lumaTextResponse() {
           
        arr = spokenResponse.split(/[ ,]+/);
        $('#textBox2D').val('');
        textBoxString = '';
        lumaVar12 = 0;
        
        function timeoutText() {
                
            if( lumaVar12 == 0 ) {
              
                lumaAniVar = 1; 
                luma2Dannimate();  
                
            };
            
            val = arr[lumaVar12];
            textBoxString = ( textBoxString + val + ' ' );
            $('#textBox2D').val(textBoxString);
            searchInput = document.getElementById('textBox2D');
            searchInput.scrollLeft = searchInput.scrollWidth;
            end = val.substr( (val.length - 1), val.length );
               
            if( lumaVar12 < ( arr.length - 1 )) {
                    
                lumaVar12 = ( lumaVar12 + 1 );
                    
                if( end == "." ) {
                      
                    setTimeout(timeoutText,700);
                        
                }else if( end == "," ) {
                       
                    setTimeout(timeoutText,500);
                    
                }else {
                        
                    setTimeout(timeoutText,350);
          
                };
            
                }else {
                    
                    lumaAniVar = 2;
                    
                    function timeoutStop() {
                        
                        lumaAniVar = 0;
                        $('#luma2D').css('zoom',1);
                        
                    };
                    
                    setTimeout(timeoutStop,500);
                    
                };
        
            };
            
            setTimeout(timeoutText,350);
        
    };





    var valX = 1.05, off2 = 0;

    function luma2Dannimate() {
        
        function timeout1() {
        
            if( lumaAniVar == 1 ) {
                
                if( off2 == 0 ) {
                    
                    if( valX > 1.07 ) {
               
                        off2 = 1;
                        
                    };
                    
                    valX = ( valX + 0.01 );
                    
                    if( tutorialVar == 0 ) {
                        
                        $('#luma2D').css('zoom',valX);
                    
                    }else {
                        
                        $('#luma2D2').css('zoom',valX);
                        
                    };
                    
                    setTimeout(timeout1,80); 
    
                
                }else {
                    
                    off2 = 1;
                        
                    if( valX < 1.07 ) {
                          
                        off2 = 0;
                            
                    };
                        
                    valX = ( valX - 0.01 );
                    
                    if( tutorialVar == 0 ) {
                        
                        $('#luma2D').css('zoom',valX);
                    
                    }else {
                        
                        $('#luma2D2').css('zoom',valX);
                        
                    };
                    
                    setTimeout(timeout1,80); 
                        
                    
                };
                
                }else if( lumaAniVar == 2 ) {
                
                    if( valX > 1.05 ) {
                        
                        valX = ( valX - 0.01 );
                        
                        if( tutorialVar == 0 ) {

                            $('#luma2D').css('zoom',valX);
                    
                        }else {
                        
                            $('#luma2D2').css('zoom',valX);
                        
                        };
                        
                        setTimeout(timeout1,80);
                        
                    };
        
                };
            
            };
        
        setTimeout(timeout1,1);
        
    };








    $('#ecosiaInfo').mouseover(function() {
       
        $('#ecosiaInfoBox').fadeIn();
        
    });


    $('#ecosiaInfo').mouseout(function() {
       
        $('#ecosiaInfoBox').fadeOut();
        
    });


	$('#lumaListenInfo').mouseover(function() {
       
        $('lumaListenInfoBox').fadeIn();
        
    });


    $('#lumaListenInfo').mouseout(function() {
       
        $('#lumaListenInfoBox').fadeOut();
        
    });


    $('.searchEngine').click(function() {

        idx = $(this).attr('data-idx'); 
        engineType = idx;
        engineIcon = engineIconArr[idx];
        MSS[7] = Number(idx);
        $('#text2DImg').css('background-image','url(Resources/Logos/' + engineIcon + ')');
        $('#searchEngineCont').fadeOut(1200);
        
        if( searchSelectorVar == 0 ) {
      
            MSS[8] = 2;
            MSS[0] = 2;
      
            function timeoutLuma() {
            
                if( mode != 1 ) {
            
                    $('#luma2D2').fadeIn(2500);
            
                }else {
            
                    $('#demoLuma').fadeIn(2500);  
            
                };
                
            };
            
                setTimeout(timeoutLuma,1000);
                welcomeMessage3();
            
            }else {
                
                function timeout120() {
                    
                    $('#figure').css('opacity','1'); 
                    $('#content2D').fadeIn(1200); 
                
                };
                
                setTimeout(timeout120,500);
                
            };
        
        saveSystem();
       
        
    });

















    // Settings


    $('.switch2').change(function(){
        
        if( autoListen == 1 ){
            
            autoListen = 0;
            MSS.splice(2,1,0);
            
        }else {
            
            autoListen = 1;
            MSS.splice(2,1,1);
            
        };
        
            saveSystem();
        
    });
              
                         
    $('.switch1').change(function(){
        
        if( autoSpeech == 1 ){
            
            autoSpeech = 0;
            MSS.splice(1,1,0);
            
        }else {
            
            autoSpeech = 1;
            MSS.splice(1,1,1);
            
        };
        
            saveSystem();
        
    }); 


     $('.switch3').change(function(){
        
        if( mode == 1 ){
            
            mode = 2;
            MSS.splice(0,1,2);
            MSS.splice(4,1,0);
            
        }else {
            
            mode = 1;
            MSS.splice(0,1,1);
            
        };
        
            saveSystem();
         
         function timeout() {
             
             chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 							
 			    chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});

 		     });
             
         };
         
             setTimeout(timeout,700);
        
    }); 



        $('.switch4').change(function(){
        
            if( stars == 1 ){
            
                stars = 0;
                
                if( mode == 1 ) {
                    
                    particleObj.visible = false;
                    
                };
                
                MSS.splice(4,1,0);
            
            }else {
            
                stars = 1;
            
                if( particlesVar == 1 && mode == 1 ) {

                    particleObj.visible = true;
                
                }else {
                    
                    if( mode == 1 ) {
                    
                        CreateParticleSystem();
                
                    };
                    
                };
            
                MSS.splice(4,1,1);
            
            };
        
                saveSystem();
        
        }); 











// Luma


    var recognition, speakVar = 0, recogSwitch = 0, userSpeech, accessToken = '9a5a46378b27446d91cb15d3de64ef4c', 
        baseUrl = 'https://api.api.ai/v1/', spokenResponse, sorryMsg = "I'm sorry, but I am not detecting a strong connection.",
        setupVar, recogResult = 0, google, bing, yahoo, search, searchVar = 0, goTo, navigate, navigateVar = 0, eco;


    function initRecognition() {
        
        recogResult = 0;
        recogitionVar = 1;
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 5;
        recognition.start();
        console.log('Recognition Start');
        
        recognition.onresult = function(event) {
    
            recogResult = 1;
            userSpeech = event.results[0][0].transcript;
            console.log('You said: ', userSpeech);
            
            google = userSpeech.substr( 0, 6 );
            bing = userSpeech.substr( 0, 4 );
            yahoo = userSpeech.substr( 0, 5 );
            eco = userSpeech.substr( 0, 3 );
            goTo = userSpeech.substr( 0, 5 );
            
             
            if( google == 'Google' || google == 'google' ) {
                
                searchVar = 1;
                search = userSpeech.substr( 6, userSpeech.length );
                location.assign( 'https://google.com/search?q=' + search );
                
            };
            
            if( bing == 'bing' || bing == 'Bing' ) {
                
                searchVar = 1;
                search = userSpeech.substr( 4, userSpeech.length );
                location.assign( 'https://www.bing.com/search?q=' + search );
                
            };
            
            if( yahoo == 'yahoo' || yahoo == 'Yahoo' ) {
                
                searchVar = 1;
                search = userSpeech.substr( 5, userSpeech.length );
                location.assign( 'https://search.yahoo.com/search?p=' + search );
                
            };
            
            if( eco == 'eco' || eco == 'Eco' ) {
                
                searchVar = 1;
                search = userSpeech.substr( 3, userSpeech.length );
                location.assign( 'https://www.ecosia.org/search?q=' + search );
                
            };
            
            if( goTo == "go to" ) {
                  
                searchVar = 1;
                navigate = userSpeech.substr( 6, userSpeech.length );
    
                var reader = new XMLHttpRequest();
                var checkFor = ('https://www.' + navigate + '.com');

                    reader.open('get', checkFor, true);

                    reader.onreadystatechange = checkReadyState;

                    function checkReadyState() {

                        if (reader.readyState === 4) {

                            if ((reader.status == 200) || (reader.status == 0)) {
                                
                                navigateVar = 1;
                                document.location.href = checkFor;

                            }else {
                                    
                                return

                            };
                
                        };
                            
                    };
            
                        reader.send(null);
                
                        function timeoutNotFound() {
                        
                            if( navigateVar == 0 ) {
                            
                                spokenResponse = ( "I'm sorry, but I could not find what your looking for." );
                                respond();
                
                            };
                            
                        };
                
                        setTimeout(timeoutNotFound,1000);
                
                };
            
            if( searchVar == 0 ) {
                
                apiSend();
                
            };
            
            recognition.stop();
            recogitionVar = 0;
         
            };
        
    /*    function timeoutSpeech() {
            
            recognition.stop();  
            
        };
        
        setTimeout(timeoutSpeech,8000);     */
        
        recognition.onend = function(event) {
            
            if( recogResult == 0 ) {
                
                speakVar = 0;
                
            };
            
            recogSwitch = 0;
            recogitionVar = 0;
            console.log('Recognition End');

        };

        if( navigator.onLine == false ) {
            
            spokenResponse = sorryMsg;
            respond();
            
        };
        
    };





    function apiSend() {
         
      $.ajax({
          
        type: "POST",
        url: baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
          
        headers: {
          "Authorization": "Bearer " + accessToken
        },
          
        data: JSON.stringify({query: userSpeech, lang: "en", sessionId: "yaydevdiner"}),

        success: function(data) {
            
           prepResponse(data);
            
        },
          
        error: function() {
            
          console.log('mssgInternErr');
          spokenResponse = sorryMsg;
          respond();
            
        }
      });
    };




     function prepResponse(val) {
    
        debugJSON = JSON.stringify(val, undefined, 2),
        spokenResponse = val.result.speech;    
        respond(spokenResponse);
        
    };




    function respond() {
    
        if( spokenResponse.length == 0 ) {
            
            spokenResponse = ("I'm sorry, I dont understand that yet. I'm still learning.");
            
        };
        
         msg = new SpeechSynthesisUtterance();
         voices = window.speechSynthesis.getVoices();
         msg.voice = voices.filter(function(voice) {  return voice.name == 'Victoria'; })[0];
         msg.text = spokenResponse;
         msg.voiceURI = 'native';
         msg.rate = 1.1;
         msg.pitch = 1.05; 
         msg.volume = 0.7;  // 1
        
         if( setupVar != 2 ) {
             
            console.log(spokenResponse);
            
            if( lumaTextVar == 1 ) {
                
                lumaTextResponse();      
                
            };
            
         };
        
         msg.onend = function(e) {

            console.log('Finished in ' + Math.round(event.elapsedTime)/1000 + ' seconds.');   
            annimationEnd();
             
             if( autoListen == 1 ) {
        
                againListen();
        
            };
                
            if( repeatListen == 1 ) {
                
                if( setupVar == 1 ) {
                    
                    setupVar = 0;  
                    againListen();
                    
                }else {
      
                    speakVar = 1;
                    againListen();
                    
                };
                
            }else {
                
                speakVar = 0;
                
            };
        
        };
        
        if( setupVar != 2 && autoSpeech == 1 ) {
        
            speechSynthesis.speak(msg);
            
            if( setupVar == 0 ) {
                
                changeText();

            }else {
                
                speakVar = 1;
                
            };
            
        }else {
            
            setupVar = 1;    
            
        };
           
    };

    
    function voiceSetup() {
        
        setupVar = 2;
        spokenResponse = 'hello';
        respond();
        
        function timeout() {

            spokenResponse = ( 'Hi ' + userName + ', how can I help?' );
            respond();

        };
        
        if( MSS[1] == 1 ) {
            
             setTimeout(timeout,500);
            
        };
        
    };

    

    function againListen() {
        
        speakVar = 1;
        console.log('Again');
        initRecognition();  
        
    };


/*

function updateTab() {
    
    
    
     //   isTabOpen= true;
      //  openedTab = 'www.google.com';
      //  tabCreated();
                
  //  });  
    

    
//    chrome.windows.getCurrent(tab, function(tab){
    
    
//});


chrome.tabs.create({ url: chrome.extension.getURL(“Luminous.html”) });function




};
    

    setTimeout(updateTab,4000);


/*

   "chrome_url_overrides" : {
   
   	 	"newtab": “Luminous.html”
   	 	
  	},
  	*/


// Chrome Functionality 


 //   chrome.tabs.create({selected: true},function(tab){
    
     //   isTabOpen= true;
      //  openedTab = 'www.google.com';
      //  tabCreated();
                
  //  });   

/*
    function tabCreated(){
    
        chrome.tabs.update(openedTab,'www.google.com');
        chrome.tabs.executeScript(openedTab, {file: "jquery.js"},function(tab){
    
            if (chrome.runtime.lastError) {
            
                console.log(chrome.runtime.lastError.message);
                chrome.tabs.executeScript(openedTab, {file: "jquery.js"},function(tab){
                chrome.tabs.executeScript(openedTab, {file: "inject.js"});
                
            });
                
            }else {
                
                chrome.tabs.executeScript(openedTab, {file: "inject.js"});
                
            }
            
        });
        
        chrome.tabs.update(openedTab,{selected:true});
    
    };

*/



// Key Interaction


    document.addEventListener( 'keypress', onDocumentKeyPress, false );
       
        var chatString = '', textTag, evoInit = 0;


        function onDocumentKeyPress( event ) {
              
                if( tutorialVar == 1 ) {
                    
                     keyCode = event.which;
                    
                     if( keyCode == 13 ) {
                        
                         if( tutorialCount == 0 ) {
                             
                            userName = $('#nameInput').val();
                            MSS.splice(6,1,userName);
                            tutorialNext();      
                             
                         };
                        
                     };
                    
                };
              
                if( evoInit == 1 ) {
                   
                    keyCode = event.which;
                    letter = String.fromCharCode( keyCode );
                    chatString = ( chatString + letter );
                    textTag = 1;
                    
                    if( keyCode != 13 ) {
                       
                   //     updateText();
                       
                    }else {
                      
                        evoSwitch = 1;
                        send();
                        fadeVar = 1;
                        
                    };
                        
                };
            
            };



















