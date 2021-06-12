const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

exports.addNewUser = async (req, res, next) => {
	try{
		const user = new User({
			name: req.body.name,
			address: req.body.address,
			email: req.body.email,
			countryCode: req.body.countryCode,
			phone: req.body.phone
		});

		await user.save();
		//return jwt
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) => {
			if (err) throw err;
			return res.json({ token });
		});
	}
	catch(err){
		return res.status(500).json({ message: err });
	}
};

exports.getUser = async (req, res, next) => {
	User.find({ email: req.params.email })
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => res.status(404).json({ message: err }));
};

exports.fetchUsers = async (req, res, next) => {
	User.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => res.status(404).json({ message: err }));
};

exports.delete = async (req, res, next) => {
	const email = req.body.email;
	if (!email) {
		res.status(402).json({ message: 'email required' });
	} else {
		User.deleteOne({ email: email })
			.then(() => {
				res.status(200).json({ message: 'sucessfully deleted the user' });
			})
			.catch((err) => res.status(500).json({ message: err }));
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const { name, address, email, countryCode, phone } = req.body;
		if (!email) {
			res.status(402).json({ message: 'email required' });
		}
		const updateFields = {};
		if (name) updateFields.name = name;
		if (address) updateFields.address = address;
		if (countryCode) updateFields.countryCode = countryCode;
		if (phone) updateFields.phone = phone;
		const user = await User.findOneAndUpdate(
			{ email },
			{ $set: updateFields },
			{ new: true },
		);

		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		return res.status(200).json(user);
	} catch (error) {
		res.status(500).send('Error' + error);
	}
};
