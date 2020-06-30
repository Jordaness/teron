import { Light } from './Classes/light';
import { FlashLight } from './Classes/flashlight';
import { Laser } from './Classes/laser';
import { Switch } from './Interfaces/switch';

const beam = new Light("beam");
const flash = new FlashLight();
const pewpew = new Laser();

const arr: Switch[] = [flash, pewpew];
arr.forEach(sw => TurnOn(sw));

// pewpew.PewPew();
// flash.HiBeam();

function TurnOn(sw:Switch): void {
    sw.On();
}

pewpew.flashes()