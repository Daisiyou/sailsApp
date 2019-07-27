module.exports = {


  friendlyName: 'Index',
  description: 'Index something.',

  inputs: {
   
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/homepage'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs) {
    const obs = await Document.find();
    // All done.
    return ({list: obs}) ;
  }
};
