describe('HomePage', () => {
    let mockBackend, homepageService, location, baseUrl;
    beforeEach(module('iLink'));
    beforeEach(inject((_$httpBackend_, _$location_, _HomepageService_) => {
        mockBackend = _$httpBackend_;
        location = _$location_;
        homepageService = _HomepageService_;
        baseUrl = location.absUrl()+'api';
    }));

    it('should handle a savePhoneNumbers method', () => {
        mockBackend.expectPOST(`${baseUrl}/saveNumbers`).respond(200, Object({
        }));
        homepageService.savePhoneNumbers('data', ()=> {});
        mockBackend.flush();
    });

    it('should handle a loadPhoneNumberIds method', () => {
        mockBackend.expectGET(`${baseUrl}/getNumberIds`).respond(200, Object({
        }));
        homepageService.loadPhoneNumberIds(() => {});
        mockBackend.flush();
    });

    it('should handle a getPhoneNumbers method', () => {
        mockBackend.expectGET(`${baseUrl}/getNumbers/1`).respond(200, Object({
        }));
        homepageService.getPhoneNumbers(1, () => {});
        mockBackend.flush();
    });

    it('should handle a updatePhoneNumbers method', () => {
        const updateData = {
            entryId: 1
        }
        mockBackend.expectPUT(`${baseUrl}/updatePhoneNumbers/1`).respond(200, Object({
        }));
        homepageService.updatePhoneNumbers(updateData, () => {});
        mockBackend.flush();
    });

    it('should handle a deleteEntry method', () => {
        mockBackend.expectDELETE(`${baseUrl}/deletePhoneNumbers/1`).respond(200, Object({
        }));
        homepageService.deleteEntry(1, () => {});
        mockBackend.flush();
    });
})