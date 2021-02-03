import { mutations } from '../src/store';

describe('mutations', () => {
  describe('changeOperationName', () => {
    it(`Должна найти в state операцию с id === payload.id и изменить
    значение name на payload.value.`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const payload = {
        id: 2,
        value: 'Operation Test',
      };

      mutations.changeOperationName(state, payload);

      expect(state.operations[1].name).toBe(payload.value);
    });
  });
  describe('changeOperationPrice', () => {
    it(`Должна найти в state операцию с id === payload.id и изменить
    значение price на payload.value.`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const payload = {
        id: 2,
        value: 15,
      };

      mutations.changeOperationPrice(state, payload);

      expect(state.operations[1].price).toBe(payload.value);
    });
  });
  describe('changeOperationQuantity', () => {
    it(`Должна найти в state операцию с id === payload.id и изменить
    значение элемента массива quantitys с индексом payload.index на payload.value.`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const payload = {
        id: 2,
        value: 11,
        index: 0,
      };

      mutations.changeOperationQuantitys(state, payload);

      expect(state.operations[1].quantitys[0]).toBe(payload.value);
    });
  });
  describe('changeOperationFullQuantity', () => {
    it(`Должна найти в state операцию с id === id и изменить
    значение fullQuantity на сумму элементов массива quantitys`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const id = 3;

      mutations.changeOperationFullQuantity(state, id);

      expect(state.operations[2].fullQuantity).toBe(8);
    });
    it(`Значение fullQuantity должно быть NaN если в quantitys есть строка которую
    нельзя преобразовать в число`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 'test', 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const id = 3;

      mutations.changeOperationFullQuantity(state, id);

      expect(state.operations[2].fullQuantity).toBeNaN();
    });
  });
  describe('changeOperationCost', () => {
    it(`Должна найти операцию с id === id и изменить
    значение cost на произведение fullQuantity и price`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 0,
          },
        ],
        totalCost: 37,
      };
      const id = 3;

      mutations.changeOperationCost(state, id);

      expect(state.operations[2].cost).toBe(16);
    });
    it(`Значение cost должно быть NaN если price строка которую
    нельзя преобразовать в число`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 'test',
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const id = 3;

      mutations.changeOperationCost(state, id);

      expect(state.operations[2].cost).toBeNaN();
    });
    it(`Дробная часть cost должна округляться до 3 символов`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 3.491,
            quantitys: [1.2, 4, 3],
            fullQuantity: 8,
            cost: 28.6262,
          },
        ],
        totalCost: 37,
      };
      const id = 3;

      mutations.changeOperationCost(state, id);

      expect(`${state.operations[2].cost}`.replace(/.*\./, '').length).toBeLessThan(4);
    });
  });
  describe('addOperationQuantity', () => {
    it(`Должна найти в state операцию с id === id и добавить
    новый элемент в массив quantitys`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const id = 1;

      mutations.addOperationQuantity(state, id);

      expect(state.operations[0].quantitys.length).toBe(2);
    });
    it(`Новый элемент массива quantitys должен быть равен 0`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const id = 1;

      mutations.addOperationQuantity(state, id);

      expect(state.operations[0].quantitys[1]).toBe(0);
    });
  });
  describe('removeOperationQuantity', () => {
    it(`Должна найти в state операцию с id === payload.id и удалить
    элемент с индексом payload.index в массиве quantitys`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const payload = {
        id: 3,
        index: 1,
      };

      const deletedValue = state.operations[2].quantitys[1];

      mutations.removeOperationQuantity(state, payload);

      expect(state.operations[2].quantitys[payload.index]).not.toBe(deletedValue);
    });
  });
  describe('addNewOperation', () => {
    it(`Должна добавлять новую операцию в state`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };

      mutations.addNewOperation(state);

      expect(state.operations.length).toBe(4);
    });
    it(`Новая операция должна быть эквивалентна newOperation`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const newId = state.operations[state.operations.length - 1].id + 1;
      const newOperation = {
        id: newId,
        name: `Operation ${newId}`,
        price: 0,
        quantitys: [0],
        fullQuantity: 0,
        cost: 0,
      };

      mutations.addNewOperation(state);

      expect(state.operations[3]).toEqual(newOperation);
    });
  });
  describe('removeOperation', () => {
    it(`Должна найти в state операцию с id === id и удалить ее`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 16,
          },
        ],
        totalCost: 37,
      };
      const id = 2;
      const deletedOperation = state.operations[1];

      mutations.removeOperation(state, id);

      expect(state.operations[1]).not.toEqual(deletedOperation);
    });
  });
  describe('changeTotalCost', () => {
    it(`Должна изменить в state значение totalCost на
    сумму cost всех элементов массива operations`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 19,
          },
        ],
        totalCost: 0,
      };

      mutations.changeTotalCost(state);

      expect(state.totalCost).toBe(40);
    });
    it(`Значение totalCost должно быть числом`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: NaN,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 19,
          },
        ],
        totalCost: 0,
      };

      mutations.changeTotalCost(state);

      expect(typeof state.totalCost).toBe('number');
    });
    it(`Дробная часть totalCost должна округляться до 3 знаков`, () => {
      const state = {
        operations: [
          {
            id: 1,
            name: 'Operation 1',
            price: 0,
            quantitys: [0],
            fullQuantity: 0,
            cost: 0.128,
          },
          {
            id: 2,
            name: 'Operation 2',
            price: 3,
            quantitys: [2, 5],
            fullQuantity: 7,
            cost: 21.23,
          },
          {
            id: 3,
            name: 'Operation 3',
            price: 2,
            quantitys: [1, 4, 3],
            fullQuantity: 8,
            cost: 19.145886,
          },
        ],
        totalCost: 0,
      };

      mutations.changeTotalCost(state);

      expect(`${state.totalCost}`.replace(/.*\./, '').length).toBeLessThan(4);
    });
  });
});
