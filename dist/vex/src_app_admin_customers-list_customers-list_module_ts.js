"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_admin_customers-list_customers-list_module_ts"],{

/***/ 5062:
/*!***********************************************************************!*\
  !*** ./src/app/admin/customers-list/customers-list-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListRoutingModule": () => (/* binding */ CustomerListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _customers_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-list.component */ 5071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _customers_list_component__WEBPACK_IMPORTED_MODULE_0__.CustomersListComponent
    }
];
class CustomerListRoutingModule {
}
CustomerListRoutingModule.ɵfac = function CustomerListRoutingModule_Factory(t) { return new (t || CustomerListRoutingModule)(); };
CustomerListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomerListRoutingModule });
CustomerListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 5071:
/*!******************************************************************!*\
  !*** ./src/app/admin/customers-list/customers-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersListComponent": () => (/* binding */ CustomersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);








const _c0 = function () { return ["Dashboards", "Customer"]; };
class CustomersListComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomersListComponent.ɵfac = function CustomersListComponent_Factory(t) { return new (t || CustomersListComponent)(); };
CustomersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomersListComponent, selectors: [["vex-customers-list"]], decls: 89, vars: 5, consts: [["current", "Dashboard"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "h-full", "flex", "flex-col"], [1, "p-6", "pb-0", "bg-foreground", "shadow-b", "flex-none", "border-b", "border-gray-200"], [1, "container", "px-0"], [1, "display-1", "font-bold", "mt-0", "mb-4", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary/10"], ["svgIcon", "mat:contacts"], [1, "block"], [1, "flex", "items-center", "display-bar"], ["mat-tab-nav-bar", "", 1, "vex-tabs", "border-0", "flex-auto"], [1, "bg-foreground", "rounded-full", "border", "px-4", "max-w-[300px]", "flex-auto", "flex", "items-center", "border", "border-gray-300"], ["svgIcon", "mat:search", 1, "icon-sm", "text-secondary"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-2", "border-0", "outline-none", "w-full", "bg-transparent"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Contact", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", "flex-none", "sm:hidden"], ["svgIcon", "mat:person_add"], ["disable", "", "color", "primary", "mat-flat-button", "", "type", "button", 1, "ltr:ml-4", "rtl:mr-4", "flex-none", "hidden", "sm:inline-block"], ["svgIcon", "mat:add", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", "icon-sm"], [1, "overflow-y-auto", "flex-auto"], [1, "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-6", "container"], [1, "card", "overflow-hidden"], ["matRipple", "", 1, "p-4", "text-center", "hover:bg-hover", "trans-ease-out", "cursor-pointer", "relative"], ["src", "assets/img/avatars/1.jpg", 1, "avatar", "h-24", "w-24", "mx-auto"], [1, "title", "mb-1", "mt-3"], [1, "body-2", "text-secondary", "flex", "items-center", "justify-center"], ["svgIcon", "mat:phone", 1, "ltr:mr-1", "rtl:ml-1", "icon-xs"], ["svgIcon", "mat:all_inclusive", 1, "ltr:mr-1", "rtl:ml-1", "icon-xs"], [1, "bg-app-bar", "p-2", "flex", "items-center", "justify-around"], ["color", "primary", "routerLink", "/admin/customer-details", "mat-stroked-button", "", "type", "button"]], template: function CustomersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "nav", 12)(14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "mat-icon", 14)(16, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20)(24, "div", 21)(25, "div", 22)(26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Guerrero Morales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "+21 (988) 504-2559");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "250 Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 29)(39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "View Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22)(42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Guerrero Morales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "+21 (988) 504-2559");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "250 Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 29)(55, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "View Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 22)(58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Guerrero Morales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "+21 (988) 504-2559");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "250 Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 29)(71, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "View Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 22)(74, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Guerrero Morales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "+21 (988) 504-2559");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "250 Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 29)(87, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "View Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@stagger", undefined);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_quicklink__WEBPACK_IMPORTED_MODULE_4__["ɵɵLinkDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip], styles: [".display-bar[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  background: #e9e9e9;\n  border-radius: 13px;\n  position: absolute;\n  width: 100%;\n  top: 72px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.display-1[_ngcontent-%COMP%] {\n  margin-bottom: 4rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUVBO0VBRUksa0JBQUE7QUFBSjs7QUFFQTtFQUVJLDhCQUFBO0FBQUoiLCJmaWxlIjoiY3VzdG9tZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1iYXJcclxue1xyXG4gICAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA3MnB4O1xyXG59XHJcbi5jb250YWluZXJcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kaXNwbGF5LTFcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 23935:
/*!***************************************************************!*\
  !*** ./src/app/admin/customers-list/customers-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListModule": () => (/* binding */ CustomerListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _customers_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-list-routing.module */ 5062);
/* harmony import */ var _customers_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-list.component */ 5071);
/* harmony import */ var _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@vex/components/chart/chart.module */ 76611);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module */ 82769);
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module */ 25190);
/* harmony import */ var _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module */ 66232);
/* harmony import */ var _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module */ 67401);
/* harmony import */ var _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-assistant/widget-assistant.module */ 27340);
/* harmony import */ var _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module */ 64592);
/* harmony import */ var _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-table/widget-table.module */ 93624);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _pages_apps_aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/apps/aio-table/aio-table-routing.module */ 26481);
/* harmony import */ var _pages_apps_aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/apps/aio-table/customer-create-update/customer-create-update.module */ 15799);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);

















// import { AioTableComponent } from '../../apps/aio-table/aio-table.component';


















class CustomerListModule {
}
CustomerListModule.ɵfac = function CustomerListModule_Factory(t) { return new (t || CustomerListModule)(); };
CustomerListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: CustomerListModule });
CustomerListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _customers_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerListRoutingModule,
        _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__.ChartModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_3__.WidgetQuickLineChartModule,
        _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_4__.WidgetQuickValueCenterModule,
        _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_5__.WidgetQuickValueStartModule,
        _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_6__.WidgetLargeGoalChartModule,
        _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_7__.WidgetAssistantModule,
        _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_8__.WidgetLargeChartModule,
        _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_9__.WidgetTableModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_10__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__.PageLayoutModule,
        _pages_apps_aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_13__.AioTableRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__.PageLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule,
        _pages_apps_aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_14__.CustomerCreateUpdateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_10__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](CustomerListModule, { declarations: [_customers_list_component__WEBPACK_IMPORTED_MODULE_1__.CustomersListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _customers_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerListRoutingModule,
        _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__.ChartModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_3__.WidgetQuickLineChartModule,
        _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_4__.WidgetQuickValueCenterModule,
        _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_5__.WidgetQuickValueStartModule,
        _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_6__.WidgetLargeGoalChartModule,
        _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_7__.WidgetAssistantModule,
        _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_8__.WidgetLargeChartModule,
        _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_9__.WidgetTableModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_10__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__.PageLayoutModule,
        _pages_apps_aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_13__.AioTableRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__.PageLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule,
        _pages_apps_aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_14__.CustomerCreateUpdateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_10__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_customers-list_customers-list_module_ts.js.map