import { Light } from './Classes/light';
import { FlashLight } from './Classes/flashlight';
import { Laser } from './Classes/laser';
import { Switch } from './Interfaces/switch';

const flash = new FlashLight();
const pp = new Laser("pp");
const phaser = new Laser("phaser");

flash.TurnOnLaser(phaser);

function TurnOn(sw:Switch): void {
    sw.OnOffButton();
}
