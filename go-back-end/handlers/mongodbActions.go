package handlers

import (
	"encoding/json"
	"fmt"
	mongoactions "go-back-end/mongoActions"
	mytypes "go-back-end/myTypes"
	"net/http"
)

//takes care of taking finding correct action for db actions
func FindAction(res http.ResponseWriter, req *http.Request){
	fmt.Println("GO API: DB access request")
	switch req.Method{
	case http.MethodPost:
		var body mytypes.DBActionBody
		err := json.NewDecoder(req.Body).Decode(&body)
		if err != nil{
			fmt.Println("GO API: Error reading body")
		}
		if body.Action =="SAVE"{
			mongoactions.SaveAction(body.Collection,body.Content)
		}
	}
}