/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name,
 email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/


//1.1

// type TPerson = {
//   id: string,
//   name: string,
//   email: string,
//   password:string,
//   role:Role
// }

// const userOne : TPerson={
//   id:"112",
//   name:"poly",
//   email:"poly@gmail",
//   password:"123",
//   role:"admin"
// }
// const userTwo : TPerson={
//   id:"147",
//   name:"iza",
//   email:"iza@gmail",
//   password:"1234",
//   role:"normal"
// }

// console.log(userOne, userTwo)
// console.table([userOne, userTwo])



//1.2

// type AdminAccount = {
//   account: string,
//   permission: boolean
// }

// type NormalAccount={
//   account : string,
//   permission: boolean
// }




/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/
//1
type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
}

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

const userOne: TPerson = {
  id: "112",
  name: "poly",
  email: "poly@gmail",
  password: "123",
  role: Role.ADMIN
}
const userTwo: TPerson = {
  id: "147",
  name: "iza",
  email: "iza@gmail",
  password: "1234",
  role: Role.NORMAL
}

// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);

type AdminAccount = {
  account: string,
  permission: boolean
}

type NormalAccount = {
  account: string,
  permission: boolean
}

type AdminUser = TPerson & AdminAccount

const userThree: AdminUser = {
  id: "182",
  name: "camila",
  email: "camila@gmail",
  password: "113",
  role: Role.ADMIN,
  account: "admin1",
  permission: true


}

type NormalUser = TPerson & AdminAccount // Intersection


const userFour: NormalUser = {
  id: "192",
  name: "Carlos",
  email: "Carlos@gmail",
  password: "173",
  role: Role.ADMIN,
  account: "normal1",
  permission: false

}

// console.table([userFour, userThree])

//3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

const arryUser: AdminUser[] | NormalUser[] = [] //union

arryUser.push(userThree)
arryUser.push(userFour)

console.table(arryUser)