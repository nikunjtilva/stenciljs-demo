import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'search-results',
    styleUrl: 'search-results.scss'
})
export class SearchResultsComponent {
    @Prop() searchresults:any[];

    render() {
        return (
            <div>
               { this.searchresults.map((searchresult)=><search-result searchresult={searchresult}></search-result>)}
            </div>
        );
    }
}