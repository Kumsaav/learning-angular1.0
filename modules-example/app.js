var app = angular.module("myApp",["helloApp","ngTagsInput"]);

app.controller('MainCtrl', MainCtrl);

function MainCtrl(){
    this.tags =[
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];
}
