import phase1 from "./phases/phase1";

phase1()
  .then((data) => {
    if (data.error) {
      console.error(`Error: ${data.message}`);
    } else {
      console.error(`Success: ${data.message}`);
    }
  })
  .catch((err) => {
    console.error(err);
  });
