import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExistis = this.usersRepository.findById(user_id);

    if (!userAlreadyExistis) {
      throw new Error("User not found!");
    }

    const turnedAdminUser = this.usersRepository.turnAdmin(userAlreadyExistis);

    return turnedAdminUser;
  }
}

export { TurnUserAdminUseCase };
