angular.module('app')
  .factory('apoiadores', apoiadoresFactoryImpl)

function apoiadoresFactoryImpl() {
  var FB_PIC = 'https://graph.facebook.com/:id/picture?type=large';
  var TW_PIC = 'https://pbs.twimg.com/profile_images/:id.jpg';

  return {
    getAll: function() {
      return [
        {
          id: 1,
          picture: TW_PIC.replace(':id', '657406409341030400/4YB5kvoX'),
          name: 'felipe azambuja',
          isActive: true
        }, {
          id: 2,
          picture: TW_PIC.replace(':id', '633018596239740929/y39acEhF'),
          name: 'RAMON SANCHES',
          isActive: true
        }, {
          id: 3,
          picture: FB_PIC.replace(':id', '961994403889342'),
          name: 'Gabriel Ribeiro',
          isActive: true
        }, {
          id: 4,
          picture: FB_PIC.replace(':id', '974416929295015'),
          name: 'Luís felipe souzA',
          isActive: true
        }, {
          id: 5,
          picture: FB_PIC.replace(':id', '10153879504729507'),
          name: 'LeAnDrO NuNeS',
          isActive: true
        }, {
          id: 6,
          picture: FB_PIC.replace(':id', '1301827323165832'),
          name: 'DOUGlas matOSO',
          isActive: true
        }, {
          id: 7,
          picture: 'https://goo.gl/RcqO3R',
          name: 'Victor Miguez',
          isActive: true
        }, {
          id: 8,
          picture: 'https://goo.gl/tWmWLz',
          name: 'Sobrinho Fulano',
          isActive: false
        }
      ];
    }
  };
}
