const { sendResponse, sendError } = require("../../responses/index");

exports.handler = async (event, context) => {
  const todoId = event.pathParameters.id;

  try {
    return sendResponse(200, { message: `Todo with ID ${todoId} deleted` });
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
