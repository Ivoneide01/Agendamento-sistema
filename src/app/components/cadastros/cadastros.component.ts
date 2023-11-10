import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


export interface ChipColor {
  name: string;
  color: ThemePalette;
}
export class InputHintExample {}

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent {
  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];
  

}
