<?php

/**
 * @file
 * Contains \Drupal\feedback_form\Plugin\Block\SimpleBlockExample.
 */


namespace Drupal\feedback_form\Plugin\Block;

use Drupal\Core\Block\BlockBase;


class SimpleBlockExample extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $form = \Drupal::formBuilder()->getForm('Drupal\feedback_form\Form\FeedbackForm');
  return $form;
  }

}