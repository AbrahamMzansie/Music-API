import axios from 'axios';

const Axios = () => {
	const axiosInstance = axios.create({
		validateStatus: (status: number) => {
			let correct = false;

			if (status >= 200 && status < 300) {
				correct = true;
			} else if (status >= 400 && status < 500) {
				correct = true;
			} else if (status === 503) {
				correct = true;
			}

			return correct;
		},
	});

	return axiosInstance;
};

export default Axios;
