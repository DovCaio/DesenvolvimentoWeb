import {Test} from "@nestjs/testing"
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { PrismaService } from "../src/prisma/prisma.service";
import * as pactum from "pactum";
import { AuthDto } from "../src/auth/dto";
import { EditUserDto } from "src/user/dto";
import { CreateBookmarkDto, EditBookmarkDto } from "src/bookmark/dto";


describe("App e2e", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ //ISSO daqui deve ser o mesmo que o do main da aplicação
        whitelist: true
      }))
    await app.init();
    await app.listen(3333);
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl("http://localhost:3333")
  })

  afterAll(async () => {
    app.close();
  })

  describe("Auth", () => {

    const dto: AuthDto = {
      email: "M6YdM@example.com",
      password: "123456"
    }

    const dtoWithoutEmail: AuthDto = {
      email: "",
      password: "123456"
    }

    const dtoWithoutPassword: AuthDto = {
      email: "M6YdM@example.com",
      password: ""
    }

    describe("Signup", () => {

      it("Deveria falhar se o email estiver vazio", () => {
          return pactum
          .spec()
          .post("/auth/signup")
          .withBody(dtoWithoutEmail)
          .expectStatus(400)
      })

      it("Deveria falhar se o email estiver vazio", () => {
        return pactum
        .spec()
        .post("/auth/signup")
        .withBody(dtoWithoutPassword)
        .expectStatus(400)
    })

      it("Deveria falhar se o nenhum body for providenciado", () => {
        return pactum
        .spec()
        .post("/auth/signup")
        .expectStatus(400)
    })

      it("Deveria criar um novo usuário", () => {
        return pactum
        .spec()
        .post("/auth/signup")
        .withBody(dto)
        .expectStatus(200)
      })
    })

    describe("Signin", () => {

      it("Deveria falhar se o email estiver vazio", () => {
        return pactum
        .spec()
        .post("/auth/signin")
        .withBody(dtoWithoutEmail)
        .expectStatus(400)
    })

    it("Deveria falhar se o email estiver vazio", () => {
      return pactum
      .spec()
      .post("/auth/signin")
      .withBody(dtoWithoutPassword)
      .expectStatus(400)
  })

    it("Deveria falhar se o nenhum body for providenciado", () => {
      return pactum
      .spec()
      .post("/auth/signin")
      .expectStatus(400)
  })

      it("Deveria logar", () => {
        return pactum
        .spec()
        .post("/auth/signin")
        .withBody(dto)
        .expectStatus(200)
        .stores("userAt", "access_token")
      })
      
    })



  })
  
  describe("User", () => {

    describe("Get User", () => {
      it("Deveria obter um usuário", () => {
        return pactum
        .spec()
        .get("/users/me")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .expectStatus(200)
      })
    })

    describe("Edit User", () => {
      it("Deveria editar um usuário", () => {
        const dto: EditUserDto ={ 
          firstName: "Caio",
          email: "caio@example.com",
        }
        return pactum
        .spec()
        .patch("/users")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .withBody(dto)
        .expectStatus(200)
        .expectBodyContains(dto.firstName)
        .expectBodyContains(dto.email)
      })
    })

  }) 
  
  describe("Bookmarks", () => {

    describe("Get empty Bookmarks", () => {
      it("Deveria recuperar um array vazio de bookmarks", () => {
        return pactum
        .spec()
        .get("/bookmarks")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .expectStatus(200)
        .expectBody([]);
      })
    })

    describe("Create Bookmark", () => {
      it("Deveria criar um novo bookmark", () => {        
        const dto: CreateBookmarkDto = {
          tittle : "Primeiro BookMark",
          link: "www.google.com"
        }
        return pactum
        .spec()
        .post("/bookmarks")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .withBody(dto)
        .expectStatus(201)
        .stores("bookmarkId", "id")
      })
    })
    
    describe("Get Bookmarks", () => {
      it("Deveria recuperar um array de bookmarks", () => {
        return pactum
        .spec()
        .get("/bookmarks")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .expectStatus(200)
        .expectJsonLength(1);
      })
    })


    describe("Get Bookmark By id", () => {
      it("Deveria recuperar bookmarks por id", () => {
        return pactum
        .spec()
        .get("/bookmarks/{id}")
        .withPathParams("id", "$S{bookmarkId}")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .expectStatus(200)
        .expectBodyContains("$S{bookmarkId}")
      })
    })

    describe("Edit Bookmark", () => {
      const dto: EditBookmarkDto = {
        tittle: "Primeiro BookMark Alterado",
        description: "Descrição alterada",
      }
      it("Deveria alterar bookmarks por id", () => {
        return pactum
        .spec()
        .patch("/bookmarks/{id}")
        .withPathParams("id", "$S{bookmarkId}")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .withBody(dto)
        .expectStatus(200)
        .expectBodyContains(dto.tittle)
        .expectBodyContains(dto.description)
      })
    })

    describe("Delete Bookmark", () => {
      it("Deveria deletar bookmarks por id", () => {
        return pactum
        .spec()
        .delete("/bookmarks/{id}")
        .withPathParams("id", "$S{bookmarkId}")
        .withHeaders({
          Authorization: "Bearer $S{userAt}"
        })
        .expectStatus(204)
    })

    it("Deveria ficar com nem um bookmark", () => {
      return pactum
      .spec()
      .get("/bookmarks")
      .withHeaders({
        Authorization: "Bearer $S{userAt}"
      })
      .expectStatus(200)
      .expectJsonLength(0);
    })


  })

  }) 

  
})
