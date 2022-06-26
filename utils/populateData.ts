import { faker } from "@faker-js/faker";
import { Company, Prisma, PrismaClient, User, Store, Category } from "@prisma/client";
import * as crypto from "crypto";
import { defaultPreferences } from "../lib/preferences";

const prisma = new PrismaClient();

const randomUser = async () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const newUser = await prisma.user.create({
    data: {
      name: faker.name.findName(firstName, lastName),
      email: faker.internet.email(firstName, lastName),
      image: faker.image.avatar(),
      preferences: JSON.stringify(defaultPreferences)
    },
  });
  return newUser;
};

const randomCompany = async () => {
  return await prisma.company.create({
    data: {
      name: faker.company.companyName(),
      email: faker.unique(faker.internet.email),
      phoneNumber: faker.phone.phoneNumber("+57 ### ### ####"),
      verified: true,
    },
  });
};

const randomStore = async (c: Company, categories: Category[] = []) => {
  const {id: companyId, name: companyName} = c;
  let store =  await prisma.store.create({
    data: {
      companyId,
      locationId: `${faker.address.latitude()},${faker.address.longitude()}`,
      listing: JSON.stringify({
        description: `Welcome to ${companyName}`
      })
    }
  } );
  let storeWithCategories = await prisma.store.update({
    where: {
      id: store.id
    },
    data: {
      categories: {set: categories.filter(()=> Math.random() < 0.5).map(({id}) => ({id}))}
    }
  });
  return storeWithCategories;
}

const randomProfile = async (s: Store) => {
  const {id: storeId, companyId} = s;
  const company = await prisma.company.findFirst({
    where: {
      id: companyId
    }
  })
  
  return prisma.storeProfile.create({
    data: {
      storeId,
      Description: `This is a ${company?.name} store`,
      imgIDs: Array.from({length: faker.mersenne.rand(4,1)}, () => faker.image.food(300,200,true))
    }
  })
  
}

const randomCategory = async () => {
  const name = faker.unique(faker.word.adjective);
  return await prisma.category.create({
    data: {
      name
    }
  });
}

async function main() {
  const numUsers = 1000
  const numCompanies = 100
  const numCategories = 30


  const users = await Promise.all(Array.from({length: numUsers},() => randomUser()));

  const companies = await Promise.all(Array.from({length: numCompanies},() => randomCompany()));

  const categories = await Promise.all(Array.from({length: numCategories}, ()=> randomCategory())) ;

  // const stores = await Promise.all(companies.map((c)=> randomStore(c,categories)));

  // const storeProfiles = await Promise.all(stores.map((s)=> randomProfile(s)));

  console.log(users);
}
main();
