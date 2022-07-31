const User=require('../models/user.model');

exports.getAllUsers = (req, res) => {
    User.find({}).exec((err, users) => {
        if (err || !users) {
            return res.status(400).json({
                error: err
            });
        }
        results = users.map(user=>{
            const { _id,firstName, lastName, email, phone,gender } = user
            return { firstName, lastName, email, phone,gender,id:_id }
        })
        res.status(200).json({ 
            message: 'Get all users Successfully',
            results
          });
    });
}
exports.updateUserById=(req, res) => {
    const {firstName, lastName, email, phone,gender } =req.body
    
    User.findByIdAndUpdate(req.params.id,{firstName, lastName, email, phone,gender},{new:true}).exec((err,user) => {
        if(err){
            console.log('Update error', err);
            return res.status(400).json({
              errors: err
            }); 
        }else{
            res.status(200).json({
                results:user,
                message: 'User updated Successfully'
              });
        }
    })
}
exports.getUserById=(req, res) => {
    
    User.findById(req.params.id).exec((err,user) => {
        if(err){
            console.log('Get error', err);
            return res.status(400).json({
              errors: err
            }); 
        }else{
            const { _id,firstName, lastName, email, phone,gender } = user
            res.status(200).json({
                results:{ _id,firstName, lastName, email, phone,gender },
                message: 'User retrieved Successfully'
              });
        }
    })
}
exports.deleteUserById=(req, res) => {
    User.findOneAndDelete({_id:req.params.id},(err,deletedUser)=>{
        if(err){
            console.log('Delete error', err);
            return res.status(400).json({
              errors: err
            }); 
        }else{
            res.status(200).json({
                results:null,
                message: 'User deleted Successfully'
              });
        }
    })
}
