import { Component } from '@stencil/core';
import "@stencil/router";
@Component({
    tag: 'app-root',
    styleUrl:'app.scss'
})
export class AppRootComponent {

    render() {
        return (
            <span>
                <stencil-router>
                    <stencil-route url="/" component="landing-page" exact={true} />
                    <stencil-route url="/search" component="landing-page" exact={true} />
                    <stencil-route url="/search/:searchQuery" component="search-result-page" />
                </stencil-router>
            </span>
        );
    }
}
 
