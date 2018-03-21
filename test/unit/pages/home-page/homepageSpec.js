describe('HomePage', () => {
    let $componentController, ctrl, homepageService;
    beforeEach(module('iLink'));
    beforeEach(inject((_$componentController_, _HomepageService_) => {
        $componentController = _$componentController_;
        homepageService = _HomepageService_;
        ctrl = $componentController('homePage');
        spyOn(homepageService, 'savePhoneNumbers');
        spyOn(homepageService, 'loadPhoneNumberIds');
        spyOn(homepageService, 'getPhoneNumbers');
    }));

    it('should have initial values', () => {
        expect(ctrl.phoneNumbers).toEqual([]);
        expect(ctrl.phoneNumbersData).toEqual([]);
        expect(ctrl.currentPhoneNumber).toEqual([]);
    });

    it('should handle generateNumbers method', () => {
        ctrl.generateNumbers();
        expect(ctrl.phoneNumbers.length > 0).toEqual(true);
    });

    it('should handle savePhoneNumbers method', () => {
        ctrl.savePhoneNumbers();
        expect(homepageService.savePhoneNumbers).toHaveBeenCalled();
    });

    it('should handle loadPhoneNumberIds method', () => {
        ctrl.loadPhoneNumberIds();
        expect(homepageService.loadPhoneNumberIds).toHaveBeenCalled();
    });

    it('should handle sortPhoneNumbers method', () => {
        const data = [2, 1, 3];
        const expectedAscResult = [1, 2, 3];
        const expectedDescResult = [3, 2, 1];
        ctrl.sortPhoneNumbers(data);
        expect(data).toEqual(expectedAscResult);
        ctrl.sortPhoneNumbers(data, 'desc');
        expect(data).toEqual(expectedDescResult);
    });

    it('should handle getPhoneNumbers method', () => {
        ctrl.getPhoneNumbers(1);
        expect(homepageService.getPhoneNumbers).toHaveBeenCalled();
    });
})