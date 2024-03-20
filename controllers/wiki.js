// Fetch and send the city summary for the request.
import axios from 'axios';

export const getCitySummary = async (req, res) => {
    const {cityName} = req.body

    try {
        const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}`);
        const summary = response.data.extract;
        res.send(summary);
    } catch (error) {
        res.status(404).json({ message: "City not found on Wikipedia." });
    }

}