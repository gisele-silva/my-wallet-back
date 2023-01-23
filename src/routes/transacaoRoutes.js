import {Router} from "express"
import { cadastrarTransacoes, pegarTransacoes } from "../controllers/transacaoController"
import { userMiddleware } from "../middleware/userMiddleware"

const router = Router()

router.get("/transacoes", userMiddleware, pegarTransacoes)
router.post("/transacoes", userMiddleware, cadastrarTransacoes)

export default router