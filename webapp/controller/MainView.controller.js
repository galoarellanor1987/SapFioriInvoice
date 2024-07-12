sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("aktive.invoice.controller.MainView", {
        onInit: function () {
            const oJsonModel=new sap.ui.model.json.JSONModel();
            const oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("aktive.invoice.model", "/selectionScreenMenu.json"));
            const oView=this.getView();
          
            oView.setModel(oModel, "selectionScreen");


        }
    });
});
