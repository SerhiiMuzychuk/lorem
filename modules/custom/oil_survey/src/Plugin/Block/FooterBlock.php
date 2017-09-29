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
 * Provides footer block
 * 
 * @Block (
 *  id = "footer_block",
 *  admin_label = @Translation("Footer block")
 * )
 */
class FooterBlock extends BlockBase {
  
  /**
   * {@inheritdoc}
   */
  public function build() {
    $menu = Block::load('footer');
    $prod_menu = \Drupal::entityTypeManager()->getViewBuilder('block')->view($menu);

    
    return array(
      '#theme' => 'footer_block',
      '#items' => array(
        'footer' => $prod_menu,
        
        )

    );
  }
}

