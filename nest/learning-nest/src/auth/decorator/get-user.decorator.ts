
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if(data){ //Fazenod isso, podemos não colocar nada no parametro do decorator e o valor do parâmetro da requisição vai ser o User do prisma
        return request.user[data];
    }
    return request.user;// Ou podemos colocar um nome de um atributo no parametro do decorator e assim o valor do parâmetro da requisição vai ser o valor do atributo passado
  },
);
