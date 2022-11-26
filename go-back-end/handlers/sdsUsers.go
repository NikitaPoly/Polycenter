package handlers

import (
	"fmt"
	"net/http"
)

func CreateNewSDSUser(res http.ResponseWriter, req *http.Request){
	switch req.Method{
	case http.MethodPost:
		fmt.Println("Request to create new user")
	}
}