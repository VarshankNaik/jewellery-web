import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>
            Explore our Cars
        </h1>
        <p className='explore-menu-text'>
Explore our cars and embark on a journey of innovation and sophistication. Each vehicle in our lineup is meticulously crafted to elevate your driving experience to new heights. From sleek sedans designed for urban adventures to rugged SUVs built to conquer any terrain, our cars blend cutting-edge technology with timeless elegance. Dive into a world of comfort and convenience with luxurious interiors that prioritize your comfort and intuitive features that keep you connected on the road. Whether you're seeking exhilarating performance or eco-friendly efficiency, our diverse range of vehicles offers something for every driver. Discover the perfect combination of style, performance, and reliability as you explore our exceptional lineup of cars.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu