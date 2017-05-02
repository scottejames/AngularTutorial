import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEvent} from './shared/index'
@Component ({
selector : 'event-thumbnail',
template : `
  <div [routerLink]="['/events',event.id]" class= "well hoverwell thumbnail">
    <h2> {{event.name | uppercase}}</h2>
      <div> Date: {{event.date |date:'shortDate'}} </div>
      <div> Time: {{event.time}} </div>
      <div> Price: {{event.price |currency:'USD':true}} </div>
      <div>
        <span> Location: {{event.location.address}} </span>
        <span class="pad-left"> {{event.location.city}}, {{ event.location.country}}</span>
      </div>

    </div>
`,
styles: [`
  .pad-left { margin-left : 10px; }
  .well div {color: #bbb; }
  .thumbnail {min-height: 210px; }
  `]

})

export class EventThumbnailComponent {
  @Input() event : IEvent

}
