function carBrandExplicit(model) {
  if (model === "A4") {
    return "Audi";
  }
  if (model === "AMG") {
    return "Mercedes-Benz";
  }

  // 빠르게 실패함
  throw new Exception("Model을 찾을 수 없습니다.");
}
