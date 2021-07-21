import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForGotPasswordMailUseCase } from "./SendForGotPasswordMailUseCase";

class SendForGotPasswordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForGotPasswordMailUseCase = container.resolve(
      SendForGotPasswordMailUseCase
    );
    await sendForGotPasswordMailUseCase.execute(email);

    return response.send();
  }
}
export { SendForGotPasswordMailController };
