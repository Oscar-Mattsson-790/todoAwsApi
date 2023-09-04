const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event, context) => {
  const todoId = event.pathParameters.id;

  try {
    await db
      .delete({
        TableName: "todos-db",
        Key: { id: todoId },
      })
      .promise();

    return sendResponse(200, { message: `Todo with ID ${todoId} deleted` });
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
