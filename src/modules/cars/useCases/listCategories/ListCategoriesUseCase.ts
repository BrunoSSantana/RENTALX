import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository";

class ListCategoriesuseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
export { ListCategoriesuseCase };
