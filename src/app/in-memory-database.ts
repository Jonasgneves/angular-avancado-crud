import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb(reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | import('rxjs').Observable<{}> | Promise<{}> {

      const categories = [
        { id: 1 , name: 'Lazer', desciption: 'pagamento de contas de casa' },
        { id: 1 , name: 'Saúde', desciption: 'pagamento de contas de casa' },
        { id: 1 , name: 'Moradia', desciption: 'pagamento de contas de casa' },
        { id: 1 , name: 'Salario', desciption: 'pagamento de contas de casa' },
        { id: 1 , name: 'Freelas', desciption: 'pagamento de contas de casa' },
      ];
      return { categories };
    }
}
