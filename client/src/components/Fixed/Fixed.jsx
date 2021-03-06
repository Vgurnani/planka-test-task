import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "../../containers/HeaderContainer";
import ProjectContainer from "../../containers/ProjectContainer";
import BoardActionsContainer from "../../containers/BoardActionsContainer";
import styles from "./Fixed.module.scss";
import UsersListContainer from "../../containers/UsersListContainer";

// eslint-disable-next-line react/prop-types
const Fixed = ({ projectId, board, userPath }) => {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer />
      {projectId && <ProjectContainer />}
      {board && !board.isFetching && <BoardActionsContainer />}

      {userPath && <UsersListContainer />}
    </div>
  );
};

Fixed.propTypes = {
  projectId: PropTypes.string,
  board: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Fixed.defaultProps = {
  projectId: undefined,
  board: undefined,
};

export default Fixed;
