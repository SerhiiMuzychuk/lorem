
 


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
     $("#edit-question1 input").asCheck();
     $("#edit-question2 input").asCheck();
     $("#edit-question3 input").asCheck(); 
     $("#edit-question5 input").asCheck();
     $("#edit-question6 input").asCheck();
     $("#edit-question7 input").asCheck();
     $("#edit-question8 input").asCheck();
     $("#edit-question9 input").asCheck();
     $("#edit-question10 input").asCheck();
     $("#edit-question11 input").asCheck();
     $("#edit-question12 input").asCheck();
     $("#edit-question13 input").asCheck();
     $("#edit-question14 input").asCheck();
     $("#edit-question15 input").asCheck();
     $("#edit-question16 input").asCheck();
     $("#edit-question17 input").asCheck();
     $("#edit-question18 input").asCheck();
     $("#edit-question19 input").asCheck();
     $("#edit-question20 input").asCheck();
}}

})(jQuery); 






