const express = require("express");
const CloudController = require("../controllers/cloudController");
const ProfileController = require("../controllers/profileController");
const DevelopmentToolController = require("../controllers/developmentToolController");
const LanguageController = require("../controllers/languageController");
const SocialController = require("../controllers/socialController");
const router = express.Router();

router.get("/me", (req, res) => {
    ProfileController.getProfile(req, res);
});
router.get("/cloud-tools", (req, res) => {
    CloudController.getCloudTools(req, res);
});
router.get("/development-tools", (req, res) => {
    DevelopmentToolController.getDevelopmentTools(req, res);
});
router.get("/languages", (req, res) => {
    LanguageController.getLanguages(req, res);
});
router.get("/socials", (req, res) => {
    SocialController.getSocials(req, res);
});
module.exports = router;
