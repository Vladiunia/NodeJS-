import express from "express"
import { addNewCompany, getAllCompanies, getCompanieAndDescriptionById, updateCompanyById } from "../controllers/company.js"

const router = express.Router()

router.get ("/companies", getAllCompanies)

router.get ("/companies/:id", getCompanieAndDescriptionById)

router.post ("/companies", addNewCompany)

router.put ("/companies/:id", updateCompanyById)

export default router