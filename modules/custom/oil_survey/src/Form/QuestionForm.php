<?php

/**
 * @file
 * Contains Drupal\oil_survey\Form\QuestionForm.
 */

namespace Drupal\oil_survey\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\Core\Url;


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

   // foreach ($entities as $id => $entity) {
    // TableDrag: Mark the table row as draggable.
    $form['mytable'][0]['#attributes']['class'][] = 'draggable';
    $form['mytable'][1]['#attributes']['class'][] = 'draggable';
    $form['mytable'][2]['#attributes']['class'][] = 'draggable';
    $form['mytable'][3]['#attributes']['class'][] = 'draggable';
    // TableDrag: Sort the table row according to its existing/configured weight.
    // $form['mytable'][$id]['#weight'] = $entity->get('weight');

    // Some table columns containing raw markup.
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

    // $form['mytable'][0]['id'] = array(
    //   '#plain_text' => '1',
    // );

    // $form['mytable'][2]['id'] = array(
    //   '#plain_text' => '2',
    // );

     $form['mytable'][0]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hello')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      // Classify the weight element for #tabledrag.
      '#attributes' => array('class' => array('mytable-order-weight')),

    );

     $form['mytable'][1]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hell2')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      // Classify the weight element for #tabledrag.
      '#attributes' => array('class' => array('mytable-order-weight')),
    );

     $form['mytable'][2]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hell3')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      // Classify the weight element for #tabledrag.
      '#attributes' => array('class' => array('mytable-order-weight')),
    );

     $form['mytable'][3]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => 'Hell4')),
      '#title_display' => 'invisible',
      '#default_value' => '0',
      // Classify the weight element for #tabledrag.
      '#attributes' => array('class' => array('mytable-order-weight')),
    );
     

    // Объявляем телефон.
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

    $form['question1']['text'] = array(
      '#type' => 'textfield',
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

    $form['question3']['text'] = array(
      '#type' => 'textfield',
    );

    $form['question4'] = array(
      '#type' => 'weight',
      '#title' => t('Rank the following factors in order of importance to your operation:'),
      '#default_value' => array(
        t('In response to a problem found'),
        t('Preventative Maintenance'),
        t('Spot Risk Assessment'),
        t('Looking to implement Routine Monitoring Programme'),
        t('Other (Please Specify)'),
      ),
      '#delta' => 10,
       
    );


  //   $form['question2'] = array(
  //   '#type' => 'textarea',
  //   '#title' => t('What type of fuel(s) are you testing/looking to test?'),
  //   '#rows' => 10,
  // );
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

    $form['question8']['text'] = array(
      '#type' => 'textfield',
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
      )
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
      )
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
      )
    );

    $form['question14']['text'] = array(
      '#type' => 'textfield',
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

    $form['question17']['text'] = array(
      '#type' => 'textfield',
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

    $form['question20']['text'] = array(
      '#type' => 'textfield',
    );

    $form['actions'] = array('#type' => 'actions');
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Save changes'),
      // TableSelect: Enable the built-in form validation for #tableselect for
      // this form button, so as to ensure that the bulk operations form cannot
      // be submitted without any selected items.
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
    // Если длина имени меньше 5, выводим ошибку.
    
  }

  /**
   * Отправка формы.
   *
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Мы ничего не хотим делать с данными, просто выведем их в системном
    // сообщении.
    // foreach ($form_state->getValues() as $key => $value) {
    //   drupal_set_message($key . ': ' . $value);
    // }
  }

}




