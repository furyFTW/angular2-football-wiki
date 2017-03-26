import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const API_KEY = '07e6db25a47b488bb08978c822667718';
const BASE_URL = 'http//api.football-data.org/v1/';

@Injectable()
export class FootbalService {

  constructor(
    private http: Http
  ) { }
  getUser() {

  }
  public getSeasons(_params) {
    var searchData = this.getNew("getSeasons", _params);
    let headers = new Headers();
    headers.append('X-Auth-Token', API_KEY);
    return this.http.get(`http://api.football-data.org/v1/competitions/424`, {
      headers: headers
    }).map((res: Response) => res.json());

  };

  getSeason(_params) {

    var searchData = this.getNew("getSeason", _params);

  };

  getTeam(_params) {

    var searchData = this.getNew("getTeam", _params);

  };

  getPlayersByTeam(_params) {

    var searchData = this.getNew("getPlayersByTeam", _params);

  };

  getFixtures(_params) {

    var searchData = this.getNew("getFixtures", _params);

  };

  getFixture(_params) {

    var searchData = this.getNew("getFixture", _params);

  };

  getFixturesByTeam(_params) {

    var searchData = this.getNew("getFixturesByTeam", _params);

  };

  getTeamsBySeason(_params) {

    var searchData = this.getNew("getTeamsBySeason", _params);

  };

  getLeagueTableBySeason(_params) {

    var searchData = this.getNew("getLeagueTableBySeason", _params);

  };

  getFixturesBySeason(_params) {

    var searchData = this.getNew("getFixturesBySeason", _params);

    
  };
  fillDataInObjectByList(_object, _params, _list) {
    for (var key in _list) {
      if (_list.hasOwnProperty(key)) {
        var element = _list[key];
        _object.object[element] = _params[element];
      }
    }
    return _object;
  }

  getNew(_type, _params) {

    let footballdataSearchData = {
      object: {},
      url: '',
    };

    switch (_type) {
      case "getSeasons":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY', 'season',
        ]);
        footballdataSearchData.url = BASE_URL + 'soccerseasons/';
        break;

      case "getSeason":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY',
        ]);
        footballdataSearchData.url = BASE_URL + 'soccerseasons/' + _params.id;
        break;

      case "getTeam":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY'
        ]);
        footballdataSearchData.url = BASE_URL + 'teams/' + _params.id;
        break;

      case "getPlayersByTeam":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY'
        ]);
        footballdataSearchData.url = BASE_URL + 'teams/' + _params.id + '/players';
        break;

      case "getFixtures":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY', 'league', 'timeFrame'
        ]);
        footballdataSearchData.url = BASE_URL + 'fixtures';
        break;

      case "getFixture":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY', 'head2head'
        ]);
        footballdataSearchData.url = BASE_URL + 'fixtures/' + _params.id;
        break;

      case "getTeamsBySeason":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY',
        ]);
        footballdataSearchData.url = BASE_URL + 'soccerseasons/' + _params.id + '/teams';
        break;

      case "getLeagueTableBySeason":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY', 'matchday'
        ]);
        footballdataSearchData.url = BASE_URL + 'soccerseasons/' + _params.id + '/leagueTable';
        break;

      case "getFixturesBySeason":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY', 'matchday', 'timeFrame'
        ]);
        footballdataSearchData.url = BASE_URL + 'soccerseasons/' + _params.id + '/fixtures';
        break;

      case "getFixturesByTeam":
        footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
          'API_KEY', 'season', 'timeFrame', 'venue'
        ]);
        footballdataSearchData.url = BASE_URL + 'teams/' + _params.id + '/fixtures';
        break;

    }
    return footballdataSearchData;
  };
}