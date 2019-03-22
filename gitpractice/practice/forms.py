from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField,TextField, SubmitField, TextAreaField, RadioField
from wtforms.validators import DataRequired, Email, Length, EqualTo

class LoginForm(FlaskForm):
     email = StringField("Email", validators=[DataRequired(), Email('Please enter your email')])
     password = PasswordField('Password', validators=[DataRequired(),
                                                       Length(min=4, max=20)])
     remember = BooleanField('Remember Me')
     submit = SubmitField("Login")

class ProductForm(FlaskForm):
    prod_name = StringField('Product Name', validators=[DataRequired()])
    prod_amount = StringField('Amount', validators=[DataRequired()])
    submit = SubmitField('Submit')

class RegistrationForm(FlaskForm):
     username = StringField("Username",validators=[DataRequired('Please Enter Your Username'),
                                                   Length(min=4, max=20)])
     email = StringField("Email", validators=[DataRequired(), Email('Please enter your email')])
     phone =  StringField('Phone No', validators=[DataRequired('Please enter your phone no')])
     address =  StringField('Address', validators=[DataRequired('Please enter your address')])
     password =  PasswordField('Password', validators=[DataRequired(), Length(min=4, max=20)])
     confirm_password = PasswordField('Confirm Password',
                                      validators=[DataRequired(), EqualTo('password')])
     accept_tos = BooleanField('I accept the <a href="/tos/"> Terms of Service </a> and the <a href="/privacy/">Privacy Settings </a> (Last Updated:March,2019)', validators=[DataRequired()])
     submit = SubmitField("Sign Up")
