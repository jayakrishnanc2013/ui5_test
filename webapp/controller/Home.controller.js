sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("project1234.controller.Home", {
			onInit: function () {
sap.m.MessageToast.show("Inside onInit Function Sucess");
			}
		});
	});
