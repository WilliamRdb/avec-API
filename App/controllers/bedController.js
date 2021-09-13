const { Bed } = require('../models')

const bedController = {
  getAllBed: (req,res) => {
    Bed.findAll({
      include: ['user']
    }).then(beds => {
      res.json ({
        success: true,
        beds
      })
    })
  },

  createBed: (req, res) => {
    const newBed = req.body;
    console.log('newBed:' ,newBed);
    Bed.create(newBed).then(bed => {
      res.json({
        success: true,
        bed
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        error: error.message
      });
    });
  },

  updateBed: (req,res) => {
    const {bedId, userId} = req.body
    Bed.update({
      user_bed:userId,
    }, {
      where:{
        id: bedId
      }
    }).then(()=> {
      return Bed.findByPk(bedId,{
        include: ['user']
      })
    })
    .then((bed)=> {
      if(!bed) {console.log('bed not found')}
      res.json({
        success:true,
        bed
      })
    })
    .catch(error => {
      res.satut(500).json({
      success: false,
      error: error.message
      })
    }) 
  }
}

module.exports = bedController;