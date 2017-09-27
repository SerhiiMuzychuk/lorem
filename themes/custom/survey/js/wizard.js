(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      $(document).ready(function() {
        $('#rootwizard').bootstrapWizard({onNext: function(tab, navigation, index) {

           if(index==1) {

            var hasError = false;
            var radios = document.getElementsByName("question1");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (formValid) {
              $('#edit-question1--wrapper').addClass('has-error');
              // $("#edit-question1-1").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
            
              return false;
            }

            else {
              hasError = false
            }

            var hasError = false;
            var radios = document.getElementsByName("question3");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question3--wrapper span').addClass('has-error');
              // $("#edit-question3-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              $('#edit-question3--wrapper span').removeClass('has-error');
              hasError = false
            }
            

            var hasError = false;
            var radios = document.getElementsByName("question2");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#question-form #edit-question2--wrapper').addClass('has-error');
              // $("#edit-question3-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
             

            var hasError = false;
                // $('#step1').removeClass('has-error');
            var radios2 = document.getElementsByName("question5");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#question-form #edit-question5--wrapper').addClass('has-error');
              // $("#edit-question5-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              formValid = true;
              hasError = true;
              return false;
            }

            else {
              hasError = false
            }
                           
            return formValid;

          }




      //     if(index==1) {
      //       var hasError = false;
      //       var radios2 = document.getElementsByName("question1");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios2.length) {
      //           if (radios2[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question1--wrapper span').addClass('has-error');
      //         // $("#edit-question6-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //         formValid = true;
      //         return false;
      //       }

      //       else {
      //         hasError = false
      //       }

           
      //       var hasError = false;
      //       var radios = document.getElementsByName("question2");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios.length) {
      //           if (radios[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question2--wrapper .fieldset-legend').addClass('has-error');
      //         // $("#edit-question7-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //         formValid = true;
      //         return false;
      //       }

      //       else {
      //         hasError = false
      //       }
             

      //         var hasError = false;
      //           // $('#step1').removeClass('has-error');
      //             var radios1 = document.getElementsByName("question3");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios1.length) {
      //           if (radios1[i].checked) formValid = true;
      //           i++;        
      //       }

      //         if (!formValid) {
      //         $('#edit-question3--wrapper span').addClass('has-error');
      //         // $("#edit-question8-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //         formValid = true;
      //         return false;
      //       }

      //       else {
      //         hasError = false
      //       }
            
            
      //       var hasError = false;
      //           // $('#step1').removeClass('has-error');
      //       var radios2 = document.getElementsByName("question5");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios2.length) {
      //           if (radios2[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question5--wrapper span').addClass('has-error');
      //         // $("#edit-question9-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //         formValid = true;
      //         return true;
      //       }

            

      //       if(hasError == true) { return false; }    
               


      //       return formValid;
      // }




      
          if(index==2) {
            var hasError = false;
            var radios2 = document.getElementsByName("question6");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question6--wrapper span').addClass('has-error');
              // $("#edit-question6-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }

           
            var hasError = false;
            var radios = document.getElementsByName("question7");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question7--wrapper .fieldset-legend').addClass('has-error');
              // $("#edit-question7-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
             

              var hasError = false;
                // $('#step1').removeClass('has-error');
                  var radios1 = document.getElementsByName("question8");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios1.length) {
                if (radios1[i].checked) formValid = true;
                i++;        
            }

              if (!formValid) {
              $('#edit-question8--wrapper span').addClass('has-error');
              // $("#edit-question8-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
            
            
            var hasError = false;
                // $('#step1').removeClass('has-error');
            var radios2 = document.getElementsByName("question9");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question9--wrapper span').addClass('has-error');
              // $("#edit-question9-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
            if (!formValid)
            var hasError = false;
            var radios2 = document.getElementsByName("question10");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question10--wrapper span').addClass('has-error');
              hasError = true;
              formValid =true;
              return true;
            }

            else {
              hasError = false
            }

            if(hasError == true) { return false; }    
               


            return formValid;
      }

      if(index==3) {
            var hasError = false;
                
                  var radios = document.getElementsByName("question11");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question11--wrapper span').addClass('has-error');
              // $("#edit-question11-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid =true
              return false;
            }

            else {
              hasError = false
            }

           
              var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios = document.getElementsByName("question12");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question12--wrapper span').addClass('has-error');
              // $("#edit-question12-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid =true;
              return false;
            }

            else {
              hasError = false
            }
             
          
            // return formValid;

              var hasError = false;
                // $('#step1').removeClass('has-error');
                 
             
            // return formValid;
            var hasError = false;
                // $('#step1').removeClass('has-error');
            var radios2 = document.getElementsByName("question14");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question14--wrapper span').addClass('has-error');
              // $("#edit-question14-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
             
            var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios11 = document.getElementsByName("question15");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios11.length) {
                if (radios11[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question15--wrapper span').addClass('has-error');
              // $("#edit-question15-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = false;
              return false;
            }

            else {
              hasError = false
            }

             var radios1 = document.getElementsByName("question13");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios1.length) {
                if (radios1[i].checked) formValid = true;
                i++;        
            }

              if (!formValid) {
              $('#edit-question13--wrapper span').addClass('has-error');
              // $("#edit-question13-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return true;
            }

            else {
              hasError = false
            }
            

            return formValid;
      }

      
 
    }, onTabShow: function(tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index+1;
      var $percent = ($current/$total) * 100;
      $('#rootwizard .progress-bar').css({width:$percent+'%'});
    }});
      });

      $('.footer-wizard #edit-submit').click(function(){

        var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios11 = document.getElementsByName("question16");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios11.length) {
                if (radios11[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question16--wrapper span').addClass('has-error');
              hasError = true;
            }

            else {
              hasError = false
            }

           
              var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios = document.getElementsByName("question17");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question17--wrapper span').addClass('has-error');
              hasError = true;
            }

            else {
              hasError = false
            }
             
          
            // return formValid;

              var hasError = false;
                // $('#step1').removeClass('has-error');
                  var radios1 = document.getElementsByName("question18");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios1.length) {
                if (radios1[i].checked) formValid = true;
                i++;        
            }

              if (!formValid) {
              $('#edit-question18--wrapper span').addClass('has-error');
              hasError = true;
            }

            else {
              hasError = false
            }
            
             
            // return formValid;
            var hasError = false;
                // $('#step1').removeClass('has-error');
            var radios2 = document.getElementsByName("question19");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question19--wrapper span').addClass('has-error');
            }

            else {
              hasError = false
            }
             
            var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios11 = document.getElementsByName("question20");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios11.length) {
                if (radios11[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question20--wrapper span').addClass('has-error');
              hasError = true;
            }

            else {
              $('#edit-question20--wrapper span').removeClass('has-error');
              hasError = false
            }

        
            return formValid;

        });

      
   
        // $('.js-form-item-question1-3 .iCheck-helper').click(function() {
        //   $('#edit-question1-text').toggleClass('qwasasas');
        // });
        //  $('#question-form .icheckbox_square input').click(function() {
        //   $('#question-form #edit-question1-text').addClass('helllo1');
        //  });
         
    
   

      $("#block-about-2").addClass('container');
      $("#block-examplesblock").addClass('container');
      $("#contact-message-feedback-form").addClass('container');
      $("#edit-pass-pass1").attr("placeholder", "please fill...");
      $("#edit-pass-pass2").attr("placeholder", "please fill...");

      
      $('#tab1 #back').click(function() {
        document.location.href = '/first-step';
      });

      $('#edit-question9-0').click(function(){
        $('#edit-question10--wrapper').addClass('active');
      });
       $('#edit-question9-1').click(function(){
        $('#edit-question10--wrapper').removeClass('active');
        $('#edit-question10-0').removeClass('has-error');
        formValid = false;
      });

       $('#edit-question12-0').click(function(){
        $('#edit-question13--wrapper').addClass('open');
      });
       $('#edit-question12-1').click(function(){
        $('#edit-question13--wrapper').removeClass('open');
        $('#edit-question13-0').removeClass('has-error');
        formValid = false;
      });
      // $('#tab1')document.getElementById("#edit-submit").style.display = "none";
      
    // }
    //    $('.hero').click(function() {
    //     document.location.href = '/node';
    //   });

        // $('.hero').click(function() {
        // document.location.href = '/node';
        // });
      // return false;
      
    }
  };
})(jQuery, Drupal, drupalSettings);
 