package handlers

import (
	"encoding/json"
	"fmt"
	mytypes "go-back-end/myTypes"
	"net/http"
)

//takes care of taking finding correct action action
func FindAction(res http.ResponseWriter, req *http.Request){
	fmt.Println("GO API: DB access request")
	switch req.Method{
	case http.MethodPost:
		var body mytypes.DBActionBody
		err := json.NewDecoder(req.Body).Decode(&body)
		if err != nil{
			fmt.Println("GO API: Error reading body")
		}
		fmt.Println(body)
	}
}