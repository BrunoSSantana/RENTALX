import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/implementations/IUsersRepository";
import { UserRepository } from "../../modules/accounts/repositories/UsersRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/Implementations/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/Implementations/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
