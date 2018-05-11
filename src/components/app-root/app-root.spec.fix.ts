import { TestWindow } from "@stencil/core/testing";
import { AppRootComponent } from "./app-root";


describe('App Root Component: ', () => {
    it('should create component instance', () => {
        expect(new AppRootComponent()).toBeTruthy();
    });

    describe('Rendering : ', () => {
        let appRootComponent: HTMLElement;
        beforeEach(async() => {
            const window = new TestWindow();
            appRootComponent = await window.load({components:[AppRootComponent],html:'<app-root></app-root>'})
        });

        it('should render with proper router link', () => {
            expect(appRootComponent.querySelector("stencil-route[url='/']")).toBeTruthy();
            expect(appRootComponent.querySelector("stencil-route[url='/search']")).toBeTruthy();
            expect(appRootComponent.querySelector("stencil-route[url='/search/:searchQuery']")).toBeTruthy();
        });
    });
});