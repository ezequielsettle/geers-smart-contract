const PingToken = artifacts.require("PingToken");

module.exports = function (deployer) {
	deployer.deploy(PingToken, "PingToken", "PING");
};
