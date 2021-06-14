import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ description, name }: IRequest): Promise<void> {
    console.log("criando category");

    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    console.log(categoryAlreadyExists);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
