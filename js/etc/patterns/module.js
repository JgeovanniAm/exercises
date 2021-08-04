var myModule = (function ( name ) {
  function privateMethod(){
    return `${name}`
  }
  return {
      publicMethod: function(){
        return privateMethod()
      }
  };
})( 'jimmy alvarez' );

console.log(myModule.publicMethod());

//--------------- Revealing Module Pattern ----------------//

var Module = (function () {

  var privateMethod = function () {
      // private method
  };

  var publicMethod = function () {
      // public method
  };

  var publicMethodTwo = function () {
      // public method two
  };

  return {
      exposedMethod: publicMethod,
      exposedMethodTwo: publicMethodTwo
  };

})();