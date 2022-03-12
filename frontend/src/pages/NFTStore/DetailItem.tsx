import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCard from '../../components/Card/ItemCard';
import Background from '../../components/Card/Background';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const etherURL = '/essets/images/ethereum.png'

const Wrapper = styled.div`
`
const DetailPage = styled.div`
  width: 1500px ;
  margin: auto ;
`
const DetailItemCard = styled.div`
  background-color: #fffffe;
  border-radius:10px ;
  box-shadow:1px 3px 7px ;
  margin-left: 3vw ;
  width: 600px;
  height: 650px;
  img{
    width: 600px;
    height:600px ;
    border-radius:10px 10px 0 0 ;
  }
  .like{
    display:flex ;
    justify-content: end;
    margin-right:1vw ;
    font-size:1.5rem ;
  }
  .icon{
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
  }
`
const Top = styled.div`
  margin-top: 10vh ;
  display: flex ;
  justify-content:space-around ;
  `
const Center = styled.div`
  
`
const Description = styled.div`
  background-color: #fffffe;
  box-shadow:1px 3px 7px ;
  width: 500px;
  height: 550px;
  border-radius: 10px ;
  margin-right: 3vw ;
  margin-top:5vh ;

`
const Transaction = styled.div`
  background-color: #fffffe;
  box-shadow:1px 3px 7px ;
  width: 83.5%;
  margin: auto ;
  margin-top: 10vh ;
  border-radius: 10px ;
`
const Artist = styled.div`
  font-weight:1000 ;
    color:#EB6767;
    font-size: 2rem ;
    margin:1rem ;
`
const Title = styled.div`
  font-weight:1000 ;
    font-size: 3rem ;
    margin:1rem ;
`
const Owner = styled.div`
  font-weight:1000 ;
    display:flex ;
    font-size:1.5rem ;
    margin: 1rem;
    margin-bottom:2rem ;
    .owner_name{
      margin-left:1rem ;
      color:#EB6767;
    }
`
const Contents = styled.div`
  margin:1rem ;
    margin-top:2rem ;
    font-weight:1000; ;
    font-size:1.2rem ;
    margin-bottom:2rem ;
    .des_title{
      font-size:1.5rem ;
      margin-bottom:2rem ;
    }
    .red_text{
      color:#EB6767;
    }
`
const Buy = styled.div`
  font-size:2rem ;
    font-weight:1000 ;
    display:flex ;
    margin : 1rem;
    margin-top:2.5rem;
    justify-content:space-between ;
    .buy_button{
      border-radius:10px ;
      width:7rem ;
      height:3rem;
      background-color:#EB6767 ;
      color:white ;
      font-size:1.5rem ;
      font-weight:1000 ;
      img{
        height:1.5rem;
        margin-right:0.5rem ;
      }
      &:hover{
        &{
          transform: scale(1.05) ;
          background-color:#fb5252  ;
        }
      }
    }
`
const Content =styled.div`
  display: flex;
      justify-content: space-between ;
      
`
const Bottom = styled.div`
  
`
const ArtistMore = styled.div`
  h1{
    margin-top:2rem;
    margin-left:2rem;
  }
  background-color: #fbe9e1;
  box-shadow:1px 3px 7px ;
  width: 83.5%;
  height: 600px ;
  margin: auto ;
  margin-top: 10vh ;
  border-radius: 10px ;
  overflow-y:hidden;
  overflow-x:scroll;
  &::-webkit-scrollbar{width: 4px; height:12px;}
  &::-webkit-scrollbar-thumb{ background-color: #f68383; border-radius: 10px; } 
  &::-webkit-scrollbar-track{ background-color: #fbe9e1;}
  margin-bottom: 5vh ;
`
const Cards = styled.div`
  display: flex ;
`
const EachTransaction = styled.div`
  display: flex;
  justify-content: space-between ;
  div{
    flex:2;
    font-size:1.3rem;
  }
`
const Head = styled.div`
  display: flex;
  justify-content: space-between ;
  div{
    flex :2;
    font-weight:1000 ;
    font-size:1.5rem;
  }
`

interface IProps{
  item :{
    id:number,
    name:string,
    title:string,
    price:number,
    liked:number,
    url:string
  }[],
}

const DetailItem = () => {
  const [transactions,setTransactions] = useState([
    {event:'transfer', from:"59912",to:"24923", date:20220309},
    {event:'sale',price:1.04, from:"59912",to:"24923", date:20220305 },
    {event:'list',price:1.01, date:20220306 },
    {event:'minted', date:20220301 }
  ])
  const [items,setItems] = useState<IProps["item"]>([
    {id:1,name:"Hong Hosus",title:"#Hong1535",price:1.24,liked:35,url:'https://lh3.googleusercontent.com/MmtavcUNNiTpLFfDqqol8pwp1_TKSEv0AbkKSxmN2lffhgYtkxAdfAo72lZVSJ4hpRW87s9TCL-HYMEIpaJ8PdgWBQWVlPsMZkgM6A=w305'},
    {id:2,name:"Giks Home",title:"#ghe23434",price:1.35,liked:43,url:'https://lh3.googleusercontent.com/qGLA-qtTThUV063ueH3gLxZgm0pC1VKusEYh7BrOUi8hBMAbssWvv2Vt0oRTdsWO51CDCkvF5Lc93fC62iI_liTxKz1H2qYyQxnRfg=w352'},
    {id:3,name:"Giks Home",title:"#ghe254334",price:1.2,liked:24,url:'https://lh3.googleusercontent.com/3usYOjVkwnra66EAhX4yJB-xmYCfFoTsREGVvVLCYWhtVG4pifdZLBRCSgv6wbjbV4rwPamlBDgganvgFO3xeifJyZQtqxwTYpXiqtc=w300'},
    {id:4,name:"Hong Hosus",title:"#Hong1535",price:1.24,liked:35,url:'https://lh3.googleusercontent.com/Cxb_lnNlgplYCULm_ZGlY9pCrxQ67GO2hmStVJTSEN3O2hNeIZoWyK3CwaCj-vZBxeQqioC-P1qT7cK6wXWc-WjjfUyjR3zXNwKN=w300'},
    {id:5,name:"Giks Home",title:"#ghe23434",price:1.35,liked:43,url:'https://lh3.googleusercontent.com/qeCj7NRekCZ9BUjM8c9Pk02DxmPgX483qgEkVJeLXYIDOFVTXAfCg8TTztcMMQPgYFsNDUqndF5asWPCgJVpiM6P39VzpWa3TTKrvg=w300'},
    {id:6,name:"Giks Home",title:"#ghe254334",price:1.2,liked:24,url:'https://lh3.googleusercontent.com/jWonBwIV3RRzCv2xEu3pKA5buXUne_vnltLcLIfnluPuctdbTd-ScsBO94-njkA2L5VHVRA56CG5tbbxwacCvFdFWaZzuIJNUB1sVCA=w300'},
    {id:7,name:"Giks Home",title:"#g53434",price:1.37,liked:52,url:'https://lh3.googleusercontent.com/Op3TUf8vqznY1geantykLx86mlGf4yEaBfKT25utQlQu8keA9ywYdwYYzVSqGZG_3uSJKCNcUBAVK6qs520xhZ6lsP3dVDGsM9wnRA=w352'},
    {id:8,name:"Hong Hosus",title:"#Hong1535",price:1.24,liked:35,url:'https://lh3.googleusercontent.com/jc4P6pZhiNsBNxErAilpkx-d3RZDpNpJbYjs2k5nou29DJGe_r27tu2i0xy0KBOIgHaQhgVOqIF4-aLpjIqLV6eo-IsIUQ98VI_jDw=w300'},
  ])
  const [item,setItem] = useState(JSON.parse(localStorage.getItem("item")||""))
  const [change,setChange] = useState(false)
  useEffect(()=>{
    setItem(JSON.parse(localStorage.getItem("item")||""))
    setChange(false)
    window.scrollTo(0,0)
  },[change])
  return (
    <Wrapper>
      <Background imgsrc='https://cdn.notefolio.net/img/d7/5b/d75bf02e2a35f76dba6ed5eeccde793c45d74edd83df838e31290603ceb5c5c9_v1.jpg' />
      <DetailPage>
        <Top>
          <DetailItemCard>
            <img alt ="pic" src={item.url}/>
            <div className='like'>
              <div className='icon'>
                {/* <FavoriteIcon fontSize='large' color='error'/>  */}
                <FavoriteBorderIcon fontSize='large' color='error'/> 
              </div> 
              {item.liked}
            </div>
          </DetailItemCard>
          <Description>
            <Artist>
            {item.name}   
            {item.verfied&&        
              <img alt="verified" style={{"height":'1.5rem'}} src= "/essets/images/verified.png" />}
            </Artist>
            <Title>
            {item.title}
            </Title>
            <Owner>
              owner: <div className='owner_name'>{item.name}</div>
            </Owner>
            <hr/>
            <Contents>
              <div className='des_title'>
              작품설명
              </div>
              <Content>
                <span> Contract Adderess : </span> 
                <span className='red_text'>0x1234515re932</span>
              </Content>
              <Content>
                <span> Token ID: </span> 
                <span className='red_text'>8055</span>
              </Content>
              <Content>
                <span> Token Standard: </span> 
                <span className='red_text'>ERC-721</span>
              </Content>
            </Contents>
            <hr/>
            <Buy>
              <div className='price'>
                {item.price} 
                <img style={{"height":"2rem"}}  alt="이더" src= {etherURL}/>
              </div>
              <button className='buy_button'>
                <img  alt="cart"
                src='https://cdn-icons-png.flaticon.com/512/3737/3737151.png'/>
                구매   
              </button>
            </Buy>
          </Description>
        </Top>
        <Center>
          <Transaction>
              <Accordion defaultExpanded={true} >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1>거래내역</h1>
                </AccordionSummary>
                <AccordionDetails>
                  <Head>
                   
                    <div>event</div>
                    <div>price</div>
                    <div>from</div>
                    <div>to</div>
                    <div>date</div>
                  </Head>
                  {transactions.map((tran,i)=>{
                  return(
                    <div key={i}>
                    <hr/>
                    <EachTransaction >
                    <div>{tran.event}</div>
                    <div>
                      {tran.price}
                      {tran.price?<img style={{"height":'1rem'}} alt="ether" src={etherURL}/>:""}
                      
                    </div>
                    <div>{tran.from}</div>
                    <div>{tran.to}</div>
                    <div>{tran.date}</div>
                    {/* a year ago 로 바꾸기 */}
                    </EachTransaction>
                    </div>
                  )}
                  )}
                </AccordionDetails>
              </Accordion>
          </Transaction>
        </Center>
        <Bottom>
          <ArtistMore>
            <div style={{display:'flex'}}>
              <h1 style={{color:'#EB6767'}}>{item.name}</h1>
              <h1 style={{marginLeft:"1rem"}}>의 작품 보기</h1>
            </div>
            <Cards>
            {items.map(item=>{return(
              <div onClick={()=>setChange(true)}>
                <ItemCard key={item.url} item={item}  />
              </div>  
              )})}
            </Cards>
          </ArtistMore>
        </Bottom>
      </DetailPage>
      </Wrapper>
  )
}

export default DetailItem