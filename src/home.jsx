import React from "react";

export default function Home() {
    return (
        <div >
            <h1 className=" text-3xl ml-[68px] sm:text-5xl md:text-7xl lg:text-9xl lg:ml-[342px] sm:ml-24 mt-28 mb-8">Welcome to vans life!</h1>
            <div className="sm:flex justify-center  content-center " >
                <img src="./th.jpeg " className="w-44 ml-24 rounded-3xl sm:ml-26 sm:mt-20 md:w-72"></img>
                <div className="ml-[10px] flex-col sm:ml-[60px] ">
                    <p className="ml-[50px] mt-[10px] sm:mt-[150px] sm:text-3xl ">
                        "Every life is a dream of superb and the journey is awesome"
                    </p>
                </div>
            </div>

        </div>
    )

}