
function page() {
  const list = [
    1, 2, 3, undefined
  ]
  return (
    <>
      <div>Store</div>
      <div className="flex flex-col gap-2">
        {
          list.map((item, index) => {
            return (
              item && (
                <div key={index}>
                  {item}
                </div>
              )
            )
          })
        }
      </div>
    </>
  )
}

export default page