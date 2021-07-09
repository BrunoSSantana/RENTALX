import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUsecase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUsecase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("should be able  to create a new rental", async () => {
    const rental = await createRentalUsecase.execute({
      car_id: "123212",
      expected_return_date: dayAdd24Hours,
      user_id: "452365",
    });

    console.log(rental);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });
  // 02
  it("should not be able to create a new rental if there is another opento to the same user", async () => {
    expect(async () => {
      await createRentalUsecase.execute({
        car_id: "123212",
        user_id: "452365",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUsecase.execute({
        car_id: "123212",
        expected_return_date: dayAdd24Hours,
        user_id: "452365",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  // 03
  it("should not be able to create a new rental if there is another opento to the same car", async () => {
    expect(async () => {
      await createRentalUsecase.execute({
        user_id: "341290",
        car_id: "test",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUsecase.execute({
        user_id: "452365",
        car_id: "test",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  // 04
  it("should not be able to create a new rental with invalid return time", async () => {
    expect(async () => {
      await createRentalUsecase.execute({
        user_id: "341290",
        car_id: "test",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
