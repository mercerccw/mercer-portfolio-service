const socials = require("../models/socials");
class SocialController {
    static getSocials(req, res) {
        return res.status(200).json(socials);
    }
}
module.exports = SocialController;
