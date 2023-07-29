import { Divider, Grid } from "antd";
import React from "react";
const Card = (props) => {
  const item = props.data;
  console.log("props is", props);
  return (
    <>
      <div className="card compact w-48 hover:scale-125 ease-out duration-150 shadow-xl">
        <figure>
          <img
            src="icons/icon-procedure-implant.png"
            alt="Shoes"
            className="h-24 p-2 -rotate-45"
          />
        </figure>
        <div className="card-body">
        {  console.log("props is", props)
}
          <h2 className="card-title flex justify-center text-center">{props.item}</h2>
        </div>
      </div>
     
    </>
  );
};
const items = [
  "Dental Implant",
  "Wisdom Tooth Removal",
  "Bone Grafting",
  "Facial Trauma",
  "Ridge Augmentation",
  "Socket Preservation",
  "Sinus Lift",
  "Oral Pathology",
  "Lorem Ipsum"
];
const Featured = () => {
  return (
    <>
    <div>
    <div className=" flex justify-center underline p-3 bg-slate-100 text-4xl text-clip">
      Featured Services
    </div>
    <div className="h-screen flex justify-center  bg-slate-100">
      <div className="   flex ">
        <div className="grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4 content-center">
        { items.map((item,i)=>{
          return (<><Card item={item}/></>)
        })}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Featured;
