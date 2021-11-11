import { connect } from "react-redux";

import { pathSelector } from "../selectors";
import Static from "../components/Static";

const mapStateToProps = (state) => {
  const { cardId, boardId, projectId, userPath } = pathSelector(state);
  return {
    cardId,
    boardId,
    projectId,
    userPath,
  };
};

export default connect(mapStateToProps)(Static);
