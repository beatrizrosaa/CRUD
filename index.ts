import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"
import createUser from "./controllers/createUser";
import userByID from "./controllers/userByID";
import userByEmail from "./controllers/userByEmail";
import userByName from "./controllers/userByName";
import deleteByID from "./controllers/deleteByID";
import updateUser from "./controllers/updateUser";
import {loginUser} from "./controllers/loginUser";
import { authenticateUser } from './controllers/autenticacaoUser';


configDotenv()


const app = express()
app.use(express.json());
const port = 3000



// Rota de login
app.post('/login', loginUser);


// rota de criar usuario
app.post('/criaruser', createUser.user )

//rota de retornar usuario pelo id
app.get('/user/:id', userByID.getUserById);

//rota de retornar usuario pelo email
app.get('/user/email/:email', userByEmail.getUserByEmail);

//rota de retornar usuario pelo nome
app.get('/user/name/:name', userByName.getUserByName);


// Rota para excluir usuário pelo ID
app.delete('/user/delete/:id', deleteByID.deleteUser);


// Rota para atualizar o usuário pela ID
app.put('/user/update/:id', updateUser.updateUser);



// app.get('/teste', (req: Request, res: Response) => {
//     console.log(req.query)
//   res.send({ 
//     teste: 'Hello Bia!'
// })
// })

app.listen(port, () => {
  console.log(`Server ir running ${port}`)
})

