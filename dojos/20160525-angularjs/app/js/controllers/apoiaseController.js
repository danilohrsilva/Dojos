angular.module('app')
  .controller('apoiaseController', apoiaseControllerImpl);

function apoiaseControllerImpl(apoiadores) {
  var vm = this;
  vm.apoiadores = apoiadores.getAll();
  console.log(vm.apoiadores);
}
