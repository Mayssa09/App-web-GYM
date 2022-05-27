import React from "react";
import "./acceuil.scss";

const Acceuil = () => {
  return (
    <div>
      {" "}
      <div className="body-a">
        <div className="container-acceuil">
          <div className="cardAc">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg"
              alt="Cardio"
            />
            <div className="card__head">Cardio Activity</div>
          </div>
          <div className="cardAc">
            <img
              src="https://img.freepik.com/photos-gratuite/jeunes-femmes-participant-cours-spinning_23-2149332067.jpg?w=2000"
              alt="Spining"
            />
            <div className="card__head">Spining Activity</div>
          </div>

          <div className="cardAc">
            <img
              src="https://img.freepik.com/photos-gratuite/gros-plan-entrainement-halteres-homme-soulevant-halteres-travaillant-dans-salle-sport-entrainement-halteres-souleve-terre-agrandi-homme-sportif-souleve-halteres-dans-salle-sport-entrainez-vous-au-gymnase-homme-athletique-six-pack-abs-parfait_293990-845.jpg"
              alt="Force"
            />
            <div className="card__head">Force Activity</div>
          </div>
          <div className="cardAc">
            <img
              src="https://resize1.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/forme/danse/body-jam/59107-4-fre-FR/body-jam.jpg"
              alt="Danse"
            />
            <div className="card__head">Danse for adultes</div>
          </div>
          <div className="cardAc">
            <img
              src="https://activeforlife.com/content/uploads/2016/06/danceteachesempathy.jpg"
              alt="Kids"
            />
            <div className="card__head">Danse for Kids </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
