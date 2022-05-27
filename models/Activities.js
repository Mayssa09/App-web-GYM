const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  categorie: { type: String },
  nom: { type: String },
  image: { type: String },
  duree: { type: String },
  materiels: { type: String },
  intensite: { type: String },
  groupe_musculaires_sollicites: { type: String },
  tenue: { type: String },
  recommandations: { type: String },
  frequences: { type: String },
});

module.exports = activity = mongoose.model("activities", activitySchema);
