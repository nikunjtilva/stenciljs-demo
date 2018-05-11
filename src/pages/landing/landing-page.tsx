import { Component, Listen, Prop } from '@stencil/core';
import { RouterHistory } from "@stencil/router";

@Component({
    tag: 'landing-page',
    styleUrl: 'landing-page.scss'
})
export class LandingPageComponent {

    @Prop() history:RouterHistory;

    @Listen("onSearch")
    onSearchHandler(ev){
        console.log("listening from landing page",ev.detail);
        this.history.push('/search/'+ev.detail);
    }
    render() {
        return (
        <div class="container">
        <search-bar ></search-bar>
        </div> 
        );
    }
}