describe("My First Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io"); // 페이지 방문

    cy.contains("type").click(); // "type"이라는 텍스트가 있는 요소 클릭

    cy.url().should("include", "/commands/actions"); // URL에 특정 경로 포함됐는지 확인

    cy.get(".action-email") // class가 action-email인 input 선택
      .type("fake@email.com") // 텍스트 입력
      .should("have.value", "fake@email.com"); // 값이 입력됐는지 확인
  });
});
