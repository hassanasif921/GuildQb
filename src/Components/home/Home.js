import React, { Component } from 'react';


import "./style.css";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Video from '../../Assets/official.MP4'
import image1 from '../../Assets/General images/x2/Block 3.png'
import piechart from '../../Assets/General images/x1/piechart.png'
import one from '../../Assets/1.PNG'
import two from '../../Assets/2.PNG'
import three from '../../Assets/three.PNG'
import six from '../../Assets/six.png'
import four from '../../Assets/four.PNG'
import five from '../../Assets/five.PNG'

import c1 from '../../Assets/General images/x1/block 4 - characters/photo-1.png'
import c2 from '../../Assets/General images/x1/block 4 - characters/photo-2.png'
import c3 from '../../Assets/General images/x1/block 4 - characters/photo-3.png'
import c4 from '../../Assets/General images/x1/block 4 - characters/photo-4.png'
import c5 from '../../Assets/General images/x1/block 4 - characters/photo-5.png'
import c11 from '../../Assets/General images/x1/block 4 - characters/photo-11.png'
import c22 from '../../Assets/General images/x1/block 4 - characters/photo-22.png'
import c33 from '../../Assets/General images/x1/block 4 - characters/photo-33.png'
import c44 from '../../Assets/General images/x1/block 4 - characters/photo-44.png'
import c55 from '../../Assets/General images/x1/block 4 - characters/photo-55.png'
import main from '../../Assets/General images/x1/block 4 - characters/main.png'
import mainmob from '../../Assets/General images/x1/block 4 - characters/mainmob.png'

import c6 from '../../Assets/General images/x1/block 4 - characters/photo.png'
import ico1 from '../../Assets/General images/x1/partners logo/Frame 78.png'
import ico2 from '../../Assets/General images/x1/partners logo/image 10.png'
import ico3 from '../../Assets/General images/x1/partners logo/image 11.png'
import ico4 from '../../Assets/General images/x1/partners logo/image 12.png'
import ico5 from '../../Assets/General images/x1/partners logo/image 13.png'
import ico6 from '../../Assets/General images/x1/partners logo/image 4.png'
import ico7 from '../../Assets/General images/x1/partners logo/image 5.png'
import ico8 from '../../Assets/General images/x1/partners logo/image 6.png'
import ico9 from '../../Assets/General images/x1/partners logo/image 7.png'
import ico10 from '../../Assets/General images/x1/partners logo/image 8.png'
import ico11 from '../../Assets/General images/x1/partners logo/image 9.png'


import mainhero from '../../Assets/backgrounds/herologo.png'
import Opensee from "../../Assets/backgrounds/opensea.png";
import Discord from "../../Assets/backgrounds/discord.png";

import play1 from '../../Assets/General images/x1/block 5 - image 1.png'
import play2 from '../../Assets/General images/x1/block 5 - image 2.png'
import play3 from '../../Assets/General images/x1/block 5 - image 3.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import box from '../../Assets/backgrounds/backgrounds/boxphoto.png'


import images from "../../Assets/backgrounds/Capture.png"
import clearlogo from "../../Assets/backgrounds/clearlogo.png"

import $ from 'jquery';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PieChart } from 'react-minimal-pie-chart';
import 'swiper/css';

import Roadmap from "../roadmap/roadmap";
SwiperCore.use([Autoplay]);

const Home = () => {
  const swiperRef = React.useRef(null);
  const swiperRef2 = React.useRef(null);
  const Swal = require("sweetalert2");
  const handleClick = () => {
    window.location.href='https://www.kisaragi-guildqb.com/#/';
  }
  $(document).ready(function(){

    // pass the YouTube video ID into the iframe template on click/tap
    $('a.video-thumb').click(function () {
      
      // Grab the video ID from the element clicked
      var id = $(this).attr('data-youtube-id');
  
    
      var autoplay = '?autoplay=1';
      
      // Don't show the 'Related Videos' when the video ends
      var related_no = '&rel=0';
      
      // String the ID and param variables together
      var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
      
      $("#youtube").attr('src', src);
      return false;
    
    });
  
  
    /* Modal View
    -------------------------------------------------------------------------------*/
    function toggle_video_modal() {
        
        // Open the Video Modal
        $(".js-trigger-modal").on("click", function(event){
            event.preventDefault();
            $("body").addClass("show-video-modal");
        });
  
        // Close and Reset the Video Modal
        $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
            event.preventDefault();
            
            $("body").removeClass("show-video-modal");
        
    
        $("#youtube").attr('src', '');
        });
    }
    toggle_video_modal();
  });

  React.useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
    if (swiperRef2.current) {
      swiperRef2.current.swiper.autoplay.start();
    }
  }, []);

  return (
<>
<Container fluid className='blueshade'>
<Container fluid  style={{width:'90%'}}>
          <Row style={{ height: "80%" ,textAlign:'left' }}>
            <Col xs={12} md={6}>
              <h1 className='margin' >
                Blockchain Gaming Guild QB [Quest & Battle]
              </h1>
              <h5>
                Play, fight, meet, the future of games is here
              </h5>
              {/* <Card.Img
                className="imagemob"
                style={{ width: "100%", borderRadius: "10px" ,marginTop:'20px' , marginBottom:'20px'}}
                variant="top"
                src={mainhero}
              /> */}
              <Row className="left">
                <Col xs={12} md={6}>
                  <Button href='https://opensea.io/collection/ru-yue-kisaragi' style={{background: 'rgba(255, 255, 255, 0.06)'}} className="btnWhite ">
                    <img width="70%" height="100%" src={Opensee} alt="..." />
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <Button href='https://discord.com/invite/BNjFBTgpMt' className="btnWhite mright" style={{background: 'rgba(255, 255, 255, 0.06)'}}>
                    <img width="70%" height="90%" src={Discord} alt="..." />
                  </Button>
                </Col>
              </Row>
              <p className="para">
                GuildQB is the singularity point from web 2.0 to web 3.0 as a
                blockchain gaming guild. It is a gaming DAO/community that
                supports the seamless transition to web 3.0 and the challenges
                of the new era.
              </p>

              <div style={{ textAlign: "left" }} className="social-icons">
               
                <a className="ico hex4 " href="https://www.tiktok.com/@guildqb" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-tiktok soc" ></i>
                  <div className="tooltip">Github</div>
                </a>
                <a className="ico hex4" href="https://www.youtube.com/channel/UCkfd5R9q8RyxUYE1abTfpUg" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-youtube soc" ></i>
                  <div className="tooltip">Twitter</div>
                </a>
                <a className="ico hex4" href="https://www.instagram.com/qb_guild/?__coig_restricted=1" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-instagram  soc"  ></i>
                  <div className="tooltip">Dribbble</div>
                </a>
                <a className="ico hex4" href="https://twitter.com/GuildQB" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-twitter  soc"  ></i>
                  <div className="tooltip">Instagram</div>
                </a>
               
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Card.Img
                className="mobile"
                style={{ width: "100%", borderRadius: "100px" ,marginTop:'1%'  }}
                variant="top"
                src={mainhero}
              />
            </Col>
          </Row>
</Container>
</Container>
<Container fluid style={{paddingTop:'0px',paddingBottom:'70px'}} >
<Row>
  <Col  xs={12} md={2}></Col>
  <Col xs={12} md={8}>
  <h2>GuildQB Mission</h2>
<h5 style={{marginBottom:'50px'}}>Comprehensive Gaming Ecosystem</h5>
  

  
  </Col>
  <Col  xs={12} md={2}></Col>
</Row>
<img width='100%' className='mainimgh' src={main} alt='..' />
<img width='100%' className='mainmob' src={mainmob} alt='..' />
</Container>
<h2 >GuildQB NFT</h2>
<Container fluid className='playearn' style={{paddingTop:'70px',paddingBottom:'150px'}}>

<Container fluid className='boxshade'>
<Row>
    <Col style={{marginTop:'12%', paddingLeft:'50px'}} className="left" xs={12} md={6}>
      <h2 >如月-KISARAGI-</h2>
      <p className='kis'>"KISARAGI" is an NFT released by GuildQB, a social web3 platform specialized in NFT games and a community of NFT game players.</p>
      <Row style={{marginTop:'20px',marginBottom:'6px'}} className='left'>
            <Col xs={12} md={12}>
            <button onClick={handleClick} className='walletbtn soldout' ><span style={{textAlign:'center',marginLeft: '35%',
   fontWeight: '700',
    fontSize: '16px',
   lineHeight: '150%',
   textAlign: 'center',
    textTransform: 'uppercase'}}>Sold Out</span></button>
            </Col>
           
          </Row>
    </Col>
   
    <Col xs={12} md={6}>
   
        <img className="img1" src={box} alt="..."/>
      </Col>
  </Row>

</Container>
<Container fluid style={{marginTop:'50px'}} className='boxshade2'>
  <h3 style={{marginTop:'50px'}}>GuildQB Roadmap</h3>
  <h5 style={{marginBottom:'50px'}}>Creating New Value</h5>
{/* <div className="roadmap-container"></div> */}
<Container>
  <Row>
    <Col md={3} className='mob' style={{marginBottom:'10px',padding:'0px 10%'}}>
    <div className='circle'>
    <img className='clearimage' src={clearlogo} alt='...' />
    </div>
    {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
    </Col>
    <Col md={3} className='mob' style={{marginBottom:'10px',padding:'0px 10%'}}>
    <div className='circle'>
    <img className='clearimage' src={clearlogo} alt='...' />
    </div>
    {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
    </Col>
    <Col md={3} className='mob' style={{marginBottom:'10px',padding:'0px 10%'}}>
    <div className='circle'>
    <img className='clearimage' src={clearlogo} alt='...' />
    </div>
    {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
    </Col>
    <Col md={3} className='mob' style={{marginBottom:'10px',padding:'0px 10%'}}>
    <div className='circle'>
    <img className='clearimage' src={clearlogo} alt='...' />
    </div>
    {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
    </Col>
  </Row>
</Container>
<Container className='pbottom'>
<div className='line'></div>

  <Row className='lineleft'>
    
    <Col className='left' xs={12} md={3}>
  
    <div className='roadbox'>
      <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px'}}>Phase 1: INITIAL BUILD</h3>
      <p className='pra'>. GuildQB Community Launches Social Creation</p>
      <p className='pra'>. Partnership with the Gaming Guild</p>
      <p className='pra'>. Partnership with GameFi/P2E</p>
      <p className='pra'>. Sponsorship of the world's first guild tournament</p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
      
      <div className='roadbox'>
      <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px'}}>Phase 2: LAUNCH</h3>
      
      <p className='pra'>. NFT's Official Announcement </p>
      <p className='pra'>. White Paper Released</p>
      <p className='pra'>. Exhibited at Tokyo Game Show 2022 </p>
      <p className='pra'>. Official website released</p>
      <p className='pra'>. User mission page released (QB Quest)</p>
     
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
     
      <div className='roadbox'>
      <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px',textAlign:'center'}}>Phase 3: R&D DEVELOPMENT</h3>
      
      <p className='pra'>. NFT's Official Announcement</p>
      <p className='pra' style={{lineHeight:'15px'}}>. White Paper Released</p>
      <p className='pra'>. Exhibited at Tokyo Game Show 2022 </p>
      <p className='pra'>. Official website released</p>
      <p className='pra'>. User mission page released (QB Quest)</p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
   
    <div className='roadbox'>
    <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px'}}>Phase４: ADVANCED BUILD</h3>
    <p className='pra'>. NFT's Official Announcement </p>
      <p className='pra'>. White Paper Released</p>
      <p className='pra'>. Exhibited at Tokyo Game Show 2022 </p>
      <p className='pra'>. Official website released</p>
      <p className='pra'>. User mission page released (QB Quest)</p>
    </div>
    </Col>
    
  </Row>
  </Container>
</Container>
</Container>


<Container fluid className='blueshadeg'>
<Container >
<h2 style={{marginBottom:'50px'}}>News</h2>
<Row>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={one} />
      <Card.Body>
        <Card.Title className='cardt'>GuildFi and GuildQB, the world's top gaming guilds with over 280,000 users, hold community event</Card.Title>
        <Card.Text className='cardp'>
        GuildQB, operated by Social Finance Limited, will be hosting a community event in cooperation with GuildFi, and you can participate by ...
        <a href='https://prtimes.jp/main/html/rd/p/000000002.000109511.html' className='cardr' variant="primary">Read More</a>
        </Card.Text>

        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i>  December 15, 2022, 11:41 a.m.</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={two} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQB Announces Collaboration with Polygon</Card.Title>
        <Card.Text className='cardp'>
        GuildQB, the next generation GameFi platform operated by Social Finance Limited, is pleased to announce its collaboration with Polygon...    <a href='https://prtimes.jp/main/html/rd/p/000000007.000109511.html' className='cardr' variant="primary">Read More</a> </Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> January 17, 2023, 11:00 a.m.</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={three} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQB CEO Pyrolysis talks about the future at HANEDA EXPO: web3 guilds in a new era</Card.Title>
        <Card.Text className='cardp'>
        Pyrolysis, CEO of Social Finance Limited's GuildQB, will be speaking at "HANEDA WEB3.0 EXPO 2023 ~The bridge to the world through ...    <a href='https://prtimes.jp/main/html/rd/p/000000017.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> February 8, 2023 4:50 p.m.</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={six} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQB Sponsors Offline Event between Elemental Knight Online and Kaika Digital Group</Card.Title>
        <Card.Text className='cardp'>
        GuildQB, operated by Social Finance Limited, is pleased to announce its sponsorship of the Elemental Knight Online and Kaika Digital  ...    <a href='https://prtimes.jp/main/html/rd/p/000000022.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> March 13, 2023, 11:02 a.m.</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={four} />
      <Card.Body>
        <Card.Title className='cardt'>Nethergate: New incubation program opens!</Card.Title>
        <Card.Text className='cardp'>
        GuildQB, operated by Social Finance Limited, is pleased to announce that it will host the incubation program "Nethergate" in ...    <a href='https://prtimes.jp/main/html/rd/p/000000023.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> March 25, 2023, 12:12 p.m.</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={five}/>
      <Card.Body>
        <Card.Title className='cardt'>NFT "KISARAGI" published by GuildQB sold out in 37 minutes!</Card.Title>
        <Card.Text className='cardp'>
        GuildQB, a Web3 gaming guild operated by Social Finance Limited, is pleased to announce that its recently issued KISARAGI - KISARAGI, a uniquely ...    <a href='https://prtimes.jp/main/html/rd/p/000000020.000109511.html' className='cardr' variant="primary">Read More</a> </Card.Text>
        
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> February 24, 2023, 10:49 p.m.</p>
      </Card.Body>
    </Card>
  </Col>
</Row>
<a href='https://prtimes.jp/main/html/searchrlp/company_id/109511' className='walletbtn' style={{background:'linear-gradient(93.19deg, #20AFFF 5.25%, #A8E0FF 96.59%)',width:'auto'}}><i style={{marginRight:'10px'}} class="fa-brands fa-medium"></i>Read More</a>
</Container>
</Container>

{/* className='sliderback' */}
<Container fluid className='blueshadeg'>
{/* <Container fluid  > </Container> */}
  <h2 style={{paddingBottom:'10px'}}>Partnership</h2>
  <Swiper
      ref={swiperRef}
      spaceBetween={0}
      slidesPerView={'5'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
      loopedSlides={100} // Set a large number of additional slides
       autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={2000} // Adjust the speed as desired
    >
      <SwiperSlide >
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
    </Swiper>
    <Swiper
      ref={swiperRef2}
      spaceBetween={0}
      slidesPerView={'5.5'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}   
      loopedSlides={100} // Set a large number of additional slides
      autoplay={{
       delay: 0,
       disableOnInteraction: false,
     }}
     speed={2000} // Adjust the speed as desired
    >
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
    </Swiper>
    <Container style={{marginBottom:'-100px',marginTop:'15%',border:'1px solid' , borderColor:'#249CFC',borderRadius:'71px',height:'76px',background: 'rgba(18, 7, 49, 0.47)',backdropFilter: 'blur(10px)'}}>
    <span className='footertext' style={{top:'25%',position:'relative'}}>© Copyright 2023 GuildQB. All rights reserved</span>
  </Container>
</Container>
</>
  );
};

export default Home;
