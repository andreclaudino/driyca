import React from "react"
import Header from "../components/header"
import Outdoor from "../components/outdoor"
import Cards from "../components/cards"

let pages = [
  {
    "link": "/",
    "title": "Home"
  },
  {
    "link": "/for-users",
    "title": "For Users"
  },
  {
    "link": "/for-sellers",
    "title": "For Sellers"
  },
  {
    "link": "/for-investors",
    "title": "For Investors"
  }
]

let cardList = [
  {
    title: "Test Card",
    content: "Content of the Card",
    linkTitle: "Meet",
    destination: "/team/claudino",
    imagePath: "item"
  }
]

const IndexPage = () => (
  <div>
    <Header brandName="Driyca" brandHref="/" pages={pages}/>
    <Outdoor/>
    <Cards cardList={cardList}/>
  </div>
)

export default IndexPage
