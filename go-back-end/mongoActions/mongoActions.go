package mongoactions

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)
const MONGO_URI = "mongodb+srv://PolyakovDOTTech:LPQYMYKHUZV1o@polyakovtechdb.n6fvv.mongodb.net/?retryWrites=true&w=majority"

func SaveAction(collectionName string, dataToSave interface{}) error {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(MONGO_URI))
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
	collection := PolyakovTechDB.Collection(collectionName)

	result, err := collection.InsertOne(ctx, dataToSave)
	if err != nil {
		return err
	}
	fmt.Println(result)
	return nil
}

func CheckIfUserExists(collectionName string,userEmail string) bool {
	filter := bson.D{{"newuseremail",userEmail}}
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(MONGO_URI))
	if err != nil {
		fmt.Println(err)
		return true
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, ctxClose := context.WithTimeout(context.Background(), 10*time.Second)
	defer ctxClose()
	if err = client.Connect(ctx); err != nil {
		fmt.Println(err)
		return true
	}
	//after function is done running this will will run
	defer client.Disconnect(ctx)
	PolyakovTechDB := client.Database("PolyakovTechDB")
	collection := PolyakovTechDB.Collection(collectionName)
	cursor, err := collection.Find(context.TODO(), filter)
	if err != nil {
		fmt.Println(err)
		return true
	}
	//read result
	var results []bson.D
	if err = cursor.All(context.TODO(), &results); err != nil {
		fmt.Println(err)
		return true
	}
	if len(results) == 0{
		fmt.Println("no user")
		return false
	}
	fmt.Println("yes user")
	return true
}