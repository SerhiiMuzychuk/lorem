
(function ($) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.ss5 = {
  attach: function(context, settings) {
  	$('#edit-question1-3').click(function() {
  		$('#edit-question1-text').toggleClass('active');
  	}
    );

    $('#edit-question3-4').click(function() {
  		$('#edit-question3 #edit-text').addClass('active');
  	}
    );
    $('#edit-question3-0').click(function() {
  		$('#edit-question3 #edit-text').removeClass('active');
  	}
    );
    $('#edit-question3-1').click(function() {
  		$('#edit-question3 #edit-text').removeClass('active');
  	}
    );
    $('#edit-question3-2').click(function() {
  		$('#edit-question3 #edit-text').removeClass('active');
  	}
    );
    $('#edit-question3-3').click(function() {
  		$('#edit-question3 #edit-text').removeClass('active');
  	}
    );

    $('#edit-question8-5').click(function() {
  		$('#edit-question8 #edit-text--2').addClass('active');
  	}
    );
    $('#edit-question8-0').click(function() {
  		$('#edit-question8 #edit-text--2').removeClass('active');
  	}
    );
    $('#edit-question8-1').click(function() {
  		$('#edit-question8 #edit-text--2').removeClass('active');
  	}
    );
    $('#edit-question8-2').click(function() {
  		$('#edit-question8 #edit-text--2').removeClass('active');
  	}
    );
    $('#edit-question8-3').click(function() {
  		$('#edit-question8 #edit-text--2').removeClass('active');
  	}
    );
     $('#edit-question8-4').click(function() {
  		$('#edit-question8 #edit-text--2').removeClass('active');
  	}
    );

    $('#edit-question14-5').click(function() {
  		$('#edit-question14 #edit-text--3').addClass('active');
  	}
    );
    $('#edit-question14-0').click(function() {
  		$('#edit-question14 #edit-text--3').removeClass('active');
  	}
    );
    $('#edit-question14-1').click(function() {
  		$('#edit-question14 #edit-text--3').removeClass('active');
  	}
    );
    $('#edit-question14-2').click(function() {
  		$('#edit-question14 #edit-text--3').removeClass('active');
  	}
    );
    $('#edit-question14-3').click(function() {
  		$('#edit-question14 #edit-text--3').removeClass('active');
  	}
    );
     $('#edit-question14-4').click(function() {
  		$('#edit-question14 #edit-text--3').removeClass('active');
  	}
    );

   	$('#edit-question17-4').click(function() {
  		$('#edit-question17 #edit-text--4').addClass('active');
  	}
    );
    $('#edit-question17-0').click(function() {
  		$('#edit-question17 #edit-text--4').removeClass('active');
  	}
    );
    $('#edit-question17-1').click(function() {
  		$('#edit-question17 #edit-text--4').removeClass('active');
  	}
    );
    $('#edit-question17-2').click(function() {
  		$('#edit-question17 #edit-text--4').removeClass('active');
  	}
    );
    $('#edit-question17-3').click(function() {
  		$('#edit-question17 #edit-text--4').removeClass('active');
  	}
    );

    $('#edit-question20-5').click(function() {
  		$('#edit-text--5').addClass('active');
  	}
    );
    $('#edit-question20-0').click(function() {
  		$('#edit-question20 #edit-text--5').removeClass('active');
  	}
    );
    $('#edit-question20-1').click(function() {
  		$('#edit-question20 #edit-text--5').removeClass('active');
  	}
    );
    $('#edit-question20-2').click(function() {
  		$('#edit-question20 #edit-text--5').removeClass('active');
  	}
    );
    $('#edit-question20-3').click(function() {
  		$('#edit-question20 #edit-text--5').removeClass('active');
  	}
    );
     $('#edit-question20-4').click(function() {
  		$('#edit-question20 #edit-text--5').removeClass('active');
  	}
    );
}}

})(jQuery); 

(function ($) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.ss6 = {
  attach: function(context, settings) {
  $document.ready(function() {
        console.log($('#edit-field-monthly').niceSelect('update'));
      });
}}

})(jQuery); 

