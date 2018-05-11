import { flush,TestWindow } from "@stencil/core/testing";
import { LandingPageComponent } from "./landing-page";

describe('Landing Page : ', () => {
    it('should create landing page instance', () => {
        expect(new LandingPageComponent()).toBeTruthy();
    });

    describe('Rendering :', () => {
        let landingPage: HTMLElement;
        beforeEach(async() => {
            const window = new TestWindow();
            landingPage = await window.load({components:[LandingPageComponent],html:'<landing-page></landing-page'});
        });

        it('should render landing page with searchbar', () => {
            expect(landingPage.innerHTML).toContain('<search-bar></search-bar>');
        });
    });
});