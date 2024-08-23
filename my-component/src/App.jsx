import Card from "./cards/cards"
import Body from "./body/body"
import { Data } from "./data/data"
import Firstcomponent from "./bootstrapcard/bs"

const App = () => {
    return (
    <>
        {/* <Card></Card> */}
        <Firstcomponent/>
        {/* {
            Data.map(each=>{
                return(
                    <>
                    <Body title={each.title} text={each.text}  />
                    </>
                )
            })
        } */}
            
            
        </>
    )
}
export default App