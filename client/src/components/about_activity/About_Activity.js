import React from "react";
import "./about_activity.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const About_Activity = () => {
  const activities = useSelector((state) => state.activityReducer.activities);

  const params = useParams();

  let activity = activities.find((el) => el._id === params._id);

  return (
    <div>
      <div className="back_img">
        <div className="act">
          {" "}
          <img
            src={activity.image}
            alt="card__image"
            className="card__image"
            width="600"
          />
          <div className="propreties_activities">
            {" "}
            <p>
              <span>Catégorie : </span>
              {activity.categorie}
            </p>
            <p>
              <span>Nom : </span>
              {activity.nom}
            </p>
            <p>
              <img
                src="https://www.california-gym.com/wp-content/uploads/2019/09/time.png"
                alt="clock"
                className="img_icon"
              />
              <span>Durée du cours :</span>
              {activity.duree}
            </p>
            <p>
              <img
                src="https://www.california-gym.com/wp-content/uploads/2019/09/sport.png"
                alt="materiel"
                className="img_icon"
              />
              <span>Matériel utilisé :</span>
              {activity.materiels}
            </p>
            <p>
              <img
                src="https://www.california-gym.com/wp-content/uploads/2020/03/intesnsité3.png"
                alt="intensity"
                className="img_icon"
              />
              <span>Intensité :</span>
              {activity.intensite}
            </p>
            <p>
              <img
                src="https://www.california-gym.com/wp-content/uploads/2019/09/tenue.png"
                alt="tenue"
                className="img_icon"
              />
              <span>Tenue recommandée :</span>
              {activity.tenue}
            </p>
            <p>
              <img
                src="https://www.california-gym.com/wp-content/uploads/2019/09/muscle.png"
                alt="recommandation"
                className="img_icon"
              />
              <span>Groupe_musculaires_sollicités :</span>
              {activity.groupe_musculaires_sollicites}
            </p>
            <p>
              <img
                src="https://www.california-gym.com/wp-content/uploads/2019/09/recommendation.png"
                alt="recommandation"
                className="img_icon"
              />
              <span>Recommandations :</span>
              {activity.recommandations}
            </p>
            <p>
              <span>Fréquence :</span>
              {activity.frequences}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Activity;
