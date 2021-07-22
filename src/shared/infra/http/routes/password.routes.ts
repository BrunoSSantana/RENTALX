import { Router } from "express";

import { SendForGotPasswordMailController } from "@modules/accounts/useCases/sendForGotPasswordMail/SendForGotPasswordMailController";

import { ResetPasswordUserController } from "../../../../modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";

const passwordRoutes = Router();

const sendForGotPasswordMailController = new SendForGotPasswordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForGotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordUserController.handle);

export { passwordRoutes };
