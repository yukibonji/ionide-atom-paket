var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('atom').$;

function wrappedFunScript() { 
var String__StartsWith$, Paket__deactivate$, Paket__activate$, Paket___ctor$, PaketService__location, PaketService__handle$, PaketService__get_location$, PaketService__get_bootstrapperLocation$, PaketService__exec$, PaketService__bootstrapperLocation, PaketService__UpdatePaket$, PaketService__Update$, PaketService__Outdated$, PaketService__Install$, PaketService__Init$, Options___ctor$, Atom__addCommand$Unit_Unit_;
Atom__addCommand$Unit_Unit_ = (function(name,cmdName,func)
{
    var cmd = {}; cmd[cmdName]=function() { return func(); }; return atom.commands.add(name, cmd);;
});
Options___ctor$ = (function(cwd)
{
    var __this = this;
    __this.cwd = cwd;
});
PaketService__Init$ = (function(unitVar0)
{
    return PaketService__exec$(PaketService__location, "init");
});
PaketService__Install$ = (function(unitVar0)
{
    return PaketService__exec$(PaketService__location, "install");
});
PaketService__Outdated$ = (function(unitVar0)
{
    return PaketService__exec$(PaketService__location, "outdated");
});
PaketService__Update$ = (function(unitVar0)
{
    return PaketService__exec$(PaketService__location, "update");
});
PaketService__UpdatePaket$ = (function(unitVar0)
{
    return PaketService__exec$(PaketService__bootstrapperLocation, "");
});
PaketService__exec$ = (function(location,cmd)
{
    var cmd_ = ((location + " ") + cmd);
    var options = (new Options___ctor$((((window.atom).project).getPath())));
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      var ignored0 = (child_process.exec(cmd_, options, (function(delegateArg,_delegateArg,__delegateArg)
      {
        return PaketService__handle$(delegateArg, _delegateArg, __delegateArg);
      })));
    }
    else
    {
      var _ignored0 = (child_process.exec(("mono" + cmd_), options, (function(delegateArg,_delegateArg,__delegateArg)
      {
        return PaketService__handle$(delegateArg, _delegateArg, __delegateArg);
      })));
    };
});
PaketService__get_bootstrapperLocation$ = (function()
{
    return ((((window.atom).packages).packageDirPaths)[0] + "/paket/bin/paket.bootstrapper.exe");
});
PaketService__get_location$ = (function()
{
    return ((((window.atom).packages).packageDirPaths)[0] + "/paket/bin/paket.exe");
});
PaketService__handle$ = (function(error,stdout,stderr)
{
    ((window.atom).emit("FSharp:Output", (stdout.toString())));
    return ((window.console).log((stdout.toString())));
});
Paket___ctor$ = (function(unitVar0)
{
    {};
});
Paket__activate$ = (function(x,state)
{
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update Paket", (function(arg00_)
    {
      return PaketService__UpdatePaket$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Init", (function(arg00_)
    {
      return PaketService__Init$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Install", (function(arg00_)
    {
      return PaketService__Install$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update", (function(arg00_)
    {
      return PaketService__Update$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Outdated", (function(arg00_)
    {
      return PaketService__Outdated$();
    }));
});
Paket__deactivate$ = (function(x,unitVar1)
{
    ;
});
String__StartsWith$ = (function(s,search)
{
    return (s.indexOf(search) == 0);
});
PaketService__bootstrapperLocation = PaketService__get_bootstrapperLocation$();
PaketService__location = PaketService__get_location$();
return [(function(ign)
{
    return (new Paket___ctor$());
}), (function(_this)
{
    return (function(p0)
    {
      return Paket__activate$(_this, p0);
    });
}), (function(_this)
{
    return Paket__deactivate$(_this);
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = AtomFSharpPaket = {
activate: function(p1) {
  return _funcs[1](_self)(p1); },
deactivate: function() {
  return _funcs[2](_self); }
};