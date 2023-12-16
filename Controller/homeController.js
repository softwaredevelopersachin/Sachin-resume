const homeController = (req,res,next) => {
    res.render('home' ,{'title': 'Home'})
}
module.exports =homeController