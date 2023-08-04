const dataImpulse = () => {
  const score = document.getElementById("score").value;
  const distance = document.getElementById("distance").value;
  const circle = document.getElementById("circle").value;
  const opacity = document.getElementById("opacity").value;
  const radius = document.getElementById("radius").value;
  const tail=document.getElementById("tail").checked;
  return {
    score: score * 1,
    distance: distance * 1,
    circle: circle * 1,
    opacity: opacity / 10,
    radius: radius * 1,
    tail: tail
  };
};

document.getElementById("save").onclick = () => dataImpulse();
export default dataImpulse;
