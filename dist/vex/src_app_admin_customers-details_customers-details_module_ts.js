"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_admin_customers-details_customers-details_module_ts"],{

/***/ 16496:
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInRight400ms": () => (/* binding */ fadeInRight400ms),
/* harmony export */   "fadeInRightAnimation": () => (/* binding */ fadeInRightAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function fadeInRightAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInRight', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(-20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInRight400ms = fadeInRightAnimation(400);


/***/ }),

/***/ 49597:
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleIn400ms": () => (/* binding */ scaleIn400ms),
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function scaleInAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(0)'
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


/***/ }),

/***/ 31099:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/customers-details/customers-details-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsRoutingModule": () => (/* binding */ CustomerDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _customers_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-details.component */ 19819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _customers_details_component__WEBPACK_IMPORTED_MODULE_0__.CustomersDetailsComponent
    }
];
class CustomerDetailsRoutingModule {
}
CustomerDetailsRoutingModule.ɵfac = function CustomerDetailsRoutingModule_Factory(t) { return new (t || CustomerDetailsRoutingModule)(); };
CustomerDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomerDetailsRoutingModule });
CustomerDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 19819:
/*!************************************************************************!*\
  !*** ./src/app/admin/customers-details/customers-details.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersDetailsComponent": () => (/* binding */ CustomersDetailsComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _vex_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@vex/utils/default-chart-options */ 19334);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var src_static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/static-data/aio-table-data */ 45145);
/* harmony import */ var _pages_apps_aio_table_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/apps/aio-table/customer-create-update/customer-create-update.component */ 15969);
/* harmony import */ var _pages_apps_aio_table_interfaces_customer_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/apps/aio-table/interfaces/customer.model */ 68151);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component */ 24616);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 88589);






























function CustomersDetailsComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 55)(1, "mat-checkbox", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CustomersDetailsComponent_th_64_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event ? ctx_r15.masterToggle() : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected());
} }
function CustomersDetailsComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 57)(1, "mat-checkbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CustomersDetailsComponent_td_65_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19); const row_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event ? ctx_r18.selection.toggle(row_r17) : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r17));
} }
function CustomersDetailsComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function CustomersDetailsComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", row_r20["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
} }
function CustomersDetailsComponent_ng_container_69_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", column_r21.label, "");
} }
function CustomersDetailsComponent_ng_container_69_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", column_r21.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r26[column_r21.property]);
} }
function CustomersDetailsComponent_ng_container_69_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CustomersDetailsComponent_ng_container_69_ng_container_1_th_1_Template, 2, 1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CustomersDetailsComponent_ng_container_69_ng_container_1_td_2_Template, 2, 2, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r21.property);
} }
function CustomersDetailsComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CustomersDetailsComponent_ng_container_69_ng_container_1_Template, 3, 1, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r21.type === "text");
} }
function CustomersDetailsComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 66);
} }
function CustomersDetailsComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 67)(1, "div", 68)(2, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} }
function CustomersDetailsComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function CustomersDetailsComponent_td_75_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](2, _c0, label_r32.textClass, label_r32.bgClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", label_r32.text, " ");
} }
function CustomersDetailsComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 67)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CustomersDetailsComponent_td_75_div_2_Template, 2, 5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", row_r30.labels);
} }
function CustomersDetailsComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { customer: a0 }; };
function CustomersDetailsComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 77)(1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c1, row_r33))("matMenuTriggerFor", _r13);
} }
function CustomersDetailsComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 80);
} }
function CustomersDetailsComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 81);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
} }
function CustomersDetailsComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CustomersDetailsComponent_ng_template_84_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const customer_r35 = restoredCtx.customer; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.updateCustomer(customer_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CustomersDetailsComponent_ng_template_84_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const customer_r35 = restoredCtx.customer; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r38.deleteCustomer(customer_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "mat-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
const _c2 = function () { return ["Dashboards", "Customer Details"]; };
class CustomersDetailsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        // tableColumns: TableColumn<Order>[] = [
        //   {
        //     label: '',
        //     property: 'status',
        //     type: 'badge'
        //   },
        //   {
        //     label: 'PRODUCT',
        //     property: 'name',
        //     type: 'text'
        //   },
        //   {
        //     label: '$ PRICE',
        //     property: 'price',
        //     type: 'text',
        //     cssClasses: ['font-medium']
        //   },
        //   {
        //     label: 'DATE',
        //     property: 'timestamp',
        //     type: 'text',
        //     cssClasses: ['text-secondary']
        //   }
        // ];
        // tableData = tableSalesData;
        this.series = [{
                name: 'Subscribers',
                data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44]
            }];
        this.userSessionsSeries = [
            {
                name: 'Users',
                data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
            },
            {
                name: 'Sessions',
                data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
            },
        ];
        this.salesSeries = [{
                name: 'Sales',
                data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87]
            }];
        this.pageViewsSeries = [{
                name: 'Page Views',
                data: [405, 800, 200, 600, 105, 788, 600, 204]
            }];
        this.uniqueUsersSeries = [{
                name: 'Unique Users',
                data: [356, 806, 600, 754, 432, 854, 555, 1004]
            }];
        this.uniqueUsersOptions = (0,_vex_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_2__.defaultChartOptions)({
            chart: {
                type: 'area',
                height: 100
            },
            colors: ['#ff9800']
        });
        // dialog: any;
        // customers: any;
        // subject$: any;
        // selection: any;
        // dataSource: any;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('boxed');
        /**
         * Simulating a service with HTTP that returns Observables
         * You probably want to remove this and do all requests in a service with HTTP
         */
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.ReplaySubject(1);
        this.data$ = this.subject$.asObservable();
        this.columns = [
            { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
            { label: 'Image', property: 'image', type: 'image', visible: true },
            { label: 'SKU', property: 'sku', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Description', property: 'description', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Category', property: 'category', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Name', property: 'name', type: 'text', visible: false, cssClasses: ['font-medium'] },
            { label: 'First Name', property: 'firstName', type: 'text', visible: false },
            { label: 'Last Name', property: 'lastName', type: 'text', visible: false },
            { label: 'Contact', property: 'contact', type: 'button', visible: false },
            { label: 'Address', property: 'address', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Street', property: 'street', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Zipcode', property: 'zipcode', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'City', property: 'city', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Phone', property: 'phoneNumber', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
            { label: 'Labels', property: 'labels', type: 'button', visible: true },
            { label: 'Actions', property: 'actions', type: 'button', visible: true }
        ];
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 20, 50];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl();
        this.labels = src_static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_3__.aioTableLabels;
    }
    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }
    /**
     * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
     * We are simulating this request here.
     */
    getData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(src_static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_3__.aioTableData.map(customer => new _pages_apps_aio_table_interfaces_customer_model__WEBPACK_IMPORTED_MODULE_5__.Customer(customer)));
    }
    ngOnInit() {
        this.getData().subscribe(customers => {
            this.subject$.next(customers);
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource();
        this.data$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.filter)(Boolean)).subscribe(customers => {
            this.customers = customers;
            this.dataSource.data = customers;
        });
        this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(this)).subscribe(value => this.onFilterChange(value));
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    createCustomer() {
        this.dialog.open(_pages_apps_aio_table_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_4__.CustomerCreateUpdateComponent).afterClosed().subscribe((customer) => {
            /**
             * Customer is the updated customer (if the user pressed Save - otherwise it's null)
             */
            if (customer) {
                /**
                 * Here we are updating our local array.
                 * You would probably make an HTTP request here.
                 */
                this.customers.unshift(new _pages_apps_aio_table_interfaces_customer_model__WEBPACK_IMPORTED_MODULE_5__.Customer(customer));
                this.subject$.next(this.customers);
            }
        });
    }
    updateCustomer(customer) {
        this.dialog.open(_pages_apps_aio_table_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_4__.CustomerCreateUpdateComponent, {
            data: customer
        }).afterClosed().subscribe(updatedCustomer => {
            /**
             * Customer is the updated customer (if the user pressed Save - otherwise it's null)
             */
            if (updatedCustomer) {
                /**
                 * Here we are updating our local array.
                 * You would probably make an HTTP request here.
                 */
                const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
                this.customers[index] = new _pages_apps_aio_table_interfaces_customer_model__WEBPACK_IMPORTED_MODULE_5__.Customer(updatedCustomer);
                this.subject$.next(this.customers);
            }
        });
    }
    deleteCustomer(customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
        this.selection.deselect(customer);
        this.subject$.next(this.customers);
    }
    deleteCustomers(customers) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        customers.forEach(c => this.deleteCustomer(c));
    }
    onFilterChange(value) {
        if (!this.dataSource) {
            return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
    }
    toggleColumnVisibility(column, event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        column.visible = !column.visible;
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    trackByProperty(index, column) {
        return column.property;
    }
    onLabelChange(change, row) {
        const index = this.customers.findIndex(c => c === row);
        this.customers[index].labels = change.value;
        this.subject$.next(this.customers);
    }
}
CustomersDetailsComponent.ɵfac = function CustomersDetailsComponent_Factory(t) { return new (t || CustomersDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog)); };
CustomersDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: CustomersDetailsComponent, selectors: [["vex-customers-details"]], viewQuery: function CustomersDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { columns: "columns" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 85, vars: 19, consts: [["current", "Customer Details"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "container", "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-1", "md:grid-cols-1", "gap-4", "pt-0"], [1, "mt-6", "flex", "flex-col", "md:flex-row", "md:items-start"], [1, "flex-auto"], [1, "card"], [1, "px-gutter", "py-4", "border-b"], [1, "title", "m-0"], [1, "px-gutter", "py-4", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "py-3", "flex", "items-center"], [1, "w-10", "h-10", "rounded-full", "bg-primary/10", "text-primary", "ltr:mr-3", "rtl:ml-3", "flex", "items-center", "justify-center"], ["svgIcon", "mat:phone", 1, "icon-sm"], [1, "m-0", "body-1"], [1, "m-0", "caption", "text-hint"], ["svgIcon", "mat:email", 1, "icon-sm"], ["svgIcon", "mat:business", 1, "icon-sm"], ["svgIcon", "mat:place", 1, "icon-sm"], [1, "card", "max-w-unset", "md:max-w-xs", "w-full", "flex-none", "md:ltr:ml-6", "md:rtl:mr-6", "mt-6", "md:mt-0"], [1, "card", "overflow-hidden"], [1, "h-random", "relative", "overflow-hidden"], ["src", "assets/img/avatars/1.jpg", 1, "w-full", "h-full", "object-cover"], [1, "absolute", "bg-contrast-black", "opacity-25", "top-0", "right-0", "bottom-0", "left-0", "w-full", "h-full", "z-0"], [1, "container", "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-4", "pt-0"], ["icon", "mat:shopping_cart", "iconClass", "text-primary bg-primary/10", "label", "Total Orders", "value", "12"], ["icon", "mat:new_releases", "iconClass", "text-orange bg-orange-light", "label", "Total Release", "value", "16"], ["icon", "mat:card_giftcard", "iconClass", "text-deep-orange bg-deep-orange-light", "label", "Total Products", "value", "23"], [1, "card", "sm:col-span-full", "m-extra"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [1, "bg-foreground", "rounded-full", "border", "px-4", "max-w-[300px]", "flex-auto", "flex", "items-center", "border", "border-gray-300"], ["svgIcon", "mat:search", 1, "icon-sm", "text-secondary"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-2", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], [1, "flex-1"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-8 min-w-8 pr-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover trans-ease-out cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 1, "w-8", "min-w-8", "pr-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary", "bg-primary/10"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal", "bg-teal-light"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green", "bg-green-light"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1"], ["class", "rounded px-2 py-1 font-medium text-xs flex-none", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "rounded", "px-2", "py-1", "font-medium", "text-xs", "flex-none", 3, "ngClass"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "trans-ease-out", "cursor-pointer"], ["mat-menu-item", ""], ["svgIcon", "mat:find_replace"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:edit"], ["svgIcon", "mat:delete"]], template: function CustomersDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Guerrero Morales");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div")(16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "+21 (988) 504-2559");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 11)(21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div")(24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "demo@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 11)(29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div")(32, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Amazon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 11)(37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div")(40, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " 4455 Apple Lane, Ellisville USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Warehouse Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 19)(45, "div", 20)(46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](47, "img", 22)(48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "vex-widget-quick-value-center", 25)(51, "vex-widget-quick-value-center", 26)(52, "vex-widget-quick-value-center", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 28)(54, "div", 29)(55, "h2", 30)(56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "mat-icon", 32)(60, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](63, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, CustomersDetailsComponent_th_64_Template, 2, 2, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, CustomersDetailsComponent_td_65_Template, 2, 1, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](66, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, CustomersDetailsComponent_th_67_Template, 2, 0, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, CustomersDetailsComponent_td_68_Template, 2, 1, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, CustomersDetailsComponent_ng_container_69_Template, 2, 1, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](70, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, CustomersDetailsComponent_th_71_Template, 1, 0, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](72, CustomersDetailsComponent_td_72_Template, 8, 0, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](73, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](74, CustomersDetailsComponent_th_74_Template, 2, 0, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, CustomersDetailsComponent_td_75_Template, 3, 1, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](76, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, CustomersDetailsComponent_th_77_Template, 2, 0, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, CustomersDetailsComponent_td_78_Template, 3, 4, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, CustomersDetailsComponent_tr_79_Template, 1, 0, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](80, CustomersDetailsComponent_tr_80_Template, 1, 1, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](81, "mat-paginator", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "mat-menu", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, CustomersDetailsComponent_ng_template_84_Template, 12, 0, "ng-template", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_8__.WidgetQuickValueCenterComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_9__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatAnchor, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuContent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective], styles: [".h-random[_ngcontent-%COMP%] {\n  height: 14.7rem !important;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-0[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\n.m-extra[_ngcontent-%COMP%] {\n  margin-top: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUVJLDJCQUFBO0FBQ0o7O0FBQ0E7RUFFSSw4QkFBQTtBQUNKOztBQUNBO0VBRUksa0JBQUE7QUFDSiIsImZpbGUiOiJjdXN0b21lcnMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oLXJhbmRvbSB7XHJcbiAgICBoZWlnaHQ6IDE0LjdyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucHQtMFxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBiLTBcclxue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tLWV4dHJhXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxufSJdfQ== */"], data: { animation: [
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__.fadeInUp400ms,
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__.stagger40ms,
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleIn400ms,
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms
        ] }, changeDetection: 0 });


/***/ }),

/***/ 40165:
/*!*********************************************************************!*\
  !*** ./src/app/admin/customers-details/customers-details.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsModule": () => (/* binding */ CustomerDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _customers_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-details-routing.module */ 31099);
/* harmony import */ var _customers_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-details.component */ 19819);
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


















class CustomerDetailsModule {
}
CustomerDetailsModule.ɵfac = function CustomerDetailsModule_Factory(t) { return new (t || CustomerDetailsModule)(); };
CustomerDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: CustomerDetailsModule });
CustomerDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _customers_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsRoutingModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](CustomerDetailsModule, { declarations: [_customers_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomersDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _customers_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsRoutingModule,
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
//# sourceMappingURL=src_app_admin_customers-details_customers-details_module_ts.js.map