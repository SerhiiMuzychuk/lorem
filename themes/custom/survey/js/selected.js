
 


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
      $('#edit-question1-1').prettyCheckable();
      $('#edit-question1-2').prettyCheckable();
      $('#edit-question1-3').prettyCheckable();
      $('#edit-question1-0').prettyCheckable();
      $('#edit-question2-0').prettyCheckable();
      $('#edit-question2-1').prettyCheckable();
      $('#edit-question2-2').prettyCheckable();
      $('#edit-question3-0').prettyCheckable();
      $('#edit-question3-1').prettyCheckable();
      $('#edit-question3-2').prettyCheckable();
      $('#edit-question3-3').prettyCheckable();
      $('#edit-question3-4').prettyCheckable();
      $('#edit-question5-0').prettyCheckable();
      $('#edit-question5-1').prettyCheckable();
      $('#edit-question6-0').prettyCheckable();
      $('#edit-question6-1').prettyCheckable();
      $('#edit-question7-0').prettyCheckable();
      $('#edit-question7-1').prettyCheckable();
      $('#edit-question8-0').prettyCheckable();
      $('#edit-question8-1').prettyCheckable();
      $('#edit-question8-2').prettyCheckable();
      $('#edit-question8-3').prettyCheckable();
      $('#edit-question8-4').prettyCheckable();
      $('#edit-question8-5').prettyCheckable();
      $('#edit-question9-0').prettyCheckable();
      $('#edit-question9-1').prettyCheckable();
      $('#edit-question10-0').prettyCheckable();
      $('#edit-question10-1').prettyCheckable();
      $('#edit-question11-0').prettyCheckable();
      $('#edit-question11-1').prettyCheckable();
      $('#edit-question12-0').prettyCheckable();
      $('#edit-question12-1').prettyCheckable();
      $('#edit-question13-0').prettyCheckable();
      $('#edit-question13-1').prettyCheckable();
      $('#edit-question14-0').prettyCheckable();
      $('#edit-question14-1').prettyCheckable();
      $('#edit-question14-2').prettyCheckable();
      $('#edit-question14-3').prettyCheckable();
      $('#edit-question14-4').prettyCheckable();
      $('#edit-question14-5').prettyCheckable();
      $('#edit-question15-0').prettyCheckable();
      $('#edit-question15-1').prettyCheckable();
      $('#edit-question15-2').prettyCheckable();
      $('#edit-question16-0').prettyCheckable();
      $('#edit-question16-1').prettyCheckable();
      $('#edit-question16-2').prettyCheckable();
      $('#edit-question16-3').prettyCheckable();
      $('#edit-question16-4').prettyCheckable();
      $('#edit-question16-5').prettyCheckable();
      $('#edit-question16-6').prettyCheckable();
      $('#edit-question17-0').prettyCheckable();
      $('#edit-question17-1').prettyCheckable();
      $('#edit-question17-2').prettyCheckable();
      $('#edit-question17-3').prettyCheckable();
      $('#edit-question17-4').prettyCheckable();
      $('#edit-question18-0').prettyCheckable();
      $('#edit-question18-1').prettyCheckable();
      $('#edit-question18-2').prettyCheckable();
      $('#edit-question18-3').prettyCheckable();
      $('#edit-question18-4').prettyCheckable();
      $('#edit-question18-5').prettyCheckable();
      $('#edit-question18-6').prettyCheckable();
      $('#edit-question19-0').prettyCheckable();
      $('#edit-question19-1').prettyCheckable();
      $('#edit-question19-2').prettyCheckable();
      $('#edit-question20-0').prettyCheckable();
      $('#edit-question20-1').prettyCheckable();
      $('#edit-question20-2').prettyCheckable();
      $('#edit-question20-3').prettyCheckable();
      $('#edit-question20-4').prettyCheckable();
      $('#edit-question20-5').prettyCheckable();

      $('.clearfix > a:nth-child(2)').click(function(){
        $('#question-form #edit-question1-text').toggleClass('tesld');
      });

     // $("#edit-question2 input").asCheck();
     // $("#edit-question3 input").asCheck(); 
     // $("#edit-question5 input").asCheck();
     // $("#edit-question6 input").asCheck();
     // $("#edit-question7 input").asCheck();
     // $("#edit-question8 input").asCheck();
     // $("#edit-question9 input").asCheck();
     // $("#edit-question10 input").asCheck();
     // $("#edit-question11 input").asCheck();
     // $("#edit-question12 input").asCheck();
     // $("#edit-question13 input").asCheck();
     // $("#edit-question14 input").asCheck();
     // $("#edit-question15 input").asCheck();
     // $("#edit-question16 input").asCheck();
     // $("#edit-question17 input").asCheck();
     // $("#edit-question18 input").asCheck();
     // $("#edit-question19 input").asCheck();
     // $("#edit-question20 input").asCheck();
   //   $('#question-form .icheckbox_square input').addClass('ckeckedsss');
    
   // $('#question-form #edit-question1-text').addClass('helllo');
}}

})(jQuery); 






