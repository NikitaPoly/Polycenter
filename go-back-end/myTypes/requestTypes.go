package mytypes

type ContactMessage struct {
	Email string
	Title string
	Body  string
}

type DBActionBody struct {
	Action     string
	Collection string
	Content    ContactMessage
}

type SDSUserData struct {
	ID              string
	UserEmail       string
	UserName        string
	GraduationYear  int
	OrderCompleted  int
	OrdersRequested int
	Ballance        int
}

type SDSIsUserExist struct {
	IsUserExist bool
}

type GetSDSUserData struct {
	UserEmail string
}

type SDSOrderItem struct {
	Name string
	Cost float64
}

type SDSCreateOrder struct {
	Items    []SDSOrderItem
	Customer string
	Worker   string
}
