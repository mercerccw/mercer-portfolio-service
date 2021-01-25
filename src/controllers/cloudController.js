const cloud_tools = require("../models/cloudTools");
class CloudController {
    static getCloudTools(req, res) {
        return res.status(200).json(cloud_tools);
    }
}
module.exports = CloudController;
