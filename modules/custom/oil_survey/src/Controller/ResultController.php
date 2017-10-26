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
  if (in_array(0, $result)) {
  $output[] = ['text' => 'Fuelstat resinae PLUS, Immunoassay Device group, Rapid SPEED OF TEST', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/fuelstat.jpg']];
  }

  if (in_array(1, $result)) {
  $output[] = ['text' => 'Luminultra, ATP Measurement Tool type, Rapid SPEED OF TEST. However, do not forget about that Luminultra should be kept refigerated at all times', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/LuminUltra.jpg']];
  }

  if (in_array(2, $result)) {
  $output[] = ['text' => 'San-Ai Biochecker, Growth/Culture based Method type, Standard SPEED OF TEST', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/San-ai.Biocheker.jpg']];
  }

  if (in_array(3, $result)) {
  $output[] = ['text' => 'Fuelsnap, ATP Measurement Tool type, Rapid SPEED OF TEST. However, do not forget about that Fuelsnap should be kept refigerated at all times', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/fuelsnap.jpg']];
  }

  if (in_array(4, $result)) {
  $output[] = ['text' => 'MicrobMonitor2, Growth/Culture based Method type, Standard SPEED OF TEST', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/microb2.jpg']];
  }

  if (in_array(5, $result)) {
  $output[] = ['text' => 'HY-LiTE, ATP Measurement Tool type, Rapid SPEED OF TEST. However, do not forget about that HY-LiTE should be kept refigerated at all times', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/Hy-lite.jpg']];
  }

  if (in_array(6, $result)) {
  $output[] = ['text' => 'Easicult Combi, Growth/Culture based Method group, Standard SPEED OF TEST', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/Easicult_Combi.jpg']];
  }

  if (in_array(7, $result)) {
  $output[] = ['text' => 'IP385, Growth/Culture based Method group, Standard SPEED OF TEST', 'image' => ['#markup' => '/' . drupal_get_path('theme', 'survey') . '/images/IP.png']];
  }
  $feedback = Block::load('sendresulttoemail_2');
  $block = \Drupal::entityTypeManager()->getViewBuilder('block')->view($feedback);
   \Drupal::state()->set('help', $output);
    return array(
      '#theme' => 'page_result',
      '#text' =>  $output,
      '#feedback' => $block,
    );
  }

}
