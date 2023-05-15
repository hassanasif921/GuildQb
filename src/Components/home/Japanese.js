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
import c7 from '../../Assets/General images/x1/block 4 - characters/photo-7.png'
import c8 from '../../Assets/General images/x1/block 4 - characters/photo-8.png'
import c9 from '../../Assets/General images/x1/block 4 - characters/photo-9.png'
import c10 from '../../Assets/General images/x1/block 4 - characters/photo-10.png'
import c11 from '../../Assets/General images/x1/block 4 - characters/photo-11.png'
import c22 from '../../Assets/General images/x1/block 4 - characters/photo-22.png'
import c33 from '../../Assets/General images/x1/block 4 - characters/photo-33.png'
import c44 from '../../Assets/General images/x1/block 4 - characters/photo-44.png'
import c55 from '../../Assets/General images/x1/block 4 - characters/photo-55.png'
import c66 from '../../Assets/General images/x1/block 4 - characters/photo-66.png'
import c77 from '../../Assets/General images/x1/block 4 - characters/photo-77.png'
import c88 from '../../Assets/General images/x1/block 4 - characters/photo-88.png'
import c99 from '../../Assets/General images/x1/block 4 - characters/photo-99.png'
import main from '../../Assets/General images/x1/block 4 - characters/main.png'
import mainmob from '../../Assets/General images/x1/block 4 - characters/mainmob.png'
import box from '../../Assets/backgrounds/backgrounds/boxphoto.png'
import mainhero from '../../Assets/backgrounds/herologo.png'
import Opensee from "../../Assets/backgrounds/opensea.png";
import Discord from "../../Assets/backgrounds/discord.png";
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

import play1 from '../../Assets/General images/x1/block 5 - image 1.png'
import play2 from '../../Assets/General images/x1/block 5 - image 2.png'
import play3 from '../../Assets/General images/x1/block 5 - image 3.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import images from "../../Assets/backgrounds/Capture.png"
import clearlogo from "../../Assets/backgrounds/clearlogo.png"

import $ from 'jquery';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PieChart } from 'react-minimal-pie-chart';
import 'swiper/css';

import Roadmap from "../roadmap/roadmap";
SwiperCore.use([Autoplay]);

const Japanese = () => {
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
            <Row style={{ height: "100%" ,textAlign:'left' }}>
              <Col xs={12} md={8}>
                <h1 className='margin'>
                  Blockchain Gaming<br />Guild QB [Quest & Battle]
                </h1>
                <h5 className='headingplay'>
                遊ぶ、戦う、出会う、ゲームの未来はここにある。
                </h5>
                {/* <Card.Img
                  className="imagemob"
                  style={{ width: "100%", borderRadius: "10px" ,marginTop:'20px' , marginBottom:'20px'}}
                  variant="top"
                  src={mainhero}
                /> */}
               
                <Row className="leftSocial">
                <Col xs={12} md={12}>
                  <Button href='https://opensea.io/collection/ru-yue-kisaragi'  className="opensea">
                    <img  src={Opensee} alt="..." className='openzep'/>
                  </Button>
                  <Button href='https://discord.com/invite/BNjFBTgpMt' className="mright1 opensea" >
                    <img  src={Discord} alt="..."  className='openzep1'/>
                  </Button>
                </Col>
                {/* <Col xs={12} md={6}>
                  
                </Col> */}
              </Row>
                {/* <Col xs={12} md={6}>
                
                </Col> */}
              
                <p className="para">
                GuildQBは、Web3ゲームに特化したソーシャルWeb3プラットフォーム、およびNFTゲー<br />ムプレイヤーによるコミュニティです
                </p>

                <div style={{ textAlign: "left" }} className="social-icons">
               
                <a className="ico hex4" href="https://twitter.com/GuildQB" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px',  borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)'}}>
                  <i class="fa-brands fa-twitter soc" ></i>
                  <div className="tooltip">Twitter</div>
                </a>
                <a className="ico hex4" href="https://www.youtube.com/channel/UCkfd5R9q8RyxUYE1abTfpUg" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-youtube soc" ></i>
                  <div className="tooltip">YouTube</div>
                </a>
                <a className="ico hex4" href="https://www.instagram.com/qb_guild/?__coig_restricted=1" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-instagram  soc"  ></i>
                  <div className="tooltip">INSTAGRAM</div>
                </a>
                <a className="ico hex4" href="https://www.facebook.com/GuildQb/" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-facebook  soc"  ></i>
                  <div className="tooltip">FACEBOOK</div>
                </a>
               
              </div>
              </Col>
              <Col xs={12} md={4}>
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
<h5 style={{marginBottom:'50px'}}>総合的なゲーミングエコシステム</h5>
  

  
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
      <p className='kis'>如月-KISARAGI-はNFTゲームに特化したソーシャルWeb3プラットフォーム、およびNFTゲームプレイヤーによるコミュニティであるGuildQBが発行するNFTです。</p>
      <Row style={{marginTop:'20px',marginBottom:'6px'}} className='left'>
            <Col xs={12} md={6}>
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
<Container>
<div className='line'></div>

  <Row className='lineleft'>
    
    <Col className='left' xs={12} md={3}>
  
    <div className='roadbox'>
      <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px'}}>Phase 1（初期構築段階 </h3>
      <p className='pra'>. GuildQBコミュニティがソーシャルクリエーションを開始</p>
      <p className='pra'>. ゲーミングギルドとの提携</p>
      <p className='pra'>. GameFi/P2Eとの提携</p>
      <p className='pra'>. アクシーオリジン - 世界初のギルド大会に協賛 </p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
      
      <div className='roadbox'>
      <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px'}}>Phase 2（発売開始時期)</h3>
      
      <p className='pra'>. NFTの公式発表</p>
      <p className='pra'>. ホワイトペーパーを公開</p>
      <p className='pra'>. 東京ゲームショウ2022に出展</p>
      <p className='pra'>. 日本初のAxieプロゲームチームを創設/世界1位を獲得</p>
      <p className='pra'>. オフィシャルサイト公開</p>
      
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
     
      <div className='roadbox'>
      <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px',textAlign:'center'}}>Phase 3（R&D開発フェーズ)</h3>
      
      <p className='pra'>. NFTユーティリティを実装</p>
      <p className='pra' style={{lineHeight:'15px'}}>. OHARAINFT </p>
      <p className='pra'>. ユーザーミッションページ公開 (QBクエスト)</p>
      <p className='pra'>. $QB / $GQB ローンチ</p>
      <p className='pra'>. IGO/INO QBローンチパッド</p>
      <p className='pra'>. SocialFiの製品開発</p>
      <p className='pra'>. ノードリワードシステム</p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
   
    <div className='roadbox'>
    <h3 className='hdbtn' style={{color:'#00D1FF' , fontSize:'15px' , fontWeight:'500', marginBottom:'20px'}}>Phese 4（アドバンスドビルドフェーズ）</h3>
      
      <p className='pra'>. FT/NFTを活用したQBオリジナルweb3ゲームのローンチ</p>
      <p className='pra'>. DAO/オンチェーンガバナンス </p>
      <p className='pra'>. ス マルチチェーン対応</p>
      <p className='pra'>. GuildQB NFTFi</p>
      <p className='pra' style={{lineHeight:'15px'}}>. GuildQB Ventures</p>
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
        <Card.Title className='cardt'>ユーザー数28万人超えを誇る世界トップゲームギルドGuildFiとGuildQBがコミュニティイベントを開催</Card.Title>
        <Card.Text className='cardp'>
        このたび、Social Finance Limitedが運営するGuildQBはGuildFiと協力してコミュニティイベントを開催します。12月18日の21：00 ...
        <a href='https://prtimes.jp/main/html/rd/p/000000002.000109511.html' className='cardr' variant="primary">Read More</a>
        </Card.Text>
       
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2022年12月15日 11時41分</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={two} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQBはPolygonとのコラボレーションを発表</Card.Title>
        <Card.Text className='cardp'>
        ​Social Finance Limitedの運営する次世代のGameFiプラットフォーム「GuildQB」は、Polygonとのコラボレーションを発表いたしま... <a  href='https://prtimes.jp/main/html/rd/p/000000007.000109511.html' className='cardr' variant="primary">Read More</a> </Card.Text>

        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年1月17日 11時00分</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={three} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQB CEOのPyrolysisがHANEDA EXPOで語る未来：新たな時代のweb3ギルド</Card.Title>
        <Card.Text className='cardp'>
        Social Finance Limitedが運営するGuildQBのCEO、Pyrolysis(パイロリシス)が2月11日(土)に「HANEDA WEB3.0 EXPO 2023~The bridge to ...  <a href='https://prtimes.jp/main/html/rd/p/000000017.000109511.html  ' className='cardr' variant="primary">Read More</a></Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年2月8日 16時50分</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={six} />
      <Card.Body>
        <Card.Title className='cardt'>元素騎士オンラインとカイカデジタルグループのオフラインイベントにGuildQBが協賛</Card.Title>
        <Card.Text className='cardp'>
        ​Social Finance Limitedの運営するGuildQBは2023年3月14日（火）に、新橋にあるクロスコープ新橋 セミナールームCにて開催される元素騎士オ...<a href='https://prtimes.jp/main/html/rd/p/000000022.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年3月13日 11時02分</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={four} />
      <Card.Body>
        <Card.Title className='cardt'>Nethergate: 新たなインキュベーションプログラムが開幕！</Card.Title>
        <Card.Text className='cardp'>
        Social Finance Limitedの運営するGuildQBはモノバンドル株式会社と共同でインキュベーションプログラム「Nethergate」を開催することを発 ...<a href='https://prtimes.jp/main/html/rd/p/000000023.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年3月25日 12時12分</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={five}/>
      <Card.Body>
        <Card.Title className='cardt'>GuildQBの発行するNFT『如月-KISARAGI-』37分で完売！</Card.Title>
        <Card.Text className='cardp'>
        Social Finance Limitedの運営するWeb3ゲーミングギルドのGuildQBは、このたび発行した独自の美麗グラフィックNFT「如月-KISARAGI-」がセ ... <a href='https://prtimes.jp/main/html/rd/p/000000020.000109511.html' className='cardr' variant="primary">Read More</a> </Card.Text>
        
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年2月24日 22時49分</p>
      </Card.Body>
    </Card>
  </Col>
</Row>
<a href='https://prtimes.jp/main/html/searchrlp/company_id/109511' className='walletbtn' style={{background:'linear-gradient(93.19deg, #20AFFF 5.25%, #A8E0FF 96.59%)',width:'auto'}}><i style={{marginRight:'10px'}} class="fa-brands fa-medium"></i>Read More</a>
</Container>
</Container>

{/* className='sliderback' */}
<Container fluid className='blueshadeg'>
  <h2 style={{paddingBottom:'10px'}}>Partnership</h2>
  <Swiper
      // ref={swiperRef}
      spaceBetween={-20}
      slidesPerView={'5'}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
    
         autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000} 
    >
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>  
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c7} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c8} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c9} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c10} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
    </Swiper>
    <Swiper
     spaceBetween={-20}
     slidesPerView={'5'}

     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)} 
   
        autoplay={{
         delay: 0,
         disableOnInteraction: false,
       }}
       speed={3000}   
    >
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>  
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
        </div>
      </div>
      </SwiperSlide>   <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c11} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c22} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c33} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c44} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c55} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c66} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c77} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c88} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c99} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 105 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3726 9.96498H0.599609V25.1016H12.3726V48.2271H24.1455V25.1016H35.9185V9.96498H24.1455V25.1016H12.3726V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M40.964 7.86267H76.2829V17.5333H52.737V23.4198H64.51V33.0904H52.737V48.2271H40.964V7.86267Z" fill="white" fill-opacity="0.15"/>
<path d="M80.0671 9.96498H91.84V38.5565H104.874V48.2271H80.0671V9.96498Z" fill="white" fill-opacity="0.15"/>
<path d="M12.3726 0.294373H0.599609V15.431H12.3726V38.5565H24.1455V15.431H35.9185V0.294373H24.1455V15.431H12.3726V0.294373Z" fill="white"/>
<path d="M40.964 0.294373H76.2829V7.8627H52.737V15.8515H64.51V23.4198H52.737V38.5565H40.964V0.294373Z" fill="white"/>
<path d="M80.0671 0.294373H91.84V30.9882H104.874V38.5565H80.0671V0.294373Z" fill="white"/>
<path d="M3.96484 52.8522H6.27739L7.11831 54.534L7.95924 52.8522H10.482L8.16947 56.6363V60H6.06716V56.6363L3.96484 52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M11.1127 52.8522H13.6355V60H11.1127V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.091 52.8522H61.9887V60H64.091V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M64.932 52.8522H66.4036L68.2957 55.3749V52.8522H70.398V60H68.9263L67.0343 57.4773V60H64.932V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M54.4204 52.8522H56.1022L56.5227 53.6931L57.7841 55.7954L59.0455 53.6931L59.4659 52.8522H61.1478V60H59.0455V57.6875L57.7841 59.5796L56.5227 57.6875V60H54.4204V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M14.8969 52.8522V60H19.1015V57.8977H16.9992V57.4773H19.1015V55.3749H16.9992V54.9545H19.1015V52.8522H14.8969Z" fill="white" fill-opacity="0.15"/>
<path d="M20.3629 52.8522H22.4652V57.8977H24.5675V60H20.3629V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M86.3756 52.8522H84.2732V60H88.4779V57.8977H86.3756V52.8522Z" fill="white" fill-opacity="0.15"/>
<path d="M35.92 52.8522H40.1246V54.9545H38.0223V55.3749H39.7042V57.4773H38.0223V60H35.92V52.8522Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 52.8522H27.721C29.6948 52.8522 31.2949 54.4523 31.2949 56.4261C31.2949 58.3999 29.6948 60 27.721 60H25.4084V52.8522ZM27.5108 57.8977V54.9545H27.721C28.5338 54.9545 29.1926 55.6133 29.1926 56.4261C29.1926 57.2389 28.5338 57.8977 27.721 57.8977H27.5108Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 52.8522H43.0679L40.5451 60H42.6474L43.0679 59.1591H44.7497L45.1702 60H47.2725L44.7497 52.8522ZM43.4883 57.8977L43.9088 56.6363L44.3293 57.8977H43.4883Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 52.8522H93.103L95.6257 60H93.5234L93.103 59.1591H91.4211L91.0006 60H88.8983L91.4211 52.8522ZM92.262 56.6363L91.8416 57.8977H92.6825L92.262 56.6363Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 52.8522H48.1134V60H50.2158V58.3482L51.2669 60H53.7897L52.4078 57.8286C53.1161 57.3347 53.5795 56.5141 53.5795 55.5852C53.5795 54.0758 52.3558 52.8522 50.8464 52.8522ZM50.8464 56.2159H50.2158V54.9545H50.8464C51.1948 54.9545 51.4771 55.2369 51.4771 55.5852C51.4771 55.9335 51.1948 56.2159 50.8464 56.2159Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 56.3352C100.327 56.4362 100.6 56.6448 100.793 56.9612C100.992 57.2708 101.092 57.6309 101.092 58.0414C101.092 58.6674 100.921 59.152 100.578 59.4952C100.241 59.8318 99.7551 60 99.1199 60H96.0462V52.8522H99.0371C99.6336 52.8522 100.103 53.0103 100.446 53.3267C100.788 53.643 100.959 54.1041 100.959 54.7098C100.959 55.1271 100.868 55.4805 100.686 55.7699C100.509 56.0526 100.272 56.241 99.9733 56.3352ZM97.8855 55.6386H98.598C98.7637 55.6386 98.8852 55.5982 98.9625 55.5175C99.0454 55.4367 99.0868 55.3122 99.0868 55.1439C99.0868 54.9689 99.0454 54.8411 98.9625 54.7603C98.8852 54.6728 98.7637 54.629 98.598 54.629H97.8855V55.6386ZM98.7223 58.203C98.8879 58.203 99.0095 58.166 99.0868 58.0919C99.1696 58.0112 99.2111 57.8833 99.2111 57.7083C99.2111 57.365 99.0481 57.1934 98.7223 57.1934H97.8855V58.203H98.7223Z" fill="white" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 53.6718C76.5142 53.1955 75.8033 52.9118 75.0576 52.8606C74.3119 52.8094 73.5689 52.9933 72.9332 53.3864C72.2975 53.7795 71.801 54.362 71.5136 55.052C71.2262 55.742 71.1624 56.5047 71.3311 57.2329C71.4999 57.961 71.8926 58.618 72.4542 59.1112C73.0158 59.6045 73.7179 59.9093 74.4617 59.9828C75.2055 60.0562 75.9537 59.8946 76.6009 59.5206C77.248 59.1467 77.6584 58.5788 77.9663 57.8977V55.7954H75.4435V57.0568H76.1871C76.0564 57.3414 75.8406 57.5786 75.5693 57.7353C75.2955 57.8935 74.979 57.9619 74.6643 57.9309C74.3496 57.8998 74.0525 57.7708 73.8149 57.5621C73.5774 57.3534 73.4112 57.0755 73.3398 56.7674C73.2684 56.4594 73.2954 56.1367 73.417 55.8447C73.5386 55.5528 73.7486 55.3064 74.0176 55.1401C74.2866 54.9737 74.6009 54.8959 74.9164 54.9176C75.2319 54.9393 75.5326 55.0593 75.7763 55.2608L77.0902 53.6718ZM76.2844 57.0568V57.0937L76.2072 57.0568H76.2844Z" fill="white" fill-opacity="0.15"/>
<path d="M3.96484 51.1703H6.27739L7.11831 52.8521L7.95924 51.1703H10.482L8.16947 54.9545V58.3182H6.06716V54.9545L3.96484 51.1703Z" fill="white"/>
<path d="M11.1127 51.1703H13.6355V58.3182H11.1127V51.1703Z" fill="white"/>
<path d="M64.091 51.1703H61.9887V58.3182H64.091V51.1703Z" fill="white"/>
<path d="M64.932 51.1703H66.4036L68.2957 53.6931V51.1703H70.398V58.3182H68.9263L67.0343 55.7954V58.3182H64.932V51.1703Z" fill="white"/>
<path d="M54.4204 51.1703H56.1022L56.5227 52.0112L57.7841 54.1135L59.0455 52.0112L59.4659 51.1703H61.1478V58.3182H59.0455V56.0056L57.7841 57.8977L56.5227 56.0056V58.3182H54.4204V51.1703Z" fill="white"/>
<path d="M14.8969 51.1703V58.3182H19.1015V56.2158H16.9992V55.7954H19.1015V53.6931H16.9992V53.2726H19.1015V51.1703H14.8969Z" fill="white"/>
<path d="M20.3629 51.1703H22.4652V56.2158H24.5675V58.3182H20.3629V51.1703Z" fill="white"/>
<path d="M86.3756 51.1703H84.2732V58.3182H88.4779V56.2158H86.3756V51.1703Z" fill="white"/>
<path d="M35.92 51.1703H40.1246V53.2726H38.0223V53.6931H39.7042V55.7954H38.0223V58.3182H35.92V51.1703Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4084 51.1703H27.721C29.6948 51.1703 31.2949 52.7704 31.2949 54.7442C31.2949 56.718 29.6948 58.3182 27.721 58.3182H25.4084V51.1703ZM27.5108 56.2158V53.2726H27.721C28.5338 53.2726 29.1926 53.9314 29.1926 54.7442C29.1926 55.557 28.5338 56.2158 27.721 56.2158H27.5108Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.7497 51.1703H43.0679L40.5451 58.3182H42.6474L43.0679 57.4772H44.7497L45.1702 58.3182H47.2725L44.7497 51.1703ZM43.4883 56.2158L43.9088 54.9545L44.3293 56.2158H43.4883Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.4211 51.1703H93.103L95.6257 58.3182H93.5234L93.103 57.4772H91.4211L91.0006 58.3182H88.8983L91.4211 51.1703ZM92.262 54.9545L91.8416 56.2158H92.6825L92.262 54.9545Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.8464 51.1703H48.1134V58.3182H50.2158V56.6663L51.2669 58.3182H53.7897L52.4078 56.1467C53.1161 55.6528 53.5795 54.8322 53.5795 53.9033C53.5795 52.3939 52.3558 51.1703 50.8464 51.1703ZM50.8464 54.534H50.2158V53.2726H50.8464C51.1948 53.2726 51.4771 53.555 51.4771 53.9033C51.4771 54.2516 51.1948 54.534 50.8464 54.534Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9733 54.6534C100.327 54.7543 100.6 54.963 100.793 55.2793C100.992 55.5889 101.092 55.949 101.092 56.3596C101.092 56.9855 100.921 57.4701 100.578 57.8134C100.241 58.1499 99.7551 58.3182 99.1199 58.3182H96.0462V51.1703H99.0371C99.6336 51.1703 100.103 51.3285 100.446 51.6448C100.788 51.9611 100.959 52.4222 100.959 53.0279C100.959 53.4452 100.868 53.7986 100.686 54.088C100.509 54.3707 100.272 54.5591 99.9733 54.6534ZM97.8855 53.9567H98.598C98.7637 53.9567 98.8852 53.9164 98.9625 53.8356C99.0454 53.7548 99.0868 53.6303 99.0868 53.462C99.0868 53.2871 99.0454 53.1592 98.9625 53.0784C98.8852 52.9909 98.7637 52.9472 98.598 52.9472H97.8855V53.9567ZM98.7223 56.5211C98.8879 56.5211 99.0095 56.4841 99.0868 56.41C99.1696 56.3293 99.2111 56.2014 99.2111 56.0264C99.2111 55.6831 99.0481 55.5115 98.7223 55.5115H97.8855V56.5211H98.7223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.0902 51.9899C76.5142 51.5136 75.8033 51.2299 75.0576 51.1787C74.3119 51.1275 73.5689 51.3114 72.9332 51.7045C72.2975 52.0976 71.801 52.6801 71.5136 53.3701C71.2262 54.0601 71.1624 54.8228 71.3311 55.551C71.4999 56.2791 71.8926 56.9361 72.4542 57.4294C73.0158 57.9226 73.7179 58.2274 74.4617 58.3009C75.2055 58.3743 75.9537 58.2127 76.6009 57.8387C77.248 57.4648 77.6584 56.8969 77.9663 56.2158V54.1135H75.4435V55.3749H76.1871C76.0564 55.6596 75.8406 55.8967 75.5693 56.0534C75.2955 56.2117 74.979 56.28 74.6643 56.249C74.3496 56.2179 74.0525 56.0889 73.8149 55.8802C73.5774 55.6716 73.4112 55.3936 73.3398 55.0855C73.2684 54.7775 73.2954 54.4548 73.417 54.1629C73.5386 53.8709 73.7486 53.6245 74.0176 53.4582C74.2866 53.2919 74.6009 53.2141 74.9164 53.2357C75.2319 53.2574 75.5326 53.3774 75.7763 53.5789L77.0902 51.9899ZM76.2844 55.3749V55.4118L76.2072 55.3749H76.2844Z" fill="white"/>
</svg>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className='slide'>
      <div class="hex4">
        <div class="card__content">
        <svg className='svg' viewBox="0 0 165 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.303192V19.4371C0 20.2347 0.636826 20.8812 1.42241 20.8812C2.208 20.8812 2.84483 20.2347 2.84483 19.4371V3.19133H9.95689C12.1172 3.19133 13.8685 4.9693 13.8685 7.16252C13.8685 9.35575 12.1172 11.1337 9.95689 11.1337H7.64547C6.76169 11.1337 6.04526 11.8611 6.04526 12.7583C6.04526 13.6555 6.76169 14.3829 7.64547 14.3829H10.1347C13.9644 14.3829 17.069 11.231 17.069 7.34303C17.069 3.45504 13.9644 0.303192 10.1347 0.303192H0Z" fill="url(#paint0_linear_680_4408)"/>
<path d="M28.6711 0.815886C29.0521 -0.0243611 30.2283 -0.0243632 30.6093 0.815882L31.2389 2.20446L39.3545 18.2652C39.713 18.9748 39.4371 19.8452 38.7381 20.2092C38.0392 20.5732 37.1819 20.2931 36.8233 19.5835L29.6402 5.36821L22.3836 19.7289C22.025 20.4386 21.1677 20.7187 20.4688 20.3547C19.7698 19.9907 19.4939 19.1203 19.8524 18.4107L28.0415 2.20446L28.6711 0.815886Z" fill="url(#paint1_linear_680_4408)"/>
<path d="M67.9199 1.74726C67.9199 0.949714 68.5567 0.303192 69.3423 0.303192C70.1279 0.303192 70.7647 0.949714 70.7647 1.74726V11.4947H80.7216V1.74726C80.7216 0.949714 81.3585 0.303192 82.1441 0.303192C82.9296 0.303192 83.5665 0.949714 83.5665 1.74726V19.4371C83.5665 20.2347 82.9296 20.8812 82.1441 20.8812C81.3585 20.8812 80.7216 20.2347 80.7216 19.4371V14.3829H70.7647V19.4371C70.7647 20.2347 70.1279 20.8812 69.3423 20.8812C68.5567 20.8812 67.9199 20.2347 67.9199 19.4371V1.74726Z" fill="url(#paint2_linear_680_4408)"/>
<path d="M41.6055 1.74726C41.6055 2.54481 42.2423 3.19133 43.0279 3.19133H49.7843V19.4371C49.7843 20.2347 50.4212 20.8812 51.2068 20.8812C51.9923 20.8812 52.6292 20.2347 52.6292 19.4371V3.19133H59.3856C60.1712 3.19133 60.8081 2.54481 60.8081 1.74726C60.8081 0.949714 60.1712 0.303192 59.3856 0.303192H43.0279C42.2423 0.303192 41.6055 0.949714 41.6055 1.74726Z" fill="url(#paint3_linear_680_4408)"/>
<path d="M104.013 0.303192C109.611 0.303192 114.148 4.90973 114.148 10.5922C114.148 16.2746 109.611 20.8812 104.013 20.8812H97.0791C95.7043 20.8812 94.5898 19.7497 94.5898 18.3541C94.5898 16.9584 95.7043 15.8269 97.0791 15.8269H104.013C106.861 15.8269 109.17 13.4833 109.17 10.5922C109.17 7.70112 106.861 5.35744 104.013 5.35744H99.5683V10.2312C99.5683 11.5272 98.5334 12.5778 97.2569 12.5778C95.9803 12.5778 94.9454 11.5272 94.9454 10.2312V0.303192H104.013Z" fill="url(#paint4_linear_680_4408)"/>
<path d="M129.737 0.0188714C130.701 -0.106506 131.677 0.399478 132.117 1.33933L139.747 17.6268C140.295 18.7972 139.805 20.1972 138.652 20.7538C137.5 21.3105 136.121 20.8129 135.572 19.6425L129.858 7.44472L124.136 19.6607C123.587 20.8311 122.208 21.3286 121.056 20.772C119.903 20.2154 119.413 18.8154 119.961 17.645L127.591 1.35748C127.995 0.493941 128.852 -0.00329556 129.737 0.0188714Z" fill="url(#paint5_linear_680_4408)"/>
<path d="M165 10.5922C165 16.2746 160.462 20.8812 154.865 20.8812C149.268 20.8812 144.73 16.2746 144.73 10.5922C144.73 4.90973 149.268 0.303192 154.865 0.303192C160.462 0.303192 165 4.90973 165 10.5922ZM149.718 10.5922C149.718 13.4784 152.022 15.8182 154.865 15.8182C157.708 15.8182 160.013 13.4784 160.013 10.5922C160.013 7.70597 157.708 5.36623 154.865 5.36623C152.022 5.36623 149.718 7.70597 149.718 10.5922Z" fill="url(#paint6_linear_680_4408)"/>
<defs>
<linearGradient id="paint0_linear_680_4408" x1="-9.28048e-08" y1="10.4695" x2="17.069" y2="10.4695" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0298FF"/>
</linearGradient>
<linearGradient id="paint1_linear_680_4408" x1="29.6035" y1="0.185699" x2="29.6035" y2="20.5142" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="0.567342" stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint2_linear_680_4408" x1="67.3865" y1="13.1771" x2="84.4555" y2="13.1771" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0C9AFF"/>
</linearGradient>
<linearGradient id="paint3_linear_680_4408" x1="42.3167" y1="1.98559" x2="60.8081" y2="1.98559" gradientUnits="userSpaceOnUse">
<stop stop-color="#0098FF"/>
<stop offset="1" stop-color="#0098FF"/>
</linearGradient>
<linearGradient id="paint4_linear_680_4408" x1="111.481" y1="2.1661" x2="94.3239" y2="19.7774" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D7FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint5_linear_680_4408" x1="136.729" y1="3.61018" x2="121.547" y2="19.9885" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D6FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
<linearGradient id="paint6_linear_680_4408" x1="160.199" y1="2.1661" x2="147.862" y2="19.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#01D2FF"/>
<stop offset="1" stop-color="#0042FF"/>
</linearGradient>
</defs>
</svg>
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

export default Japanese;
