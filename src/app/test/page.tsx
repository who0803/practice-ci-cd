// app/test/page.tsx
export default function TestPage() {
  return (
    <main>
      <h1>로그인</h1>
      <form>
        <input
          type="email"
          placeholder="이메일"
          name="email"
          className="email-input"
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          className="password-input"
        />
        <button type="submit">로그인</button>
      </form>
    </main>
  );
}
