const { sendResponse, sendError } = require("../../responses/index");

exports.handler = async (event, context) => {
  let todos = [
    {
      id: "1",
      task: "Test the API",
    },
    {
      id: "2",
      task: "Create a function",
    },
  ];

  return sendResponse(200, todos);
};
