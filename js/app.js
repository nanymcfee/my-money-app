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

  //this.investments=ko.observableArray(JSON.parse(localStorage.investments));

  this.curInvestment=ko.observable(this.investments()[0]);

  this.currentHand=ko.computed(function(){
    return this.curInvestment().roundNum()*this.curInvestment().firstHand()-this.curInvestment().currentVal()},
    this);
    //add new stock into the plan
    this.itemToAdd=ko.observable({
      firstHand:ko.observable(0),
      roundNum:ko.observable(0),
      Name:ko.observable(""),
      currentVal:ko.observable(0),
    });
    this.itemName=ko.observable("");//t store the name
//add new inverment item
  this.addInvestment=function(){
    if(this.itemName().length>0){
      var name=this.itemName();
      this.itemToAdd().Name(name);
      this.investments.push(this.itemToAdd());
      //update the invetments

    }
    console.log(this.investments());
    this.itemName=ko.observable("");

  };


};
//Acitivats knock out
var myViewModel=new AppViewModel();

ko.applyBindings(myViewModel);
//store the itmes
var storeInvestments=function(){
  var ins=[];
  myViewModel.investments.foreach(function(item){
    var m= new {
      firstHand:item.firstHand(),
      roundNum:item.roundNum(),
      Name:item.Name(),
      currentVal:item.currentVal(),
    };
    ins.push(m);

  });
  localStorage.attendance=JSON.stringify(ins);
};
//read the items
var readInvestments=function(memory){
  for (var i=0;i<memory.length();i++){
    myViewModel.investments[i].firstHand(memory[i].firstHand);
    myViewModel.investments[i]
  }

}

$(function(){
  //console.log(localStorage.investments());

  if(localStorage.investments){
    myViewModel.investments(JSON.parse(localStorage.investments));
  }else{
    localStorage.investments=JSON.stringify(myViewModel.investments());
  }
  $("#addNew").on('click',function(){
    localStorage.investments=JSON.stringify(myViewModel.investments());
  });
}());
