const express=require("express");
const { handlegetAllUser }=require("../controllers/user");
const router=express.Router();
router.get("/",handlegetAllUser);
router.route("/:id")
.get()
.patch()
.delete();
router.post();
module.exports=router;