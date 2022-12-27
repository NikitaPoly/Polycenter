package main

/*entry point for go api, main router of the go api.*/
import (
	"fmt"
	"go-back-end/handlers"
	"net/http"
	"os"
)

func main() {

	fmt.Println("GOAPI: PT GO API started")
	//set port
	port := os.Getenv("PORT")
	if port == "" {
		port = ":8080"
	} else {
		port = ":" + port
	}
	//http handlers for home api
	http.HandleFunc("/home/contact", handlers.SaveContactMessage)
	//http hanlders for sds api
	http.HandleFunc("/sdsUsers/signUp", handlers.CreateNewSDSUser)
	http.HandleFunc("/sdsUsers/checkUserExists", handlers.CheckUserExists)
	http.HandleFunc("/sdsUsers/getUserData/", handlers.GetUserData)
	http.HandleFunc("/sdsOrders/createOrder", handlers.CreatOrder)
	http.HandleFunc("/sdsOrders", handlers.GetAllOrders)
	http.ListenAndServe(port, nil)

}
