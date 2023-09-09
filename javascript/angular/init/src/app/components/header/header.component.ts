import { Component } from '@angular/core'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
	title_nav: string
	constructor() {
		this.title_nav = 'jimmy'
	}
}