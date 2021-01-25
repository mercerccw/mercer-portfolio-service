const languages = require("../models/languages");
class LanguageController {
    static getLanguages(req, res) {
        return res.status(200).json(languages);
    }
}
module.exports = LanguageController;
