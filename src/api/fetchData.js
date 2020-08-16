import axios from "axios";

const BASE_URL = "https://mh34-api.vercel.app/temp/data.json";

const fetchData = async () => {
	let formatedData = null;
	const newData = [];
	try {
		const { data } = await axios.get(BASE_URL);
		formatedData = data["MH"]["districts"]["Chandrapur"]["dates"];
		Object.keys(formatedData).forEach(item => {
			newData.push({
				date: item,
				confirmed: formatedData[item].total.confirmed,
				recovered: formatedData[item].total.recovered,
				deceased: formatedData[item].total?.deceased,
				tested: formatedData[item].total?.tested,
			});
		});
		return newData;
	} catch (error) {
		return error;
	}
};

export default fetchData;
