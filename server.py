from flask import *

app = Flask(__name__)

@app.route("/")
def hello():
    return "<p>Hello, World!</p>"

@app.route('/hi', methods=['GET'])
def hello_world():
  user_name = request.args.get("userName", "unknown")
  return render_template('main.html', user=user_name) 