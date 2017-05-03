import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component ({
    selector : 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'

})

export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[]
    @Input() filterBy: string

    visableSessions : ISession[] = [];

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visableSessions = this.sessions.slice(0);
        } else {
            this.visableSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })

        }
    }

}