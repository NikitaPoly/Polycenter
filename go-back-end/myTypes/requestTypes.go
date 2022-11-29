package mytypes

type ContactMessage struct{
	Email string
	Title string
	Body string
}

type DBActionBody struct {
	Action string
	Collection string
	Content ContactMessage
}

type NewUserRequest struct {
	NewUserEmail string
}

type CheckUserRequest struct{
    UserEmail string
}