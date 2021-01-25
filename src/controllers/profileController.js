const profile = require("../models/profile");
class ProfileController {
    static getProfile(req, res) {
        return res.status(200).json(profile);
    }
}
module.exports = ProfileController;
