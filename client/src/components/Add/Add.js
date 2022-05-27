import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { add_activity } from "../../JS/actions/activityAction";
import "./add.css";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "16%",
    borderRadius: "27px",
  },
};
const Add = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categorie, setCategorie] = useState("");
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [duree, setDuree] = useState("");
  const [materiels, setMateriels] = useState("");
  const [intensite, setIntensite] = useState("");
  const [groupe_musculaires_sollicites, setGroupe_musculaires_sollicites] =
    useState("");
  const [tenue, setTenue] = useState("");
  const [recommandations, setRecommandations] = useState("");
  const [frequences, setFrequences] = useState("");
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addNew = (e) => {
    e.preventDefault();
    const newActivity = {
      categorie,
      nom,
      image,
      duree,
      materiels,
      intensite,
      groupe_musculaires_sollicites,
      tenue,
      recommandations,
      frequences,
    };
    dispatch(add_activity(newActivity));
    closeModal();
  };

  return (
    <div>
      <button className="addbtn" onClick={openModal}>
        ADD Activity
      </button>
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2 className="h2">ADD Activity</h2>
          <form className="form_add">
            <input
              type="text"
              placeholder="Write the category of the activity"
              className="addinput"
              onChange={(e) => setCategorie(e.target.value)}
              value={categorie}
            />{" "}
            <input
              type="text"
              placeholder="Put the name of the activity"
              className="addinput"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />{" "}
            <input
              type="text"
              placeholder="Put the image of the activity"
              className="addinput"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />{" "}
            <input
              type="text"
              placeholder="Put the duration of the activity"
              className="addinput"
              onChange={(e) => setDuree(e.target.value)}
              value={duree}
            />{" "}
            <input
              type="text"
              placeholder="Write the materials of the activity"
              className="addinput"
              onChange={(e) => setMateriels(e.target.value)}
              value={materiels}
            />
            <input
              type="text"
              placeholder="Write the intensity of the activity"
              className="addinput"
              onChange={(e) => setIntensite(e.target.value)}
              value={intensite}
            />
            <input
              type="text"
              placeholder="Write the Groupe_musculaires_sollicités of the activity"
              className="addinput"
              onChange={(e) => setGroupe_musculaires_sollicites(e.target.value)}
              value={groupe_musculaires_sollicites}
            />
            <input
              type="text"
              placeholder="Write the tenue of the activity"
              className="addinput"
              onChange={(e) => setTenue(e.target.value)}
              value={tenue}
            />
            <input
              type="text"
              placeholder="Write the recommandations of the activity"
              className="addinput"
              onChange={(e) => setRecommandations(e.target.value)}
              value={recommandations}
            />
            <input
              type="text"
              placeholder="Write the frequency of the activity"
              className="addinput"
              onChange={(e) => setFrequences(e.target.value)}
              value={frequences}
            />
          </form>
          <button className="addbutton" onClick={addNew}>
            ADD
          </button>
        </Modal>
      </>
    </div>
  );
};

export default Add;
