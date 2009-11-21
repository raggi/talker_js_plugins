plugin.onMessageReceived = function(event) {
  if (event["sender"] == Talker.currentUser) return;
  if (event["content"].indexOf("@"+Talker.currentUser["name"]) == 0)
    Talker.notify(event);
};