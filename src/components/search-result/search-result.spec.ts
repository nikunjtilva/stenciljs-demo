import { flush,TestWindow } from "@stencil/core/testing";
import { SearchResultComponent } from "./search-result";

describe('Search Result Component', () => {
    it('should compile component', () => {
        expect(new SearchResultComponent()).toBeTruthy();
    });

    describe('Render Component', () => {
        let component:HTMLElement;
        
        beforeEach(async() => {
             const window = new TestWindow();
             component = await window.load({
                components:[SearchResultComponent],
                html:'<search-result></search-result>'
            });
        });
        
    });
});