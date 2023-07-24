package simulation

import (
	"std"

	"gno.land/p/demo/avl"
	"gno.land/p/demo/ufmt"
)

type TreeMessage struct {
	message string
	priv    string
	pub     string
}

var messages *avl.Tree

func init() {
	messages = avl.NewTree()
}

func Render(path string) string {
	o := ""

	messages.Iterate("", "", func(key string, value interface{}) bool {
		content := value.(TreeMessage)
		o += ufmt.Sprintf("### Address: %s\n\n", key)
		o += ufmt.Sprintf("Message: %s\n\n", content.message)
		o += ufmt.Sprintf("Private key:\n\n %s\n\n", content.priv)
		o += ufmt.Sprintf("Public key:\n\n %s\n\n", content.pub)
		return false
	})
	return o
}

func NewMessage(message, private, public string) {
	caller := std.GetOrigCaller()
	newMessage := TreeMessage{
		priv:    private,
		pub:     public,
		message: message,
	}
	messages.Set(caller.String(), newMessage)
}

func GetMessageMessage(address std.Address) string {
	content, exists := messages.Get(address.String()) // TreeMessage
	if !exists {
		return ""
	}
	return content.(*TreeMessage).message
}

func GetMessagePrivate(address std.Address) string {
	content, exists := messages.Get(address.String()) // TreeMessage
	if !exists {
		return ""
	}
	return content.(*TreeMessage).priv
}

func GetMessagePublic(address std.Address) string {
	content, exists := messages.Get(address.String()) // TreeMessage
	if !exists {
		return ""
	}
	return content.(*TreeMessage).pub
}
