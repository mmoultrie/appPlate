
function testDirective() {
    var directive = {};
    directive.scope = {
        person: '=person'
    };
    directive.template ='name: <b>{{person.name}}</b> - Id: <b>{{person.id}}</b>'

    return directive;

}

module.exports = testDirective;