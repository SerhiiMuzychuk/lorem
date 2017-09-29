<?php
 /**
  * @file
  * Contains \Drupal\oil_survey\Controller\ResultController.
  */

namespace Drupal\oil_survey\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\oil_survey\Form\QuestionForm; 
use Drupal\Core\Block\BlockBase;
use Drupal\Core\core\modules\user\src\Form;
use \Drupal\Core\Form\FormBase;
use Drupal\block\Entity\Block;

class ResultController extends ControllerBase {

  /**
   * {@inheritdoc}
   *
   */
  public function Result() {
  $output = array();

  $result = \Drupal::request()->query->get('query');
  if ($result == 0) {
  $output = 'The best choice for you will be Fuelstat resinae PLUS, Immunoassay Device group, Rapid SPEED OF TEST';
  }

  if ($result == 1) {
  $output = 'The best choice for you will be Luminultra, ATP Measurement Tool type, Rapid SPEED OF TEST. However, do not forget about that Luminultra should be kept refigerated at all times';
  }

  if ($result == 2) {
  $output = 'The best choice for you will be San-Ai Biochecker, Growth/Culture based Method type, Standard SPEED OF TEST';
  }

  if ($result == 3) {
  $output = 'The best choice for you will be Fuelsnap, ATP Measurement Tool type, Rapid SPEED OF TEST. However, do not forget about that Fuelsnap should be kept refigerated at all times';
  }

  if ($result == 4) {
  $output = 'The best choice for you will be MicrobMonitor2, Growth/Culture based Method type, Standard SPEED OF TEST';
  }

  if ($result == 5) {
  $output = 'The best choice for you will be HY-LiTE, ATP Measurement Tool type, Rapid SPEED OF TEST. However, do not forget about that HY-LiTE should be kept refigerated at all times';
  }

  if ($result == 6) {
  $output = t('The best choice for you will be Easicult Combi, Growth/Culture based Method group, Standard SPEED OF TEST');
  }

  if ($result == 7) {
  $output = t('The best choice for you will be IP385, Growth/Culture based Method group, Standard SPEED OF TEST');
  }

  $feedback = Block::load('sendresulttoemail');
  $block = \Drupal::entityTypeManager()->getViewBuilder('block')->view($feedback);


   \Drupal::state()->set('help', $output);
    return array(
      '#theme' => 'page_result',
      '#text' =>  $output,
      '#feedback' => $block, 
    );
  }

}