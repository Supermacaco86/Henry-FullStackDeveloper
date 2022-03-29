const {
  menorMayor,
  divisores,
  cuantosOnline,
  actividadesEnComun,
  repetirCaracteres,
  crearClaseEmprendedor,
  palabraMasLarga
} = require('../checkpoint.js')

let usuarios = {
  toni: {
      online: false
  },
  emi: {
      online: true
  },
  fran: {
      online: false
  },
  agus: {
      online: true
  }
};

let usuarios2 = {
  toni: {
      online: true
  },
  emi: {
      online: false
  },
  fran: {
      online: false
  },
  agus: {
      online: false
  }
};

describe('Funciones', function() {
  describe('menorMayor', function() {
    it('should return [1, 10] for [1,2,3,4,5,6,7,8,9,10]', function() {
      expect(menorMayor([1,2,3,4,5,6,7,8,9,10])).toEqual([1, 10]);
    });
    it('should return [-10, 10] for [-10,2,3,4,5,6,7,8,9,10]', function() {
      expect(menorMayor([-10,2,3,4,5,6,7,8,9,10])).toEqual([-10, 10]);
    });
     it('should return [1, 10] for [10, 1]', function() {
      expect(menorMayor([10, 1])).toEqual([1, 10]);
    });
  });

  describe('cuantosOnline', function() {
    it('should return 2', function() {
        expect(cuantosOnline(usuarios)).toBe(2)
    });
    it('should return 1', function() {
      expect(cuantosOnline(usuarios2)).toBe(1)
    });
  });

  describe('divisores', function() {
    it('should return [3, 5]', function() {
      expect(divisores(15)).toEqual([3, 5]);
    });
    it('should return "Es primo"', function() {
      expect(divisores(11)).toEqual('Es primo');
    });
  });

describe('actividadesEnComun', function() {
    it('should return ["leer", "dormir"]', function() {
        const person1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
        const person2 = ['futbol', 'leer', 'programar', 'dormir'];
        expect(actividadesEnComun(person1,person2)).toContain('leer');
        expect(actividadesEnComun(person1,person2)).toContain('dormir');
    });

    it('should return ["programar", "comer"]', function() {
      const person1 = ['programar', 'tennis', 'viajar', 'comer', 'movies'];
      const person2 = ['escribir', 'comer', 'programar', 'dibujar'];

      expect(actividadesEnComun(person1, person2)).toContain('programar');
      expect(actividadesEnComun(person1, person2)).toContain('comer');
    });
  });

  describe('palabraMasLarga', function() {
    it('should return "palabra"', function() {
    expect(palabraMasLarga(['hola esto string', 'frase con palabra'])).toEqual('palabra');
    });
    it('should return "reallylong"', function() {
    expect(palabraMasLarga(['this is reallylong', 'short words', 'hi'])).toEqual('reallylong');
    });
  });
});

describe('Clase', function() {
  describe('crearClaseEmprendedor', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        expect(emprendedor.nombre).toBe('Elon');
        expect(emprendedor.apellido).toBe('Musk');
        expect(emprendedor.libros).toEqual([{nombre: 'Lord of the Flies',autor: 'William Golding'}]);
        expect(emprendedor.mascotas).toEqual(['perro','gato']);
    });
    it('should add a pet with addMascota', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      emprendedor.addMascota('loro');
      expect(emprendedor.mascotas[2]).toBe('loro');
  });
    it('should get the number of pets', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        expect(emprendedor.getMascotas()).toBe(2);
    });
    it('should add a book with addBook', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        emprendedor.addBook('The Foundation Trilogy', 'Isaac Asimov');
        expect(emprendedor.libros[1]).toEqual({nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'});
    });
    it('should get all books name with getBooks', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'}], ['perro','gato']);
      expect(emprendedor.getBooks()).toEqual(['Lord of the Flies','The Foundation Trilogy']);
    });
    it('should get full name with getFullName', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      const nombre = emprendedor.nombre;
      const apellido = emprendedor.apellido;
      expect(emprendedor.getFullName()).toBe(`${nombre} ${apellido}`);
    });
  });
});


describe('Extra Credit', function() {
  describe('repetirCaracteres',function() {
    repetirCaracteres()
    it('should return "hhoollaa"', function() {
        expect('hola'.repeatCharacters()).toBe('hhoollaa');
    });
    it('should return "hheennrryy"', function() {
      expect('henry'.repeatCharacters()).toBe('hheennrryy');
    });
  });
});