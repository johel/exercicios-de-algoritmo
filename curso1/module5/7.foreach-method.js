const users = [
  {
    id: 1,
    city: "São Paulo",
    name: "josé da silva",
    age: 21,
    weight: 70,
    sex: "m",
    height: 1.7,
    salary: 1000,
    married: false,
    active: true,
    faixaEtaria: "Jovem",
  },
  {
    id: 2,
    city: "Rio de Janeiro",
    name: "maria clementina correia",
    age: 17,
    weight: 70,
    sex: "f",
    height: 1.6,
    salary: 2000,
    married: false,
    active: true,
  },
  {
    id: 3,
    city: "Rio de Janeiro",
    name: "antonieta francesa rainha",
    age: 28,
    weight: 70,
    sex: "f",
    height: 1.65,
    salary: 3000,
    married: true,
    active: true,
  },
  {
    id: 4,
    city: "Rio de Janeiro",
    name: "silva melo de aguiar",
    age: 38,
    weight: 70,
    sex: "m",
    height: 1.85,
    salary: 5000,
    married: true,
    active: true,
  },
  {
    id: 5,
    city: "São Paulo",
    name: "joão carvalho da conceição",
    age: 48,
    weight: 70,
    sex: "m",
    height: 1.9,
    salary: 9000,
    married: false,
    active: true,
  },
  {
    id: 6,
    city: "São Paulo",
    name: "zé rico programador",
    age: 62,
    weight: 90,
    sex: "m",
    height: 1.82,
    salary: 30000, // 30 mil
    married: false,
    active: false,
  },
];

const userProducts = [
  {
    id: 1,
    userId: 1,
    name: "Maçã",
    category: "Comida",
    price: 10,
  },
  {
    id: 2,
    userId: 1,
    name: "Blusa",
    category: "Roupa",
    price: 50,
  },
  {
    id: 3,
    userId: 2,
    name: "Calça Jeans",
    category: "Roupa",
    price: 300,
  },
  {
    id: 4,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 100,
  },
  {
    id: 5,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 120,
  },
  {
    id: 6,
    userId: 2,
    name: "Toalha",
    category: "Cama e Mesa",
    price: 35,
  },
  {
    id: 7,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 8,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 9,
    userId: 3,
    name: "Taxi",
    category: "Transporte",
    price: 30,
  },
  {
    id: 10,
    userId: 6,
    name: "Computador",
    category: "Tecnologia",
    price: 5000,
  },
];

// Inativar os usuários menores de 18 anos;
function inactivateMinorUsers(users) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.age < 18) {
      user.active = false;
    }
  }
}

// boa prática
function inactivateMinorUsers2(users) {
  users.forEach(function (user) {
    if (user.age < 18) {
      user.active = false;
    }
  });
}

// melhor prática
function inactivateMinorUsers2(users) {
  users
    .filter((user) => user.age < 18)
    .forEach((user) => {
      user.active = false;
    });
}

// má prática,
// além do código abaixo não fazer sentido, pois inativa todos
// os usuarios ao mesmo tempo que tenta filtrá-los, ele utiliza
// o filter para inativá-los quando deveria ser o forEach
function inactivateMinorUsers3(users) {
  users.filter((user) => {
    user.active = false;
    return user.age > 18;
  });
}

inactivateMinorUsers2(users);

console.log(users);
