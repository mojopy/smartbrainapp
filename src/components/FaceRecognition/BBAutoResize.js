import React from 'react'

function BBAutoResize({ BBSizes, BBIDs, active}) {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  void(dimensions);
  if (BBIDs.length !== 0 && BBSizes.length !== 0 && active) {
    // console.log("Bam!");
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height = Number(image.height);
  
    BBIDs.forEach((id, i) => {
        let resizeBB = document.getElementById(id);
        resizeBB.setAttribute("style",
                      "top: " + (BBSizes[i].top_row * height) + 
                      "px; right: " + (width - (BBSizes[i].right_col * width)) +
                      "px; left: " + (BBSizes[i].left_col * width) +
                      "px; bottom: " + (height - (BBSizes[i].bottom_row * height)) + "px;");
      });
  }

  return (<></>)
}

export default BBAutoResize;