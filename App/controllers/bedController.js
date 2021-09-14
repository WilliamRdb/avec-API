const { Bed } = require('../models')

const bedController = {
  getAllBed: (req,res) => {
    Bed.findAll({})
    .then(beds => {
      res.json ({
        success: true,
        beds
      })
    })
  },
  getBedByUserId: (req, res) => {
    const userId = req.params.id;
    Bed.findAll({
      include: ["user"],
      where: {
        user_bed: userId
      }
    })
    .then(user => {
      if(!user) {res.status(404).json({success: false, error: 'User not found'})}
      else {
        res.json({
          success: true, 
          user
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        error: error.message
      })
    });
  },

  getBedByFloor: (req, res) => {
    const floor = req.params.floor
    Bed.findAll({
      where: {
        floor: floor,
        availability : true
      }
    })
    .then(beds => {
      if(!beds) {res.status(404).json({success: false, error: 'Bed(s) not found'})}
      else {
        res.json({
          success: true,
          beds
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        error: error.message
      })
    });
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

  assignBed: (req,res) => {
    const {bedId, userId, occupancy_time} = req.body
    Bed.update({
      user_bed:userId,
      occupancy_time,
      availability: false
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
      res.status(500).json({
      success: false,
      error: error.message
      })
    }) 
  },

  unassignBed: (req, res) => {
    const { bedId } = req.body
    Bed.update({
      user_bed: null,
      occupancy_time: 0,
      availability: true
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
      res.status(500).json({
      success: false,
      error: error.message
      })
    }) 
  },
}

module.exports = bedController;