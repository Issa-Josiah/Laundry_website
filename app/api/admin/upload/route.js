const { handleUpload } = require('next-inline-editor/api/upload');

module.exports = {
  async POST(request) {
    return handleUpload(request);
  },
};
