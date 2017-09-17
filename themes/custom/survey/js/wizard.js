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
                $(".alert").hide();
                // $('#step1').removeClass('has-error');
                  var radios = document.getElementsByName("question3");
            var formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;        
            }

            if (!formValid) alert("Must check some option!");
             
            return formValid;
            // var radios1 = document.getElementsByName("question3");
            

            // var i = 0;
            // while (!formValid && i < radios1.length) {
            //     if (radios1[i].checked) formValid = true;
            //     i++;        
            // }

            // if (!formValid) alert("Must check some option!");
            // return formValid = true;
                
               


            return true;

          }


        
      
          if(index==3) {
            $(".alert").hide();
        // $('#edit-field-name-0-value').removeClass('has-error');
        // $('#edit-field-las-0-value').removeClass('has-error');

        // var hasError = false;

        // var firstName = $("#edit-question2-0").val();

        // if(firstName == '') {

        //     $('#edit-field-name-0-value').addClass('has-error');
        //     $("#edit-field-name-0-value").after('<br><div  class="alert alert-danger">Please enter your First Name.</div>');
        //     hasError = true;
        // }


        // var lastName = $("#edit-field-las-0-value").val();

        // if(lastName == '') {

        //     $('#edit-field-las-0-value').addClass('has-error');
        //     $("#edit-field-las-0-value").after('<br><div  class="alert alert-danger">Please enter your Last Name.</div>');
        //     hasError = true;
        // }

        // if(hasError == true) { return false; }

        return true;
        // Make sure we entered the name
        // if(!$('#edit-field-name-0-value').val()) {
        //   $('#edit-field-name-0-value').addClass('has-error');
        //   $('.alert-danger').addClass('has-error');
        //   $('#edit-field-name-0-value').focus();
        //   return false;
        // }
        // if(!$('#edit-field-las-0-value').val()) {
        //   $('#edit-field-las-0-value').addClass('has-error');
        //   $('.alert1-danger').addClass('has-error');
        //   $('#edit-field-las-0-value').focus();
        //   return false;
        // }
      }
 
      // Set the name for the next tab
      
 
    }, onTabShow: function(tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index+1;
      var $percent = ($current/$total) * 100;
      $('#rootwizard .progress-bar').css({width:$percent+'%'});
    }});
      });



    //   if(!$('#tab1').hasClass('active')) {
    //     $('#back').addClass('hero');
      
      $('#tab1 #back').click(function() {
        document.location.href = '/node';
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
 