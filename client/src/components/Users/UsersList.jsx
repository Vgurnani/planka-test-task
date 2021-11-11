import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Table, Container, Segment, Header } from "semantic-ui-react";
import UserAddPopupContainer from "../../containers/UserAddPopupContainer";
import Item from "./Item";

const UsersList = React.memo(({ items, onUpdate, onDelete }) => {
  const [t] = useTranslation();

  const handleUpdate = useCallback(
    (id, data) => {
      onUpdate(id, data);
    },
    [onUpdate]
  );

  const handleDelete = useCallback(
    (id) => {
      onDelete(id);
    },
    [onDelete]
  );

  return (
    <Container style={{ padding: "10px", margin: "5px" }}>
      {items.length === 0 ? (
        <Segment placeholder>
          <Header icon>No Users Found, Please Add New User.</Header>
          <Segment.Inline>
            <UserAddPopupContainer>
              <Button positive content={t("addUser")} />
            </UserAddPopupContainer>
          </Segment.Inline>
        </Segment>
      ) : (
        <>
          <Table
            basic="very"
            className="ui table celled"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "center",
              fontSize: "1.2em",
              paddingTop: "15px",
            }}
            padded="very"
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={4}>
                  {t("common.name")}
                </Table.HeaderCell>
                <Table.HeaderCell width={4}>
                  {t("common.username")}
                </Table.HeaderCell>
                <Table.HeaderCell width={4}>
                  {t("common.email")}
                </Table.HeaderCell>
                <Table.HeaderCell>{t("common.administrator")}</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  email={item.email}
                  isAdmin={item.isAdmin}
                  onUpdate={(data) => handleUpdate(item.id, data)}
                  onDelete={() => handleDelete(item.id)}
                />
              ))}
            </Table.Body>
          </Table>
          <div style={{ textAlign: "right" }}>
            <UserAddPopupContainer>
              <Button positive content={t("addUser")} />
            </UserAddPopupContainer>
          </div>
        </>
      )}
    </Container>
  );
});

UsersList.propTypes = {
  items: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UsersList;
