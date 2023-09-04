const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event, context) => {
  const todoId = event.pathParameters.id;
  const requestBody = JSON.parse(event.body);

  const params = {
    TableName: "todos-db",
    Key: { id: todoId },
    UpdateExpression: "SET task = :task",
    ExpressionAttributeValues: {
      ":task": requestBody.task,
    },
  };

  try {
    await db.update(params).promise();
    return sendResponse(200, { message: `Todo with ID ${todoId} updated` });
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
