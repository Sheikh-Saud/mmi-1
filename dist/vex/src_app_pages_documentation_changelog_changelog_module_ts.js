"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_documentation_changelog_changelog_module_ts"],{

/***/ 56307:
/*!***************************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogRoutingModule": () => (/* binding */ ChangelogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog.component */ 1857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _changelog_component__WEBPACK_IMPORTED_MODULE_0__.ChangelogComponent
    }
];
class ChangelogRoutingModule {
}
ChangelogRoutingModule.ɵfac = function ChangelogRoutingModule_Factory(t) { return new (t || ChangelogRoutingModule)(); };
ChangelogRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChangelogRoutingModule });
ChangelogRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangelogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 1857:
/*!**********************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogComponent": () => (/* binding */ ChangelogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_showdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-showdown */ 97296);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);








const _c0 = function () { return ["Documentation", "Changelog"]; };
class ChangelogComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(); };
ChangelogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["vex-changelog"]], decls: 8, vars: 2, consts: [["current", "Documentation"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "container"], [1, "card", "p-gutter", "relative"], ["src", "/CHANGELOG.md"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "vex-page-layout-content", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "showdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
    } }, dependencies: [ngx_showdown__WEBPACK_IMPORTED_MODULE_5__.ShowdownComponent, ngx_showdown__WEBPACK_IMPORTED_MODULE_5__.SourceDirective, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__.PageLayoutComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: ["vex-changelog vex-secondary-toolbar h1,   vex-changelog vex-secondary-toolbar h2 {\n  border: none;\n  margin: 0;\n}\n  vex-changelog ol,   vex-changelog ul {\n  list-style: disc;\n  margin-left: 1rem;\n}\n  vex-changelog showdown a {\n  color: rgb(var(--color-primary));\n}\n  vex-changelog showdown > *:first-child {\n  margin-top: 0 !important;\n}\n  vex-changelog h1,   vex-changelog h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n  vex-changelog h1,   vex-changelog h2,   vex-changelog h3,   vex-changelog h4,   vex-changelog h5,   vex-changelog h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n  vex-changelog p,   vex-changelog ul,   vex-changelog li {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n  vex-changelog strong {\n  font-weight: 500;\n}\n  vex-changelog code.typescript {\n  display: block;\n}\n  vex-changelog table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n  vex-changelog table tr {\n  background-color: var(--background-foreground);\n  border-top: 1px solid var(--foreground-divider);\n}\n  vex-changelog table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n  vex-changelog table td,   vex-changelog table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n  vex-changelog table td:first-child,   vex-changelog table th:first-child {\n  border-left: none;\n}\n  vex-changelog table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBRk47QUFNRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQVFJO0VBQ0UsZ0NBQUE7QUFOTjtBQVVFO0VBQ0Usd0JBQUE7QUFSSjtBQVdFO0VBQ0Usa0RBQUE7RUFDQSxxQkFBQTtBQVRKO0FBWUU7RUFDRSxpREFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQUEsc0JBQUE7QUFYSjtBQWNFO0VBQ0UsZ0JBQUE7QUFaSjtBQWVFO0VBQ0UsY0FBQTtBQWJKO0FBZ0JFO0VBQ0UsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWRKO0FBZ0JJO0VBQ0UsOENBQUE7RUFDQSwrQ0FBQTtBQWROO0FBZ0JNO0VBQ0UsMkNBQUE7QUFkUjtBQWtCSTtFQUNFLGdEQUFBO0VBQ0EsNENBQUE7QUFoQk47QUFrQk07RUFDRSxpQkFBQTtBQWhCUjtBQW9CSTtFQUNFLHNDQUFBO0FBbEJOIiwiZmlsZSI6ImNoYW5nZWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHtcclxuXHJcbiAgdmV4LXNlY29uZGFyeS10b29sYmFyIHtcclxuICAgIGgxLCBoMiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2wsIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XHJcbiAgICBAYXBwbHkgbWwtNDtcclxuICB9XHJcblxyXG4gIHNob3dkb3duIHtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dkb3duID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnRcclxuICB9XHJcblxyXG4gIGgxLCBoMiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuM2VtO1xyXG4gIH1cclxuXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgcCwgdWwsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xyXG4gICAgQGFwcGx5IG15LTM7XHJcbiAgfVxyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIGNvZGUudHlwZXNjcmlwdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG4gICAgdHIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWZvcmVncm91bmQpO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxuICAgICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZy0xNik7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 63140:
/*!*******************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogModule": () => (/* binding */ ChangelogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog-routing.module */ 56307);
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changelog.component */ 1857);
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markdown.module */ 98477);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);










class ChangelogModule {
}
ChangelogModule.ɵfac = function ChangelogModule_Factory(t) { return new (t || ChangelogModule)(); };
ChangelogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ChangelogModule });
ChangelogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _changelog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangelogRoutingModule,
        _markdown_module__WEBPACK_IMPORTED_MODULE_2__.MarkdownModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChangelogModule, { declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_1__.ChangelogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _changelog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangelogRoutingModule,
        _markdown_module__WEBPACK_IMPORTED_MODULE_2__.MarkdownModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_documentation_changelog_changelog_module_ts.js.map