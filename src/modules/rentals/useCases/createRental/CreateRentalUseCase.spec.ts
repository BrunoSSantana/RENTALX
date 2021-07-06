import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUsecase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUsecase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("shouuld be able  to create an new rental", async () => {
    await createRentalUsecase.execute({
      car_id: "123212",
      expected_return_date: new Date(),
      user_id: "452365",
    });
  });
});
