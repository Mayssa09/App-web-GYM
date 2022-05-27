import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editActivity } from "../../JS/actions/activityAction";
import "../Add/add.css";
import "./edit.css";
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
const Edit = ({ el }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categorie, setCategorie] = useState(el.categorie);
  const [nom, setNom] = useState(el.nom);
  const [image, setImage] = useState(el.image);
  const [duree, setDuree] = useState(el.duree);
  const [materiels, setMateriels] = useState(el.materiels);
  const [intensite, setIntensite] = useState(el.intensite);
  const [groupe_musculaires_sollicites, setGroupe_musculaires_sollicites] =
    useState(el.groupe_musculaires_sollicites);
  const [tenue, setTenue] = useState(el.tenue);
  const [recommandations, setRecommandations] = useState(el.recommandations);
  const [frequences, setFrequences] = useState(el.frequences);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const EditNow = () => {
    const EditedActivity = {
      categorie: categorie,
      nom: nom,
      image: image,
      duree: duree,
      materiels: materiels,
      intensite: intensite,
      groupe_musculaires_sollicites: groupe_musculaires_sollicites,
      tenue: tenue,
      recommandations: recommandations,
      frequences: frequences,
      id: el._id,
    };
    dispatch(editActivity(EditedActivity.id, EditedActivity));
    closeModal();
  };

  return (
    <div>
      <button className="editbtn" onClick={openModal}>
        Edit This Activity
      </button>
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2 className="h2">Edit Activity</h2>
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
          <button className="addbutton" onClick={EditNow}>
            Edit
          </button>
        </Modal>
      </>
    </div>
  );
};

export default Edit;
