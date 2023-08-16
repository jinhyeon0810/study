import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="board">
        <Link href="/list">
          <h2>게시판</h2>{" "}
        </Link>
      </div>
    </>
  );
}
