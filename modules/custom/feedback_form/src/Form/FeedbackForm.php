<?php
 
namespace Drupal\feedback_form\Form;
 
use Drupal\Core\Form\FormBase;                   
use Drupal\Core\Form\FormStateInterface;              
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

 	$form['actions']['submit'] = [
 		'#type' => 'submit',
 		'#value' => $this->t('Send result to mail'),
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

  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $mail = $user->get('mail')->value;
    $tit = $mail;
    $node = Node::create(array(
      'nid' => null,
      'type' => 'feedback',
      'title' => $tit,
      'uid' => 1,
      'status' => 0,
    ));
   $node->save();
 
  }

  public function viewNode(array &$form, FormStateInterface $form_state) {
    $ajax_response = new AjaxResponse();
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $mail = $user->get('mail')->value;
    $tit = $mail;    
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
