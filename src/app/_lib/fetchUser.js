import axios from "axios";

const apiUrl = "https://randomuser.me/api/";

export default async function fetchUser() {
	try {
		const res = await axios.get(`${apiUrl}?results=10`);
		const users = await res.data.results;
		return users;
	} catch (error) {
		console.log("Error: ", error.message);
		throw error;
	}
}
