const renderData = require('./renderData');

describe('renderData function', () => {
    it('Displays provided data as HTML', async () => {
        const data = {
            "Global": {
                "NewConfirmed": 151812,
                "TotalConfirmed": 3503238,
                "NewDeaths": 8547,
                "TotalDeaths": 247349,
                "NewRecovered": 87183,
                "TotalRecovered": 1125094
            },
        };
        const pageName = 'HOME PAGE';
        const tpl = 'home';
        const calledWith = {
            appName: "My COVID-19 Tracker",
            pageName,
            data,
            error: null,
        }
        const res = { render: () => {}};
        const renderSpy = jest.spyOn(res, 'render');
        renderData(res, data, null, 'home', 'HOME PAGE')
        expect(renderSpy).toHaveBeenCalledWith(tpl, calledWith);
    });
});