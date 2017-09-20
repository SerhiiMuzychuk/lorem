<?php

namespace Drupal\oil_survey\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\core\modules\user\src\Form;
use \Drupal\Core\Form\FormBase;

/**
 * Implement block with brand
 * 
 * @Block(
 *  id = "top_header_block",
 *  admin_label = @Translation("Top header block"),
 * )
 */
class TopheaderBlock extends BlockBase {
  
  /**
   * {@inheritdoc}
   */
  public function build() {
    $front_page = \Drupal::service('path.matcher')->isFrontPage();
    return array(
      '#theme' => 'top_header_block',
      '#items' => array('front_page' => $front_page),
      // '#logs' => array('log_form' => $log_form),
    );
  }
  
}

