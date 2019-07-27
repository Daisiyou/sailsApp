/**
 * DocumentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res) {
        const title = req.body.title;
        const content = req.body.content;
        await Document.create({title,content});
        res.redirect('/');
    },

    delete: async function(req, res) {
        const id = req.params.id;
        console.log(id);
        console.log(id);
        await Document.destroy({id});
        res.ok();
    }
};

