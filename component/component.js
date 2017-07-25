/******/!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n(1);var i=n(4),s=o(i),r=n(5),l=o(r),c=n(6),a=o(c),u=n(7),d=o(u);angular.module("angularjsDropdownTree",["dropdownTreeOptionRowModule"]).service("dropdownTreeService",s["default"]).directive("dtDropdownToggle",l["default"]).directive("dtDropdownMenu",a["default"]).component("dropdownTree",(0,d["default"])())},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(2),s=o(i);angular.module("dropdownTreeOptionRowModule",[]).component("dropdownTreeOptionRow",(0,s["default"])())},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(){var e={controller:r["default"],templateUrl:"app/component/option-row/option-row.template.html",bindings:{option:"<",settings:"<",selectedOptions:"<",optionClicked:"&",focusNext:"&",focusPrevious:"&",catchKeydown:"&",resetFocusCounter:"&",searchText:"@",customCompare:"<"}};return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var s=n(3),r=o(s)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,o){"ngInject";n(this,e),this.dropdownTreeService=t,this.$element=o,this.isFolder()&&(this.isOpen=this.dropdownTreeService.shouldFolderBeOpen(this.option,this.settings,this.selectedOptions))}return e.$inject=["dropdownTreeService","$element"],o(e,[{key:"getDisplayText",value:function(){return this.dropdownTreeService.getDisplayText(this.option,this.settings)}},{key:"isFolder",value:function(){return this.dropdownTreeService.isFolder(this.option,this.settings)}},{key:"getChildOptions",value:function(){return this.dropdownTreeService.getChildOptions(this.option,this.settings)}},{key:"innerClicked",value:function(e){this.selectedOptions.indexOf(e)<0&&this.settings.openFolderWhenInnerSelected&&(this.isOpen=!0),this.optionClicked({option:e})}},{key:"isSelected",value:function(){return this.selectedOptions.indexOf(this.option)>=0}},{key:"toggleFolder",value:function(){this.isOpen=!this.isOpen,this.$element[0].querySelectorAll(".focusable")[0].focus()}},{key:"shouldBeVisible",value:function(){return this.dropdownTreeService.isVisible(this.option,this.settings,this.searchText)}},{key:"keyDown",value:function(e){switch(e.key){case"Enter":(!this.isFolder()||this.settings.folderSelectable)&&(this.innerClicked(this.option),e.preventDefault());break;case"ArrowDown":this.focusNext(),e.preventDefault();break;case"ArrowUp":this.focusPrevious(),e.preventDefault();break;case"ArrowRight":this.isFolder()&&(this.isOpen=!0,e.preventDefault());break;case"ArrowLeft":this.isFolder()&&(this.isOpen=!1,e.preventDefault());break;default:this.catchKeydown({event:e})}}}]),e}();t["default"]=i},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){n(this,e)}return o(e,[{key:"getDisplayText",value:function(e,t){return e[t.displayProperty]}},{key:"isFolder",value:function(e,t){return Object.prototype.hasOwnProperty.call(e,t.childrenProperty)&&angular.isArray(e[t.childrenProperty])}},{key:"shouldFolderBeOpen",value:function(e,t,n){return t.foldersOpen?t.foldersOpen:t.openFolderWhenInnerSelected?this.hasInnerSelection(e,t,n):!1}},{key:"getChildOptions",value:function(e,t){return e[t.childrenProperty]}},{key:"isVisible",value:function(e,t,n){var o=this;return e[t.childrenProperty]&&!this.isVisibleItem(e,t,n)?e[t.childrenProperty].some(function(e){return o.isVisible(e,t,n)}):this.isVisibleItem(e,t,n)}},{key:"isVisibleItem",value:function(e,t,n){return n.length>0?e[t.displayProperty].toLowerCase().indexOf(n.trim().toLowerCase())>=0:!0}},{key:"hasInnerSelection",value:function(e,t,n){var o=this;return this.isFolder(e,t)?this.getChildOptions(e,t).some(function(e){return n.indexOf(e)>=0?!0:o.hasInnerSelection(e,t,n)}):!1}},{key:"getSelection",value:function(e,t,n){var o=this,i=[];return e.forEach(function(e){i=i.concat(o.getAllChildVisible(e,t,n))}),i}},{key:"getAllChildVisible",value:function(e,t,n){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return this.isVisible(e,t,n)&&(this.isFolder(e,t)?(t.folderSelectable&&this.isVisibleItem(e,t,n)&&i.push(e),this.getChildOptions(e,t).forEach(function(e){o.getAllChildVisible(e,t,n,i)})):i.push(e)),i}},{key:"areSameSelections",value:function(e,t){return e.length!==t.length?!1:!e.some(function(e){return t.indexOf(e)<0})}}]),e}();t["default"]=i},function(e,t){"use strict";function n(){var e={templateUrl:"app/component/dropdown-toggle/dropdown-toggle.template.html",require:"^dropdownTree",controllerAs:"$ctrl"};return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(){var e={templateUrl:"app/component/dropdown-menu/dropdown-menu.template.html",controllerAs:"$ctrl",replace:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(){var e={controller:r["default"],templateUrl:"app/component/dropdownTree.template.html",bindings:{options:"<",externalTexts:"<?texts",externalSelection:"<?selection",externalSettings:"<?settings",selectionChanged:"&"}};return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var s=n(8),r=o(s)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,o,i,s,r,l,c){"ngInject";function a(e,t){return u.settings.sortByDisplayProperty?e.value<t.value?-1:e.value>t.value?1:0:0}n(this,e),this.$log=t,this.$document=o,this.$element=i,this.$rootScope=s,this.$compile=r,this.$scope=l,this.dropdownTreeService=c,this.open=!1,this.searchText="",this.selectedOptions=[],this.defaultTexts={optionNames:"items"},this.texts=angular.extend({},this.defaultTexts),this.defaultSettings={selectionLimit:0,removeFromFront:!0,displayProperty:"name",childrenProperty:"children",disableSearch:!1,closeOnBlur:!0,folderSelectable:!0,selectedClass:["glyphicon","glyphicon-ok"],folderClass:["glyphicon","glyphicon-folder-open"],folderClosedClass:["glyphicon","glyphicon-folder-close"],childClass:["glyphicon","glyphicon-file"],dropdownToggleIconClass:["caret"],appendToElement:this.$element.children(),foldersOpen:!0,openFolderWhenInnerSelected:!1,closeOnSelectionLimitReached:!1,sortByDisplayProperty:!1},this.settings=angular.extend({},this.defaultSettings);var u=this;u.customCompare=a}return e.$inject=["$log","$document","$element","$rootScope","$compile","$scope","dropdownTreeService"],o(e,[{key:"$onChanges",value:function(e){angular.isDefined(e.externalTexts)&&(this.texts=angular.extend({},this.defaultTexts,this.externalTexts)),angular.isDefined(e.externalSelection)&&(angular.isArray(this.externalSelection)?this.selectedOptions=angular.extend([],this.externalSelection):this.$log.error("selection should be an array")),angular.isDefined(e.externalSettings)&&(this.settings=angular.extend({},this.defaultSettings,this.externalSettings))}},{key:"$doCheck",value:function(){angular.isDefined(this.externalSelection)&&!this.dropdownTreeService.areSameSelections(this.externalSelection,this.selectedOptions)&&(this.selectedOptions=angular.extend([],this.externalSelection))}},{key:"toggleDropdown",value:function(){var e=this;this.open=!this.open,this.open?this.$compile("<dt-dropdown-menu></dt-dropdown-menu>".trim())(this.$scope,function(t){e.appendelement=t,e.settings.appendToElement.append(e.appendelement)}):this.appendelement.remove(),this.open&&this.settings.closeOnBlur?(this.closeToggleOnBlurBinded=this.toggleOnBlur.bind(this),this.$document.on("click",this.closeToggleOnBlurBinded)):this.$document.off("click",this.closeToggleOnBlurBinded)}},{key:"toggleOnBlur",value:function(e){var t=this;if(e.target&&e.target.parentElement){for(var n=e.target.parentElement,o=!1;angular.isDefined(n)&&null!==n&&!o;)n.className.split&&n.className.split(" ").indexOf("dropdown-tree-parent")>=0&&!o&&n===this.$element.children()[0]&&(o=!0),n=n.parentElement;o||this.$rootScope.$apply(function(){t.toggleDropdown()})}}},{key:"optionClicked",value:function(e){var t=this.selectedOptions.indexOf(e);t>=0?this.selectedOptions.splice(t,1):(this.settings.selectionLimit>0&&this.settings.selectionLimit===this.selectedOptions.length&&(this.settings.removeFromFront?this.selectedOptions.splice(0,1):this.selectedOptions.splice(this.selectedOptions.length-1,1)),this.selectedOptions.push(e)),this.emitSelection()}},{key:"selectAllVisible",value:function(){var e=this.dropdownTreeService.getSelection(this.options,this.settings,this.searchText);this.settings.selectionLimit>0&&e.length<=this.settings.selectionLimit&&(this.dropdownTreeService.areSameSelections(e,this.selectedOptions)?this.selectedOptions.splice(0,this.selectedOptions.length):this.selectedOptions=e,this.emitSelection())}},{key:"emitSelection",value:function(){var e=this;angular.isArray(this.externalSelection)&&(this.externalSelection.splice(0,this.externalSelection.length),this.selectedOptions.forEach(function(t){e.externalSelection.push(t)})),this.selectionChanged({selection:this.selectedOptions}),this.settings.closeOnSelectionLimitReached&&0!==this.settings.selectionLimit&&this.selectedOptions.length===this.settings.selectionLimit&&this.toggleDropdown()}},{key:"dropdownToggleKeyDown",value:function(e){switch(e.key){case"ArrowDown":this.open&&(this.focusFirst(),e.preventDefault());break;default:this.catchKeydown(e)}}},{key:"searchKeydown",value:function(e){switch(e.key){case"ArrowDown":this.focusNext(),e.preventDefault();break;case"ArrowUp":this.focusSelf(),e.preventDefault();break;case"Enter":this.selectAllVisible(),e.preventDefault();break;default:this.catchKeydown(e)}}},{key:"catchKeydown",value:function(e){switch(e.key){case"Escape":this.open&&(this.toggleDropdown(),this.focusSelf(),e.preventDefault())}}},{key:"focusFirst",value:function(){this.settings.disableSearch?this.$element[0].querySelectorAll(".focusable")[0].focus():this.$element.find("input")[0].focus()}},{key:"focusNext",value:function(){var e=this.getFocusCounter(),t=this.$element[0].querySelectorAll(".focusable");t.length>e+1&&(e+=1,t[e].focus())}},{key:"focusPrevious",value:function(){var e=this.getFocusCounter(),t=this.$element[0].querySelectorAll(".focusable");e>=1?(e-=1,t[e].focus()):this.settings.disableSearch?this.focusSelf():this.focusFirst()}},{key:"getFocusCounter",value:function(){for(var e=this.$element[0].querySelectorAll(".focusable"),t=this.$document[0].activeElement,n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1}},{key:"focusSelf",value:function(){this.$element.find("button")[0].focus()}},{key:"getButtonText",value:function(){return angular.isFunction(this.settings.getButtonText)?this.settings.getButtonText(this.selectedOptions,this.options,this.texts):0===this.selectedOptions.length?"Select "+this.texts.optionNames:this.selectedOptions.length+" "+this.texts.optionNames+" selected"}}]),e}();t["default"]=i}]),angular.module("angularjsDropdownTree").run(["$templateCache",function(e){e.put("app/component/dropdownTree.template.html",'<div class="dropdown dropdown-tree-parent" ng-class="[\r\n			{\'open\': $ctrl.open}\r\n		 ]"><dt-dropdown-toggle></dt-dropdown-toggle></div>'),e.put("app/component/dropdown-menu/dropdown-menu.template.html",'<div class=dropdown-menu><div class="top-menu form-group" ng-if=!$ctrl.settings.disableSearch><input class=form-control ng-if=!$ctrl.settings.disableSearch type=text ng-model=$ctrl.searchText placeholder=Search ng-keydown=$ctrl.searchKeydown($event)></div><ul><dropdown-tree-option-row ng-repeat="option in $ctrl.options | orderBy:$ctrl.settings.displayProperty:false:$ctrl.customCompare track by $index" option=option settings=$ctrl.settings option-clicked=$ctrl.optionClicked(option) selected-options=$ctrl.selectedOptions focus-next=$ctrl.focusNext() focus-previous=$ctrl.focusPrevious() catch-keydown=$ctrl.catchKeydown(event) reset-focus-counter=$ctrl.resetFocusCounter(element) search-text={{$ctrl.searchText}} custom-compare=$ctrl.customCompare></dropdown-tree-option-row></ul></div>'),e.put("app/component/dropdown-toggle/dropdown-toggle.template.html",'<button class="dropdown-toggle btn btn-default" ng-click=$ctrl.toggleDropdown() ng-keydown=$ctrl.dropdownToggleKeyDown($event)><span class=selection-text>{{$ctrl.getButtonText()}} </span><span ng-class=$ctrl.settings.dropdownToggleIconClass></span></button>'),e.put("app/component/option-row/option-row.template.html",'<li ng-if=$ctrl.shouldBeVisible()><div class=option ng-class="[\r\n				{\'folder\': $ctrl.isFolder()},\r\n			 ]"><div class=title><span ng-if=$ctrl.isSelected() ng-class=$ctrl.settings.selectedClass></span> <span ng-if=$ctrl.isFolder() ng-click=$ctrl.toggleFolder() ng-class="$ctrl.isOpen ? $ctrl.settings.folderClass : $ctrl.settings.folderClosedClass"></span> <span ng-if=!$ctrl.isFolder() ng-class=$ctrl.settings.childClass></span> <span tabindex=-1 ng-click="(!$ctrl.isFolder() || $ctrl.settings.folderSelectable) && $ctrl.innerClicked($ctrl.option)" ng-keydown=$ctrl.keyDown($event) class=focusable>{{$ctrl.getDisplayText()}}</span></div><ul class=children ng-if="$ctrl.isFolder() && ($ctrl.isOpen || ($ctrl.shouldBeVisible() && $ctrl.searchText.length !== 0))"><dropdown-tree-option-row ng-repeat="option in $ctrl.getChildOptions() | orderBy:$ctrl.settings.displayProperty:false:$ctrl.customCompare track by $index" option=option settings=$ctrl.settings option-clicked=$ctrl.innerClicked(option) selected-options=$ctrl.selectedOptions focus-next=$ctrl.focusNext() focus-previous=$ctrl.focusPrevious() catch-keydown=$ctrl.keyDown(event) reset-focus-counter=$ctrl.resetFocusCounter(element) search-text={{$ctrl.searchText}}></dropdown-tree-option-row></ul></div></li>')}]);
//# sourceMappingURL=maps/component.js.map
