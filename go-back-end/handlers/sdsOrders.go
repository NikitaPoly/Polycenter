package handlers

import (
	"encoding/json"
	"fmt"
	mongoactions "go-back-end/mongoActions"
	mytypes "go-back-end/myTypes"
	"net/http"
)

func CreatOrder(res http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case http.MethodPost:
		fmt.Println("GO API: Request to create order")
		var order mytypes.SDSCreateOrder
		err := json.NewDecoder(req.Body).Decode(&order)
		if err != nil {
			fmt.Println(("GO API: Error Reading create order request"))
		}
		ok := mongoactions.SaveSDSOrder(order)
		if ok {
			res.WriteHeader(200)
		} else {
			res.WriteHeader(202)
		}

	}
}
func GetAllOrders(res http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case http.MethodGet:
		fmt.Println("GO API: Fetch all order request")
		orders := mongoactions.ReadAllSDSOrder()
		fmt.Println("GO API: All order info sent")
		res.Header().Set("Content-Type", "application/json")
		res.WriteHeader(200)
		json.NewEncoder(res).Encode(orders)
	}
}
