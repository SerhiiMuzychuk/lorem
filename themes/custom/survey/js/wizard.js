(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      $(document).ready(function() {
        // var $validator = $("#question-form").validate({
        //   rules: {
        //     radiofield: {
        //       required: true,
        //     },
            
        //   }
        // });
        $('#rootwizard').bootstrapWizard({onNext: function(tab, navigation, index) {
          // var $valid = $("#question-form").valid();
          // if(!$valid) {
          //   $validator.focusInvalid();
          //   return false;
          // }

           if(index==1) {

            var hasError = false;
                // $('#step1').removeClass('has-error');
                  var radios5 = document.getElementsByName("question1");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios5.length) {
                if (radios5[i].checked) formValid = true;
                i++;        
            }

            if (formValid) {
              $('#edit-question1-1').addClass('has-error');
              $("#edit-question1-1").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }

              var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios = document.getElementsByName("question3");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question3-0').addClass('has-error');
              $("#edit-question3-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
             
          
            // return formValid;

              var hasError = false;
                // $('#step1').removeClass('has-error');
                  var radios1 = document.getElementsByName("question2");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios1.length) {
                if (radios1[i].checked) formValid = true;
                i++;        
            }

              if (!formValid) {
              $('#edit-question2-0').addClass('has-error');
              $("#edit-question2-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
            
             
            // return formValid;
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
              $('edit-question5--wrapper span').addClass('has-error');
              $("#edit-question5-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              formValid = true;
              hasError = true;
              return false;
            }

            else {
              hasError = false
            }
             
            
            // var radios1 = document.getElementsByName("question3");
            

            // var i = 0;
            // while (!formValid && i < radios1.length) {
            //     if (radios1[i].checked) formValid = true;
            //     i++;        
            // }

            // if (!formValid) alert("Must check some option!");
            // return formValid = true;
                
               


            return formValid;

          }


        
      
          if(index==2) {
            var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios2 = document.getElementsByName("question6");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question6--wrapper span').addClass('has-error');
              $("#edit-question6-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }

           
              var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios = document.getElementsByName("question7");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question7-0').addClass('has-error');
              $("#edit-question7-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
             
          
            // return formValid;

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
              $('#edit-question8-0').addClass('has-error');
              $("#edit-question8-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
            
             
            // return formValid;
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
              $('#edit-question9-0').addClass('has-error');
              $("#edit-question9-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return false;
            }

            else {
              hasError = false
            }
            if ('#edit-question10-0')
            var hasError = false;
                // $('#step1').removeClass('has-error');
            var radios2 = document.getElementsByName("question10");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios2.length) {
                if (radios2[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question10-0').addClass('has-error');
              // $("#edit-question10-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid =true;
              return true;
            }

            else {
              hasError = false
            }

            //    var hasError = false;
            //     // $('#step1').removeClass('has-error');
            // var radios2 = document.getElementsByID("#edit-question10-1");
            // var formValid = false;

            // var i = 0;
            // while (!formValid && i < radios2.length) {
            //     if (radios2[i].checked) formValid = true;
            //     i++;        
            // }

            // if (!formValid) {
            //   $('#edit-question10-0').addClass('has-error');
            //   $("#edit-question10-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
            //   hasError = true;
            //   return true;
            // }

            // else {
            //   hasError = false
            // }



             
             
            
            // var radios1 = document.getElementsByName("question3");
            

            // var i = 0;
            // while (!formValid && i < radios1.length) {
            //     if (radios1[i].checked) formValid = true;
            //     i++;        
            // }

            // if (!formValid) alert("Must check some option!");
            // return formValid = true;
            if(hasError == true) { return false; }    
               


            return formValid;
      }

      if(index==3) {
            var hasError = false;
                
                // $('#step1').removeClass('has-error');
                  var radios = document.getElementsByName("question11");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) {
              $('#edit-question11-0').addClass('has-error');
              $("#edit-question11-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
              $('#edit-question12-0').addClass('has-error');
              $("#edit-question12-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
                  var radios1 = document.getElementsByName("question13");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios1.length) {
                if (radios1[i].checked) formValid = true;
                i++;        
            }

              if (!formValid) {
              $('#edit-question13-0').addClass('has-error');
              $("#edit-question13-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
              formValid = true;
              return true;
            }

            else {
              hasError = false
            }
            
             
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
              $('#edit-question14-0').addClass('has-error');
              $("#edit-question14-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
              $('#edit-question15-0').addClass('has-error');
              $("#edit-question15-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = false;
              return false;
            }

            else {
              hasError = false
            }

            
           
                
               


            return formValid;
      }

      // if(index==4) {
      //       var hasError = false;
                
      //           // $('#step1').removeClass('has-error');
      //             var radios11 = document.getElementsByName("question16");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios11.length) {
      //           if (radios11[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question16-0').addClass('has-error');
      //         $("#edit-question16-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //       }

      //       else {
      //         hasError = false
      //       }

           
      //         var hasError = false;
                
      //           // $('#step1').removeClass('has-error');
      //             var radios = document.getElementsByName("question17");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios.length) {
      //           if (radios[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question17-0').addClass('has-error');
      //         $("#edit-question17-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //       }

      //       else {
      //         hasError = false
      //       }
             
          
      //       // return formValid;

      //         var hasError = false;
      //           // $('#step1').removeClass('has-error');
      //             var radios1 = document.getElementsByName("question18");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios1.length) {
      //           if (radios1[i].checked) formValid = true;
      //           i++;        
      //       }

      //         if (!formValid) {
      //         $('#edit-question18-0').addClass('has-error');
      //         $("#edit-question18-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //       }

      //       else {
      //         hasError = false
      //       }
            
             
      //       // return formValid;
      //       var hasError = false;
      //           // $('#step1').removeClass('has-error');
      //       var radios2 = document.getElementsByName("question19");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios2.length) {
      //           if (radios2[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question19-0').addClass('has-error');
      //         $("#edit-question19-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //       }

      //       else {
      //         hasError = false
      //       }
             
      //       var hasError = false;
                
      //           // $('#step1').removeClass('has-error');
      //             var radios11 = document.getElementsByName("question20");
      //       var formValid = false;

      //       var i = 0;
      //       while (!formValid && i < radios11.length) {
      //           if (radios11[i].checked) formValid = true;
      //           i++;        
      //       }

      //       if (!formValid) {
      //         $('#edit-question20-0').addClass('has-error');
      //         $("#edit-question20-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
      //         hasError = true;
      //       }

      //       else {
      //         hasError = false
      //       }

            
      //       // var radios1 = document.getElementsByName("question3");
            

      //       // var i = 0;
      //       // while (!formValid && i < radios1.length) {
      //       //     if (radios1[i].checked) formValid = true;
      //       //     i++;        
      //       // }

      //       // if (!formValid) alert("Must check some option!");
      //       // return formValid = true;
                
               


      //       return formValid;
      // }

 
      // Set the name for the next tab
      
 
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
              $('#edit-question16-0').addClass('has-error');
              $("#edit-question16-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
              $('#edit-question17-0').addClass('has-error');
              $("#edit-question17-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
              $('#edit-question18-0').addClass('has-error');
              $("#edit-question18-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
              $('#edit-question19-0').addClass('has-error');
              $("#edit-question19-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
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
              $('#edit-question20-0').addClass('has-error');
              $("#edit-question20-0").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
              hasError = true;
            }

            else {
              hasError = false
            }

            
            // var radios1 = document.getElementsByName("question3");
            

            // var i = 0;
            // while (!formValid && i < radios1.length) {
            //     if (radios1[i].checked) formValid = true;
            //     i++;        
            // }

            // if (!formValid) alert("Must check some option!");
            // return formValid = true;
                
               


            return formValid;

        });

    //   if(!$('#tab1').hasClass('active')) {
    //     $('#back').addClass('hero');
      
      $('#tab1 #back').click(function() {
        document.location.href = '/user/logout';
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
 