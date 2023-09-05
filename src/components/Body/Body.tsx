// import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
// import Footer from './Footers/Footer';

export default function Body() {
  return (
    <div style={{ flexDirection: 'column',height:"450px" }}>
      {/* style={{ flexDirection: 'column' }} */}
      <div style={{display:'flex'}}>
      <div style={{width:'75%'}}>
        <Carousel></Carousel>
      </div>
      <div ><img src="https://pos.nvncdn.net/f2fe44-24897/bn/20210412_WzrRCXRoK2qXCNUYoNOqkTEm.gif" alt="" />
      <img src="https://pos.nvncdn.net/f2fe44-24897/bn/20210525_OlugCaOQtEgxlf5JmlozmP7i.gif" alt="" /></div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <div style={{
          display: 'grid', width: '1000px',
          gap: '10px', textAlign: 'center', padding: '0', margin: "auto",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
        }}>

          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </div>
      </div>

      <div style={{backgroundColor:'aqua'}}>BACK TO SCHOOL 2023</div>
      <div style={{ marginTop: '10px' }}>
        <div style={{
          display: 'grid', width: '1000px',
          gap: '10px', textAlign: 'center', padding: '0', margin: "auto",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
        }}>

          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </div>
      </div>
      <div style={{backgroundColor:'aqua'}}>BACK TO SCHOOL 2023</div>
    </div>
  );
}
