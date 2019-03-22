from flask import Flask,request,render_template,url_for,abort,redirect,flash,make_response,session,abort
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email
#from project.forms import
from project.practicemodel import User, Post
from werkzeug import secure_filename
from project import app, db
import json

@app.route('/')
def index():
    return 'Hello, World! This is my practice route!. 




if __name__ == '__main__':
    app.run(debug=True)
