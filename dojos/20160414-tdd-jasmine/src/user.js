var User = {
    create: function (name) {
        var o = Object.create(this);
        o.name = name;
        return o;
    }
};

module.exports = User;
