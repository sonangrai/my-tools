"use client";
import MyDropZone from "./dropzone";
import Hero from "./hero";

function ImageCompressorMain() {
  return (
    <div className="container mx-auto">
      <Hero />
      <div className="flex flex-col">
        <div>
          <MyDropZone />
        </div>
      </div>
    </div>
  );
}

export default ImageCompressorMain;
