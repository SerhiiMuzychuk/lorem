<?php

namespace Drupal\oil_survey\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\node\Entity\Node;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
use Drupal\Core\core\modules\user\src\Form;
use \Drupal\Core\Form\FormBase;
use Drupal\block\Entity\Block;
use Drupal\Core\Url;

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
    $menu2 = Block::load('firststepblock');
    $prod_menu2 = \Drupal::entityTypeManager()->getViewBuilder('block')->view($menu2);
    $userCurrent = \Drupal::currentUser();
    if (\Drupal::currentUser()->isAnonymous()) {
  
    }

    else {
      $otput = 'Your credentials are already saved in our database. Want to pass the survey again?';
      $host = \Drupal::request()->getHost();
      $url = Url::fromUri('http://' . $host . '/questionary');
        $link_options = array(
          'attributes' => array(
            'class' => array(
              'link-logout',
              'my-second-class',
            ),
          ),
        );
        $url->setOptions($link_options);
        $link = \Drupal::l(t('Pass the test again'), $url);
    }
    return array(
      '#theme' => 'hslider_block',
      '#items' => array(
        'care' => $prod_menu2,
        'its' => $otput,
        'link' => $link,
        )

    );
  }

}