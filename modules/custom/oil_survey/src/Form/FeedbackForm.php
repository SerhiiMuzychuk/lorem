<?php
 
namespace Drupal\oil_survey\Form;
 
use Drupal\Core\Form\FormBase;                   // Базовый класс Form API
use Drupal\Core\Form\FormStateInterface;              // Класс отвечает за обработку данных
use Drupal\node\Entity\Node;

 
/**
 * @see \Drupal\Core\Form\FormBase
 */
class FeedbackForm extends FormBase {
  public function getFormId() {
  	return 'feedback_form';
 }
 
	public function buildForm(array $form, FormStateInterface $form_state) {
	$config = $this->config('simple.settings');
  $form['#prefix'] = '<div id="my-form-wrapper-id">';
  $form['#suffix'] = '</div>';
 	$form['title'] = [
 		'#type' => 'textfield',
    '#placeholder' => t('Email address')
 	];
 	

 	$form['actions']['submit'] = [
 		'#type' => 'submit',
 		'#value' => $this->t('Subscribe'),
    '#attributes' => [
        'class' => [
            'btn',
            'btn-md',
            'btn-primary',
            'use-ajax-submit'
        ]
    ],
    '#ajax' => [
        'wrapper' => 'my-form-wrapper-id',
        'callback' => 'Drupal\ajax_example\Form\AjaxExampleForm::viewNode',
        'event' => 'click',
        'progress' => array(
          'type' => 'throbber',
        ),
    ]
 	];
 	return $form;
 }



  public function validateForm(array &$form, FormStateInterface $form_state) {
  	$title = $form_state->getValue('title');
  	// $body = $form_state->getValue('body');

  	$title = htmlspecialchars($title);
  	// $body = htmlspecialchars($body);
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $tit = $form_state->getValue('title');
    // $bod = $form_state->getValue('body');
    kint($form_state-getValues());
    $node = Node::create(array(
      'nid' => null,
      'type' => 'feedback',
      'title' => $tit,
      // 'field_feed' => $bod,
      'uid' => 1,
      'status' => 0,
    ));
   $node->save();
 
  }

  public function viewNode(array &$form, FormStateInterface $form_state) {
    $ajax_response = new AjaxResponse();
    $tit = $form_state->getValue('title');
    // $bod = $form_state->getValue('body');
    
    $node = Node::create(array(
      'nid' => null,
      'type' => 'feedback',
      'title' => $tit,
      // 'field_feed' => $bod,
      'uid' => 1,
      'status' => 0,
    ));
   $node->save();
    return $ajax_response; 
  }

}
