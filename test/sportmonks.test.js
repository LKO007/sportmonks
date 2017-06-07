"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sportmonks_class_1 = require("../src/sportmonks.class");
const chai_1 = require("chai");
let sm;
const token = 'thisisthetoken';
const validToken = token;
const baseUrl = 'https://soccer.sportmonks.com/api/';
describe('SportmonksApi', () => {
    it("should create the class with soccer base url", () => {
        sm = new sportmonks_class_1.SportmonksApi(token);
        chai_1.expect(sm.baseUrl).to.equal(baseUrl);
    });
    it("should have a get method that calls the correct url", () => {
        sm = new sportmonks_class_1.SportmonksApi(validToken);
        chai_1.expect(sm._composeUrl('v2.0/continents')).to.equal(baseUrl + 'v2.0/continents?api_token=' + validToken);
        /*
        sm.get('v2.0/countries/{id}', { id: 251 }).then( resp => {
            console.log(resp);
        });
         sm.get('v2.0/fixtures/between/{from}/{to}', { from: '1998/01/01', to: '2017/12/01'}).then( resp => {
         console.log(resp);
         });

        sm.get('v2.0/fixtures/between/{from}/{to}', { from: '1998-01-01', to: '2017-12-01', page: 2, lineup: true}).then( resp => {
            console.log(resp.meta.pagination);
        });
         */
    });
    it("should replace the params in url", () => {
        sm = new sportmonks_class_1.SportmonksApi(validToken);
        chai_1.expect(sm._composeUrl('v2.0/continents/{id}', { id: 235 })).to.equal(baseUrl + 'v2.0/continents/235?api_token=' + validToken);
    });
    it("should add the include params", () => {
        sm = new sportmonks_class_1.SportmonksApi(token);
        let endPoint = 'v2.0/continents';
        chai_1.expect(sm._composeUrl(endPoint, { leagues: true })).to.equal(baseUrl + endPoint + '?api_token=' + token + '&include=leagues');
    });
    it("should add the page params", () => {
        sm = new sportmonks_class_1.SportmonksApi(token);
        let endPoint = 'v2.0/continents';
        chai_1.expect(sm._composeUrl(endPoint, { leagues: true, page: 2 })).to.equal(baseUrl + endPoint + '?api_token=' + token + '&page=2&include=leagues');
    });
});
