(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\vsc_projecten\bitbucket\angular-deliveries-FL\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PRuq":
/*!****************************************************!*\
  !*** ./src/app/deliveries/deliveries.component.ts ***!
  \****************************************************/
/*! exports provided: DeliveriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesComponent", function() { return DeliveriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _change_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change-color.directive */ "whFa");
/* harmony import */ var _utils_supplier_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/supplier-filter.pipe */ "XLah");






function DeliveriesComponent_div_7_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cel_r3.OrderNummer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cel_r3.Crediteur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cel_r3.Dock_Lang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cel_r3.Referentie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cel_r3.Ingebracht_door);
} }
function DeliveriesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Ordernummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Crediteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Dock lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Referentie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Ingebracht door");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, DeliveriesComponent_div_7_tr_15_Template, 11, 5, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "supplierFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](16, 1, ctx_r1.table, ctx_r1.filterArgs));
} }
class DeliveriesComponent {
    constructor() {
        this.table = [];
        this.filterArgs = { Dock_Lang: 'Citrus' };
    }
    ngOnInit() { }
    handleFileSelect(e) {
        const elem = document.documentElement;
        elem.requestFullscreen();
        this.table = [...this.table];
        let files = null;
        files = e.target.files; // filelist object
        const file = files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event) => {
            const csv = event.target.result; // content of csv file
            this.parseCsv(csv);
        };
    }
    parseCsv(csv) {
        const tableData = [];
        const rows = csv.split(/\n|\r\n/); // split into rows
        const headers = rows.shift() // get headers
            .split(' ')
            .join('_') // get rid of spaces in headers
            .split(','); // split headers
        for (let i = 0; i < rows.length; i++) {
            const dataWithComma = rows[i] // get data rows
                .replace(/\".*?\"/g, match => match.replace(/,/g, ';')) // get rid of double quoted comma
                .split(','); // split data rows
            const dataRows = tableData[i] = {};
            for (let j = 0; j < dataWithComma.length; j++) {
                const dataVal = dataWithComma[j]
                    .replace(/;/g, ',') // get comma back
                    .replace(/\"/g, ''); // get rid of double quotes
                const dataHead = headers[j]; // index headers
                dataRows[dataHead] = dataVal; // make key:value pairs
            }
        }
        this.table = [...tableData];
        this.table.pop(); // delete blank row at bottom??
        console.log('parseCSV complete: ', this.table);
    }
}
DeliveriesComponent.??fac = function DeliveriesComponent_Factory(t) { return new (t || DeliveriesComponent)(); };
DeliveriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeliveriesComponent, selectors: [["app-deliveries"]], decls: 8, vars: 1, consts: [["id", "fullScreen"], [1, "custom-file", "mb-3"], ["id", "validatedCustomFile", "type", "file", "accept", ".csv", "value", "", "required", "", 1, "custom-file-input", 3, "click", "change"], ["fileInput", ""], ["data-browse", "Bestand kiezen", "for", "validatedCustomFile", 1, "custom-file-label"], [4, "ngIf"], [1, "table", "table-hover"], ["scope", "col"], ["appChangeColor", "", 4, "ngFor", "ngForOf"], ["appChangeColor", ""]], template: function DeliveriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeliveriesComponent_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4); return _r0.value = null; })("change", function DeliveriesComponent_Template_input_change_3_listener($event) { return ctx.handleFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Een csv-bestand kiezen...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DeliveriesComponent_div_7_Template, 17, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.table && ctx.table.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _change_color_directive__WEBPACK_IMPORTED_MODULE_3__["ChangeColorDirective"]], pipes: [_utils_supplier_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["SupplierFilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJpZXMvZGVsaXZlcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeliveriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deliveries',
                templateUrl: './deliveries.component.html',
                styleUrls: ['./deliveries.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _deliveries_deliveries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deliveries/deliveries.component */ "PRuq");



class AppComponent {
    constructor() {
        this.title = 'Leveringen Fruity Line BV';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-deliveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
    } }, directives: [_deliveries_deliveries_component__WEBPACK_IMPORTED_MODULE_1__["DeliveriesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XLah":
/*!***********************************************!*\
  !*** ./src/app/utils/supplier-filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: SupplierFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierFilterPipe", function() { return SupplierFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SupplierFilterPipe {
    transform(table, filter) {
        if (!table || !filter) {
            return table;
        }
        // filter items array, items which match and return true will be filtered out, false will be kept
        return table.filter(cel => cel.Dock_Lang.indexOf(filter.Dock_Lang) === -1);
    }
}
SupplierFilterPipe.??fac = function SupplierFilterPipe_Factory(t) { return new (t || SupplierFilterPipe)(); };
SupplierFilterPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "supplierFilter", type: SupplierFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SupplierFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'supplierFilter',
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _deliveries_deliveries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deliveries/deliveries.component */ "PRuq");
/* harmony import */ var _change_color_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-color.directive */ "whFa");
/* harmony import */ var _utils_supplier_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/supplier-filter.pipe */ "XLah");








class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _deliveries_deliveries_component__WEBPACK_IMPORTED_MODULE_4__["DeliveriesComponent"],
        _change_color_directive__WEBPACK_IMPORTED_MODULE_5__["ChangeColorDirective"],
        _utils_supplier_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["SupplierFilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _deliveries_deliveries_component__WEBPACK_IMPORTED_MODULE_4__["DeliveriesComponent"],
                    _change_color_directive__WEBPACK_IMPORTED_MODULE_5__["ChangeColorDirective"],
                    _utils_supplier_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["SupplierFilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "whFa":
/*!*******************************************!*\
  !*** ./src/app/change-color.directive.ts ***!
  \*******************************************/
/*! exports provided: ChangeColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeColorDirective", function() { return ChangeColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class ChangeColorDirective {
    constructor(doms) {
        this.doms = doms;
        this.toggle = 0;
        this.color1 = 'rgb(50, 168, 82)';
        this.color2 = 'rgb(255, 0, 0)';
    }
    get myStyle() {
        if (this.toggle === 0) {
            const style = '';
            return this.doms.bypassSecurityTrustStyle(style);
        }
        else if (this.toggle === 1) {
            const style = `background: ${this.color1}`;
            return this.doms.bypassSecurityTrustStyle(style);
        }
        else {
            const style = `background: ${this.color2}`;
            return this.doms.bypassSecurityTrustStyle(style);
        }
    }
    onClick() {
        if (this.toggle < 2) {
            this.toggle += 1;
        }
        else {
            this.toggle = 0;
        }
    }
}
ChangeColorDirective.??fac = function ChangeColorDirective_Factory(t) { return new (t || ChangeColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ChangeColorDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: ChangeColorDirective, selectors: [["", "appChangeColor", ""]], hostVars: 2, hostBindings: function ChangeColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChangeColorDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](ctx.myStyle);
    } }, inputs: { color1: "color1", color2: "color2" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChangeColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appChangeColor]'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { color1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map