/*
 * 	Student Name:	Ryan Spencer
 * 	Student ID:		x21173010
 * 	Course:			HDAIML_JAN22OL
*/

// Tabs on About Us page
function openInfo(evt, infoName) {
  
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the button that opened the tab
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
} 

// Slideshow of images
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// Order form validation
function validateOrderForm()                                    
{ 
	var name = document.forms["orderform"]["name"];
	var phonenumber = document.forms["orderform"]["phonenumber"];  
	var email = document.forms["orderform"]["email"];              
    var street = document.forms["orderform"]["street"];    
    var region = document.forms["orderform"]["region"];   
    var county = document.forms["orderform"]["county"];  
    var eircode = document.forms["orderform"]["eircode"];  
	
	if (name.value != "" && phonenumber.value != "" && email.value != "" && street.value != "" && region.value != "" && county.value != "" && eircode.value != "") {
		alert('Thank you, your order has been placed! We will be in touch shortly to update you.')
	}else{
		if (name.value == "")                                  
		{ 
			document.getElementById('errorname').innerHTML="Please enter a valid name";  
			name.focus(); 
		}else{
			document.getElementById('errorname').innerHTML="";  
		}
		
		if (phonenumber.value == "")                                  
		{ 
			document.getElementById('errorphonenumber').innerHTML="Please enter a valid phone number";  
			phonenumber.focus(); 
		}else{
			document.getElementById('errorphonenumber').innerHTML="";  
		}
		
		if (email.value == "")                                   
		{ 
			document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
			email.focus(); 
		}else{
			document.getElementById('erroremail').innerHTML="";  
		}
	   
		if (email.value.indexOf("@", 0) < 0)                 
		{ 
			document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
			email.focus();  
		} 
	   
		if (email.value.indexOf(".", 0) < 0)                 
		{ 
			document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
			email.focus(); 
		} 
		   
		if (street.value == "")                                   
		{ 
			document.getElementById('errorstreet').innerHTML="Please enter a street address"; 
			street.focus(); 
		}else{
			document.getElementById('errorstreet').innerHTML="";  
		}
	   
		if (region.value == "")                                   
		{ 
			document.getElementById('errorregion').innerHTML="Please enter a valid region"; 
			region.focus(); 
		}else{
			document.getElementById('errorregion').innerHTML="";  
		}
		
		if (county.value == "")                                   
		{ 
			document.getElementById('errorcounty').innerHTML="Please enter a county"; 
			county.focus();  
		}else{
			document.getElementById('errorcounty').innerHTML="";  
		}
		
		if (eircode.value == "")                                   
		{ 
			document.getElementById('erroreircode').innerHTML="Please enter a valid Eircode"; 
			eircode.focus(); 
		}else{
			document.getElementById('erroreircode').innerHTML="";  
		}
		return false;
	}

}

// Contact form validation
function validateForm()                                    
{ 
	var name = document.forms["myForm"]["name"];
	var phone = document.forms["myForm"]["phone"];                
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
	
	if (name.value != "" && phone.value != "" && email.value != "" && message.value != "") {
		alert('Thank you, we have received your message. We will be in touch as soon as possible.')
	}else{
		if (name.value == "")                                  
		{ 
			document.getElementById('errorname').innerHTML="Please enter a valid name";  
			name.focus();  
		}else{
			document.getElementById('errorname').innerHTML="";  
		}
		
		if (phone.value == "")                                  
		{ 
			document.getElementById('errorphone').innerHTML="Please enter a valid phone number";  
			phone.focus(); 
		}else{
			document.getElementById('errorphone').innerHTML="";  
		}
		   
		if (email.value == "")                                   
		{ 
			document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
			email.focus(); 
		}else{
			document.getElementById('erroremail').innerHTML="";  
		}
	   
		if (email.value.indexOf("@", 0) < 0)                 
		{ 
			document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
			email.focus(); 
		} 
	   
		if (email.value.indexOf(".", 0) < 0)                 
		{ 
			document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
			email.focus(); 
		} 
	   
		if (message.value == "")                           
		{
			document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
			message.focus();  
		}else{
			document.getElementById('errormsg').innerHTML="";  
		}
		return false; 
	}
}
