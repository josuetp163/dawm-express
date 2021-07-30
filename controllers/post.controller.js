

exports.get = (req,res) => {
    console.log(req.body)
    res.sendStatus(200)
}

function view (req, res) { 
    res.render('post_view', { titulo: 'Form View'});
  };

module.exports.view = view;