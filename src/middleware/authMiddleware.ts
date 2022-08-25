import jwt from 'jsonwebtoken';

const protect = async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			// eslint-disable-next-line prefer-destructuring
			token = req.headers.authorization.split(' ')[1];
			const generateToken = (id) => {
				return jwt.sign({ id }, process.env.JWT_SECRET, {
					expiresIn: '30d',
				});
			};
			token = generateToken(token);
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			
			if (decoded) {
				return next();
			}
			return res.status(400).json({
				success: false,
				error: `Not authorized ,token is invalid`,
			});
		} catch (error) {
			return res.status(400).json({
				success: false,
				error: `Not authorized , token failed or invalid`,
			});
		}
	} else {
		return res.status(400).json({
			success: false,
			error: `Not authorized , token failed or invalid`,
		});
	}
};

export default protect;
