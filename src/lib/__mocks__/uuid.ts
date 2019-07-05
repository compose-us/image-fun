const uuidMock = jest.genMockFromModule("uuid");

function v4() {
  return "affeaffe-affe-affe-affe-affeaffeaffe";
}

uuidMock.v4 = v4;

module.exports = uuidMock;
