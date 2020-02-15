import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb(reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | import('rxjs').Observable<{}> | Promise<{}> {

      const categories: Category[] = [
        { id: 1 , name: 'Lazer', description: 'Cinema,parque, praia, etc' },
        { id: 2 , name: 'Saúde', description: 'plano de saúde e remedios' },
        { id: 3 , name: 'Moradia', description: 'pagamento de contas de casa' },
        { id: 4 , name: 'Salario', description: 'recebiento de salário' },
        { id: 5 , name: 'Freelas', description: 'trabalhos como freelancer' },
      ];
      return { categories };
    }
}
