import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component ({
    selector : 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'

})

export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string

    visableSessions : ISession[] = [];

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visableSessions.sort(sortByNameAsc) : this.visableSessions.sort(sortByVotesDec);
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

function sortByNameAsc(s1: ISession, s2: ISession){
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDec(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
}