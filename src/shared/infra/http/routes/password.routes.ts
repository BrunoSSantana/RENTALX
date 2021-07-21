import { Router } from "express";

import { SendForGotPasswordMailController } from "@modules/accounts/useCases/sendForGotPasswordMail/SendForGotPasswordMailController";

const passwordRoutes = Router();

const sendForGotPasswordMailController = new SendForGotPasswordMailController();

passwordRoutes.post("/forgot", sendForGotPasswordMailController.handle);

export { passwordRoutes };
