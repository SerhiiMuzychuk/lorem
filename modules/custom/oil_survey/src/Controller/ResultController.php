<?php
 /**
  * @file
  * Contains \Drupal\oil_survey\Controller\ResultController.
  * ^ Пишется по следующему типу:
  *  - \Drupal - это указывает что данный файл относится к ядру Drupal, ведь
  *    теперь там еще есть Symfony.
  *  - oil_survey - название модуля.
  *  - Controller - тип файла. Папка src опускается всегда.
  *  - ResultController - название нашего класса.
  */

/**
 * Пространство имен нашего контроллера. Обратите внимание что оно схоже с тем
 * что описано выше, только опускается название нашего класса.
 */
namespace Drupal\oil_survey\Controller;

/**
 * Используем друпальный класс ControllerBase. Мы будем от него наследоваться,
 * а он за нас сделает все обязательные вещи которые присущи всем контроллерам.
 */
use Drupal\Core\Controller\ControllerBase;
use Drupal\oil_survey\Form\QuestionForm; 
/**
 * Объявляем наш класс-контроллер.
 */
class ResultController extends ControllerBase {

  /**
   * {@inheritdoc}
   *
   * В Drupal 8 очень многое строится на renderable arrays и при отдаче
   * из данной функции содержимого для страницы, мы также должны вернуть
   * массив который спокойно пройдет через drupal_render().
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
    return array(
      '#theme' => 'page_result',
      '#text' =>  $output, 
    );
  }

}