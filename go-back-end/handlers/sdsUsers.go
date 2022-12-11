package handlers

import (
	"encoding/json"
	"fmt"
	mongoactions "go-back-end/mongoActions"
	mytypes "go-back-end/myTypes"
	"net/http"
)

func CreateNewSDSUser(res http.ResponseWriter, req *http.Request){
	switch req.Method{
	case http.MethodPost:
		fmt.Println("GO API: Request to create new user")
		var body mytypes.SDSUserData
        err := json.NewDecoder(req.Body).Decode(&body)
		if err != nil{
			fmt.Println("GO API: Error Reading create new user request")
		}
		var formatedUserData mytypes.SDSUserData
		formatedUserData.GraduationYear =body.GraduationYear
		formatedUserData.UserEmail = body.UserEmail
		formatedUserData.UserName = body.UserName
		mongoactions.SaveAction("SDSUsers",formatedUserData)
	}
}


/*
200 if user found
204 if user not found
*/
func IsUserInDB(res http.ResponseWriter, req *http.Request){
	switch req.Method{
	case http.MethodPost:
		fmt.Println("GO API: Request to check user in DB")
		var body mytypes.SDSUserData
		err := json.NewDecoder(req.Body).Decode(&body)
		if err != nil{
			fmt.Println(("GO API: Error Reading check user request"))
		}
		fmt.Println(body.UserEmail)
		isInDB:=mongoactions.CheckIfUserExists("SDSUsers",body.UserEmail)
		if isInDB {
			res.WriteHeader(200)
		}else{
			res.WriteHeader(http.StatusNoContent)
		}
	}
}