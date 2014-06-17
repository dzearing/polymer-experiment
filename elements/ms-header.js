Polymer('ms-header', {
  owner: 'David',
  ownerChangeCount: 0,
  color: '#094AB2',

  created: function() {
    this.items = [{
      name: "Create",
      icon: {
        url: 'icons_32_ltr.png',
        position: '-319px -259px'
      },
      children: [{}, {}]
    }, {
      name: "Upload",
      icon: {
        url: 'icons_32_ltr.png',
        position: '-318px -203px'
      }
    }];
  },
  ownerChanged: function() {
    this.ownerChangeCount++;
  }
});