import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const FaqItem = () => {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <div className="my-5 flex flex-col p-4 border-t-2 border-b-2 border-gray">
      <div className="flex items-center justify-between">
        <p>How do i join God’s Power Outreach?</p>
        {!showFaq ? (
          <FaPlus cursor={"pointer"} onClick={()=> setShowFaq(true)} />
        ) : (
          <FiMinus cursor={"pointer"} onClick={()=> setShowFaq(false)} />
        )}
      </div>
      <div className={`bg-purple-100 rounded-lg p-2 mt-5 py-2 ${!showFaq && "hidden"}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt,
        adipisci doloribus et reiciendis itaque repudiandae? Necessitatibus at
        asperiores consequatur, illo eaque ducimus magni nulla hic, numquam
        culpa, aut eveniet!
      </div>
    </div>
  );
};

export default FaqItem;
