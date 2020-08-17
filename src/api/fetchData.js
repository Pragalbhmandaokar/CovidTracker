import axios from "axios";

const BASE_URL = "https://mh34-api.vercel.app/temp/data.json";

const fetchData = async () => {
	try {
		const { data } = await axios.get(BASE_URL);
		return data;
	} catch (error) {
		return error;
	}
};

export default fetchData;
