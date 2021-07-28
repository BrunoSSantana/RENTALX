import { container } from "tsyringe";

import "dotenv/config";
import { IDateProvider } from "./IDateProvider";
import { DayjsDateProvider } from "./implementaions/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
