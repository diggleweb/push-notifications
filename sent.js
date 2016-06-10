 
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

function send_message_to_sw(title, msg){
   navigator.serviceWorker.controller.postMessage({title : title, msg : msg});
}
 
 
function sendPush(){
	var KEY  = 'AIzaSyB_cFsUwNs1k3hnn86G89gLRtKGPtWTDaE';
	var KEYu = 'cgHpWogsKm4:APA91bGfqIBnYxFwj297rh9B4Vh9IVObbkLGX0w39Uufa2LFcfx1SlVPPj503tEx2GPYGzHNknA6l6uZvtFauSGivg96qN_tt7_vkKNua09Z5ZKfippXVJBKpePQ423HH9lj7pBZ-DvZ';
  
	$.ajax({
	    url: "https://android.googleapis.com/gcm/send",
	    beforeSend: function(xhr) { 
	      xhr.setRequestHeader("Authorization", "key=" + KEY); 
	    },
	    type: 'POST',
	    dataType: 'json',
	    contentType: 'application/json',
	    processData: false,
	    data: '{"registration_ids":["cgHpWogsKm4:APA91bGfqIBnYxFwj297rh9B4Vh9IVObbkLGX0w39Uufa2LFcfx1SlVPPj503tEx2GPYGzHNknA6l6uZvtFauSGivg96qN_tt7_vkKNua09Z5ZKfippXVJBKpePQ423HH9lj7pBZ-DvZ"]}',
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