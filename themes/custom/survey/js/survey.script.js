
(function ($) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.ss5 = {
  attach: function(context, settings) {
  	


    // if ($('#edit-question1 > div.category-block.js-form-item.form-item.js-form-type-checkbox.form-item-question1-3.js-form-item-question1-3 > span').hasClass("asCheck_checked")) {
    //   $('#edit-question1-text').css({'display': "block"});
    // } 
    // else {
    //   $('#edit-question1-text').css({'display': "none"});
    // }

    

    $('#block-topheaderblock-2 .header-mobile-menu').click(function() {
      $('#block-topheaderblock-2 .header-menu').toggleClass('help');
      $('#block-topheaderblock-2 #hel-hel').toggleClass('active');
      $('.lorem-title').toggleClass('active');
    }
    );


    if ($('#block-footer > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').hasClass("is-active")) {
      $('#block-footer > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)').css({'border-radius': "0 0 4px 4px", 'border-bottom': "none"});
    } 
    else {
      $('#block-footer > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)').css({'border-radius': "0", 'border-bottom': "1px solid"});
    }
   // $('.icheckbox_square input').addClass('ckeckedsss');
    
   // $('#edit-question1-text').addClass('helllo');

   // $('#question-form .icheckbox_square input').click(function() {
   //        $('#question-form #edit-question1-text').addClass('helllo1');
   //       });
   //  $('#question-form .icheckbox_square ins').addClass('cire');
   //  $('#question-form .icheckbox_square ins').click(function() {
   //        $('#question-form #edit-question1-text').addClass('helllo1');
   //       });

    
    $('#question-form .icheckbox_square  .iCheck-helper').click(function() {
      $('#edit-question1 #edit-text').addClass('active');
    });

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


