const { handleSave } = require('next-inline-editor/api/save');

module.exports = {
  async POST(request) {
    return handleSave(request);
  },
};
