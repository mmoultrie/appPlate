homeController.$inject = [];

function homeController() {
    var vm = this;
    vm.people = [
        {
            name: 'sam',
            id: 1
        },
        {
            name: 'mike',
            id: 2
        }
    ]

}

module.exports = homeController;