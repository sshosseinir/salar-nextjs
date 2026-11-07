import Counter from "./components/counter/counter"
import  ServerComponent from "./components/serverComponent"

function page() {
  return (
    <>
    <div>about us</div>
           
    <Counter>
        <ServerComponent />
    </Counter>
    </>


  )
}

export default page