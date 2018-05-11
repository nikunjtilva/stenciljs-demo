import { TestWindow } from "@stencil/core/testing";
import { SearchResultPageComponent } from "./search-result-page";

describe('Search Result Page: ', () => {
    it('should create instance of the page', () => {
        expect(new SearchResultPageComponent()).toBeTruthy();
    });

    describe('Rendering: ', () => {
        let searchResultPage:HTMLElement;
        beforeEach(async() => {
            const window = new TestWindow();
            searchResultPage = await window.load({components:[SearchResultPageComponent],html:'<search-result-page match=""></search-result-page>'})
        });

        it('should render properly', () => {
            
        });
    });
});