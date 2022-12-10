"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_module_ts"],{

/***/ 69442:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAnalyticsRoutingModule": () => (/* binding */ DashboardAnalyticsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-analytics.component */ 27043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_0__.DashboardAnalyticsComponent
    }
];
class DashboardAnalyticsRoutingModule {
}
DashboardAnalyticsRoutingModule.ɵfac = function DashboardAnalyticsRoutingModule_Factory(t) { return new (t || DashboardAnalyticsRoutingModule)(); };
DashboardAnalyticsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardAnalyticsRoutingModule });
DashboardAnalyticsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardAnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 27043:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAnalyticsComponent": () => (/* binding */ DashboardAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _data_table_data_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-table/data-table-datasource */ 30715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component */ 24616);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 88589);

















function DashboardAnalyticsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 17)(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-menu", null, 22)(14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardAnalyticsComponent_tr_27_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const product_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.viewProduct(product_r1.fieldData.idProduct)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "View Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 24)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", product_r1.fieldData.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r1.fieldData.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r1.fieldData.unitsInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r1.fieldData.idProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
const _c0 = function () { return ["Dashboards", "Analytics"]; };
class DashboardAnalyticsComponent {
    constructor(productService) {
        this.productService = productService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('boxed');
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
        this.dataSource = new _data_table_data_table_datasource__WEBPACK_IMPORTED_MODULE_2__.DataTableDataSource();
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((res) => {
            this.products = res.data;
            console.log(this.products);
        });
    }
    viewProduct(id) {
        console.log(id);
    }
}
DashboardAnalyticsComponent.ɵfac = function DashboardAnalyticsComponent_Factory(t) { return new (t || DashboardAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService)); };
DashboardAnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DashboardAnalyticsComponent, selectors: [["vex-dashboard-analytics"]], viewQuery: function DashboardAnalyticsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 28, vars: 7, consts: [["current", "Dashboard"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "container", "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-4"], ["icon", "mat:shopping_cart", "iconClass", "text-primary bg-primary/10", "label", "Orders", "value", "67.4k", 3, "change"], ["icon", "mat:new_releases", "iconClass", "text-orange bg-orange-light", "label", "Release", "value", "96.2k", 3, "change"], ["icon", "mat:card_giftcard", "iconClass", "text-deep-orange bg-deep-orange-light", "label", "Products", "value", "6.92%", 3, "change"], ["icon", "mat:all_inclusive", "iconClass", "text-teal bg-teal-light", "label", "Inventory", "value", "6.92%", 3, "change"], [1, "display-1", "font-bold", "mt-4", "mb-2", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary/10"], ["svgIcon", "mat:contacts"], [1, "block"], [1, "card", "sm:col-span-full", "p-5"], [1, "w-full", "p-4"], [1, "h-10", "bg-gray-200"], ["class", "text-center h-10 border-t-2 border-gray-100", 4, "ngFor", "ngForOf"], [1, "text-center", "h-10", "border-t-2", "border-gray-100"], [1, "flex", "justify-center"], ["alt", "Image", 1, "h-10", "w-10", "mt-2", "rounded-full", 3, "src"], [1, "w-20", 2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""]], template: function DashboardAnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "vex-widget-quick-value-center", 5)(6, "vex-widget-quick-value-center", 6)(7, "vex-widget-quick-value-center", 7)(8, "vex-widget-quick-value-center", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h1", 9)(10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 13)(15, "table", 14)(16, "tr", 15)(17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Units In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "ProductID");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, DashboardAnalyticsComponent_tr_27_Template, 20, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("change", 124.4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("change", -23.7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("change", 23.2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("change", 34.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_4__.WidgetQuickValueCenterComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms,
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger40ms
        ] } });


/***/ }),

/***/ 22848:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAnalyticsModule": () => (/* binding */ DashboardAnalyticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-analytics-routing.module */ 69442);
/* harmony import */ var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-analytics.component */ 27043);
/* harmony import */ var _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/components/chart/chart.module */ 76611);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module */ 82769);
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module */ 25190);
/* harmony import */ var _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module */ 66232);
/* harmony import */ var _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module */ 67401);
/* harmony import */ var _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-assistant/widget-assistant.module */ 27340);
/* harmony import */ var _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module */ 64592);
/* harmony import */ var _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-table/widget-table.module */ 93624);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _apps_aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../apps/aio-table/aio-table-routing.module */ 26481);
/* harmony import */ var _apps_aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../apps/aio-table/customer-create-update/customer-create-update.module */ 15799);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);

















// import { AioTableComponent } from '../../apps/aio-table/aio-table.component';











class DashboardAnalyticsModule {
}
DashboardAnalyticsModule.ɵfac = function DashboardAnalyticsModule_Factory(t) { return new (t || DashboardAnalyticsModule)(); };
DashboardAnalyticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: DashboardAnalyticsModule });
DashboardAnalyticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAnalyticsRoutingModule,
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
        _apps_aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_13__.AioTableRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__.PageLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule,
        _apps_aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_14__.CustomerCreateUpdateModule,
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
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DashboardAnalyticsModule, { declarations: [_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_1__.DashboardAnalyticsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAnalyticsRoutingModule,
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
        _apps_aio_table_aio_table_routing_module__WEBPACK_IMPORTED_MODULE_13__.AioTableRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__.PageLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsModule,
        _apps_aio_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_14__.CustomerCreateUpdateModule,
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
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_module_ts.js.map