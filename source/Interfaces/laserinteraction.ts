import { Laser } from "../Classes/laser";

export interface LaserInteraction{
    TurnOnLaser(l: Laser): void;
}