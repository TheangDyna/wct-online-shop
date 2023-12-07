import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function BodySlide() {
  return (
    <div>
      <div className="carousel w-full h-[40rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/concept-shopping-holidays-lifestyle-happy-bearded-guy-holding-paper-bag-from-store-showin_1258-155091.jpg?w=996&t=st=1701926552~exp=1701927152~hmac=5232100ff7a4694e632fcad92d0aef437831ea270a607d37610c023da7e9ad7b"
            className="w-full object-cover"
          />

          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="animate-fade-in text-3xl text-white absolute top-64 left-32 "
          >
            <p>Women Collection 2023</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-white text-6xl font-medium absolute top-80 tracking-wide left-32"
          >
            <h1>NEW SEASON</h1>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-white absolute bottom-44 left-32"
          >
            <button className="btn rounded-3xl btn-active tracking-wide btn-primary">
              SHOP NOW
            </button>
          </motion.div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/concept-shopping-holidays-lifestyle-happy-bearded-guy-holding-paper-bag-from-store-showin_1258-155091.jpg?w=996&t=st=1701926552~exp=1701927152~hmac=5232100ff7a4694e632fcad92d0aef437831ea270a607d37610c023da7e9ad7b"
            className="w-full object-cover"
          />

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="animate-fade-in text-3xl text-white absolute top-64 left-32 "
          >
            <p>Women Collection 2023</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-white text-6xl font-medium absolute top-80 tracking-wide left-32"
          >
            <h1>NEW SEASON</h1>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-white absolute bottom-44 left-32"
          >
            <button className="btn rounded-3xl btn-active tracking-wide btn-primary">
              SHOP NOW
            </button>
          </motion.div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/concept-shopping-holidays-lifestyle-happy-bearded-guy-holding-paper-bag-from-store-showin_1258-155091.jpg?w=996&t=st=1701926552~exp=1701927152~hmac=5232100ff7a4694e632fcad92d0aef437831ea270a607d37610c023da7e9ad7b"
            className="w-full object-cover"
          />

          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="animate-fade-in text-3xl text-white absolute top-64 left-32 "
          >
            <p>Women Collection 2023</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-white text-6xl font-medium absolute top-80 tracking-wide left-32"
          >
            <h1>NEW SEASON</h1>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-white absolute bottom-44 left-32"
          >
            <button className="btn rounded-3xl btn-active tracking-wide btn-primary">
              SHOP NOW
            </button>
          </motion.div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodySlide;
