import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Hi = ({ img, profile, name, date, time }) =>  (
  <div class="fb-post">
    <div id="main-div">
    <div id="header"> 
    <span> <img width="100" src={profile} alt="profile" id="profile"></img> </span> 
    <span  > &nbsp;&nbsp; <b>{name}</b> <br /> &nbsp;&nbsp;{date} - {time}</span> <br />
    </div>
    <br />
    <img width="450px" src={img} alt="pic"></img>
    <br />
    <div className="btns"> 
    <span> <a href="#"> Like </a></span>
    <span><a href="#"> Comments </a></span>
    <span> <a href="#"> Share </a></span>

    </div>
  </div>
  <br />
  <br />
  

  </div>
);

ReactDOM.render(
<p>
<Hi name="Asim" date="1-Dec-2020" profile="https://th.bing.com/th/id/OIP.RGgr9AD6YV8bLYz8lgF4IQDMEy?pid=Api&s=1" time="10:00 am" img="https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg" />
<Hi name="Faraz" date="1-Dec-2020" profile="https://i.insider.com/5aafc24efe7c5223008b4aa5?width=1100&format=jpeg&auto=webp" time="10:00 am" img="https://i.insider.com/5aafc24efe7c5223008b4aa5?width=1100&format=jpeg&auto=webp" />
<Hi name="Usman" date="1-Dec-2020" profile="https://th.bing.com/th/id/OIP.RGgr9AD6YV8bLYz8lgF4IQDMEy?pid=Api&s=1" time="10:00 am" img="https://api.time.com/wp-content/uploads/2018/04/dtt4200_v519-1049.jpg" />
<Hi name="Albert" date="1-Dec-2020" profile="https://th.bing.com/th/id/OIP.Eow0Rb-7wo_Krx1lJgr5JwAAAA?pid=Api&w=150&h=150&rs=1" time="10:00 am" img="https://cdn.shopify.com/s/files/1/0045/5960/1782/files/NILTECH_WEBSITE_BLOG_spiderman_14.jpg?1935809494203301684" />
</p>
, document.querySelector('#root'));




// const Hi = ({ img, flag, name, date, time }) =>  (
//   <div>
//     <span>{(flag) ? "it is true" : "it is false"}</span> <br />
//     <b>{name}</b> <br />
//     <span> {date} - {time} </span>
//     <br />
//     <img width="300px" src={img}></img>

//     <br />
//     <br />
//     <br />
//   </div>
// );

// ReactDOM.render(
// <p>
//   <Hi name="Malik" flag={true} date="1-Dec-2020" time="10:30 am" img="https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg" />
//   <Hi name="Asim" date="1-Dec-2020" time="10:00 am" img="https://upload.wikimedia.org/wikipedia/commons/2/25/2018_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282018-11-02%29_01.jpg" />
// </p>
// , document.querySelector('#root'));
