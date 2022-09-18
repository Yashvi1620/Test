import Content from "./Content";
import Sidebar from "./Sidebar";

const Main = () =>{
    const yellow = "yellow";
    const orange = "orange";
    const green = "green";
    return(
        <div className = "box-shadow">
           
            
            
            <Sidebar />
            <br/>
          
            <h3  className="margin-left lft">Active Deposits <spar className= "circles">2</spar> <button className="float-right">+</button></h3>
            <Content yl = {yellow} gr = {green}/>
            <br/>
            <br/>
            <br/>
            <h3 className="margin-left lft">Closed Deposits <spar className= "circles">3</spar></h3>
            <Content yl = {yellow}  gr ={orange} />
        </div>
    )
}
export default Main;