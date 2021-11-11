import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  usersExceptCurrentSelector,
  isCoreInitializingSelector,
} from "../selectors";
import { closeModal, deleteUser, updateUser } from "../actions/entry";
import UsersList from "../components/Users";

const mapStateToProps = (state) => {
  const users = usersExceptCurrentSelector(state);
  const isCoreInitializing = isCoreInitializingSelector(state);

  return {
    items: users,
    isInitializing: isCoreInitializing,
    isSocketDisconnected: state.socket.isDisconnected,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onUpdate: updateUser,
      onDelete: deleteUser,
      onClose: closeModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
