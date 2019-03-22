from flask import Flask
from flask_wtf import CSRFProtect
from flask_sqlalchemy import SQLAlchemy
#import sqlalchemy as db


#from config importTestEnvironment
#import config
app = Flask(__name__,instance_relative_config=True)
csrf = CSRFProtect(app)



#app.config.from_object(config.TestEnvironment)
app.config.from_pyfile('config.py', silent = True)

db = SQLAlchemy(app)

from . import practiceviews
