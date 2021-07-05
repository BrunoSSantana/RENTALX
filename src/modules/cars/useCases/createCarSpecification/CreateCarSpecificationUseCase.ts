// import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppErrors";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}
// @injectable()
class CreateCarSpecificationUseCase {
  constructor(
    // @inject("")
    private carsRepository: ICarsRepository
  ) {}
  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findById(car_id);

    if (!carExist) {
      throw new AppError("Car doesn't exist!");
    }
  }
}
export { CreateCarSpecificationUseCase };
