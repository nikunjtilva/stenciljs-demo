import { Component, Listen, Prop, State } from '@stencil/core';
import { RouterHistory, MatchResults } from "@stencil/router";

@Component({
    tag: 'search-result-page',
    styleUrl: 'search-result-page.scss'
})
export class SearchResultPageComponent {

    @State()
    searchResults: any[]= [{
        "title":"German Tour: Parliament Quarter \u0026amp; Reichstag glass dome",
        "price": "14",
        "currency": "$",
        "rating":"4.8",
        "isSpecialOffer":false
     },
     {
        "title":"Skip the Line: Pergamon Museum Berlin Tickets",
        "price": "21",
        "currency": "$",
        "rating":"4.8",
        "isSpecialOffer":false
     },
     {
        "title":"Berlin WelcomeCard: Transport, Discounts \u0026amp; Guide Book",
        "price": "10",
        "currency": "$",
        "rating":"4.6",
        "isSpecialOffer":false
     },
     {
        "title":"Skip the Line: Berlin TV Tower Ticket",
        "price": "143",
        "currency": "$",
        "rating":"4.6",
        "isSpecialOffer":false
     }];

    @Prop() history: RouterHistory;
    @Prop() match: MatchResults;
    @Listen("onSearch")
    onSearchHandler(ev) {
        this.history.push('/search/'+ev.detail);
    }

    render() {
        return (
            <div>
            <search-bar></search-bar>
            <search-results searchresults={this.searchResults}></search-results>
            </div>
        );
    }
}