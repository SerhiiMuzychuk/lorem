
 


(function ($) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.ss4 = {
  attach: function(context, settings) {
      $('#edit-field-monthly').select2({
        sortResults: function(results, container, query) {
            if (query.term) {
                // use the built in javascript sort function
                return results.sort(function(a, b) {
                    if (a.text.length > b.text.length) {
                        return 1;
                    } else if (a.text.length < b.text.length) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }
            return results;
        }
    });

}}

})(jQuery); 

(function ($) {
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.ss2 = {
  attach: function(context, settings) {
      $('#rootwizard > div.navbar > div > div > ul > li.active > a').click(function(){
        return false;
      });
      $('#edit-question1-1').labelauty({ label: false });
      $('#edit-question1-2').labelauty({ label: false });
      $('#edit-question1-3').labelauty({ label: false });
      $('#edit-question1-0').labelauty({ label: false });
      $('#edit-question2-0').labelauty({ label: false });
      $('#edit-question2-1').labelauty({ label: false });
      $('#edit-question2-2').labelauty({ label: false });
      $('#edit-question3-0').labelauty({ label: false });
      $('#edit-question3-1').labelauty({ label: false });
      $('#edit-question3-2').labelauty({ label: false });
      $('#edit-question3-3').labelauty({ label: false });
      $('#edit-question3-4').labelauty({ label: false });
      $('#edit-question5-0').labelauty({ label: false });
      $('#edit-question5-1').labelauty({ label: false });
      $('#edit-question6-0').labelauty({ label: false });
      $('#edit-question6-1').labelauty({ label: false });
      $('#edit-question7-0').labelauty({ label: false });
      $('#edit-question7-1').labelauty({ label: false });
      $('#edit-question8-0').labelauty({ label: false });
      $('#edit-question8-1').labelauty({ label: false });
      $('#edit-question8-2').labelauty({ label: false });
      $('#edit-question8-3').labelauty({ label: false });
      $('#edit-question8-4').labelauty({ label: false });
      $('#edit-question8-5').labelauty({ label: false });
      $('#edit-question9-0').labelauty({ label: false });
      $('#edit-question9-1').labelauty({ label: false });
      $('#edit-question10-0').labelauty({ label: false });
      $('#edit-question10-1').labelauty({ label: false });
      $('#edit-question11-0').labelauty({ label: false });
      $('#edit-question11-1').labelauty({ label: false });
      $('#edit-question12-0').labelauty({ label: false });
      $('#edit-question12-1').labelauty({ label: false });
      $('#edit-question13-0').labelauty({ label: false });
      $('#edit-question13-1').labelauty({ label: false });
      $('#edit-question14-0').labelauty({ label: false });
      $('#edit-question14-1').labelauty({ label: false });
      $('#edit-question14-2').labelauty({ label: false });
      $('#edit-question14-3').labelauty({ label: false });
      $('#edit-question14-4').labelauty({ label: false });
      $('#edit-question14-5').labelauty({ label: false });
      $('#edit-question15-0').labelauty({ label: false });
      $('#edit-question15-1').labelauty({ label: false });
      $('#edit-question15-2').labelauty({ label: false });
      $('#edit-question16-0').labelauty({ label: false });
      $('#edit-question16-1').labelauty({ label: false });
      $('#edit-question16-2').labelauty({ label: false });
      $('#edit-question16-3').labelauty({ label: false });
      $('#edit-question16-4').labelauty({ label: false });
      $('#edit-question16-5').labelauty({ label: false });
      $('#edit-question16-6').labelauty({ label: false });
      $('#edit-question17-0').labelauty({ label: false });
      $('#edit-question17-1').labelauty({ label: false });
      $('#edit-question17-2').labelauty({ label: false });
      $('#edit-question17-3').labelauty({ label: false });
      $('#edit-question17-4').labelauty({ label: false });
      $('#edit-question18-0').labelauty({ label: false });
      $('#edit-question18-1').labelauty({ label: false });
      $('#edit-question18-2').labelauty({ label: false });
      $('#edit-question18-3').labelauty({ label: false });
      $('#edit-question18-4').labelauty({ label: false });
      $('#edit-question18-5').labelauty({ label: false });
      $('#edit-question18-6').labelauty({ label: false });
      $('#edit-question19-0').labelauty({ label: false });
      $('#edit-question19-1').labelauty({ label: false });
      $('#edit-question19-2').labelauty({ label: false });
      $('#edit-question20-0').labelauty({ label: false });
      $('#edit-question20-1').labelauty({ label: false });
      $('#edit-question20-2').labelauty({ label: false });
      $('#edit-question20-3').labelauty({ label: false });
      $('#edit-question20-4').labelauty({ label: false });
      $('#edit-question20-5').labelauty({ label: false });

      $('#question-form #edit-question1-1').click(function(){
        $('#question-form #edit-question1-text').addClass('tesld');
      });

     // $("#edit-question2 input").labelauty();
     // $("#edit-question3 input").labelauty(); 
     // $("#edit-question5 input").labelauty();
     // $("#edit-question6 input").labelauty();
     // $("#edit-question7 input").labelauty();
     // $("#edit-question8 input").labelauty();
     // $("#edit-question9 input").labelauty();
     // $("#edit-question10 input").labelauty();
     // $("#edit-question11 input").labelauty();
     // $("#edit-question12 input").labelauty();
     // $("#edit-question13 input").labelauty();
     // $("#edit-question14 input").labelauty();
     // $("#edit-question15 input").labelauty();
     // $("#edit-question16 input").labelauty();
     // $("#edit-question17 input").labelauty();
     // $("#edit-question18 input").labelauty();
     // $("#edit-question19 input").labelauty();
     // $("#edit-question20 input").labelauty();
   //   $('#question-form .icheckbox_square input').addClass('ckeckedsss');
    
   // $('#question-form #edit-question1-text').addClass('helllo');

    $('#edit-question20 > div:nth-child(6) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
   $('.form-item-text #edit-text').addClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(1) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(2) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(3) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(4) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(5) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });


  $('#edit-question20 > div:nth-child(6) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
   $('.form-item-text #edit-text').addClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(1) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(2) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(3) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(4) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });

  $('#edit-question20 > div:nth-child(5) > label:nth-child(2) > span.labelauty-unchecked-image').click(function(){
    $('.form-item-text #edit-text').removeClass('hejsa');
  });


  $('#feedback-form #edit-submit').click(function() {
      $('#feedback-form #edit-submit').addClass('hidden');
      $('.send-newsletter').addClass('open');
  });

  $('.show1').click(function() {
    $('.answ1').toggleClass('active');  
  });

  $('.show2').click(function() {
    $('.answ2').toggleClass('active');  
  });


}}

})(jQuery); 






