sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.m.sample.InputAssisted.C", {
      onInit: function () {
        var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
        // The default limit of the model is set to 100. We want to show all the entries.
        oModel.setSizeLimit(100000);
        this.getView().setModel(oModel);
        this.getView().setModel(new JSONModel(), "user");
        this.getView()
          .getModel("user")
          .setData({
            userData: {
              pwd: "",
              confirmPwd: "",
            },
          });
      },

      onLiveChange: function (oEvent) {
        var sValue = oEvent.getParameter("value");
        oEvent
          .getSource()
          .setValueState(sValue.length < 8 ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.None);
      },
    });
  }
);
