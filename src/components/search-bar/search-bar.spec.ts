import { flush,TestWindow } from "@stencil/core/testing";
import { SearchBarComponent } from "./search-bar";

describe('Searchbar Component', () => {
    it('should compile component', () => {
        expect(new SearchBarComponent()).toBeTruthy();
    });

    describe('Render Component', () => {
        let component:HTMLElement;
        
        beforeEach(async() => {
             const window = new TestWindow();
             component = await window.load({
                components:[SearchBarComponent],
                html:'<search-bar></search-bar>'
            });
        });

        it('should render searchbox input', () => {
            expect(component.getElementsByTagName("input")).toBeTruthy();
        });
    });
});