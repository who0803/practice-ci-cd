describe("로그인 페이지 테스트", () => {
  it("이메일과 비밀번호를 입력할 수 있다", () => {
    cy.visit("/test");

    cy.get(".email-input")
      .type("test@example.com")
      .should("have.value", "test@example.com");

    cy.get(".password-input").type("1234").should("have.value", "1234");

    cy.contains("로그인").click();
  });
});
