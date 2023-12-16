const contactController= (req,res,next) => {
res.render('contact',{'title': 'CONTACT'});
}
module.exports=contactController;