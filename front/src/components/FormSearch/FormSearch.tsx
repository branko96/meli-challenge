import "./styles.scss"
import { FormControl, InputGroup } from "react-bootstrap";
import searchIcon from "../../assets/ic_Search.png";
import React, { useState } from "react";

interface FormSearchProps {
  onSubmit: (search: string) => void
}

const FormSearch = ({ onSubmit }: FormSearchProps) => {
  const [search, setSearch] = useState("")
  const handleKeyDown: (e: React.KeyboardEvent) => void = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmitIn()
    }
  }

  const onSubmitIn: () => void = () => {
    if (!search) {
      return
    }
    onSubmit(search)
  }

   return (
      <InputGroup>
        <FormControl
          type="text"
          className="input_search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nunca dejes de buscar"
        />
        <div className="search_icon_container" onClick={onSubmitIn}>
          <img
            alt=""
            src={searchIcon}
            className="d-inline-block align-top search_icon"/>
        </div>
      </InputGroup>
  );
};
export default FormSearch;
