const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

exports.handler = async (event, context) => {
  const params = {
    TableName: "todos-db",
  };

  try {
    const result = await db.scan(params).promise();
    const todos = result.Items || [];
    return sendResponse(200, todos);
  } catch (error) {
    return sendError(500, { error: "Internal Server Error" });
  }
};
