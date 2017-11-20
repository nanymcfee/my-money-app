function AppViewModel(){
  this.investment={
    firstHand: ko.observable(0),
    roundNum: ko.observalble(0),
    name: ko.observalble("50AH"),
    currenValue:ko.observalble(0),
    currentHand: ko.observable(0)
  };
  this.investments=ko.observableArray();
  this.invsetments.push(this.investment());
}
//Acitivats knock out
ko.applyBindings(new AppViewModel());
