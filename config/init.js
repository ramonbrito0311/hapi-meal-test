module.exports = function () {
  this.server.pack._settings.requirePath = __dirname + '/../node_modules';
  this.server.pack.require(
    this.settings.plugins,
    function (err) { if (err) { throw err; } }
  );
};