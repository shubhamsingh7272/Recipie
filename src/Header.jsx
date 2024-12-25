import logo from "./images/chef-claude-icon.png"

export default function Header(){
    return (
        <header  className="headers">
           <img src={logo} className="logo" alt="chef claude logo"></img>
           <span className="title">Chef Claude</span>


        </header>




    )
}