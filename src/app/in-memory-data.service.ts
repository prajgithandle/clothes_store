import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dresses = [
      { id: 11, name: 'Mr. Nice', color:'black' },
      { id: 12, name: 'Narco' , color:'black'},
      { id: 13, name: 'Bombasto' , color:'black'},
      { id: 14, name: 'Celeritas' , color:'black'},
      { id: 15, name: 'Magneta', color:'black' },
      { id: 16, name: 'RubberMan', color:'black' },
      { id: 17, name: 'Dynama' , color:'black'},
      { id: 18, name: 'Dr IQ', color:'black'},
      { id: 19, name: 'Magma', color:'black' },
      { id: 20, name: 'Tornado', color:'black' }
    ];
    return {dresses};
  }
}