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
        spyOn(homepageService, 'updatePhoneNumbers');
        spyOn(homepageService, 'deleteEntry');
    }));

    it('should have initial default values', () => {
        expect(ctrl.phoneNumbers).toEqual([]);
        expect(ctrl.phoneNumbersData).toEqual([]);
        expect(ctrl.sortOrder).toEqual('desc');
    });

    it('should handle generateNumbers method', () => {
        expect(ctrl.phoneNumbers.length > 0).toEqual(false);
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

    it('should handle sortNumbers method', () => {
        ctrl.sortOrder = 'desc';
        ctrl.sortNumbers(1);
        expect(homepageService.getPhoneNumbers).toHaveBeenCalled();
        expect(ctrl.sortOrder).toEqual('asc');
    });

    it('should handle updatePhoneNumbers method', () => {
        ctrl.updatePhoneNumbers();
        expect(homepageService.updatePhoneNumbers).toHaveBeenCalled();
    });

    it('should handle deleteEntry method', () => {
        ctrl.deleteEntry(1);
        expect(homepageService.deleteEntry).toHaveBeenCalled();
    });
})