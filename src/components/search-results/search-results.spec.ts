import { flush,TestWindow } from "@stencil/core/testing";
import { SearchResultsComponent } from "./search-results";

describe('Search Results Component', () => {
    it('should compile component', () => {
        expect(new SearchResultsComponent()).toBeTruthy();
    });

    describe('Render Component', () => {
        let component:HTMLElement;
        
        beforeEach(async() => {
             const window = new TestWindow();
             component = await window.load({
                components:[SearchResultsComponent],
                html:'<search-results></search-results>'
            });
        });

        it('should render searchbox input', () => {
            expect(component.getElementsByTagName("span")).toBeTruthy();
        });
    });
});