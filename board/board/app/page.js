import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/register">
        <button>회원가입</button>
      </Link>
      <div className="board">
        <Link href="/list">
          <h2>게시판</h2>{" "}
        </Link>
      </div>
    </>
  );
}
