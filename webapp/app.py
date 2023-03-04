from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/230118/radius')
# def radius():
#     return render_template('radius.html')

@app.route('/duchamp')
def radius():
    return render_template('duchamp.html')

if __name__ == '__main__':
    app.run(debug=True)

