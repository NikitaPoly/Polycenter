package mongoactions

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func save_action(collectionName string, dataToSave interface{}) interface{} {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(MONGO_URI))
	if err != nil {
		fmt.Println(err)
		return nil
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, ctxClose := context.WithTimeout(context.Background(), 10*time.Second)
	defer ctxClose()
	if err = client.Connect(ctx); err != nil {
		fmt.Println(err)
		return nil
	}
	//after function is done running this will will run
	defer client.Disconnect(ctx)
	PolyakovTechDB := client.Database("PolyakovTechDB")
	ContactRequest := PolyakovTechDB.Collection(collectionName)

	result, err := ContactRequest.InsertOne(ctx, dataToSave)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return result.InsertedID
}