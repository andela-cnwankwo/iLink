describe('HomePage', () => {
    let scope, $componentController, ctrl;
    beforeEach(module('iLink'));
    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('should assign the page name', () => {
        ctrl = $componentController('homePage');
        expect(ctrl.page).toBe('Home');
    });
})