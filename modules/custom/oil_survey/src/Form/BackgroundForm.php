<?php

/**
 * @file
 * Contains Drupal\oil_survey\Form\BackgroundForm.
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

class BackgroundForm extends FormBase {
	/**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'background_form';
  }

/**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['img'] = [
      '#title' => 'Change background image',
      '#type' => 'managed_file',
      '#upload_location' => 'public://',
      '#default_value' => \Drupal::state()->get('image'),
    ];

    $form['actions'] = array('#type' => 'actions');
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Save changes'),
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
   * 
   *
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    kint($form_state->getValue('img'));
    // $img = $form_state->getValue('img')[0];
    // $file = \Drupal\file\Entity\File::load($img[0]);
    // $path = $file->getFileUri();
    // $url = \Drupal\image\Entity\ImageStyle::load('medium')->buildUrl($path);
    \Drupal::state()->set('image', $form_state->getValue('img'));
  }

}




