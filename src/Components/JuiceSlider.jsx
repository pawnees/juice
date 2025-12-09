import { useState } from "react";
import CheekyLimeCard from "./CheekyCard";
import Drawer from "../Components/Drawer";
import About from "../pages/About";


const juices = [
  {
    id: 1,
    numColor: "text-green-600",
    title: "Cheeky Lime",
    desc: "Discover a world of vibrant flavors with our premium juice selection.",
    img: "/images/cheeky.png",
    imgCircle: "/images/cheeky-circle.png",
    bgColor : "#CFF8D4D4",
  },
  {
    id: 2,
    numColor: "text-orange-500",
    title: "Orange Crush",
    desc: "Discover a world of vibrant flavors with our premium juice selection.",
    img: "/images/orange.png",
    imgCircle: "/images/orange-circle.png",
    bgColor : "#DEBE6E4A",
  },
  {
    id: 3,
    numColor: "text-red-600",
    title: "Strawberry Yum",
    desc: "Discover a world of vibrant flavors with our premium juice selection.",
    img: "/images/strawberry.png",
    imgCircle: "/images/strawberry-circle.png",
    bgColor: "#DC8D764A",
  },
  {
    id: 4,
    numColor: "text-purple-600",
    title: "Blackberry Blast",
    desc: "Discover a world of vibrant flavors with our premium juice selection.",
    img: "/images/blackberry.png",
    imgCircle: "/images/blackberry-circle.png",
    bgColor: "#947FBE4D",
  }
];

export default function JuiceShowcase() {
  const [selected, setSelected] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [open, setOpen] = useState(true);
  

  const handleClick = () => {
    setAnimate(true);
    
    // Remove animation class after animation ends (0.6s)
    setTimeout(() => setAnimate(false), 600);

    setOpen(false)
    
  };

  const quickView = (item) => () => {
    setSelected(item.id === selected ? null : item.id);
  };

  const showFlavours = () => {
    setOpen(true);
  }


  return (
    <div>
        
        {/* About Section - Flavour Components it will be dynamic later*/}
        <About showFlavours={showFlavours}/>

        {/* Home Flavours */}
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <div className={`min-h-screen bg-gray-50 `}>
            <div className="flex flex-row gap-4">
              {
              juices.map((item) => (
                  <div key={item.id} className="w-1/4 cursor-pointer" onClick={() => setSelected(item.id)} >
                      <CheekyLimeCard item={item} quickView={(item) => quickView(item)}  selected={selected === item.id} canclick={handleClick} animate={animate} />
                  </div>
              ))}

              </div>
          </div>
          
        </Drawer>
    </div>
    
  );
}