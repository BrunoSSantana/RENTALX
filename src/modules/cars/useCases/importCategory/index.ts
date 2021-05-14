import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryuseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryuseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
