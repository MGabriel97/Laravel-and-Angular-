import requirements
from flask import Flask,request
from flask_mail import Mail, Message

app = Flask(__name__)
mail = Mail(app) # instantiate the mail class 
   
# configuration of mail 
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'gabrielmariusb83@gmail.com'
app.config['MAIL_PASSWORD'] = requirements.MAIL_PASSWORD
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app) 
message1='hello'
@app.route("/") 
def index(): 
   msg = Message('Hello', sender = 'gabrielmariusb83@gmail.com', recipients = ['gabrielmariusb83@gmail.com'])
   msg.body = "Hello Flask message sent from Flask-Mail"
   mail.send(msg) 
   return 'Sent'
@app.route('/uploader' , methods = ['GET' , 'POST'])
def upload_file():
   name=request.form.get('name')
   email=request.form.get('name1')
   mesaj=request.form.get('text2')
   print(name,email,mesaj)    
   msg = Message(email, sender = email, recipients = ['gabrielmariusb83@gmail.com'])
   msg.body = "Numele: "+name+ "Mesajul: "+mesaj
   mail.send(msg)   
   return 'sent'

if __name__ == '__main__':
	app.run(debug=True)