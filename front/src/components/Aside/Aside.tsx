import React, { useState } from "react";

//styles
import styled from "styled-components";
import {
  AsideContainner,
  Tools,
  BookMarks,
  AsidePerfil,
  AsidePerfilContainner,
} from "./styles/styledAssets";

//--components
import { Icon } from "../_ui/styles/StyledAssets";
import AsideList from "./components/AsideList";

//icons
import {
  FiSidebar,
  FiPlusCircle,
  FiSearch,
  FiCheckCircle,
  FiCalendar,
  FiStar,
  FiUser,
} from "react-icons/fi";
import { RiArrowDropRightFill, RiArrowDownSFill } from "react-icons/ri";

type Props = {};

const Aside = (props: Props) => {
  const [accoutName, setAccountName] = useState<string>("Pedro Arthur");
  const [hidden, setHidden] = useState<boolean>(true);
  const [hiddenFavorites, setHiddenFavorites] = useState<boolean>(true);

  const handleFavorites = () => {
    setHiddenFavorites(!hiddenFavorites);
  };

  return (
    <AsideContainner hidden={hidden}>
      <section className="headerAside" onClick={() => setHidden(!hidden)}>
        <Icon>
          <FiSidebar />
        </Icon>
      </section>

      <p className="addTask">
        <FiPlusCircle />
        <span>Add task</span>
      </p>

      <section className="toolIcons">
        <Tools hidden={hidden}>
          <Icon>
            <FiSearch />
          </Icon>
          <span>Search</span>
        </Tools>
        <Tools hidden={hidden}>
          <Icon>
            <FiCheckCircle />
          </Icon>
          <span>Today</span>
        </Tools>
        <Tools hidden={hidden}>
          <Icon>
            <FiCalendar />
          </Icon>
          <span>Calendar</span>
        </Tools>
      </section>

      <BookMarks hidden={hidden} onClick={handleFavorites}>
        <div className="containner">
          <p>
            <Icon>
              <FiStar />
            </Icon>
            <span>Favorites</span>
          </p>

          <div className="arrow">
            {hiddenFavorites ? (
              <RiArrowDropRightFill size={20} />
            ) : (
              <RiArrowDownSFill size={20} />
            )}
          </div>
        </div>

        {hiddenFavorites && (
          <div className="favorites">
            <AsideList />
          </div>
        )}
      </BookMarks>

      <BookMarks hidden={hidden}>
        <AsidePerfil hidden={hidden}>
          <Icon>
            <FiUser />
          </Icon>

          <span>Account</span>
        </AsidePerfil>

        <div className="arrow">
          <RiArrowDropRightFill size={20} />

          {/* <RiArrowDownSFill size={20} /> */}
        </div>
      </BookMarks>

      <AsidePerfilContainner hidden={hidden}>
        <AsidePerfil hidden={hidden}>
          <Icon>
            <FiUser />
          </Icon>

          <span>{accoutName}</span>
        </AsidePerfil>
      </AsidePerfilContainner>
    </AsideContainner>
  );
};

export default Aside;
