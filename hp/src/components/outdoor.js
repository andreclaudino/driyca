import "bootstrap/dist/css/bootstrap.css"
import styles from "./outdoor.module.css"
import { Carousel } from "react-bootstrap"
import React from "react"
import backgroundsQuery from "../queries/outdoor"

const rooStyleNames = [styles.outdoor, "bg-dark"].join(" ")
const imageStyleNames = ["img-fluid"].join(" ")


const Outdoor = () => {
  const backgrounds =
    backgroundsQuery()
  
  return (
    <div className={rooStyleNames}>
      <Carousel>
        {backgrounds.map(edge => makeItem(edge.node.publicURL))}
      </Carousel>
    </div>
  )
}

function makeItem(source){
  return (
    <Carousel.Item
      className="text-center"
      key={source}>
      <img
        alt="Slide sample"
        src={source}
        className={imageStyleNames}
      />
    </Carousel.Item>
  )
}

export default Outdoor
