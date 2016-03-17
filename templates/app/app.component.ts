import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
	    <nav class="navbar navbar-default">
		    <div class="container-fluid">
		    	<div class="navbar-header">
		    		<a class="navbar-brand" href="#">Brand</a>
		    	</div>
		    </div>
    	</nav>
    	<div class="container-fluid">
	    	<div class="jumbotron text-center">
				<h1>Welcome to Angular 2</h1>
	    	</div>
    	</div>
    `
})
export class AppComponent { }