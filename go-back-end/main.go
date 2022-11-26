package main

/*entry point for go api, main router of the go api.*/
import (
	"fmt"
	"go-back-end/handlers"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main(){
  err := godotenv.Load()
	if err != nil{
		fmt.Println(("GO API: Error getting env file"))
	}

  fmt.Println("GOAPI: PT GO API started");
  //set port
  port:= os.Getenv("PORT")
  if port == ""{
    port = ":8080"
  }else{
    port = ":" + port
  }
  //http handler for db acces
  http.HandleFunc("/dbAction",handlers.FindAction)
  http.ListenAndServe(port,nil)

}
