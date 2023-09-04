const { sendResponse, sendError } = require("../../responses/index");

exports.handler = async (event, context) => {
  const todoId = event.pathParameters.id;
  const requestBody = JSON.parse(event.body);

  try {
    return sendResponse(200, { message: `Todo with ID ${todoId} updated` });
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
