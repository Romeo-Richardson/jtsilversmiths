import axios from "axios";

const fixThemes = async () => {
    await axios.get("http://localhost:3000/api/fix-themes")
}

fixThemes()