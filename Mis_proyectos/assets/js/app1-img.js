document.addEventListener("DOMContentLoaded", function ()
{
  const img = document.getElementById("imagen");
  img.addEventListener("click", function ()
  {
    if (img.style.border === "5px solid red")
      {
        img.style.border = "none";
      } else {
        img.style.border = "5px solid red";
      }
  });
});