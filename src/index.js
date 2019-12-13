/*global Phaser, window*/
import Level01 from './scenes/Level01.js';
import Level02 from './scenes/Level02.js';
import Level03 from './scenes/Level03.js';
import Tutorial from './scenes/Tutorial.js';
import GameOverScene from './scenes/GameOverScene.js';
import Key from './scenes/Key.js';
import Start from './scenes/Start.js';
import EasyNormal from './scenes/EasyNormal.js';
import End from './scenes/End.js';
import Config from './config/config.js';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Tutorial', Tutorial)
    this.scene.add('Level01', Level01);
    this.scene.add('Level02', Level02);
    this.scene.add('Level03', Level03);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.add('Key', Key);
    this.scene.add('Start', Start);
    this.scene.add('EasyNormal', EasyNormal);
    this.scene.add('End', End);
    this.scene.start('Start');
  }
}

window.game = new Game();
