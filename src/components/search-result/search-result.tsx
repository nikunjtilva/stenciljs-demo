import { Component,Prop } from '@stencil/core';


@Component({
    tag: 'search-result',
    styleUrl: 'search-result.scss'
})
export class SearchResultComponent {
    @Prop() searchresult: any;
    render() {
        return (
            <div>
                <h4>{this.searchresult.title}</h4>
                <span class="price">{this.searchresult.price }{this.searchresult.currency}</span>
            </div>
        );
    }
}   