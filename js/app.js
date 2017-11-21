var AppViewModel=function(){
  this.investments=ko.observableArray([{
    firstHand:ko.observable(500),
    roundNum:ko.observable(0),
    Name:ko.observable("50AH"),
    currentVal:ko.observable(0),
  },{
    firstHand:ko.observable(300),
    roundNum:ko.observable(0),
    Name:ko.observable("红利基金"),
    currentVal:ko.observable(0),
  }]);
  this.curInvestment=ko.observable(this.investments()[0]);

  this.currentHand=ko.computed(function(){
    return this.curInvestment().roundNum()*this.curInvestment().firstHand()-this.curInvestment().currentVal()},
    this);
    //add new stock into the plan
  this.addInvestment=function(investment){
    this.invsetments.push({

    });

  };


}
//Acitivats knock out
ko.applyBindings(new AppViewModel());
