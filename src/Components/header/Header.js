import React ,{useState , useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { useHistory } from "react-router-dom";

import Icons from "../../Assets/logo.png";
import mobIcons from "../../Assets/backgrounds/moblogo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {

 
  var [language , setLanguage] = useState('')
var [Collapse  , setCollapse] = useState("collapse")
var [Expend  , setExpend] = useState("false")


async function clickHome(){
  document.getElementById('home').style.color = '#157ee5';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clickGame(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = '#157ee5';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clicknft(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = '#157ee5';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clickEvents(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = '#157ee5';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clickMerchs(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = '#157ee5';
  document.getElementById('account').style.color = 'white';

}
async function clickAccount(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = '#157ee5';

}

async function nave() {
  setCollapse('')
  setExpend('true')
  var element = document.getElementById("navbarSupportedContent");
  element.classList.add("show");
  document.getElementById('nave').style.display = 'none';
  document.getElementById('wave').style.display ='block';
}
function wave() {
  setCollapse('collapse')
  setExpend('false')
  var element = document.getElementById("navbarSupportedContent");
  element.classList.remove("show");
  document.getElementById('nave').style.display = 'block';
  document.getElementById('wave').style.display ='none';
}
async function setLangeng(){
  setLanguage('English')
localStorage.setItem("lang" , 1)
}
async function setLangchi(){

   
  localStorage.setItem("lang" , 0)
}

useEffect(() => {
 document.getElementById('nave').style.backgroundColor = 'white'
},[Collapse , Expend]);
useEffect(() => {
  var lang = localStorage.getItem("lang")
  if(lang == 0)
  {
    setLanguage('日本語')
  }
  else{
    setLanguage('English')
  }
console.log( 'sdsd'+ typeof(language))
 },[]);


  return (
<>

<div style={{marginBottom:'-45px'}} id="header">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand d-block d-lg-none" href="#">
       <Row>
        <Col xs={3}>
        <div className="logo">
         <Link to={'/blogpage'}><Card.Img style={{ width: '63px'}} variant="top" src={mobIcons} /></Link> 
          </div>
        </Col>
        <Col xs={7}>
        <Button  className='walletbtnmob'><i className="fas fa-wallet"><span style={{fontFamily:'myFirstFont', fontStyle:'initial',fontWeight:'200'}}>CONNECT WALLET</span></i></Button>
        </Col>
        <Col xs={2}>
        <button
      id="nave"
      style={{color:'white',padding:'10px 20px',background: 'linear-gradient(93.09deg, #8217F4 25.84%, #00D1FF 116.48%) ',borderRadius:'23px',lineHeight:'6px',marginTop:'11px'}}
        onClick={nave}
        className="navbar-toggler navbar_toggle"
        type="button"
        data-bs-toggle={Collapse}
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={Expend}
        aria-label="Toggle navigation"
      >
        -<br />-<br />-
        {/* <span className="navbar-toggler-icon" /> */}
      </button>
      <button
      id="wave"
      style={{marginTop:'11px',color:'white',display:'none',background: 'linear-gradient(93.09deg, #8217F4 25.84%, #00D1FF 116.48%) ',padding:'10px 20px',borderRadius:'32px'}}
        onClick={wave}
        className="navbar-toggler navbar_toggle"
        type="button"
        data-bs-toggle={Collapse}
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={Expend}
        aria-label="Toggle navigation"
      >
       X
               {/* <span className="navbar-toggler-icon" /> */}
      </button>
        </Col>
       </Row>
          
       
      </div>
 

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
       <img className="desktoplogo" variant="top" src={Icons} />
       
        <ul style={{marginRight:'auto',marginLeft:'auto'}} className="navbar-nav">
       
          <li style={{marginRight:"10px",fontSize:'12px' , }} className="nav-item">
            <Link to={'/'} id="home" onClick={clickHome} className="nav-link active" aria-current="page">
            Metaverse
            </Link>
          </li>
          <li style={{marginRight:"10px",fontSize:'12px' ,}} className="nav-item">
            <Link to={'/game'} id="game" onClick={clickGame} className="nav-link" >
            Token         
            </Link>
          </li>
          <li style={{marginRight:"10px",fontSize:'12px' ,}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            Claim 
            </Link>
          </li>
          <li style={{marginRight:"10px",fontSize:'12px' ,}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            OharaiNFT 
            </Link>
          </li>
          <li style={{marginRight:"10px",fontSize:'12px' ,}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            Scholarship 
            </Link>
          </li>
          <li style={{marginRight:"10px",fontSize:'12px' ,}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            Dock 
            </Link>
          </li>
        </ul>
   
        <ul className="navbar-nav">
  
          <li className="nav-item ">
          {/* <Button  className='dpdown' ><span style={{fontFamily:'myFirstFont' , fontWeight:'500'}}>ENGLISH</span></Button> */}
          <Dropdown >
       
      <Dropdown.Toggle className='dpdown' style={{fontWeight:'200'}} variant="Warning" id="dropdown-basic">
        {language}
      </Dropdown.Toggle>
      {/* style={{position:'fixed'}} */}
      <Dropdown.Menu  className="dropdownbtn"  >
        <Dropdown.Item onClick={setLangeng} href="/" >English</Dropdown.Item>
        <Dropdown.Item onClick={setLangchi} href="/japanese"  >日本語</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </li>
          {/* <i className="fas fa-angle-down"></i> */}
          <li style={{marginLeft:'2px'}} onClick={clickAccount} className="nav-item">
         <Button  className='walletbtn'><i className="fas fa-wallet"><span style={{fontFamily:'myFirstFont', fontStyle:'initial',fontWeight:'200'}}>CONNECT WALLET</span></i></Button>
          </li>
      
        </ul>
      </div>
    </nav>
  </div>
</div>

</>
  );
};

export default Header;
