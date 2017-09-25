<?php

namespace Drupal\oil_survey\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\node\Entity\Node;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
use Drupal\Core\core\modules\user\src\Form;
use \Drupal\Core\Form\FormBase;
use Drupal\block\Entity\Block;

/**
 * Provides conten block
 *
 * @Block(
 *   id = "content_block",
 *   admin_label = @Translation("Content block"),
 * )
 */
class ContentBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
//    $node = \Drupal::entityTypeManager()->getStorage('node')->load(1);
    $menu2 = Block::load('firststepblock');
    $prod_menu2 = \Drupal::entityTypeManager()->getViewBuilder('block')->view($menu2);
    
    
    return array(
      '#theme' => 'hslider_block',
      '#items' => array(
        'care' => $prod_menu2,
        
        )

    );
  }

}