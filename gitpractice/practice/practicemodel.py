from . import db
from datetime import datetime

class People(db.Model):
    '''All User'''
    __tablename__ = 'people'
    id = db.Column(db.Integer(), primary_key=True)
    username= db.Column(db.String(20), nullable=False)
    email= db.Column(db.String(50), unique=True, nullable=False)
    phone= db.Column(db.String(25), unique=True, nullable=False)
    image_file= db.Column(db.String(20), nullable=False, default="default.jpg")
    password= db.Column(db.String(50), nullable=False)
    posts = db.relationship('Post', backref='author', lazy =True)
    reg_date=db.Column(db.DateTime(), default=datetime.utcnow)

    def __repr__(self):
        return f"People('{self.username}','{self.email}','{self.phone}','{self.image_file}')"

class Post(db.Model):
    '''User's Posts'''
    __tablename__ = 'post'
    id = db.Column(db.Integer(), primary_key=True)
    title= db.Column(db.String(50), nullable=False)
    content= db.Column(db.Text, nullable=False)
    reg_date=db.Column(db.DateTime(), default=datetime.utcnow)
    people_id = db.Column(db.Integer(), db.ForeignKey('people.id'), nullable=False)

    def __repr__(self):
        return f"Post('{self.title}','{self.content}')"
