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
    $menu = Block::load('footer');
    $prod_menu = \Drupal::entityTypeManager()->getViewBuilder('block')->view($menu);

    $block = Block::load('sitebranding');
    $prod_block = \Drupal::entityTypeManager()->getViewBuilder('block')->view($block);

    $front_page = \Drupal::service('path.matcher')->isFrontPage();
    $val = \Drupal::state()->get('image');  
    $file = \Drupal\file\Entity\File::load($val[0]);
    $file->setPermanent();
    $file->save();
    $path = $file->getFileUri();
    $url = \Drupal\image\Entity\ImageStyle::load('background')->buildUrl($path);
    return array(
      '#theme' => 'top_header_block',
      '#items' => array(
        'front_page' => $front_page,
        'branding' => $prod_block,
        'footer' => $prod_menu,
        'background' => $url,
      ),
      // '#logs' => array('log_form' => $log_form),
    );
  }
  
}

