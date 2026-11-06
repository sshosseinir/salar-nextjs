import Link from "next/link"

function template({ children }: LayoutProps<"/">) {
  return (
    <>
      <div className="flex gap-8 p-3">
        <Link href="/login">ورود</Link>
        <Link href="/register">ثبت نام</Link>
      </div>
      <div>
        <input type="text" className="border border-gray-200 rounded-lg outline-none"/>
      </div>
      <div>{children}</div>
    </>
  )
}

export default template