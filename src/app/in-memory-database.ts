import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model'

export class InMemoryDatabase implements InMemoryDbService {
  createDb(reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | import('rxjs').Observable<{}> | Promise<{}> {

      const categories: Category[] = [
        { id: 1 , name: 'Lazer', description: 'Cinema,parque, praia, etc' },
        { id: 2 , name: 'Saúde', description: 'plano de saúde e remedios' },
        { id: 3 , name: 'Moradia', description: 'pagamento de contas de casa' },
        { id: 4 , name: 'Salario', description: 'recebiento de salário' },
        { id: 5 , name: 'Freelas', description: 'trabalhos como freelancer' },
      ];

      const entries: Entry[] = [
        { id: 1, name: 'Gás de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2018', amount: '70,80', type: 'expense', description: 'Qualquer descrição' } as Entry,
        { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: '12/08/2019', amount: '12,50', type: 'expense' } as Entry,
        { id: 3, name: 'Salário na empresa X', categoryId: categories[3].id, category: categories[3], paid: true, date: '18/01/2020', amount: '150,50', type: 'revenue' } as Entry,
        { id: 4, name: 'Aluguel do Filme', categoryId: categories[2].id, category: categories[2], paid: true, date: '19/02/2019', amount: '200,75', type: 'expense' } as Entry,
        { id: 5, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: '12/12/2019', amount: '23,00', type: 'expense' } as Entry,
        { id: 6, name: 'Steam Jogo', categoryId: categories[2].id, category: categories[2], paid: true, date: '06/07/2019', amount: '80,90', type: 'expense' } as Entry,
        { id: 7, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[1], paid: false, date: '24/07/2019', amount: '29,99', type: 'expense' } as Entry,
        { id: 8, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: '01/09/2020', amount: '42,75', type: 'expense' } as Entry,
        { id: 10, name: 'Jiu-Jitsu', categoryId: categories[1].id, category: categories[1], paid: false, date: '09/10/2020', amount: '16,70', type: 'expense' } as Entry,
        { id: 12, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: false, date: '16/04/2020', amount: '62,80', type: 'expense' } as Entry,
        { id: 15, name: 'Pagamento Projeto', categoryId: categories[3].id, category: categories[3], paid: false, date: '12/02/2020', amount: '270,00', type: 'revenue' } as Entry,
      ]
      return { categories, entries };
    }
}
