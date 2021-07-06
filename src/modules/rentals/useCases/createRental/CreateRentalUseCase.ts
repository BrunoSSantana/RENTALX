import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppErrors";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}
class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    car_id,
    expected_return_date,
    user_id,
  }: IRequest): Promise<void> {
    const carUnavailabel = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailabel) {
      throw new AppError("Car is unavailable");
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpenToUser) {
      throw new AppError("There's a rental in progress for user");
    }

    return null;
  }
}
export { CreateRentalUseCase };
