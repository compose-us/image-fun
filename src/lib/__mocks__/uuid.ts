const uuid: any = jest.genMockFromModule("uuid");

function v4() {
  return "affeaffe-affe-affe-affe-affeaffeaffe";
}

uuid.v4 = v4;

export default uuid;
