$(document).ready(function(){
    $("#myBtn").click(function(){
		if ($("#sweepstakes").valid()){
			$("#successModal").modal();
		}
		else {
			$("#alertModal").modal();
		}
    });
});


$(function(){
	$("#sweepstakes").validate({	
		rules: {
		  email: {
			required: true,
			email: true
		  },
		   firstName: {
			required: true
		  },
		  secondName: {
			required: true
		  },
		   phone: {
			required: true,
			digits: true,
			minlength: 10,
			maxlength: 10,
			phoneUS: true
		  },
		  
		  address: {
			required: true
		  },
		  town: {
			required: true
		  },
		  state: {
			required: true  
		  },
		  postcode: {
			required: true,
			minlength: 5,
			maxlength: 5,
			digits: true
		  }
		}
	});
});


	
