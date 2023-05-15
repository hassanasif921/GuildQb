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
              <Col xs={12} md={6}>
                <h1 >
                  Blockchain Gaming Guild QB [Quest & Battle]
                </h1>
                <h5>
                遊ぶ、戦う、出会う、ゲームの未来はここにある。
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
                GuildQBは、Web3ゲームに特化したソーシャルWeb3プラットフォーム、およびNFTゲームプレイヤーによるコミュニティです
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

export default Japanese;
