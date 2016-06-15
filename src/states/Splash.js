import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.stage.backgroundColor = 'black'
    this.load.spritesheet('hero', 'assets/tiny-rpg-town-files/spritesheets/hero.png', 16, 16)
    this.load.spritesheet('enemy', 'assets/platform_gfx/baddies/totem_walk.png', 32, 32)
    this.load.spritesheet('basic-burger', 'assets/platform_gfx/tiles/food.png', 32, 32)
    this.load.image('wall', 'assets/platform_gfx/tiles/block4.png')
    this.load.audio('timer', 'assets/sounds/timer-first-half-loop.wav')
    this.load.audio('hit', 'assets/sounds/timer-ends-time-up.wav')
    this.game.load.image('gameMask', 'assets/mask.png');
    //this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.game.sound.stopAll()
  }

  create () {
    this.state.start('Game')
  }

}
