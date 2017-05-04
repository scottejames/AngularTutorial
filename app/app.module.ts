import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {appRoutes} from './routes'

import {Error404Component} from './errors/404.component'

import {AuthService} from './user/auth.service'

import {NavBarComponent} from './nav/navbar.component'
import {EventsAppComponent} from './events-app.component'

import {
    EventService,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService
} from './events/index'

import {
    JQ_TOKEN,
    ToastrService,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index'


declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule],
    declarations: [
        EventsAppComponent,
        EventThumbnailComponent,
        EventsListComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactiveCreateEvent',
            useValue: checkDirtyState
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        AuthService,
        VoterService

    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {
}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("You have not saved, are you sure?")
    } else {
        return true
    }
}
