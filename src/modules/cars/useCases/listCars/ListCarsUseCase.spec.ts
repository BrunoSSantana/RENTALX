import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      brand: "Car_brand",
      category_id: "category_id",
      daily_rate: 140,
      description: "Carro massa",
      fine_amount: 100,
      license_plate: "DFG-4454",
    });

    const cars = await listCarsUseCase.execute({});

    console.log(cars);
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 140,
      description: "Carro massa",
      fine_amount: 100,
      license_plate: "DFG-4454",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_test",
    });
    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
