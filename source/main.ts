import { Light } from './Classes/light';
import { FlashLight } from './Classes/flashlight';
import { Laser } from './Classes/laser';
import { Switch } from './Interfaces/switch';
import { LightGun } from './Classes/lightgun';

const flash = new FlashLight();
const pp = new Laser("pp");
const phaser = new Laser("phaser");

const items = [flash, pp, phaser];

//Turning on all devices
TestItems(items);

//Turning Phaser into a light gun and firing the weapon
phaser.MakeWeapon("Bear");
phaser.Fire();

// Dry Firing pp, turn it off, turn it into a weapon, and then dry firing again
pp.Fire();
pp.OnOffButton();
pp.MakeWeapon("PPgun");
pp.Fire();

// Fakeout making a weapon, turning on the laser and firing for realz
pp.MakeWeapon("Won't work");
pp.OnOffButton();
pp.Fire();

function TestItems(items: Switch[]): void {
    items.forEach(item => item.OnOffButton());
}
