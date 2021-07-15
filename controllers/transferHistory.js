var TransferHistory = require("../model/transferHistory");

exports.postTransfer = function (req, res, next) {
	var historyOb = new TransferHistory({
		transferFrom: req.body.transferFrom,
		transferTo: req.body.transferTo,
		amount: req.body.amount,
		createdAt: req.body.createdAt,
	});

	historyOb.save(function (err) {
		if (err) {
			console.log(err);
			res.status(400).json({ error: "Can't Save" });
		} else {
			console.log("Success");
			res.status(200).json({ msg: "Saved!" });
		}
	});
};

exports.getTransfer = function (req, res, next) {
	TransferHistory.find(function (err, history_list) {
		res.status(200).json(history_list);
	});
};

exports.deleteTransfer = function (req, res, next) {
	TransferHistory.findByIdAndDelete(req.params.id, function (err) {
		if (err) res.json(err.toString());
		res.status(200).json({
			status: 1,
			msg: "succesfully deleted with id" + req.params.id,
		});
	});
};
