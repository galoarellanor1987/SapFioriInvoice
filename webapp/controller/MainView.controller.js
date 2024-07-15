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


        },
        onFilter: function (){
                const oData = this.getView().getModel("selectionScreen").getData();
                
                let filters = [];
                if (oData.Shipname !== "")
                    {
                        //alert(oData.ShipName);
                        filters.push(new sap.ui.model.Filter("ShipName", sap.ui.model.FilterOperator.Contains, oData.ShipName));
                    }
                if (oData.CountryKey !== "")
                    {
                       // alert(oData.CountryKey); 
                        filters.push(new sap.ui.model.Filter("Country", sap.ui.model.FilterOperator.EQ, oData.CountryKey));
                    }

                    const oList = this.getView().byId("InvoiceListId");
                    const oBinding = oList.getBinding("items");
                    oBinding.filter(filters);

        },
        onClearFilter: function()
        {
            const oModelSelScreen=this.getView().getModel("selectionScreen");
            oModelSelScreen.setProperty("/CountryKey","");
            oModelSelScreen.setProperty("/ShipName","");
            
            const oList = this.getView().byId("InvoiceListId");
            const oBinding = oList.getBinding("items");
            oBinding.filter([]);


        }
    });
});
