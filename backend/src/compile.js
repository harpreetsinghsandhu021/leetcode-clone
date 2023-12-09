const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", async (req, res) => {
  //getting the required data from the request
  let code = req.body.code;
  let language = req.body.language;
  let input = req.body.input;

  if (language === "python") {
    language = "python3";
  }

  if (language === "javascript") {
    language = "nodejs";
  }

  const options = {
    method: "POST",
    url: "https://online-code-compiler.p.rapidapi.com/v1/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "0e18f57a9cmshf5f4f472e760ebdp11e83cjsn6dab4223045a",
      "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
    },
    data: {
      language: language,
      version: "latest",
      code: code,
      input: input,
    },
  };
  try {
    const response = await axios.request(options);
    res.end(response.data.output);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
