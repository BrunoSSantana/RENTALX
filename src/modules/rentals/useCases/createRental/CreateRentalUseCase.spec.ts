import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUsecase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUsecase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("shouuld be able  to create an new rental", async () => {
    const rental = await createRentalUsecase.execute({
      car_id: "123212",
      expected_return_date: new Date(),
      user_id: "452365",
    });

    console.log(rental);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });
  // 02
  it("shouuld not be able to create an new rental if there is another opento to the same user", async () => {
    expect(async () => {
      await createRentalUsecase.execute({
        car_id: "123212",
        user_id: "452365",
        expected_return_date: new Date(),
      });

      await createRentalUsecase.execute({
        car_id: "123212",
        expected_return_date: new Date(),
        user_id: "452365",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  // 03
  it("shouuld not be able to create an new rental if there is another opento to the same car", async () => {
    expect(async () => {
      await createRentalUsecase.execute({
        user_id: "341290",
        car_id: "test",
        expected_return_date: new Date(),
      });

      await createRentalUsecase.execute({
        user_id: "452365",
        car_id: "test",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
