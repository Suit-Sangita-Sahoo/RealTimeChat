import { useRef } from "react";

const Para = () => {
  const h1ref = useRef();

  const updateref = () => {
    if (h1ref.current) {
      
      if (h1ref.current.isDark === undefined) {
        h1ref.current.isDark = false;
      }

      if (h1ref.current.isDark) {
        h1ref.current.style.backgroundColor = "white";
        h1ref.current.style.color = "black";
      } else {
        h1ref.current.style.backgroundColor = "black";
        h1ref.current.style.color = "white";
      }

      // toggle for next click
      h1ref.current.isDark = !h1ref.current.isDark;
    }
  };

  return (
    <div
      ref={h1ref}
      style={{ width: "100%", height: "100vh", backgroundColor: "white", color: "black" }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas blanditiis molestiae quis facilis? 
        Aspernatur aperiam delectus porro inventore nam dicta. Totam ducimus nostrum voluptatem rem sequi vel 
        perferendis modi hic.
      </p>
      <button onClick={updateref}>Click</button>
    </div>
  );
};

export default Para;
