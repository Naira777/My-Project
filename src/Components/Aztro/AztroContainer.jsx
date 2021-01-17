import React, { useState } from "react";
import Aztro from "./aztro";
import { connect, useSelector } from "react-redux";
import { getName } from "../../Redux/selector-aztro";
import GetAztro from "./GetAztro";

const AztroContainer = () => {
  const [editmode, setEditmode] = useState(false);

  return (
    <div>
      {!editmode && (
        <div>
          <GetAztro changeEditMode={()=>{setEditmode(true)}} />
        </div>
      )}

      {editmode && (
        <div>
          <Aztro />
        </div>
      )}
    </div>
  );
};

export default AztroContainer;
