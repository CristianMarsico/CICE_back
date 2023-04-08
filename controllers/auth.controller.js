export const register = async (req, res) => {
    try {
        console.log("req")
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: error.message });
    }
};