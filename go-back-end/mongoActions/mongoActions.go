package mongoactions

import (
	"context"
	"fmt"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func SaveAction(collectionName string, dataToSave interface{}) error {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(os.Getenv("MONGO_URI")))
	if err != nil {
		return err
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, ctxClose := context.WithTimeout(context.Background(), 10*time.Second)
	defer ctxClose()
	if err = client.Connect(ctx); err != nil {
		return err
	}
	//after function is done running this will will run
	defer client.Disconnect(ctx)
	PolyakovTechDB := client.Database("PolyakovTechDB")
	ContactRequest := PolyakovTechDB.Collection(collectionName)

	result, err := ContactRequest.InsertOne(ctx, dataToSave)
	if err != nil {
		return err
	}
	fmt.Println(result)
	return nil
}