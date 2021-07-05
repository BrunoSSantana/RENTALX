// import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppErrors";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}
// @injectable()
class CreateCarSpecificationUseCase {
  constructor(
    // @inject("")
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findById(car_id);

    if (!carExist) {
      throw new AppError("Car doesn't exist!");
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    );

    carExist.specifications = specifications;

    await this.carsRepository.create(carExist);
  }
}
export { CreateCarSpecificationUseCase };
