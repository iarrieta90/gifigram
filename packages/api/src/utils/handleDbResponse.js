async function handleDbResponseFind(res, dbResponse) {
  if (dbResponse.error) {
    return res.status(400).send({
      data: null,
      error: dbResponse.error,
    });
  }

  if (dbResponse.data) {
    return res.status(200).send({
      data: dbResponse.data,
      error: null,
    });
  }

  return res.status(404).send({
    data: null,
    error: "Not Found",
  });
}

async function handleDbResponseCreate(res, dbResponse) {
  if (dbResponse.error) {
    return res.status(400).send({
      data: null,
      error: dbResponse.error,
    });
  }

  if (dbResponse.data) {
    return res.status(201).send({
      data: dbResponse.data,
      error: null,
    });
  }

  return res.status(404).send({
    data: null,
    error: "Not Found",
  });
}

module.exports = {
  handleDbResponseFind: handleDbResponseFind,
  handleDbResponseCreate: handleDbResponseCreate,
};
