import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {
	EventService,
	EventsListComponent,
	EventThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventListResolver,
    CreateSessionComponent,
	SessionListComponent

} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'
import {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'

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
		SessionListComponent
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
		AuthService
		],
	bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){
	if (component.isDirty){
		return window.confirm("You have not saved, are you sure?")
	} else {
	return true
	}
}
