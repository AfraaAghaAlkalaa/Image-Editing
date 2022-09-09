import React from "react";
import ImageEditor from "./ImageEditor";
import { whiteTheme } from "./white-theme";

export default function App() {
  const props = {
    includeUI: {
      loadImage: {
        path:"data:image/png;base64,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",
        name: "SampleImage",
      },
      uiSize: {
        width: "100%",
        height: "700px",
      },
      menu: [
        "crop",
        "flip",
        "rotate",
        "draw",
      
     
      ],
      menuBarPosition: "bottom",
      theme: whiteTheme,
    },
    cssMaxWidth: 1200,
    cssMaxHeight: 800,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  };

  return (
    <div className="editor-container">
      <ImageEditor {...props} />
    </div>
  );
}
