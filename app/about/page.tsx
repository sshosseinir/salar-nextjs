import AddProduct from "./components/addProduct"
import Counter from "./components/counter/counter"
import ServerComponent from "./components/serverComponent"

function page() {
  return (
    <>
      <div>about us</div>

      <Counter>
        <ServerComponent />
      </Counter>

      <AddProduct />
    </>


  )
}

export default page