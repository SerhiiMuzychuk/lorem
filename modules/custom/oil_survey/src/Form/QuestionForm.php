<?php

/**
 * @file
 * Contains Drupal\oil_survey\Form\QuestionForm.
 */

namespace Drupal\oil_survey\Form;


use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\taxonomy\Entity\Term;
use Drupal\node\Entity\Node;
use Drupal\Core\Routing;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
use Drupal\image\Plugin\Field\FieldWidget\ImageWidget;
use Drupal\image\Plugin\Field\FieldWidget\FileWidget;
use Drupal\image\Plugin\Field\FieldType\ImageItem;
use Drupal\file\Plugin\Field\FieldType\FileItem;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Drupal\Core\Controller\ControllerBase;

class QuestionForm extends FormBase {
	/**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'question_form';
  }

/**
   * {@inheritdoc}
   */
public function buildForm(array $form, FormStateInterface $form_state) {


   $form['mytable'] = array(
    '#type' => 'table',
    '#title' => t('Rank the following factors in order of importance to your operation:'),
    '#header' => array(t('Label'), t('Weight')),
    '#empty' => t('There are no items yet. Add an item.'),
    '#tableselect' => TRUE,
     '#tabledrag' => array(
      array(
        'action' => 'order',
        'relationship' => 'sibling',
        'group' => 'mytable-order-weight',
      ),
    ),
    );

    $form['mytable'][0]['#attributes']['class'][] = 'draggable';
    $form['mytable'][1]['#attributes']['class'][] = 'draggable';
    $form['mytable'][2]['#attributes']['class'][] = 'draggable';
    $form['mytable'][3]['#attributes']['class'][] = 'draggable';

    $form['mytable'][0]['label'] = array(
      '#plain_text' => t('Reliability'),
    );
    $form['mytable'][1]['label'] = array(
      '#plain_text' => t('Speed of Result'),
    );
    $form['mytable'][2]['label'] = array(
      '#plain_text' => t('Cost'),
    );
    $form['mytable'][3]['label'] = array(
      '#plain_text' => t('Ease of Use'),
    );

    $form['mytable'][0]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hello')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      '#attributes' => array('class' => array('mytable-order-weight')),
    );

    $form['mytable'][1]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hell2')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      '#attributes' => array('class' => array('mytable-order-weight')),
    );

    $form['mytable'][2]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hell3')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      '#attributes' => array('class' => array('mytable-order-weight')),
    );

     $form['mytable'][3]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hell4')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      '#attributes' => array(
        'class' => array('mytable-order-weight')
      ),
    );
     
    $form['question1'] = array(
      '#type' => 'checkboxes',
      '#title' => t('What type of fuel(s) are you testing/looking to test?'),
      '#options' => array(
        t('Jet Fuel'),
        t('Diesel Fuel'),
        t('Marine Gas Oil'),
        t('Other (please specify)'),
        ),
      '#required' => true,    
    );

    $form['text1'] = array(
      '#type' => 'textfield',
      '#attributes' =>  array('placeholder' => t('please fill...')),
      '#states' => array(
      'visible' => array(
        ':input[name="question1[3]"]' => array('checked' => TRUE),
        
          ),
        ),
      '#required' => false,
    );

    $form['question2'] = array(
      '#type' => 'radios',
      '#title' => t('Where do/will you be conducting your testing?'),
      '#options' => array(
        t('In a Laboratory'),
        t('On-site/"In the Field"'),
        t('Mixture of Lab & On-site'),
        ),
      '#required' => TRUE,
    );

    $form['question3'] = array(
    '#type' => 'radios',
    '#title' => t('What is the main reason you test/are looking to test your fuel?'),
    '#options' => array(
      t('In response to a problem found'),
      t('Preventative Maintenance'),
      t('Spot Risk Assessment'),
      t('Looking to implement Routine Monitoring Programme'),
      t('Other (Please Specify)'),
      ),
    '#required' => TRUE,
    );

    $form['text3'] = array(
      '#type' => 'textfield',
      '#attributes' =>  array('placeholder' => t('please fill...')),
      '#states' => array(
        'visible' => array(
          ':input[name="question3"]' => array('value' => 4),
        ),
      ),
      '#required' => false,
    );

    $form['question5'] = array(
    '#type' => 'radios',
    '#title' => t('How much information do you need to obtain from your test results?'),
    '#options' => array(
      t('Yes/No indication'),
      t('Fully Quantitative Result'),
      )
    );

    $form['question6'] = array(
    '#type' => 'radios',
    '#title' => t('Is it imperative for you to be able to differentiate between the types of contaminants that may be present in your fuel sample (such as bacteria, yeasts and moulds etc)?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      )
    ); 

    $form['question7'] = array(
    '#type' => 'radios',
    '#title' => t('Do you typically find free water in the bottom of your samples?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      )
    );

    $form['question8'] = array(
    '#type' => 'radios',
    '#title' => t('From where do you/will you be taking your samples from?'),
    '#options' => array(
      t('Above Ground Storage Tank (<500,000L)'),
      t('Underground Storage Tank'),
      t('Delivery Vehicle (i.e. Fuel Tanker)'),
      t('Aircraft Wing Tank'),
      t('Shipping Vessel Fuel Tank'),
      t('Other (Please Specify)'),
      )
    );

    $form['text8'] = array(
      '#type' => 'textfield',
      '#attributes' =>  array('placeholder' => t('please fill...')),
      '#states' => array(
        'visible' => array(
          ':input[name="question8"]' => array('value' => 5),
        ),
      ),
      '#required' => false,
    );
   
    $form['question9'] = array(
    '#type' => 'radios',
    '#title' => t('Do you have access to take samples/drain water from the bottom of your tanks?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      )
    );

    $form['question10'] = array(
    '#type' => 'radios',
    '#title' => t('If Yes, do you regularly drain water at present?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      ),
    '#required' => false,
    );

    $form['question11'] = array(
    '#type' => 'radios',
    '#title' => t('Have you ever detected any microbial contamination in your samples before?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      )
    );

    $form['question12'] = array(
    '#type' => 'radios',
    '#title' => t('Do you currently dose your fuel with any additives such as Biocide?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      )
    );

    $form['question13'] = array(
    '#type' => 'radios',
    '#title' => t('If Yes, on what basis do you do this?'),
    '#options' => array(
      t('Reactive (when a moderate level of microbial contamination is found)'),
      t('Routine (preventative maintenance dose on regular basis)'),
      ),
    '#required' => false,
    );

    $form['question14'] = array(
    '#type' => 'radios',
    '#title' => t('If Routine, how often do you typically dose your fuel with an addtive/Biocide?'),
    '#options' => array(
      t('Monthly'),
      t('Quarterly'),
      t('Every 6 months'),
      t('Annually'),
      t('Every 2 years'),
      t('Other (Please Specify)'),
      ),
    );

    $form['text14'] = array(
      '#type' => 'textfield',
      '#attributes' =>  array('placeholder' => t('please fill...')),
      '#states' => array(
        'visible' => array(
          ':input[name="question14"]' => array('value' => 5),
        ),
      ),
      '#required' => false,
    );

    $form['question15'] = array(
    '#type' => 'radios',
    '#title' => t('How much experience do your operators have in using microbial test kits?'),
    '#options' => array(
      t('First time users'),
      t('Have tested before sporadically'),
      t('Experienced test kit users'),
      )
    );

    $form['question16'] = array(
    '#type' => 'radios',
    '#title' => t('If Routine, how often do you typically dose your fuel with an addtive/Biocide?'),
    '#options' => array(
      t('Europe'),
      t('Russia & CIS'),
      t('Middle East & Africa'),
      t('Asia'),
      t('North America'),
      t('Latin America'),
      t('Australasia'),
      )
    );

    $form['question17'] = array(
    '#type' => 'radios',
    '#title' => t('How often do you/are you planning to test your fuel?'),
    '#options' => array(
      t('Monthly'),
      t('Quarterly'),
      t('Every 6 months'),
      t('Annually'),
      t('Other (Please Specify)'),
      )
    );

    $form['text17'] = array(
      '#type' => 'textfield',
      '#attributes' =>  array('placeholder' => t('please fill...')),
      '#states' => array(
        'visible' => array(
          ':input[name="question17"]' => array('value' => 4),
        ),
      ),
      '#required' => false,
    );

    $form['question18'] = array(
    '#type' => 'radios',
    '#title' => t('How many tests do you/will you be looking to carry out per year?'),
    '#options' => array(
      t('<100'),
      t('100-200'),
      t('201-300'),
      t('301-400'),
      t('401-500'),
      t('500+'),
      t('Not Sure'),
      )
    );

    $form['question19'] = array(
    '#type' => 'radios',
    '#title' => t('Do you have any refrigerated storage capacity at your facilities?'),
    '#options' => array(
      t('Yes'),
      t('No'),
      t('Yes, but only at certain locations'),
      )
    );

    $form['question20'] = array(
    '#type' => 'radios',
    '#title' => t('Which of the following accreditations/standards/approvals are of most importance to your operation?'),
    '#options' => array(
      t('IP Standard Test Method'),
      t('ASTM Standard Test Method'),
      t('IATA Recommendation'),
      t('Boeing/Airbus AMM Listing'),
      t('Not Important'),
      t('Other (Please Specify)'),
      )

    );

    $form['text20'] = array(
      '#type' => 'textfield',
      '#attributes' =>  array('placeholder' => t('please fill...')),
      '#states' => array(
        'visible' => array(
          ':input[name="question20"]' => array('value' => 5),
        ),
      ),
      '#required' => false,
    );

    $form['actions'] = array('#type' => 'actions');
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Save changes'),
      '#tableselect' => TRUE,
    );

    return $form;
  }

  /**
   * Валидация отправленых данных в форме.
   *
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    
  }

  /**
   * Отправка формы.
   *
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $microb = true; 
    $fuelstat = true;
    $hylite = true;
    $easicult = true;
    $luminultra = true;
    $ips = true;
    $san = true;
    $fuelsnap = true;

    $growth[] = array($microb, $easicult, $ips, $san);
    $immunoassay[] = array($fuelstat);
    $atp[] =array($hylite, $luminultra, $fuelsnap);

    $microb2 = 100; 
    $fuelstat2 = 100;
    $hylite2 = 100;
    $easicult2 = 100;
    $luminultra2 = 100;
    $ips2 = 100;
    $san2 = 100;
    $fuelsnap2 = 100;
   
    $growth2[] = array($microb2, $easicult2, $ips2, $san2);
    $immunoassay2[] = array($fuelstat2);
    $atp2[] = array($hylite2, $luminultra2, $fuelsnap2);
    $rapid2[] = array($fuelstat2, $hylite2, $luminultra2, $fuelsnap2);
    $standart2[] = array($microb2, $easicult2, $ips2, $san2);
    $v = 10;
    $ss = 15;
    $s = 5;
    $o = 0;
  
    switch($form_state->getValue('questio1')) {
      case 0:
        $info0 = t("Doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 1:
        $info0 = t("Doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 2:
        $info0 = t("Doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 3:
        $info0 = t("Doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;  
    }
     
    switch($form_state->getValue('question2')) {
      case 0:
        $microb2 = $microb2 + $v;
        $easicult2 = $easicult2 + $v;
        $ips2 = $ips2 + $v;
        $san2 = $san2 + $v;
        $microb = true;
        $easicult = true;
        $ips = true;
        $san = true;
        break;
      case 1:
        $ips2 = 0;
        $luminultra2 = 0;
        $ips = false;
        $luminultra = false;
        break;  
    }
        
    switch($form_state->getValue('question3')) {
      case 0:
        $microb2 = $microb2 + $v;
        $easicult2 = $easicult2 + $v;
        $ips2 = $ips2 + $v;
        $san2 = $san2 + $v; 
        $microb = true;
        $easicult = true;
        $ips = true;
        $san = true;             
        # code...
        break;
      case 1:
        $microb2 = $microb2 + $v;
        $easicult2 = $easicult2 + $v;
        $ips2 = $ips2 + $v;
        $san2 = $san2 + $v;
        $microb = true;
        $easicult = true;
        $ips = true;
        $san = true;
        break; 
      case 2:
        $fuelstat2 = $fuelstat2 + $v;
        $hylite2 = $hylite2 + $v;
        $luminultra2 = $luminultra2 + $v;
        $fuelsnap2 = $fuelsnap2 + $v;
        $fuelstat = true;
        $hylite = true;
        $luminultra = true;
        $fuelsnap = true;
        break;
      case 3:
        $microb2 = $microb2 + $v;
        $easicult2 = $easicult2 + $v;
        $ips2 = $ips2 + $v;
        $san2 = $san2 + $v;
        $microb = true;
        $easicult = true;
        $ips = true;
        $san = true;
        break;  
    }
      
    foreach ($form_state->getValue('mytable')[0] as $key => $value) {  
      switch ($value) {
        case -10:
          $microb2 = $microb2 + $ss;
          $easicult2 = $easicult2 + $ss;
          $ips2 = $ips2 + $ss;
          $san2 = $san2 + $ss;
          $microb = true;
          $easicult = true;
          $ips = true;
          $san = true;
          break;
        
        case -9:
          $microb2 = $microb2 + $v;
          $easicult2 = $easicult2 + $v;
          $ips2 = $ips2 + $v;
          $san2 = $san2 + $v;
          $microb = true;
          $easicult = true;
          $ips = true;
          $san = true;
          break;
        case -8:
          $microb2 = $microb2 + $s;
          $easicult2 = $easicult2 + $s;
          $ips2 = $ips2 + $s;
          $san2 = $san2 + $s;
          $microb = true;
          $easicult = true;
          $ips = true;
          $san = true;
          break;
        }
      }
      
      foreach ($form_state->getValue('mytable')[1] as $key => $value) {  
        switch ($value) {
          case -10:
              $fuelstat2 = $fuelstat2 + $ss;
              $fuelstat = true;
              $hylite2 = $hylite2 + $ss;
              $hylite = true;
              $luminultra2 = $luminultra2 + $ss;
              $luminultra = true;
              $fuelsnap2 = $fuelsnap2 + $ss;
              $fuelsnap = true;
            break;
          
          case -9:
            $fuelstat2 = $fuelstat2 + $v;
            $fuelstat = true;
            $hylite2 = $hylite2 + $v;
            $hylite = true;
            $luminultra2 = $luminultra2 + $v;
            $luminultra = true;
            $fuelsnap2 = $fuelsnap2 + $v;
            $fuelsnap = true;
            break;
          case -8:
            $fuelstat2 = $fuelstat2 + $s;
            $fuelstat = true;
            $hylite2 = $hylite2 + $s;
            $hylite = true;
            $luminultra2 = $luminultra2 + $s;
            $luminultra = true;
            $fuelsnap2 = $fuelsnap2 + $s;
            $fuelsnap = true;
            break;
        }
      }    
      
      foreach ($form_state->getValue('mytable')[2] as $key => $value) {  
        switch ($value) {
          case -10:
            $easicult2 = $easicult2 + $ss;
            $easicult = true;
            $san2 = $san2 + $ss;
            $san = true;
            $microb2 = $microb2 + $ss;
            $microb = true;
            break;
          
          case -9:
            $easicult2 = $easicult2 + $v;
            $easicult = true;
            $san2 = $san2 + $v;
            $san = true;
            $microb2 = $microb2 + $v;
            $microb = true;
            break;
          case -8:
            $easicult2 = $easicult2 + $s;
            $easicult = true;
            $san2 = $san2 + $s;
            $san = true;
            $microb2 = $microb2 + $s;
            $microb = true;
            break;
        }
      }
      
      foreach ($form_state->getValue('mytable')[3] as $key => $value) {  
        switch ($value) {
          case -10:
            $easicult2 = $easicult2 + $ss;
            $easicult = true;
            $san2 = $san2 + $ss;
            $san = true;
            $microb2 = $microb2 + $ss;
            $microb = true;
            break;
          
          case -9:
            $easicult2 = $easicult2 + $v;
            $easicult = true;
            $san2 = $san2 + $v;
            $san = true;
            $microb2 = $microb2 + $v;
            $microb = true;
            break;
          case -8:
            $easicult2 = $easicult2 + $s;
            $easicult = true;
            $san2 = $san2 + $s;
            $san = true;
            $microb2 = $microb2 + $s;
            $microb = true;
            break;
        }      
      }

    
    

    switch($form_state->getValue('question5')) {
      case 0:
        $fuelstat2 = $fuelstat2 + $v;
        $fuelstat = true; 
        break;
      case 1:
        $fuelstat2 = 0;
        $fuelstat = false;   
        break;
    }

    
    
    switch($form_state->getValue('question6')) {
      case 0:
        $microb2  = 0;
        $microb = false;
        $hylite2  = 0;
        $hylite  = false;
        $luminultra2 = 0;
        $luminultra = false;
        $fuelsnap2 = 0;
        $fuelsnap = false;
        break;
    }



    switch($form_state->getValue('question7')) {
      case 1:
        $easicult2  = 0;
        $easicult = false;
        $fuelsnap2 = 0;
        $fuelsnap = false;
        $san2 = 0;
        $san = false;  
        break;
    }


    switch($form_state->getValue('question10')) {
      case 0:
        $microb2 = $microb2 + $v;
        $microb = true;
        $fuelstat2 = $fuelstat2 + $v;
        $fuelstat = true;
        $ips2 = $ips2 + $v;
        $ips = true;
        break;
    }
 

    
    switch($form_state->getValue('question12')) {
      case 0:
      $info = t('Results when using Rapid Methods can be affected when traces of Biocide are present in a sample');
        break;
    }

    switch($form_state->getValue('question13')) {
      case 1:
      $info2 = t('Inform user that routine biocide dosing can cause build up of resistant strains in fuel');
        break;
    }

    switch($form_state->getValue('question14')) {
      case 0:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 1:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 2:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 3:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 4:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 5:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
    }


    
    switch($form_state->getValue('question15')) {
      case 0:
        $microb2 = $microb2 + $v;
        $microb = true;
        $fuelstat2 = $fuelstat2 + $v;
        $fuelstat = true;
        $easicult2 = $easicult2 + $v;
        $easicult = true;
        $san2 = $san2 + $v;
        $san = true;
        break;
    }

 

    switch($form_state->getValue('question16')) {
      case 0:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 1:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 2:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 3:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 4:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 5:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 6:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
    }

    switch($form_state->getValue('question17')) {
      case 0:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 1:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 2:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 3:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
      case 4:
      $info3 = t("doesn't really impact result, but provides useful information relating to user's risk of encountering microbial contamination");
        break;
    }

    
    switch($form_state->getValue('question18')) {
      case 0:
        $microb2 = $microb2 + $v;
        $microb = true;
        $fuelstat2 = $fuelstat2 + $v;
        $fuelstat = true;
        $easicult2 = $easicult2 + $v;
        $easicult = true;
        $san2 = $san2 + $v;
        $san = true;
        $ips2 = $ips2 + $v;
        $ips = true;
        break;
      case 1:
        $microb2 = $microb2 + $v;
        $microb = true;
        $fuelstat2 = $fuelstat2 + $v;
        $fuelstat = true;
        $easicult2 = $easicult2 + $v;
        $easicult = true;
        $san2 = $san2 + $v;
        $san = true;
        $ips2 = $ips2 + $v;
        $ips = true;
        break;
      case 5:
        $luminultra2 = $luminultra2 + $v;
        $luminultra = true;
        $hylite = true;
        $hylite2 = $hylite2 + $v;
        $fuelsnap2 = $fuelsnap2 + $v;
        $fuelsnap = true;
        break;
    }
    
    switch($form_state->getValue('question19')) {
      case 1:
        $hylite2 = 0;
        $hylite = false;
        $luminultra2 = 0;
        $luminultra = false;
        $fuelsnap2 = 0;
        $fuelsnap = false;
        break;
      case 2:
        $info4 = t('Must inform user that HY-LiTE, Luminultra and Fuelsnap must be kept refigerated at all times');
        break;
      
    }


   
    switch($form_state->getValue('question20')) {
      case 0:
        $ips2 = $ips2 + $v;
        $ips = true;
        $microb2 = $microb2 + $v;
        $microb = true;
        break;
      case 2:
        $luminultra2 = 0;
        $luminultra = false;
        $fuelsnap2 = 0;
        $fuelsnap = false;
        break;
      case 3:
        $luminultra2 = 0;
        $luminultra = false;
        $fuelsnap2 = 0;
        $fuelsnap = false;
        $san2 = 0;
        $san = false;
        break;
    }

    $items = array(
      'luminultra' => $luminultra2,
      'san' => $san2,
      'fuelsnap' => $fuelsnap2,
      'microb' => $microb2,
      'hylite' =>$hylite2,
      'easicult' => $easicult2,
      'fuelstat' => $fuelstat2,  
      'ips' => $ips2
    );
   
    $key = array_search(max($items), $items);

    if ($key == 'fuelstat') {
      $hello = '0';
      
    } 

    if ($key == 'luminultra') {
      $hello = '1';
      
    } 

    if ($key == 'san') {
      $hello = '2';
       
    } 

    if ($key == 'fuelsnap') {
      $hello = '3';
            } 

    if ($key == 'microb') {
      $hello = '4';
       
    } 

    if ($key == 'hylite') {
      $hello = '5';
       
    } 

    if ($key == 'easicult') {
      $hello = '6';
            } 

    if ($key == 'ips') {
      $hello = '7';
       
    } 
    
    $form_state->setRedirect('oil_survey.resultpage', ['query' => $hello]);
 
  }

}
