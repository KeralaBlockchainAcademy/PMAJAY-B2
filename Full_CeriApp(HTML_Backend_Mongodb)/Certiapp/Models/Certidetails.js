const { Schema ,model} =require('mongoose');
const demo = new Schema({
   CertID:
      { type: String,
      required: true
      },

   CandName:
      { type: String,
    required: true 
      },

   CourseName:
      { type: String,
      required: true 
      },

   Grade: 
      { type: String, 
      required: true 
      },

   Date: 
      { type: String,
       required: true 
      }


   // Add other fields as needed
}  );

demo.index({ CertID: 1 }, { unique: true });

const CertiDetails = model('certidetails', demo);
module.exports= CertiDetails;