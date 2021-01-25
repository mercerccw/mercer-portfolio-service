const development_tools = require("../models/developmentTools");
class DevelopmentToolController {
    static getDevelopmentTools(req, res) {
        return res.status(200).json(development_tools);
    }
}
module.exports = DevelopmentToolController;
