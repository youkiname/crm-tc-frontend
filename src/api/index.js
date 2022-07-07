import { ApiController } from "./api"
import { AuthController } from "./authController";
import { BannersController } from "./bannersController";
import { CardLoyaltyController } from "./cardLoyaltyController";
import { PollsController } from "./pollsController";
import { ShopsController } from "./shopsController";
import { TransactionsController } from "./transactionsController";
import { VisitorsController } from "./visitorsController";


export const apiController = new ApiController()
export const authController = new AuthController()
export const bannersController = new BannersController()
export const cardLoyaltyController = new CardLoyaltyController()
export const pollsController = new PollsController()
export const shopsController = new ShopsController()
export const transactionsController = new TransactionsController()
export const visitorsController = new VisitorsController()
