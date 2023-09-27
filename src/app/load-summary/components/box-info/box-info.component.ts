import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss']
})
export class BoxInfoComponent {

  @Input() textStatick!: string
  @Input() textDinamic!: string | number
  @Input() style_p!: string
  @Input() number!: boolean

}
