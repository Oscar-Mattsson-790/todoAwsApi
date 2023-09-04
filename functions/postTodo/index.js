const { sendResponse, sendError } = require("../../responses/index");
const { nanoid } = require("nanoid");
const { db } = require("../../services/db");

exports.handler = async (event, context) => {
  const requestBody = JSON.parse(event.body);

  const newTodo = {
    id: nanoid(),
    task: requestBody.task,
  };

  const params = {
    TableName: "todos-db",
    Item: newTodo,
  };

  try {
    await db.put(params).promise();
    return sendResponse(201, newTodo);
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
