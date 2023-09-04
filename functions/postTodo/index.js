const { sendResponse, sendError } = require("../../responses/index");
const { nanoid } = require("nanoid");

exports.handler = async (event, context) => {
  const requestBody = JSON.parse(event.body);

  const newTodo = {
    id: nanoid(),
    task: requestBody.task,
  };

  try {
    return sendResponse(201, newTodo);
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
