

chrome.browserAction.onClicked.addListener(function (tab) { 
 				
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 							
        chrome.tabs.update(tabs[0].id, {url: 'chrome://newtab'});
 			
 	  });	
 		  		
});


/*

chrome.contextMenus.removeAll();

chrome.contextMenus.create({
    
      title: "first",
      contexts: ["browser_action"],
      onclick: function() {
        alert('first');
      }
    
});


*/



(function () {

		if (chrome && chrome.runtime && chrome.runtime.setUninstallURL) {
		
			chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSfEgp3hcmBPSoNafK-NAOgzchx-71oDqKwPVeV1xKeIp0TBMg/viewform?usp=sf_link");
			
		};
		
	})();