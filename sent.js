
function send_message_to_sw(title, msg, link){
   navigator.serviceWorker.controller.postMessage({title : title, msg : msg, link : link});
}
  
function sendPushToClient(){
	var KEY  = 'AIzaSyB_cFsUwNs1k3hnn86G89gLRtKGPtWTDaE';
	
	var KEYu = 'c4kpokpjY_I:APA91bEe9GIIMZQkY7uZBLiEO7SmH47ac27u_kxjVTwmYtaU5MHXCYt-SK2DILSGx4rnUGT34dqK7T-k49BmRNZgEvVdMUu15USJEICB6HqnvRgWCuThhiLTZQ_y6stxMumcbOQQYUhM';
  
	$.ajax({
	    url: "https://android.googleapis.com/gcm/send",
	    beforeSend: function(xhr) { 
	      xhr.setRequestHeader("Authorization", "key=" + KEY); 
	    },
	    type: 'POST',
	    dataType: 'json',
	    contentType: 'application/json',
	    processData: false,
	    
	    data: '{"registration_ids":["'+KEYu+'"]}',
	   
	    success: function (data) {
	        if(data.success){
	        	console.log('Push Enviado com sucesso!');
	        }else{
	        	alert('Error');
	        }
	    },

	    error: function(){
	      alert("Cannot get data");
	    }
	});
}






	/*function send_message_to_sw(msg){#
		return new Promise(function(resolve, reject){
		    // Create a Message Channel
		    var msg_chan = new MessageChannel();

		    // Handler for recieving message reply from service worker
		    msg_chan.port1.onmessage = function(event){
		        if(event.data.error){
		            reject(event.data.error);
		        }else{
		            resolve(event.data);
		        }
		    };

		    // Send message to service worker along with port for reply
		    navigator.serviceWorker.controller.postMessage("Client 1 says '"+msg+"'", [msg_chan.port2]);
		});
	}*/