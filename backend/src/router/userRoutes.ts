import express from "express"
import { UserModel } from "../model/UserModel"
import { ArticleModel } from "../model/ArticleModel"
import { GoodLangModel } from "../model/GoodLangModel"
import { ResumeModel } from "../model/ResumeModel"

const userRoutes = express.Router()

// jwt middleware
const verificationMiddleware = require("../middleware/verification")
const verificationAdminMiddleware = require("../middleware/verificationAdmin")

/*
회원의 정보를 요청하거나 정보를 수정하는 작업을 위한 router
*/

// 본인 회원정보 조회
userRoutes.get("/my", verificationMiddleware)
userRoutes.get("/my", async (req: express.Request, res: express.Response) => {
  await UserModel.findOne({ user_email: req.headers.email }, async (err: Error, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (user === null) {
        // 회원정보가 존재하지 않으면 오류반환
        res.status(403).send({ message: "존재하지 않는 아이디 입니다." })
      } else {
        // 회원정보가 존재하면 수정
        res.status(200).send(user)
      }
    }
  })
})

// 전체 User 조회: GET
userRoutes.get("/", async (req: express.Request, res: express.Response) => {
  try {
    // 해당 Model에서 users 가져오기
    let users: any = await UserModel.find({})
    res.status(200).send(users)
  } catch (err) {
    res.status(500).send(err)
  }
})

// User 1개 조회: GET
userRoutes.get("/:user_id", async (req: express.Request, res: express.Response) => {
  const user_id = req.params["user_id"]
  UserModel.findOne({ _id: user_id }, async (err: Error, user: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (user === null) {
        res.status(403).send({ message: "존재하지 않는 유저 입니다." })
      } else {
        res.status(200).send(user)
      }
    }
  })
})

// User 통역가 신청 (id는 hash값): PUT
userRoutes.put("/:user_id", verificationMiddleware)
userRoutes.put("/:user_id", async (req: express.Request, res: express.Response) => {
  const user_id = req.params["user_id"]
  const requestBody = req.body
  UserModel.findOne({ _id: user_id }, async (err: Error, article: any) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (article === null) {
        res.status(403).send({ message: "존재하지 않는 유저 입니다." })
      } else {
        await UserModel.findOneAndUpdate(
          { _id: user_id },
          {
            user_is_ts: true,
            user_name: requestBody.user_name,
            user_gender: requestBody.user_gender,
            user_lang: requestBody.user_lang,
            user_intro: requestBody.user_intro,
            user_egg: requestBody.user_egg,
          }
        )
        res.status(200).send({ message: `${user_id} User가 통역가로 등록되었습니다.` })
      }
    }
  })
})

export { userRoutes }
