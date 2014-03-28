# The application controllers don't know anything about ActionController::StrongParameters 
# because they're not extending the class ActionController::StrongParameters was included within. 
# This is why the require() method call is not calling the implementation 
# in ActionController::StrongParameters


ActionController::API.send :include, ActionController::StrongParameters